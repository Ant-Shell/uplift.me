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
    this.setState({ [event.target.name]: event.target.value})
  }

  submitJournalEntry = (event) => {
    event.preventDefault()
    const newJournalEntry = {
      id: Date.now(),
      ...this.state
    }
    this.props.addJournalEntry(newJournalEntry)
    this.clearJournalInput()
  }

  clearJournalInput = () => {
    this.setState({journalEntry: ""})
  }

  render() {
    return (
      <form>
        <input 
        type="text"
        placeholder="Journal"
        name="journal"
        value={this.state.journalEntry}
        onChange={(event => this.handleChange(event))}
        />
        <button className="clear-button" onClick={() => this.clearJournalInput()}>Clear Entry</button>
        <button className="add-button" onClick={(event) => this.submitJournalEntry(event)}>Add Entry</button>
      </form>
    )
  }

}


export default Journal