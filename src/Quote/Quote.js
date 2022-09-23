import React from "react"
import "./Quote.css"

const Quote = ({text}) => {
  return (
    <div className="quote">
      <p>{text}</p>
    </div>
  )
}

export default Quote