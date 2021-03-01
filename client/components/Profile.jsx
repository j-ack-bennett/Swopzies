import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getBookmarked } from "../apis/listings"


function Profile(props) {
  const listingzzzz = props.listings
  const [ listings, setListings ] = useState([])
  const [ bookmarks, setBookmarks ] = useState([])

  const fetchBookmarks = () => {
    getBookmarked(props.auth.user.id)
      .then(res => {
        setBookmarks(res)
      })
  }

  useEffect(() => {
    fetchBookmarks()
  }, [listings])

  useEffect(() => {
    setListings(listingzzzz)
  }, [listingzzzz])

  // console.log(bookmarks)


  const bookmarkedListingz = listings.filter(listing => {
    console.log(bookmarks)
    return bookmarks.map(bookmark => {
      if(bookmark.listing_id === listing.id) { return listing }
    })
  })

  return (
    <div className="container">
      <p>Profile</p>
      <div className="bookMarks"></div>
      {bookmarkedListingz.map(listing => {
        return <p>hello</p>
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

export default connect(mapStateToProps)(Profile)

