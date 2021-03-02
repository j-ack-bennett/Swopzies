import React, { useEffect, useState } from "react";
import { connect, useStore } from "react-redux";
import { Link } from "react-router-dom"

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
    <div className="card">
      <div className="card-content">
        <h3 className="is-4">Profile</h3>

        <div className="content">
          {props.auth.user && (
            <table>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{props.auth.user.username}</td>
                </tr>
                <tr>
                  <td>First Name</td>
                  <td>{props.auth.user.first_name}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{props.auth.user.last_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{props.auth.user.email}</td>
                </tr>
                <tr>
                  <td>Bio</td>
                  <td>{props.auth.user.bio}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{props.auth.user.phone}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{props.auth.user.location}</td>
                </tr>
              </tbody>
            </table>
          )}
          <div>
            <Link to="/update">
              <button >Update Profile</button>
            </Link>
          </div>
        </div>
        <br />
      </div>
      <div className="card">
        <div className="card-content">
          <h3 className="is-4">My listings</h3>
          <div className="content">
            <table>
              <tbody>
                {listings.map(listing => {
                  if (listing.user_id === props.auth.user.id) {
                    return (
                      // <tr key={listing.id}>
                      //   <td>
                      //     <Link to={`/listing/${listing.id}`}>{listing.title}</Link>
                      //   </td>
                      // </tr>
                      <ListingLink id={listing.id} />
                    )
                  }
                })}
                {/* {userBookmarks.map(bookmark => {
                  return listings.find(listing => listing.id === bookmark.listing_id)
                })} */}

              </tbody>
            </table>
          </div>
        </div>


          <div className="card-content">
            <h3 className="is-4">My Bookmarks</h3>
            <div className="content">
              <table>
                <tbody>
                  {/* {bookmarkedListings.map(listing => {
                    return (
                      <tr key={listing.id}>
                        <td>
                          <Link to={`/listing/${listing.id}`}>{listing.title}</Link>
                        </td>
                      </tr>
                    )
                  })} */}
                  {props.auth.user.bookmarks && props.auth.user.bookmarks.map(bookmark => {
                    return <ListingLink key={bookmark.listing_id} id={bookmark.listing_id} />
                  })}
                </tbody>
              </table>
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
  };
};
export default connect(mapStateToProps)(Profile);
