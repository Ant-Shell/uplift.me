import React from "react"
import "./JournalCard.css"

const JournalCard = ( {id, date, entry, time}) => {
  // Need button to remove entry
  return (
    <div className="card">
      <p>{date} @ {time}</p>
      <p>{entry}</p>
    </div>
  )
}

export default JournalCard