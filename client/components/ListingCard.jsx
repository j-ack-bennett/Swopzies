import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTags } from "../actions/tags"
import { Link } from "react-router-dom"


function ListingCard(props) {
  useEffect(() => {
    props.dispatch(fetchTags())
  }, [])

  const listing = props.listing
 

  return (
    <div className="card">
      <div className="card-content my-listings-margin">
      {listing.type == "looking" ? (
        <div>
          <Link key={listing.id}
          to={`/listing/${listing.id}`}>
          <p className="capitalize"><strong>{listing.title}</strong></p>
          </ Link>
          <p>{listing.username}, {listing.location}</p>
          <p className="capitalize">Category: {listing.tag_name}</p>
          <div>
            <br />
          </div>
        </div>
      ) : (
        <div>
          <Link
          to={`/listing/${listing.id}`}>
          <p className="capitalize"><strong>{listing.title}</strong></p> 
          </ Link>      
          <p>{listing.username}, {listing.location}</p>
          <p className="capitalize">Category: {listing.tag_name}</p>
          <div>
          <br></br>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}


export default connect()(ListingCard)
