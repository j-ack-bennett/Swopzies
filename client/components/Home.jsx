import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchListings } from "../actions/listings"
import { Link } from "react-router-dom"
import ListingCard from './ListingCard'

function Home(props) {

  const listings = props.listings


  return (
    <div className="container">
      <div>
        <h1>I'm Looking For...</h1>
          {listings.reverse().map(listing => {
            if(listing.type == "looking"){
              return <ListingCard key={listing.id} listing={listing} />
            }
          })}
          <Link
          to="/listings"
          onClick={() => localStorage.setItem("type", "looking")}
          >
          See more...
        </Link>
      </div>
      <hr />
      <div>
        <h1>I Can Offer...</h1>
          {listings.map(listing => {
            if(listing.type == "offer"){
              return <ListingCard key={listing.id} listing={listing} />
            }
          })}
          <Link
          to="/listings"
          onClick={() => localStorage.setItem("type", "offer")}
          >
          See more...
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings
  }
}

export default connect(mapStateToProps)(Home)
