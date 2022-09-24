import React from "react"
import "./JournalCard.css"

const JournalCard = ( {id, date, entry, time}) => {
  // Journal entry - how to handle this? How difficult would an onclick Modal be?
  // Button to remove entry?
  return (
    <div className="card">
      <p>{date} @ {time}</p>
      <p>{entry}</p>
    </div>
  )
}

export default JournalCard