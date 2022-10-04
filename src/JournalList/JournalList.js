import React from "react"
import "./JournalList.css"
import JournalCard from "../JournalCard/JournalCard"
import PropTypes from 'prop-types'

const JournalList = ( { journalList, deleteJournalEntry, deleteAllJournalEntries }) => {
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
      <button className="remove-entries-button" onClick={() => deleteAllJournalEntries()}>Remove Entries</button>
    </div>
  )
}

export default JournalList

JournalList.propTypes = {
  journalList: PropTypes.array.isRequired,
  deleteJournalEntry: PropTypes.func.isRequired
}