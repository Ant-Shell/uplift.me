import React from "react"
import "./JournalSection.css"
import Journal from "../Journal/Journal"
import JournalList from "../JournalList/JournalList"
import PropTypes from 'prop-types'


const JournalSection = ({ addJournalEntry, journalList, noJournalEntry, noJournalEntryUpdate, deleteJournalEntry, deleteAllJournalEntries }) => {
  return (
    <div className="journal-section">
      <Journal addJournalEntry={addJournalEntry} noJournalEntry={noJournalEntry} noJournalEntryUpdate={noJournalEntryUpdate}  />
      <JournalList journalList={journalList} deleteJournalEntry={deleteJournalEntry} deleteAllJournalEntries={deleteAllJournalEntries} />
    </div>
  )
}

export default JournalSection

JournalSection.propTypes = {
  addJournalEntry: PropTypes.func.isRequired,
  journalList: PropTypes.array.isRequired,
  noJournalEntry: PropTypes.bool.isRequired,
  noJournalEntryUpdate: PropTypes.func.isRequired,
  deleteJournalEntry: PropTypes.func.isRequired
}