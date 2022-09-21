import React from "react"
import Nav from "../Nav/Nav"
import './App.css';

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

  render() {
    return (
      <main className="app">
        <Nav />
      </main>
    );
  }
}

export default App;
