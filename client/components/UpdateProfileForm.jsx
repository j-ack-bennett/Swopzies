import React, { useState } from "react"
import { connect, useStore } from "react-redux"
import { updateProfile } from "../actions/auth"

const locations = [
  "Northland",
  "Bay of Plenty",
  "Auckland",
  "Gisborne",
  "Hawke's Bay",
  "Waikato",
  "Taranaki",
  "Manawatu",
  "Tatooine",
  "Wellington",
  "Nelson",
  "Tasman",
  "Marlborough",
  "Canterbury",
  "West Coast",
  "Otago",
  "Southland",
]

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
    }
    props.dispatch(updateProfile(updatedProfile, confirmSuccess))
  }

  return (
    <div>
      <div className="control">
        Username:
        <input
          onChange={handleChange}
          className="input"
          type="text"
          name="username"
          value={updatedProfile.username}
        ></input>
        First name:
        <input
          className="input"
          name="first_name"
          type="text"
          value={updatedProfile.first_name}
          onChange={handleChange}
        ></input>
        Last name:
        <input
          className="input"
          name="last_name"
          type="text"
          value={updatedProfile.last_name}
          onChange={handleChange}
        ></input>
        Email:
        <input
          className="input"
          name="email"
          type="text"
          value={updatedProfile.email}
          onChange={handleChange}
        ></input>
        Phone:
        <input
          className="input"
          name="phone"
          type="text"
          value={updatedProfile.phone}
          onChange={handleChange}
        ></input>
        Bio:
        <input
          className="input"
          name="bio"
          type="text"
          value={updatedProfile.bio}
          onChange={handleChange}
        ></input>
        <select
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
      <div>
        <button onClick={(e) => handleClick(e)}>Update</button>
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
