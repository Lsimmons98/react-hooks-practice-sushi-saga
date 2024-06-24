import React from "react"

function Table({ plates = [], balance, setBalance }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ))
  const handleSubmit = (e) => {
    e.preventDefault()
    const addFundsValue = document.getElementById("deposit-amount").value
    setBalance(parseInt(addFundsValue) + balance)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${balance} remaining!
        <form id="deposit-form" onSubmit={handleSubmit}>
          <input
            type="number"
            id="deposit-amount"
            name="deposit-amount"
            required
          />
          <button type="submit">Add Funds</button>
        </form>
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
