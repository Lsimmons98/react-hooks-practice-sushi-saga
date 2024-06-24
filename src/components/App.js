import React, { useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [plates, setPlates] = useState([])
  const [balance, setBalance] = useState(100)

  const managePlatesAndBalance = (price, id) => {
    if (!plates.includes(id) && price <= balance) {
      setPlates([...plates, id])
      setBalance(balance - price)
    } else if (plates.includes(id)) {
      setPlates(plates.filter((plate) => plate !== id))
      setBalance(balance + price)
    } else {
      console.log("Insufficient Balance")
    }
  }

  return (
    <div className="app">
      <SushiContainer
        managePlatesAndBalance={managePlatesAndBalance}
        balance={balance}
      />
      <Table plates={plates} balance={balance} setBalance={setBalance} />
    </div>
  )
}

export default App
