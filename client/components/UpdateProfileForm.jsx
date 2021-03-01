import React, { useState }  from "react";
import { connect, useStore } from "react-redux";


//put user input into state
//dispatch updateProfile function
//set new state to updated Profile

function UpdateProfileForm(props) {
  const [updatedProfile, setUpdatedProfile] = useState(props.auth.user)
  const profile = props.auth.user

  const handleChange = (event) => {
    setUpdatedProfile(event.target.value)
  }
  

  function handleClick() {
    props.dispatch
  }


  return (
  
    <div>
      <div className="control">
        Username:<input onChange={(event) => handleChange(event)}className="input" type="text" placeholder={profile.username}>
        </input>
     First name:<input className="input" type="text" placeholder={profile.first_name}>
        </input>
     Last name:<input className="input" type="text" placeholder={profile.last_name}>
        </input>
     Email:<input className="input" type="text" placeholder={profile.email}>
        </input>
     Phone:<input className="input" type="text" placeholder={profile.phone}>
        </input>
     Bio:<input className="input" type="text" placeholder={profile.bio}>
        </input>
     Location:<input className="input" type="text" placeholder={profile.location}>
        </input>
      </div>
      <div>
        <button onClick={() => handleClick()}>
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

