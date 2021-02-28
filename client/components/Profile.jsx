import React from "react"
import { connect, useStore } from "react-redux"

function Profile(props) {
  const profile = props.auth.user
  console.log(props)
  return (
    <div className="profileContainer">
      <div className="fieldName">
        <div>Username</div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Email</div>
        <div>Bio</div>
        <div>Phone</div>
        <div>Location</div>
      </div>
      <div className="profileDetails">
        <div>{profile.username}</div>
        <div>{profile.first_name}</div>
        <div>{profile.last_name}</div>
        <div>{profile.email}</div>
        <div>{profile.bio}</div>
        <div>{profile.phone}</div>
        <div>{profile.location}</div>
      </div>
      <div className="profileButton">
        <button>Edit</button>
      </div>
    </div>
   ) 
  }


const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,  
}
}
export default connect(mapStateToProps)(Profile)

