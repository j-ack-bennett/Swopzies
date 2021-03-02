import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ListingLink = (props) => {
  const [listingLink, setLink] = useState({})
  useEffect(() => {
    const userBookmarks = props.listings.filter(listing => listing.id === props.id)
    setLink(userBookmarks[0])
  }, [props.listings])

  return (
    <tr><td>
      {listingLink && (
        <Link to={`/listing/${listingLink.id}`}>{listingLink.title}</Link>
      )}  
    </td></tr>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings
  }
}

export default connect(mapStateToProps)(ListingLink)