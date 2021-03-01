import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchListings, deleteListing } from "../actions/listings"
import { addBookmark, deleteBookmark } from "../apis/listings"

import Comms from "./Comms"



function Listing(props) {


  const [bookmarked, setBookmarked] = useState(false)


  useEffect(() => {
    props.dispatch(fetchListings())
  }, [])
  const user_id = props.auth.user.id
  const listingId = props.match.params.id
  const killListing = (id) => {
    props.dispatch(deleteListing(id))
    props.history.push('/')
  }

  const handleClick = (e) => {
    e.preventDefault()
    const newBookmark = { listing_id: listingId, user_id: user_id }
    addBookmark(newBookmark)
    // bookmarked = !bookmarked
    // console.log(bookmarked)
    setBookmarked(bookmarked => !bookmarked)
  }

  return (
    <div className="container">
      {props.listings.map((listingItem) => {
        if (listingItem.id == listingId) {
          return (
            <div key={listingItem.id}>
              {listingItem.user_id == props.auth.user.id ?
                <button onClick={() => killListing(listingItem.id)} className="deleteButton">Delete Post</button> 
                :(bookmarked)
                ? <button onClick={handleClick} >Unbookmark</button>
                :<button onClick={handleClick} className="bookmarkButton">Bookmark this</button>
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
