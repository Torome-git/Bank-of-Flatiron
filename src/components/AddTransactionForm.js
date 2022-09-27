import React from "react";

function AddTransactionForm() {
  const [formData, setFormData] = React.useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:[event.target.value]
    });
    
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
  
  fetch("http://localhost:8001/transactions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(formData),
  })
  .then((res)=> res.json())
  .then((newTransaction)=> console.log(newTransaction));
}

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
