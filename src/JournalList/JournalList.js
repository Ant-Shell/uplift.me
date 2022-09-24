import React from "react"
import "./JournalList.css"
import JournalCard from "../JournalCard/JournalCard"

const JournalList = ( { journalList }) => {
  const journalCards = journalList.map(journal => {
    return (
      <JournalCard 
      id={journal.id}
      date={journal.date}
      time={journal.time}
      entry={journal.journalEntry}
      key={journal.id}
      />
    )
  })

  return (
    <div className="journallist-container">
      { journalCards.length ? journalCards : <p className="add-journal-message">Please save a journal entry</p>}
    </div>
  )
}

export default JournalList