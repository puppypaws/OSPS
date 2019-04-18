var React = require('react');

class Login extends React.Component {

render(){
return (

<html>
    <head>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

        <title>O$P$ Login</title>

    </head>


    <body>

        <div class = 'container'>
            <div class = 'row justify-content-center'>
                <div class = "row col-lg-12 col-md-12 col-sm-12 justify-content-center">
                    <h1>O$P$ Login</h1>
                <br />
                </div>

                <form className="add" action="/home" method="POST">

                    <input name="username" placeholder="Username"/>
                    <br />
                    <input name="password" placeholder="Password"/>
                    <br />
                    <input className="btn btn-success" type="submit" value="New user" />
                    <br />
                </form>

            </div>
        </div>

    </body>
</html>
);
}
}

module.exports = Login;