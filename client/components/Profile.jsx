import React from "react"
import { connect } from "react-redux"

function Profile(props) {
  const profile = props.auth.user
  return (
    <div className="container">
      <p>Profile</p>

      {Object.keys(profile).map((key) => {
        const keyStr = key.split("").map((char) => {
          if (char === "_") {
            char = " "
          }
          return char
        })

        const capitalised = keyStr[0].toUpperCase + keyStr.substring(1)

        return (
          <div className="field">
            <div className="control">
              <label>{capitalised}</label>
              <p>{profile[key]}</p>
            </div>
          </div>
        )
      })}

      {/* <div className="field">
        <div className="control">First Name: 
        <input className="profile data" placeholder={profile.first_name} type="text" />
        </div>
      </div>

      <div className="field">
        <div className="control">Last Name: 
        <input className="profile data" placeholder={profile.last_name} type="text" />
        </div>
      </div>

      <div className="field">
        <div className="control">Email: 
        <input className="profile data" placeholder={profile.email} type="text" />
        </div>
      </div>

      <div className="field">
        <div className="control">Bio: 
        <input className="profile data" placeholder={profile.bio} type="text" />
        </div>
      </div>

      <div className="field">
        <div className="control">Location: 
        <input className="profile data" placeholder={profile.location} type="text" />
        </div>
      </div>

      <div className="field">
        <div className="control">Phone: 
        <input className="profile data" placeholder={profile.phone} type="text" />
        </div>
      </div> */}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps)(Profile)
