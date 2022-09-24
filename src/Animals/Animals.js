import React from "react"
import "./Animals.css"
import DogCard from "../DogCard/DogCard"

const Animals = ({dogs}) => {
  const dogCards = dogs.map((dog, index) => {
    const uniqueValue = Date.now()
    return (
      <DogCard
      id={uniqueValue} 
      dogPic={dog[index]}
      key={uniqueValue}
      />
    )
  })

  return (
    <div className="animals-container">
      { dogCards.length ? dogCards : <p className="error-messagee">No animals found at this time :(</p>}
    </div>
  )
}

export default Animals