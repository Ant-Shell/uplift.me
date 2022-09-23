import React from "react"
import Quote from "../Quote/Quote"
import "./Quotes.css"

const Quotes = ({quotes}) => {

  const quoteTest = quotes.map(quote => {
    return (
      <Quote 
      text={quote.text}
      key={Date.now()}
      />
    )
  })

  return (
    <div className="quote-container">
      <h2 className="quote-header">Thought for the day:</h2>
      {quoteTest}
    </div>
  )

  }


export default Quotes