import React from "react"
import { connect } from "react-redux"
import ListingCard from "./ListingCard"



function Listings(props) {
  const type = props.location.type.type

  return (

    <div className="container"> 

    <h1 className="title"> People are seeking!</h1>
      {props.listings.map(listing => {
        if(listing.type == type){
          return <ListingCard key={listing.id} listing={listing} type={type}/>
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
