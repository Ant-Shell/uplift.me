import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"


  class Nav extends React.Component {
    constructor() {
      super()
      this.state = {
        url: 'animals',
        buttonText: 'Animal Pics'
      }
    }

     pageSwitch = () => {
      if(this.state.url !== 'animals') {
        this.setState({url: 'animals', buttonText: 'Animal Pics'})
      } else {
        this.setState({url: '', buttonText: 'Journal Time'}) 
      }
    }

      render() {
        return (
          <nav>
            <header>
              <h1 className="branding">Uplift.me</h1>
              <Link to={`/uplift.me/${this.state.url}`}><button className="view-change-button" id="viewChangeButton" onClick={() => this.pageSwitch()}>{this.state.buttonText}</button></Link>
            </header>
          </nav>
        )
      }
  }  
  


export default Nav