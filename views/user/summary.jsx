var React = require('react');

class Summary extends React.Component {
  render() {
console.log(this.props.payments)
    let paymentsInfo = this.props.payments.map(item=>{

        console.log(item.completed
            )

                const ticks = item.completed ? "✅":"❎"

        const putAction=`/payments/changeTick/${item.id}/${ticks}?_method=PUT`


        return (
<tr>
    <td>{item.id}</td>
    <td>{item.payer}</td>
    <td>{item.payee}</td>
    <td>{item.amount}</td>
    <td>{item.date}</td>
    <td>
        <form method="POST" action={putAction}>
        <input type="submit" value={ticks}/>
        </form>

    </td>
  </tr>
            )})


return(
<html>


<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
<link rel="stylesheet" href="/style.css"></link>

<title>Summary of transactions</title>
</head>


<body>

<h1><div>
<table id="paymentSummary">
  <tr>
    <th>ID</th>
    <th>Payer</th>
    <th>Payee</th>
    <th>Amount</th>
    <th>Date</th>
    <th>Status</th>

  </tr>
    {paymentsInfo}
</table>
            </div></h1>

</body>
</html>
)}};
module.exports = Summary;