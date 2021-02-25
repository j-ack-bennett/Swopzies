import React from "react"
import { connect } from "react-redux"
import ListingCard from "./ListingCard"
import ListingCard2 from "./ListingCard2"


function Listings(props) {
  // if props.listingType == "offer" display offering posts
  //else display looking posts

  return (
    <div className="container">
      {props.listings.map((listing) => {
        if (listing.type == "offer") {
          console.log(listing.id, listing.type)
          // line 15 changed to key={listing.id}, was previously listing={listing.id} and Warning message said Each child in a list should have a unique "key" prop. Yay! Begone, warning. 
          return <ListingCard key={listing.id}/>
        } else if (listing.type == "looking") {
          console.log(listing.id, listing.type)
          return <ListingCard2 key={listing.id}/>
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
