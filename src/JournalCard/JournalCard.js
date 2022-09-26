import React from "react"
import "./JournalCard.css"

const JournalCard = ( {id, date, entry, time, deleteJournalEntry}) => {
  // Need button to remove entry
  return (
    <div className="card">
      <p>{date} @ {time}</p>
      <p>{entry}</p>
      <button className="remove-button" onClick={() => deleteJournalEntry(id)}>Remove</button>
    </div>
  )
}

export default JournalCard