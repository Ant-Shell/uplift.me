import React from "react"
import Nav from "../Nav/Nav"
import Quotes from "../Quotes/Quotes"
import JournalSection from "../JournalSection/JournalSection"
import AnimalSection from "../AnimalSection/AnimalSection"
import './App.css'
import { quotesEndpoint, animalEndpoint } from "../endpoints"
import fetchData from "../apiCalls"


class App extends React.Component {
  constructor() {
    super()
      this.state = {
        quotes: [],
        shibes: [],
        cats: [],
        birds: [],
        savedJournals: [],
        noJournalEntry: false
     }
  }

  addJournalEntry = (newJournalEntry) => {
    this.setState({savedJournals: [...this.state.savedJournals, newJournalEntry], noJournalEntry: false})
  }

  noJournalEntryUpdate = () => {
    this.setState({ noJournalEntry: true })
  }

  componentDidMount() {
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
        <Nav />
        <Quotes quotes={this.state.quotes} />
        <JournalSection journalList={this.state.savedJournals} addJournalEntry={this.addJournalEntry} noJournalEntry={this.state.noJournalEntry} noJournalEntryUpdate={this.noJournalEntryUpdate} />
        <AnimalSection dogs={this.state.shibes}/>
        {/* Footer /> */}
      </main>
    );
  }
}

export default App;
