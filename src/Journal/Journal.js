import React from "react"
import "./Journal.css"

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
    const todaysDate = new Date().toLocaleDateString('en-ZA')
    const newJournalEntry = {
      id: Date.now(),
      date: todaysDate,
      ...this.state
    }
    this.props.addJournalEntry(newJournalEntry)
    this.clearJournalInput()
  }

  clearJournalInput = (event) => {
    event.preventDefault()
    this.setState({journalEntry: ""})
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
      </form>
    )
  }

}


export default Journal