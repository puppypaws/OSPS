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

        <div class = 'container'>
            <div class = 'row justify-content-center'>
                <div class = "row col-lg-12 col-md-12 col-sm-12 justify-content-center">
                    <h1>O$P$ Login</h1>
                <br />
                </div>

                <form className="add" action="/login" method="POST">

                    <input name="username" placeholder="Username"/>
                    <br />
                    <input type="password" input name="password" placeholder="Password"/>
                    <br />
                                        {this.props.donald && <div style={{color:"red"}}>Invalid username or password</div>}

                    <input className="btn btn-success" type="submit" value="Login" />
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