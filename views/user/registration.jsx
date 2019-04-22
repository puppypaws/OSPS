var React = require("react");

class Registration extends React.Component {

render() {
return (

<html>
    <head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
<link rel="stylesheet" href="/style.css"></link>

        <title>OSPS Registration</title>

    </head>


    <body>

        <div class = 'container'>
            <div class = 'row justify-content-center'>
                <div class = "row col-lg-12 col-md-12 col-sm-12 justify-content-center">
                <h1>O$P$ Registration</h1>
                <br />
                </div>

                <form className="add" action="/registration" method="POST">

                    <input name="username" placeholder="Username"/>
                    <br />
                    <input type="password" input name="password" placeholder="Password"/>
                    <br />
                    <input className="btn btn-success" type="submit" value="Register" />
                    <br />

                </form>

            </div>
        </div>

</body>
</html>
);
}
}

module.exports = Registration;