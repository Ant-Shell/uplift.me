import React from "react"
import "./JournalList.css"
import JournalCard from "../JournalCard/JournalCard"

const JournalList = ( { journalList }) => {
  // First, journalCards map function and make <JournalCard /> out of it and return
  const journalCards = journalList.map(journal => {
    return (
      <JournalCard 
      id={journal.id}
      date={journal.date}
      entry={journal.journalEntry}
      />
    )
  })

  // Then return a div which contains { journalCards }
  return (
    <div className="journallist-container">
      { journalCards.length ? journalCards : <p className="add-journal-message">Please save a jounal</p>}
    </div>
  )
}

export default JournalList