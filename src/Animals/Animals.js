import React from "react"
import "./Animals.css"
import DogCard from "../DogCard/DogCard"
import PropTypes from 'prop-types'

const Animals = ({ dogs }) => {
  const dogCards = dogs.map((dog, index) => {
    const value = Date.now()
    return (
      <DogCard
      id={value + index}
      dogPic={dog}
      key={value + index}
      />
    )
  })

  return (
    <div className="animals-container">
      { dogCards.length ? dogCards : <p className="animal-error-message">No animals found at this time :(</p>}
    </div>
  )
}

export default Animals

Animals.propTypes = {
  dogs: PropTypes.array.isRequired
}