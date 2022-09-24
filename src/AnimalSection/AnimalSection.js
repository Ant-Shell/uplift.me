import React from "react"
import "./AnimalSection.css"
import Animals from "../Animals/Animals"


const AnimalSection = ( {dogs} ) => {
  return (
    <div className="animals-section">
      <Animals dogs={dogs}/>
    </div>
  )
}

export default AnimalSection