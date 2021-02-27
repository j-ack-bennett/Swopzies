import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTags } from "../actions/tags"

function ListingCard(props) {
  useEffect(() => {
    props.dispatch(fetchTags())
  }, [])

  const listing = props.listing

  return (
    <div className="container">
      {listing.type == "looking" ? (
        <div>
          <p><strong>{listing.title}</strong></p>
          {/* <p>{ INSERT TAG HERE WHEN THEY'RE READY }</p> */}
          <p>{listing.username}, {listing.location}</p>
          <p>tagged: {listing.tag_name}</p>
          <div>
            <br />
          </div>
        </div>
      ) : (
        <div>
          <p><strong>{listing.title}</strong></p>       
          {/* <p>{ INSERT TAG HERE WHEN THEY'RE READY }</p> */}
          <p>{listing.username}, {listing.location}</p>
          <p>tagged: {listing.tag_name}</p>
          <div>
          <br></br>
          </div>
        </div>
      )}
    </div>
  )
}


export default connect()(ListingCard)
