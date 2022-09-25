import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"


  const Nav = ( {url, buttonText, pageSwitch}) => {

      return (
        <nav>
          <header>
            <h1 className="branding">Uplift.me</h1>
            <Link to={`/${url}`}><button className="view-change-button" id="viewChangeButton" onClick={() => pageSwitch()}>{buttonText}</button></Link>
          </header>
        </nav>
      )
    }
  


export default Nav