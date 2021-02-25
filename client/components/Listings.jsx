import React from "react"
import { connect } from "react-redux"
import ListingCard from "./ListingCard"

function Listings(props) {
  // if props.listingType == "offer" display offering posts
  //else display looking posts

  return (
    <div className="container">
      {props.listings.map((listing) => {
        if (listing.type == "offer") {
          console.log(listing.id, listing.type)
          return <ListingCard key={listing.id}/>
        }
      })}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings,
  }
}

export default connect(mapStateToProps)(Listings)
