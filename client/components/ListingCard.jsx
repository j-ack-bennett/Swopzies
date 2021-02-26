import React, { useEffect } from "react"
import { connect } from "react-redux"
import  { fetchTags } from "../actions/tags"

function ListingCard(props) {

  useEffect(() => {
    props.dispatch(fetchTags())
  }, [])

  const listing = props.listing 

  return (
    <div className="container">
      {listing.type=="looking"
      ? <div>
          <p><strong>{listing.title}</strong></p> 
          <br></br>
          <p>{}</p>
        </div>
      : <div>
        <p><strong>{listing.title}</strong></p> 
        <br></br>

        </div>
      }
    </div>
    )
}

export default connect()(ListingCard)
