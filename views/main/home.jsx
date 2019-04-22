var React = require('react');
// var osps = require('/images/osps.png')
// var DefaultLayout = require('layouts/default');
class Home extends React.Component {

  render() {
    return (
    <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <title>Add Transaction</title>
        </head>
    <body>

    <div class = 'container'>
        <div class = 'row justify-content-center'>
            <div class = "row col-lg-12 col-md-12 col-sm-12 justify-content-center">
          <h1>Add Transaction</h1>
          <br />
            </div>

            <form className="add" action="/addBill" method="POST">

                <input name="payer" placeholder="Who owes money?" />
                <br />
                <input name="payee" placeholder="Who paid the bill?" />
                <br />
                <input name="amount" placeholder="Amount($)"/>
                <br />
                <input type="date" name="date" placeholder="Date" />
                <br />

                <input className="btn btn-success" type="submit" value="Add Transaction" />
                <br />

            </form>
            <a href="/summary"> go to summary</a>
        </div>
    </div>
    </body>
    </html>
    );
  }
}

module.exports = Home;