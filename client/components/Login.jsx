import React, {useState} from "react"
import {connect} from "react-redux"

import {loginUser, loginError} from "../actions/auth"

function Login (props) {
  const {auth} = props

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
    <form className="form box" onSubmit={handleSubmit}>
      <h1 className="title is-2">Login</h1>
      <hr />
      {auth.errorMessage && (
        <span className="has-text-danger is-large">{auth.errorMessage}</span>
      )}
      <label className="label is-large has-text-centered">
        Username
        <input
          required
          className="input has-text-centered is-large is-fullwidth"
          placeholder="User Name"
          type="text"
          name="username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
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
    </form>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Login)
