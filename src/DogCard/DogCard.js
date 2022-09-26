import React from "react"
import "./DogCard.css"
import PropTypes from 'prop-types';

const DogCard = ({ id, dogPic }) => {
  return (
    <div className="dog-card">
      <img id={id} src={dogPic} alt={"dog"}/>
    </div>
  )
}

export default DogCard

DogCard.propTypes = {
  id: PropTypes.number.isRequired,
  dogPic:PropTypes.string.isRequired
}