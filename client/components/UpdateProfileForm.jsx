import React, { useState } from "react"
import { connect, useStore } from "react-redux"
import { generalError, updateProfile } from "../actions/auth"

const locations = ['Auckland', 'Bay of Plenty', 'Canterbury', 'Gisborne', 'Hawke\'s Bay', 'Manawatu-Whanganui', 'Marlborough', 'Nelson', 'Northland', 'Otago', 'Southland', 'Taranaki', 'Tasman', 'Waikato', 'Wellington', 'West Coast']

//put user input into state
//dispatch updateProfile function
//set new state to updated Profile

function UpdateProfileForm(props) {
  const profile = props.auth.user

  const [updatedProfile, setUpdatedProfile] = useState({
    username: profile.username,
    first_name: profile.first_name,
    last_name: profile.last_name,
    email: profile.email,
    phone: profile.phone,
    bio: profile.bio,
    location: profile.location,
  })

  const handleChange = (event) => {
    setUpdatedProfile({
      ...updatedProfile,
      [event.target.name]: event.target.value,
    })
    // console.log(updatedProfile)
  }

  function handleClick(e) {
    e.preventDefault()
    const confirmSuccess = () => {
      props.history.push("/profile")
      props.dispatch(generalError(''))
    }
    props.dispatch(updateProfile(updatedProfile, confirmSuccess))
  }

  return (
    <div className="container margin-top margin-bottom">
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
          <div className="card">
            <div className="card-content">
              <h3 className="is-4 center-text">Edit Profile Information</h3>

              {props.auth.errorMessage && (
                  <span className="has-text-danger is-large">
                    {props.auth.errorMessage}
                  </span>
                )}

              <div>
              <div className="has-text-weight-bold field">
                Username:
              </div>
              <input
                  onChange={handleChange}
                  className="input field"
                  type="text"
                  name="username"
                  value={updatedProfile.username}
                >
                </input>

              <div className="has-text-weight-bold field">
                First name:
              </div>
              <input
                  className="input field"
                  name="first_name"
                  type="text"
                  value={updatedProfile.first_name}
                  onChange={handleChange}
                >
                </input>

              <div className="has-text-weight-bold field">
                Last name:
              </div>
              <input
                  className="input field"
                  name="last_name"
                  type="text"
                  value={updatedProfile.last_name}
                  onChange={handleChange}
                >
                </input>

                <div className="has-text-weight-bold field">
                  Email:
                </div>
                <input
                  className="input field"
                  name="email"
                  type="text"
                  value={updatedProfile.email}
                  onChange={handleChange}
                >
                </input>

                <div className="has-text-weight-bold field">
                  Phone:
                </div>
                <input
                  className="input field"
                  name="phone"
                  type="text"
                  value={updatedProfile.phone}
                  onChange={handleChange}
                >
                </input>

                <div className="has-text-weight-bold field">
                  Bio:
                </div>
                <input
                  className="input field"
                  name="bio"
                  type="text"
                  value={updatedProfile.bio}
                  onChange={handleChange}
                >
                </input>

                <div className="has-text-weight-bold field">
                  Location:
                </div>
                <select
                  className="margin-bottom location-dropdown"
                  name="location"
                  onChange={handleChange}
                  defaultValue={profile.location}
                >
                  {locations.map((location) => {
                    return (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className="buttons has-addons">
                <button className="button is-primary is-fullwidth" onClick={(e) => handleClick(e)}>Update</button>
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
    users: globalState.users,
  }
}
export default connect(mapStateToProps)(UpdateProfileForm)
