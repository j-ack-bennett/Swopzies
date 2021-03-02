import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { updateProfile } from "../actions/auth"

function Register2(props) {
  const { auth } = props

  const locations = [
    "Norhtland",
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

  const userId = auth.user.id

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    location: "",
    phone: "",
  })

  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { first_name, last_name, bio, location, phone } = formData
    const confirmSuccess = () => {
      props.history.push("/")
    }
    props.dispatch(
      updateProfile(
        { username: auth.user.username, first_name, last_name, bio, location, phone},
        confirmSuccess
      )
    )
  }

  return (
    <section id="test1" className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="has-text-black">Register</h3>
            <hr className="login-hr" />
            <p className="subtitle has-text-black">
              Please register to proceed.
            </p>
            <div className="box">
              <form onSubmit={handleSubmit}>
                {auth.errorMessage && (
                  <span className="has-text-danger is-large">
                    {auth.errorMessage}
                  </span>
                )}
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      value={formData.first_name}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      value={formData.last_name}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      placeholder="Phone Number"
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    {/* <input className="input is-large" placeholder="Location" type="text" name="location" onChange={handleChange} value={formData.location} required /> */}
                    <select name="location" onChange={handleChange}>
                      <option value="ChooseLocationYouDick">
                        Choose your location
                      </option>
                      {locations.map((location) => {
                        return (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-large"
                      placeholder="Bio"
                      type="text"
                      name="bio"
                      onChange={handleChange}
                      value={formData.bio}
                      required
                    />
                  </div>
                </div>

                <button className="button is-block is-info is-large is-fullwidth">
                  Register<i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Register2)
