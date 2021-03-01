import React, { useState } from "react";
import { connect, useStore } from "react-redux";

import { updateUserProfile } from "../apis/users"


//put user input into state
//dispatch updateProfile function
//set new state to updated Profile

function UpdateProfileForm(props) {
  const profile = props.auth.user
  const [updatedProfile, setUpdatedProfile] = useState(profile)

  const handleChange = (event) => {
    setUpdatedProfile({
      ...updatedProfile,
      [event.target.name]: event.target.value
    })
    console.log(updatedProfile)
  }


  function handleClick(e) {
    e.preventDefault()
    updateUserProfile(updatedProfile)
  }



  return (

    <div>
      <div className="control">
        Username:<input onChange={handleChange} className="input" type="text" placeholder={profile.username}>
        </input>
          First name:<input className="input" name='first_name' type="text" placeholder={profile.first_name}
          onChange={handleChange}>
        </input>
          Last name:<input className="input" name='last_name' type="text" placeholder={profile.last_name}
          onChange={handleChange}>
        </input>
          Email:<input className="input" name='email' type="text" placeholder={profile.email}
          onChange={handleChange}>
        </input>
          Phone:<input className="input" name='phone' type="text" placeholder={profile.phone}
          onChange={handleChange}>
        </input>
          Bio:<input className="input" name='bio' type="text" placeholder={profile.bio}
          onChange={handleChange}>
        </input>
          Location:<input className="input" name='location' type="text"   placeholder={profile.location}
          onChange={handleChange}>
        </input>
      </div>
      <div>
        <button onClick={(e) => handleClick(e)}>
          Update</button>




      </div>
    </div>

  )

}





const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
    users: globalState.users
  }
}
export default connect(mapStateToProps)(UpdateProfileForm)

