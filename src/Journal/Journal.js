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

  render() {
    return (
      <form>
        <input 
        type="text"
        placeholder="Journal"
        name="journal"
        value={this.state.journalEntry}
        onChange={event => this.handleChange(event)}
        />
        <button className="clear-button">Clear Entry</button>
        <button className="add-button">Add Entry</button>
      </form>
    )
  }

}


export default Journal