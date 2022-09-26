import React from "react"
import "./JournalSection.css"
import Journal from "../Journal/Journal"
import JournalList from "../JournalList/JournalList"


const JournalSection = ({ addJournalEntry, journalList, noJournalEntry, noJournalEntryUpdate, deleteJournalEntry }) => {
  return (
    <div className="journal-section">
      <Journal addJournalEntry={addJournalEntry} noJournalEntry={noJournalEntry} noJournalEntryUpdate={noJournalEntryUpdate}  />
      <JournalList journalList={journalList} deleteJournalEntry={deleteJournalEntry} />
    </div>
  )
}

export default JournalSection