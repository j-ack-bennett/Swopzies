import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

import {loginError, registerUserRequest} from '../actions/auth'

function Register (props) {
  const {auth} = props

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: ''
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
    let {username, password, confirm_password, first_name, last_name} = formData
    if (confirm_password != password) return props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { props.history.push('/') }
    props.dispatch(registerUserRequest({username, password, first_name, last_name}, confirmSuccess))
  }

    return (
      <form className="Register form box" onSubmit={handleSubmit}>
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
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={handleChange} value={formData.password}/>
          </label>
          <label className="column is-6 label is-large has-text-centered">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password}/>
          </label>
        </div>
        <input className="button is-success is-large is-fullwidth" value="Register" type="submit" />
      </form>
    )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
