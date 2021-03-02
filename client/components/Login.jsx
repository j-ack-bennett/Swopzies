import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { loginUser, loginError } from "../actions/auth"

function Login(props) {
  const { auth } = props

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      }
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    let { username, password } = formData
    const confirmSuccess = () => {
      props.history.push("/")
    }
    props.dispatch(loginUser({ username, password }, confirmSuccess))
  }

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="has-text-black home-font-size">Login</h3>
            <hr className="login-hr" />
            <p className="subtitle has-text-black">Please login to proceed.</p>
            <div className="box">

              <form onSubmit={handleSubmit}>
                {console.log(auth.errorMessage)}
                {
                  auth.errorMessage && (
                    <span className="has-text-danger is-large">{auth.errorMessage}</span>
                  )}
                <div className="field">
                  <div className="control">
                    <input
                      required
                      className="input is-large"
                      placeholder="Username"
                      type="text"
                      name="username"
                      autoComplete="username"
                      value={formData.username}
                      onChange={handleChange}
                      autoFocus
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      required
                      className="input is-large"
                      placeholder="Password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
              </form>
            </div>
            <p className="has-text-grey">
              <Link to="/register">Register</Link>
            </p>
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

export default connect(mapStateToProps)(Login)

{/* <form className="form box" onSubmit={handleSubmit}>
    <h1 className="title is-2">Login</h1>
    <hr />
    {
      auth.errorMessage && (
        <span className="has-text-danger is-large">{auth.errorMessage}</span>
      )
    }
    < label className = "label is-large has-text-centered" >
      Username
      < input
  required
  className = "input has-text-centered is-large is-fullwidth"
  placeholder = "User Name"
  type = "text"
  name = "username"
  autoComplete = "username"
  value = { formData.username }
  onChange = { handleChange }
    />
      </label >
      <label className="label is-large has-text-centered">
      Password
        <input
          required
          className="input has-text-centered is-large is-fullwidth"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <input
        className="button is-large is-fullwidth is-success"
        value="Login"
        type="submit"
      />
    </form > */}