import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

function Register2(props) {
  const { auth } = props

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    location: '',
    phone: ''
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

    <section id="test1" className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="has-text-black">Register</h3>
            <hr className="login-hr" />
            <p className="subtitle has-text-black">Please register to proceed.</p>
            <div className="box">
              <form onSubmit={handleSubmit}>
                {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="First Name" type="text" name="first_name" onChange={handleChange} value={formData.first_name} required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Last Name" type="text" name="last_name" onChange={handleChange} value={formData.last_name} required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Bio" type="text" name="bio" onChange={handleChange} value={formData.bio} required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Phone number eg: 022 134 1304" type="text" name="phone" onChange={handleChange} value={formData.phone} required />
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

export default connect(mapStateToProps)(Register2)