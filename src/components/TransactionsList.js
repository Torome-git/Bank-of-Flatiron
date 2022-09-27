import React, { useEffect } from "react";
import Transaction from "./Transaction";

function TransactionsList({data , transaction}) {
  const [transactions, setTransactions] = React.useState([])

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((res) => res.json())
    .then((data) => {
      setTransactions(data)
    })
  }, []);

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map((data) => (
          <Transaction key={data.id} transaction={data}/>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
