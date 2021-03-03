import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteListing, removeBookmark, bookmark } from "../actions/listings"
import { Link } from 'react-router-dom'
import moment from 'moment'

import Comms from "./Comms"

// WWRD

function Listing(props) {
  const listingId = props.match.params.id
  const user_id = props.auth.user.id
  const bookmarks = props.auth.user.bookmarks || []

  const thisBookmark = bookmarks.find(bookmark => {
    return bookmark.listing_id == listingId
  })

  const [ bookmarked, setBookmarked ] = useState(!!thisBookmark)
  // if user has bookmarked listing useState = true

  const killListing = (id) => {
    props.dispatch(deleteListing(id))
    props.history.push('/')
  }

  const handleClick = (e) => {
    e.preventDefault()
    const newBookmark = { listing_id: listingId, user_id: user_id }
    if (!bookmarked) {
      props.dispatch(bookmark(newBookmark))
    } else {
      props.dispatch(removeBookmark(thisBookmark.id, user_id))
    }
    setBookmarked(bookmarked => !bookmarked)
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
                  <div className="kngrkgherg">
                    <p className="listing-details-p"><span className="has-text-weight-bold">Posted by:</span>&nbsp;&nbsp;&nbsp;&nbsp;{listingItem.username}</p>
                    <p className="listing-details-p"><span className="has-text-weight-bold">Location:</span>&nbsp;&nbsp;&nbsp;&nbsp;{listingItem.location}</p>
                    <p className="listing-details-p capitalize"><span className="has-text-weight-bold">Category:</span>&nbsp;&nbsp;&nbsp;&nbsp;{listingItem.tag_name}</p>
                  </div>
                  <br />
                  <p className="last-updated"><span className="has-text-weight-bold">Last updated:</span>&nbsp;&nbsp;&nbsp;&nbsp; {moment(listingItem.time).format('LLL')}</p>
                  <br />
                  
                  <div className="buttons has-addons">
                    {listingItem.user_id === props.auth.user.id ?
                      <div>
                        <button onClick={() => killListing(listingItem.id)} className="button is-danger" style={{"borderRadius": "4px"}}>
                          Delete Post
                        </button>
                        <Link to={`/editlisting/${listingItem.id}`}><button className="button is-primary margin-left">Edit Post</button></Link>
                      </div> :
                      <>
                        <button onClick={handleClick}>{!bookmarked ? 'Bookmark Listing' : 'Remove Bookmark' }</button>
                      </>
                    }
                    
                  </div>
                  
                    
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
