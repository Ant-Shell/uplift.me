import React from "react"
import "./JournalSection.css"
import Journal from "../Journal/Journal"
import JournalList from "../JournalList/JournalList"


const JournalSection = ( {addJournalEntry, journalList, noJournalEntry, noJournalEntryUpdate} ) => {
  return (
    <div className="journal-section">
      <Journal addJournalEntry={addJournalEntry} noJournalEntry={noJournalEntry} noJournalEntryUpdate={noJournalEntryUpdate}  />
      <JournalList journalList={journalList} />
    </div>
  )
}

export default JournalSection