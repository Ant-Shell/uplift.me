import React from "react"
import "./JournalSection.css"
import Journal from "../Journal/Journal"
import JournalList from "../JournalList/JournalList"


const JournalSection = ( {addJournalEntry} ) => {
  return (
    <div className="journal-section">
      <Journal addJournalEntry={addJournalEntry} />
      <JournalList />
    </div>
  )
}

export default JournalSection