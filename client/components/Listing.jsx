import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchListings, deleteListing, removeBookmark, bookmark } from "../actions/listings"
import { Link } from 'react-router-dom'

import Comms from "./Comms"

// WWRD

function Listing(props) {
  const listingId = props.match.params.id
  const user_id = props.auth.user.id
  console.log(props.auth.user.bookmarks)
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
      {props.listings.map((listingItem) => {
        if (listingItem.id == listingId) {
          return (
            <div key={listingItem.id}>
              {listingItem.user_id == props.auth.user.id ?
              <>
                <button onClick={() => killListing(listingItem.id)} className="deleteButton">
                  Delete Post
                </button>
                <Link to={`/editlisting/${listingItem.id}`}><button> Edit Post</button></Link>
              </> :
                <>
                  <button onClick={handleClick}>{!bookmarked ? 'Bookmark Listing' : 'Remove Bookmark' }</button>
                </>
                
              }
              <p>{listingItem.title}</p>
              <p>{listingItem.description}</p>
              <p>
                <img src={listingItem.img} />
              </p>
              <Comms
                listingId={listingItem.id}
                listingUserId={listingItem.user_id}
              />
            </div>
          )
        }
      })}
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
