import React, { useEffect } from "react"
import { connect } from "react-redux"
import ListingCard from "./ListingCard"



function Listings(props) {

  const type = localStorage.getItem('type')

  return (

    <div className="container"> 

    {type == "looking"
    ? <h1 className="title"> People are seeking!</h1> 
    : <h1 className="title"> People are offering!</h1>
    }

      {props.listings.map(listing => {
        if(listing.type == type){
          return <ListingCard key={listing.id} listing={listing}/>
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
