import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

function Register(props) {
  const { auth } = props

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    email: '',
    bio: '',
    location: '',
    image: '',
    phone: '',
  })

  useEffect(() => {
    props.dispatch(loginError(''))
  }, [])

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
    let { username, password, confirm_password, first_name, last_name, bio, email, location, phone } = formData
    if (confirm_password != password) return props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { props.history.push('/') }
    props.dispatch(registerUserRequest({ username, password, first_name, last_name, bio, email, location, phone }, confirmSuccess))
  }

  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="has-text-black">Register</h3>
            <hr className="login-hr" />
            <div className="box">
              <form onSubmit={handleSubmit}>
                {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Username" type="text" name="username" autoComplete="username" onChange={handleChange} value={formData.username} autoFocus="" required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="First Name" type="text" name="first_name" onChange={handleChange} value={formData.first_name} required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Last Name" type="text" name="last_name" onChange={handleChange} value={formData.last_name} required/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Email" type="text" name="email" onChange={handleChange} value={formData.email} required/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Bio" type="text" name="bio" onChange={handleChange} value={formData.bio} required/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Location" type="text" name="location" onChange={handleChange} value={formData.location} required/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Phone number eg: 022 134 1304" type="text" name="phone" onChange={handleChange} value={formData.phone} required/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={handleChange} value={formData.password} required/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password} required/>
                  </div>
                </div>

                <button className="button is-block is-info is-large is-fullwidth">Register<i className="fa fa-sign-in" aria-hidden="true"></i></button>
              </form>
            </div>
            <p className="has-text-grey">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)





{/* <form className="Register form box" onSubmit={handleSubmit}>
<h1 className="title is-2">Register</h1>
<hr />
{auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
<label className="column is-6 is-offset-one-quarter label is-large has-text-centered">Username
  <input required className="input is-large has-text-centered is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" onChange={handleChange} value={formData.username}/>
</label>
<div className="columns">
  <label className="column is-6 label is-large has-text-centered">First Name
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="First Name" type="text" name="first_name" onChange={handleChange} value={formData.first_name}/>
  </label>
  <label className="column is-6 label is-large has-text-centered">Last Name
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="Last Name" type="text" name="last_name" onChange={handleChange} value={formData.last_name}/>
  </label>
</div>
<br />
<div>
  <label className="column is-6 label is-large has-text-centered">email
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="Email" type="text" name="email"  onChange={handleChange} value={formData.email}/>
  </label>
  <label className="column is-6 label is-large has-text-centered">bio
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="Bio" type="text" name="bio"  onChange={handleChange} value={formData.bio}/>
  </label>
  <label className="column is-6 label is-large has-text-centered">location
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="Location" type="text" name="location"  onChange={handleChange} value={formData.location}/>
  </label>
  <label className="column is-6 label is-large has-text-centered">phone
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="021 1234 567" type="text" name="phone"  onChange={handleChange} value={formData.phone}/>
  </label>
</div>
<div className="columns">
  <label className="column is-6 label is-large has-text-centered">Password
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={handleChange} value={formData.password}/>
  </label>
  <label className="column is-6 label is-large has-text-centered">Confirm Password
    <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password}/>
  </label>
</div>
<input className="button is-success is-large is-fullwidth" value="Register" type="submit" />
</form> */}