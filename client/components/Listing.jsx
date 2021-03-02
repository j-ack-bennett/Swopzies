import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchListings, deleteListing } from "../actions/listings"
import { Link } from 'react-router-dom'
import moment from 'moment'

import Comms from "./Comms"

function Listing(props) {
  // useEffect(() => {
  //   props.dispatch(fetchListings())
  // }, [])

  const listingId = props.match.params.id
  const killListing = (id) => {
    props.dispatch(deleteListing(id))
    props.history.push('/')
  } 
  return (
    <div className="container">
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
          {props.listings.map((listingItem) => {
            if (listingItem.id == listingId) {
              return (
                <div key={listingItem.id}>
                  <h2 className="title post-title capitalize">{listingItem.title}</h2>
                  <p className="listing-p">{listingItem.description}</p>
                  <br />
                  <div>
                    <p className="listing-details-p">Posted by: {listingItem.username}</p>
                    <p className="listing-details-p">Location: {listingItem.location}</p>
                    <p className="listing-details-p capitalize">Category: {listingItem.tag_name}</p>
                  </div>
                  <br />
                  <p className="last-updated">Last updated: {moment(listingItem.time).format('LLL')}</p>
                  <br />
                  {listingItem.user_id == props.auth.user.id &&
                  <div className="buttons has-addons">
                    <button onClick={() => killListing(listingItem.id)} className="button is-primary">Delete Post</button>
                    <Link to={`/editlisting/${listingItem.id}`} className="button is-primary">Edit Post</Link>
                  </div>
                  }
                  <Comms
                    listingId={listingItem.id}
                    listingUserId={listingItem.user_id}
                    />
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings, 
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Listing)
