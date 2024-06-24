import React from "react"

function MoreButton({ showMoreSushi }) {
  const handleClick = (e) => {
    e.preventDefault()
    showMoreSushi()
  }

  return <button onClick={handleClick}>More sushi!</button>
}

export default MoreButton
