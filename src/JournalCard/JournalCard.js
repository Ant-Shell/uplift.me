import React from "react"
import "./JournalCard.css"
import PropTypes from 'prop-types';

const JournalCard = ({ id, date, entry, time, deleteJournalEntry }) => {
  return (
    <div className="card">
      <p>{date} @ {time}</p>
      <p>{entry}</p>
      <button className="remove-button" onClick={() => deleteJournalEntry(id)}>Remove</button>
    </div>
  )
}

export default JournalCard

JournalCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  entry: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  deleteJournalEntry: PropTypes.func.isRequired
}