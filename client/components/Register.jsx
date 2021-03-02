import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

import { setRego } from '../actions/register'

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
    phone: ''
  })

  // useEffect(() => {
  //   props.dispatch(loginError(''))
  // }, [])

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
    props.dispatch(setRego(formData))
    e.target.reset()
    let { username, password, confirm_password, first_name, last_name, bio, email, location, phone } = formData
    if (confirm_password != password) return props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { props.history.push('/register2') }
    props.dispatch(registerUserRequest({ username, password, first_name, last_name, bio, email, location, phone }, confirmSuccess))
  }

  return (
    <section className="hero is-light is-fullheight">
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
                    <input className="input is-large" placeholder="Username" type="text" name="username" autoComplete="username" onChange={handleChange} value={formData.username} autoFocus="" required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Email" type="text" name="email" onChange={handleChange} value={formData.email} required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={handleChange} value={formData.password} required />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password} required />
                  </div>
                </div>

                <button className="button is-block is-info is-large is-fullwidth">Register <i className="fa fa-sign-in" aria-hidden="true"></i></button>
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