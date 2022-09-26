import React from "react"
import "./JournalList.css"
import JournalCard from "../JournalCard/JournalCard"

const JournalList = ( { journalList, deleteJournalEntry }) => {
  const journalCards = journalList.map(journal => {
    return (
      <JournalCard 
      id={journal.id}
      date={journal.date}
      time={journal.time}
      entry={journal.journalEntry}
      key={journal.id}
      deleteJournalEntry={deleteJournalEntry}
      />
    )
  })

  return (
    <div className="journallist-container">
      { journalCards.length ? journalCards : <p className="add-journal-message">Please save a journal entry</p>}
      {/* Need button to remove all journal entries */}
    </div>
  )
}

export default JournalList