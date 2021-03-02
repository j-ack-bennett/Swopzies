import React from "react";
import { connect, useStore } from "react-redux";
import { Link } from "react-router-dom"
import moment from 'moment'

function Profile(props) {
  const profile = props.auth.user;
  const listings = props.listings;

  return (    
  <div className="container margin-top">
    <div className="add-listing-page">
      <div className="add-listing-page add-listing-center add-listing-centering">
        <div className="card">
          <div className="card-content">
            <h3 className="is-4 center-text">Profile</h3>
            <hr />
            <div className="content">
              <table>
                <tbody>
                  <tr>
                    <th colSpan="1"></th>
                    <th colSpan="2"></th>
                  </tr>
                  <tr>
                    <td className="table-width">Username</td>
                    <td className="table-width">{profile.username}</td>
                  </tr>
                  <tr>
                    <td className="table-width">First Name</td>
                    <td className="table-width">{profile.first_name}</td>
                  </tr>
                  <tr>
                    <td className="table-width">Last Name</td>
                    <td className="table-width">{profile.last_name}</td>
                  </tr>
                  <tr>
                    <td className="table-width">Email</td>
                    <td className="table-width">{profile.email}</td>
                  </tr>
                  <tr>
                    <td className="table-width">Bio</td>
                    <td className="table-width">{profile.bio}</td>
                  </tr>
                  <tr>
                    <td className="table-width">Phone</td>
                    <td className="table-width">{profile.phone}</td>
                  </tr>
                  <tr>
                    <td className="table-width">Location</td>
                    <td className="table-width">{profile.location}</td>
                  </tr>
                </tbody>
              </table>
              <div>
              <div className="buttons has-addons is-centered">
                <Link to="/update" className="button is-primary">
                Update Profile
                </Link>
              </div>
          </div>
            </div>
            <br />
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="is-4">My listings</h3>
              <hr />
              <div className="capitalize">
                <table>
                  <tbody>
                    {listings.map(listing => {
                      if (listing.user_id === profile.id) {
                        return (
                          <tr key={listing.id}>
                            <td>
                              <Link to={`/listing/${listing.id}`}>{listing.title}</Link>
                              <p className="profile-last-updated">Last updated: {moment(listing.time).format('LLL')}</p>
                            </td>
                          </tr>
                        )
                      }
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
