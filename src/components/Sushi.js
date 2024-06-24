import React, { useState } from "react"

function Sushi({ sushi, managePlatesAndBalance, balance }) {
  const { id, name, img_url, price, created_at } = sushi
  const [isEaten, setIsEaten] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (balance >= price || isEaten) {
      setIsEaten(!isEaten)
    }
    managePlatesAndBalance(price, id)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {isEaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
