import React from "react"
import Nav from "../Nav/Nav"
import Quotes from "../Quotes/Quotes"
import JournalSection from "../JournalSection/JournalSection"
import AnimalSection from "../AnimalSection/AnimalSection"
import Error from "../Error/Error"
import './App.css'
import { quotesEndpoint, animalEndpoint } from "../endpoints"
import fetchData from "../apiCalls"
import { Route, Switch } from "react-router-dom"


class App extends React.Component {
  constructor() {
    super()
      this.state = {
        quotes: [],
        shibes: [],
        cats: [],
        birds: [],
        savedJournals: [],
        noJournalEntry: false,
        journalView: true
     }
  }

  addJournalEntry = (newJournalEntry) => {
    this.setState({ savedJournals: [...this.state.savedJournals, newJournalEntry], noJournalEntry: false })
  }

  deleteJournalEntry = (id) => {
    const updatedJournalList = this.state.savedJournals.filter(journal => journal.id !== id)
    this.setState({ savedJournals: updatedJournalList })
  }

  deleteAllJournalEntries = () => {
    this.setState({ savedJournals: [] })
  }

  noJournalEntryUpdate = () => {
    this.setState({ noJournalEntry: true })
  }

  journalViewUpdate = () => {
    this.state.journalView === true ? this.setState({ journalView: false}) : this.setState({ journalView: true})
  }

  componentDidMount = () => {
    Promise.all( [ fetchData(quotesEndpoint), fetchData(animalEndpoint("shibes")), fetchData(animalEndpoint("cats")), fetchData(animalEndpoint("birds"))])
    .then(data => {
      const quotesList = data[0];
      const random = Math.floor(Math.random() * quotesList.length)
      const shibesList = data[1];
      const catsList = data[2];
      const birdsList = data[3];
      this.setState({quotes: [quotesList[random]], shibes: shibesList, cats: catsList, birds: birdsList})
    })
  }

  render() {
    return (
      <main className="app">
        <Nav journalViewUpdate={this.journalViewUpdate}/>
        {this.state.journalView === true ? <Quotes quotes={this.state.quotes} /> : <h2 className="animal-header">Cute animal pictures!</h2>}
        <Switch>
          <Route exact path="/uplift.me/" render={() => <JournalSection journalList={this.state.savedJournals} addJournalEntry={this.addJournalEntry} noJournalEntry={this.state.noJournalEntry} noJournalEntryUpdate={this.noJournalEntryUpdate} deleteJournalEntry={this.deleteJournalEntry} deleteAllJournalEntries={this.deleteAllJournalEntries}/>}/>
          <Route exact path="/uplift.me/animals" render={() => <AnimalSection dogs={this.state.shibes}/>}/>
          <Route path="*" render={() => <Error/>}/>
        </Switch>
      </main>
    );
  }
}

export default App;
