import React, { useEffect, useState } from "react"
import Sushi from "./Sushi"
import MoreButton from "./MoreButton"

function SushiContainer(props) {
  const [sushiList, setSushiList] = useState(null)
  const [sushiLimit, setSushiLimit] = useState(4)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((r) => setSushiList(r))
  }, [])

  const displaySushi = () => {
    return sushiList
      .slice(0, sushiLimit)
      .map((sushi) => <Sushi key={sushi.id} sushi={sushi} />)
  }

  const showMoreSushi = () => {
    setSushiLimit(sushiLimit + 4)
    console.log(sushiLimit)
  }

  if (!sushiList) {
    return "Loading..."
  }
  return (
    <div className="belt">
      {displaySushi()}
      <MoreButton showMoreSushi={showMoreSushi} />
    </div>
  )
}

export default SushiContainer
