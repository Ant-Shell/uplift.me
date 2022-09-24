import React from "react"
import "./JournalSection.css"
import Journal from "../Journal/Journal"
import JournalList from "../JournalList/JournalList"


const JournalSection = ( {addJournalEntry, journalList} ) => {
  return (
    <div className="journal-section">
      <Journal addJournalEntry={addJournalEntry} />
      <JournalList journalList={journalList} />
    </div>
  )
}

export default JournalSection