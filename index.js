console.log("Acquiring node modules . . . Database: osps . . . Port: 3000");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'osps',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));

app.use(express.static('public'));
// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

//Hash
const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
/**
 * ===================================
 **Route handlers
 * ===================================
 */

//REGISTRATION//
app.post('/registration', (request, response) => {
  console.log( request.body );

  let query = 'INSERT INTO users (username, password) VALUES ($1, $2)';

  const values = [request.body.username, sha256(request.body.password)];

  pool.query(query, values, (errorObj, result) => {

    if( errorObj ){
      console.log( "Something went wrong!");
      console.log( errorObj );
    }

    console.log("Query done");
    response.redirect('/login');
  });
});

//LOGIN//
app.post('/login', (request, response) => {
    console.log( request.body );


  let query = "SELECT * FROM users WHERE username ='"+request.body.username+"'";

  pool.query(query, (errorObj, result) => {

    console.log( result.rows );
    if( result.rows.length >= 1){
      // name is correct
        if( sha256(request.body.password) === result.rows[0].password ){
          // password is correct
          response.cookie('currentUser',request.body.username)
          response.cookie('loggedIn', true);
          response.redirect('/home');

        }else{
          response.render('user/login',{donald:'trump'});
        }

    }else{
      response.render('user/login',{donald:'trump'});
    }
  });
});

//HOME//
app.post('/addBill', (request, response) => {

  let query = 'INSERT INTO payments (payer, payee, amount, description, date) VALUES ($1, $2, $3, $4, $5)';

  const values = [request.body.payer, request.body.payee, request.body.amount, request.body.description, request.body.date];

  pool.query(query, values, (errorObj, result) => {

    if( errorObj ){
      console.log( "Something went wrong!");
      console.log( errorObj );
    }

    console.log("Transaction added");
    response.redirect('/home');
  });
});

app.put('/payments/changeTick/:id/:completed', (request, response) => {

    console.log(request.params)

    const newData = request.params.completed == '❌' ? true : false;

    let query = `UPDATE payments SET completed = ${newData} WHERE id = ${request.params.id}`;

    pool.query(query, (errorObj, result) => {

    if( errorObj ){
      console.log( "REEEEEAID");
      console.log( errorObj );
    }

    console.log("It has been paid");
    response.redirect('/summary');
  });

})

app.delete('/payments/deleteRow/:id', (request,response) => {

    console.log(request.params)

    let query = `DELETE FROM payments WHERE id=${request.params.id}`;

    pool.query(query, (errorObj, result) => {

    if( errorObj ){
      console.log( "REEEEELETED");
      console.log( errorObj );
    }

    console.log("Entry has been deleted");
    response.redirect('/summary');
  });

})

//SUMMARY//
const paymentsInfo = (user,response) => {
console.log(user)
    const queryStr = `SELECT * FROM payments WHERE payer = '${user}' OR payee = '${user}' ORDER BY id ASC`

    pool.query(queryStr,(err,res)=>{
        if(err){
            console.log("Something went wrong!!!!");
            console.log(err);
        }

    response.render('user/summary',{payments:res.rows});
    })
}

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/home', (request, response) => {
    response.render('main/home');
});

app.get('/registration', (request, response) => {
    response.render('user/registration');
});

app.get('/login', (request, response) => {
    response.render('user/login');
});

app.get('/logout', (request, response) => {
    response.cookie('currentUser', null);
    response.cookie('loggedIn', false);
    response.render('user/login');
});

app.get('/summary', (request, response) => {
    console.log(request.cookies)
    paymentsInfo(request.cookies.currentUser,response);
});





/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);