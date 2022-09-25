import React from "react"
import Nav from "../Nav/Nav"
import Quotes from "../Quotes/Quotes"
import JournalSection from "../JournalSection/JournalSection"
import AnimalSection from "../AnimalSection/AnimalSection"
import './App.css'
import { quotesEndpoint, animalEndpoint } from "../endpoints"
import fetchData from "../apiCalls"
import { Route, Switch} from "react-router-dom"


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
     }
  }

  addJournalEntry = (newJournalEntry) => {
    this.setState({savedJournals: [...this.state.savedJournals, newJournalEntry], noJournalEntry: false})
  }

  noJournalEntryUpdate = () => {
    this.setState({ noJournalEntry: true })
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
        <Nav url={this.state.url} buttonText={this.state.buttonText} />
        <Quotes quotes={this.state.quotes} />
        <Switch>
          <Route exact path="/" render={() => <JournalSection journalList={this.state.savedJournals} addJournalEntry={this.addJournalEntry} noJournalEntry={this.state.noJournalEntry} noJournalEntryUpdate={this.noJournalEntryUpdate}/>}/>
          <Route exact path="/animals" render={() => <AnimalSection dogs={this.state.shibes}/>}/>
        </Switch>
        {/* Footer /> */}
      </main>
    );
  }
}

export default App;
