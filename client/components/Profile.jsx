import React from "react";
import { connect, useStore } from "react-redux";

function Profile(props) {
  const profile = props.auth.user;
  console.log(props);
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="is-4">Profile</h3>

        <div className="content">
          <table className="table-profile">
           <tbody>
            <tr>
              <td>Username</td>
              <td>{profile.username}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{profile.first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{profile.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>{profile.bio}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{profile.location}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
    </div>
  );
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
  };
};
export default connect(mapStateToProps)(Profile);

{
  /* <div className="profileContainer">
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
    </div> */
}
