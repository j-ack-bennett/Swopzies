import React from "react"
import { connect } from "react-redux"

function Landing() {
  return (
    <div className="container">
      <h1 className="title">Welcome!</h1>
      <p>Need something fixed? Have the skills to fix something? Want to help someone in your community?</p>
      <br></br>
      <p>Jack Of All Trades is a free to use website for people looking to trade goods and services without the price tag!</p>
      <br></br>
      <h2 className="subtitle">Register. Post. Trade.</h2>
      <p>It's that simple!</p>
    </div>
    )
}

export default connect()(Landing)
