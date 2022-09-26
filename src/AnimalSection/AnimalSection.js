import React from "react"
import "./AnimalSection.css"
import Animals from "../Animals/Animals"
import PropTypes from 'prop-types';


const AnimalSection = ({ dogs }) => {
  return (
    <div className="animals-section">
      <Animals dogs={dogs}/>
    </div>
  )
}

export default AnimalSection

AnimalSection.propTypes = {
  dogs: PropTypes.array
}