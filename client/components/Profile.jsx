import React, { useEffect, useState } from "react";
import { connect, useStore } from "react-redux";
import { Link } from "react-router-dom"
import moment from 'moment'

import ListingLink from './ListingLink'

function Profile(props) {
  // const profile = props.auth.user;
  const listings = props.listings;
  // const userBookmarks = props.auth.user.bookmarks || []
  const [bookmarkedListings, setBookmarkedListings ] = useState([])
  // const markedListings = listings.filter(listing => {
  //   return userBookmarks.map(bookmark => {
  //     if (listing.id === bookmark.listing_id) {
  //       return listing
  //     }
  //   })
  // })
  const fetchMarkedListings = () => {
    if(props.auth.user.bookmarks) {
      setBookmarkedListings(props.auth.user.bookmarks.map(bookmark => {
        return listings.find(listing => listing.id === bookmark.listing_id)
      }))
    }
  }


  // const markedListings = userBookmarks.map(bookmark => {
  //    return listings.find(listing => listing.id === bookmark.listing_id)
  // })

  useEffect(() => {
    fetchMarkedListings()
  },[props.auth.user])

  // console.log('rob', markedListings)

  return (    
  <div className="container margin-top margin-bottom">
  <div className="add-listing-page">
  <div className="add-listing-page add-listing-center add-listing-centering">
    <div className="card">
      <div className="card-content">
        <h3 className="is-4 center-text">Profile</h3>

        <div className="content">
          {props.auth.user && (
            <table>
              <tbody>
                <tr>
                  <th colSpan="1"></th>
                  <th colSpan="2"></th>
                </tr>
                <tr>
                  <td className="table-width has-text-weight-bold" >Username:</td>
                  <td className="table-width" >{props.auth.user.username}</td>
                </tr>
                <tr>
                  <td className="table-width has-text-weight-bold" >First Name:</td>
                  <td className="table-width" >{props.auth.user.first_name}</td>
                </tr>
                <tr>
                  <td className="table-width has-text-weight-bold" >Last Name:</td>
                  <td className="table-width" >{props.auth.user.last_name}</td>
                </tr>
                <tr>
                  <td className="table-width has-text-weight-bold" >Email:</td>
                  <td className="table-width" >{props.auth.user.email}</td>
                </tr>
                <tr>  
                  <td className="table-width has-text-weight-bold" >Bio:</td>
                  <td className="table-width" >{props.auth.user.bio}</td>
                </tr>
                <tr>
                  <td className="table-width has-text-weight-bold" >Phone:</td>
                  <td className="table-width" >{props.auth.user.phone}</td>
                </tr>
                <tr>
                  <td className="table-width has-text-weight-bold" >Location:</td>
                  <td className="table-width" >{props.auth.user.location}</td>
                </tr>
              </tbody>
            </table>
          )}
          <div>
            <div className="buttons has-addons is-centered">
              <Link to="/update" className="button is-primary">
                Update Profile
              </Link>
            </div>
          </div>
        </div>

        <br />
      
      <div className="card">
        <div className="card-content my-listings-margin">
          <h3 className="is-4">My listings</h3>
          <hr />
            <table>
              <tbody>
                {listings.map(listing => {
                  if (listing.user_id === props.auth.user.id) {
                    return (
                      <tr key={listing.id}>
                        <td>
                          <ListingLink id={listing.id} />
                          <p className="profile-last-updated">Last updated: {moment(listing.time).format('LLL')}</p>
                          <br />
                        </td>
                      </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="is-4">My Bookmarks</h3>
            <hr />
              <table>
                <tbody>
                  {props.auth.user.bookmarks && props.auth.user.bookmarks.map(bookmark => {
                    return <><ListingLink key={bookmark.listing_id} id={bookmark.listing_id} /><br /></>
                  })}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
  </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
        auth: globalState.auth,
    listings: globalState.listings,
  }
}
export default connect(mapStateToProps)(Profile);
