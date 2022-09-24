import React from "react"
import "./DogCard.css"

const DogCard = ({id, dogPic}) => {
  return (
    <div className="dog-card">
      <img id={id} src={dogPic} alt={"dog"}/>
    </div>
  )
}

export default DogCard