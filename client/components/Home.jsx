import React from "react"
import { connect } from "react-redux"
import Listings from './Listings'

function Home() {

  
  return (
    <div className="container">
      <div>
      <h1>I'm looking for. . .</h1>
      </div>
      
      <div>
      <h1>I can offer. . . </h1>
      </div>
    </div>
    )
}

export default connect()(Home)
