import React from "react"
import "./JournalCard.css"

const JournalCard = ( {id, date, entry}) => {
  // Make and return the journal card structure
  // ID
  // Date posted
  // Journal entry - how to handle this? How difficult would an onclick Modal be?
  // Button to remove entry?
  return (
    <div className="card">
      <p>{date}</p>
      <p>{entry}</p>
    </div>
  )
}

export default JournalCard