import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchListings } from "../actions/listings"

function Home(props) {


  useEffect(() => {
    props.dispatch(fetchListings())
  }, [])

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
