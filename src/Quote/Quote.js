import React from "react"
import "./Quote.css"

const Quote = ({ text, author }) => {

  return (
    <div className="quote">
      <p className="quote-text" id="quoteText">"{text}"</p>
      {author === null ? <p className="author" id="author">- Unknown</p> : <p className="author" id="author">- {author}</p>}
    </div>
  )
}

export default Quote