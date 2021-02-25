import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchListings } from "../actions/listings"
import { Link } from "react-router-dom"

function Home(props) {
  return (
    <div className="container">
      <div>
        <Link
          to="/listings"
          onClick={() => localStorage.setItem("type", "looking")}
        >
          I'm looking for...
        </Link>
      </div>

      <div>
        <Link
          to="/listings"
          onClick={() => localStorage.setItem("type", "offer")}
        >
          I can offer...
        </Link>
      </div>
    </div>
  )
}

export default connect()(Home)
