import React from "react"
import { connect } from "react-redux"

function ListingCard(props) {

  const listing = props.listing 
  const type = props.type

  return (
    <div className="container">
      {type=="looking"
      ? <p>I am looking for: {listing.title} <br></br>I can give: {listing.description}</p> 
      : <p>I can offer: {listing.title} <br></br> I am looking for: {listing.description}</p> 
      }
    </div>
    )
}

export default connect()(ListingCard)
