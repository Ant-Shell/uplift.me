import React from "react"
import Nav from "../Nav/Nav"
import Quotes from "../Quotes/Quotes"
import './App.css';
import { quotesEndpoint, animalEndpoint } from "../endpoints"
import fetchData from "../apiCalls";


class App extends React.Component {
  constructor() {
    super()
      this.state = {
        quotes: [],
        shibes: [],
        cats: [],
        birds: []
     }
  }

  componentDidMount() {
    Promise.all( [ fetchData(quotesEndpoint), fetchData(animalEndpoint("shibes")), fetchData(animalEndpoint("cats")), fetchData(animalEndpoint("birds"))])
    .then(data => {
      const quotesList = data[0];
      let random = Math.floor(Math.random() * quotesList.length)
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
      </main>
    );
  }
}

export default App;
