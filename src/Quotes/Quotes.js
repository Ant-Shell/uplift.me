import React from "react"
import Quote from "../Quote/Quote"
import "./Quotes.css"

const Quotes = ({quotes}) => {

  const quoteTest = quotes.map(quote => {
    return (
      <Quote 
      text={quote.text}
      author={quote.author}
      key={Date.now()}
      />
    )
  })

  return (
    <div className="quote-container">
      <h2 className="quote-header">Thought for the day:</h2>
      {quoteTest.length ? quoteTest: <p className="quote-error-message">Brighten your day with Uplift.me</p>}
    </div>
  )

  }


export default Quotes