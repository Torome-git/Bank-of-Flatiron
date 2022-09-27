import React, { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((res) => res.json())
    .then(result => 
      {setTransactions (result)
      });
  }, [searchItem]);

  function handleSearch(event) {
    setSearchItem(event.target.value)
  }

  function handleSubmit(newTransaction){
    setTransactions(transactions => [...transactions, newTransaction]);
    fetch ("http://localhost:8001/transactions",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then(newTransactions => setTransactions
      ((transactions) => [...transactions, newTransactions]))
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm
      onSubmit={handleSubmit}
      />
      <TransactionsList
      transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
