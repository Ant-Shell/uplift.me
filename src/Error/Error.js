import React from "react"
import "./Error.css"
import doggo from "../assets/brock-wegner-jAyzVJvgD8Y-unsplash.jpg"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="error">
      <p className="error-message">Sorry, you made a wrong turn.</p>
      <img 
      src={doggo}
      alt='shiba looking at you'
      className="error-doggo"
      />
      <Link to={'/'}><button className="home-please">Home Please</button></Link>
    </section>
  )
}

export default Error
