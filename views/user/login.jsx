var React = require('react');

class Login extends React.Component {

render(){
return (

<html>
    <head>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

        <title>OSPS Login</title>

    </head>


    <body>

        <h1>OSPS Login</h1>

        <form method="POST" action="/login">

            <input name="username" placeholder="Username"/>
            <input name="password" placeholder="Password"/>
            <input type="submit"/>

        </form>
    </body>
</html>
);
}
}

module.exports = Login;