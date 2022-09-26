import React from "react"
import "./Journal.css"
import PropTypes from 'prop-types';

class Journal extends React.Component {
  constructor() {
    super()
    this.state = {
      journalEntry: ""
    }
  }

  handleChange = (event) => {
    this.setState({ journalEntry: event.target.value})
  }

  submitJournalEntry = (event) => {
    event.preventDefault()
    if (!this.state.journalEntry) {
      this.props.noJournalEntryUpdate()
    } else {
      const todaysDate = new Date().toLocaleDateString('en-US')
      const theTime = new Date().toLocaleTimeString()
      const newJournalEntry = {
        id: Date.now(),
        date: todaysDate,
        time: theTime,
        ...this.state
      }
      this.props.addJournalEntry(newJournalEntry)
      this.clearJournalInput(event)
    }
  }

  clearJournalInput = (event) => {
    event.preventDefault()
    this.setState({ journalEntry: "" })
  }

  render() {
    return (
      <form>
        <textarea 
        type="text"
        placeholder="Journal entry here ..."
        name="journal"
        value={this.state.journalEntry}
        onChange={(event => this.handleChange(event))}
        />
        <button className="clear-button" id="clear" onClick={(event) => this.clearJournalInput(event)}>Clear Entry</button>
        <button className="add-button" id="submit" onClick={(event) => this.submitJournalEntry(event)}>Add Entry</button>
        {this.props.noJournalEntry === true && <p className="error-mesage">Please add your journal entry</p>}
      </form>
    )
  }

}


export default Journal

Journal.propTypes = {
  addJournalEntry: PropTypes.func.isRequired,
  noJournalEntry: PropTypes.bool.isRequired,
  noJournalEntryUpdate: PropTypes.func.isRequired
}