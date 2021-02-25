import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchListings } from "../actions/listings"
import { Link } from 'react-router-dom'

function Home(props) {


  useEffect(() => {
    props.dispatch(fetchListings())
  }, [])

  return (
    <div className="container">
      <div>
      {/* <h1>I'm looking for. . .</h1> */}
      <Link to={{pathname: "/listings", type:{type:"looking"}}}>I'm looking for...</Link>

      </div>
      
      <div>
      {/* <h1>I can offer. . . </h1> */}
      <Link to={{pathname: "/listings", type:{type:"offer"}}}>I can offer...</Link>
      </div>
    </div>
    )
}

export default connect()(Home)
