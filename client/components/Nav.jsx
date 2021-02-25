import React from 'react'
import { Link }from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { connect } from 'react-redux'

const Nav = (props) => {
  const logout = props.logout
    const auth = props.auth
  return (
      <nav className='navbar'>
          <div className='navbar__title'>
            <h1 className='title'>Jack Of All Trades</h1>
            <img src='' alt='Logo for Jack of all Trades' />
          </div>
          <div className='navbar__links'>
            { auth.isAuthenticated
            ?   (<>
                    <span className='navbar__links--link'><Link to="">Home</Link></span>
                    <span className='navbar__links--link'><Link to="">Profile</Link></span>
                    <span className='navbar__links--link'><Link to='/' onClick={() => logout()}>Log Off</Link></span>
                </>):
                (<>
                    <span className='navbar__links--link'><Link to="/login">Sign in</Link></span>
                    <span className='navbar__links--link'><Link to="/register">Register</Link></span>
                </>)
            }
          </div>
      </nav>
  )
  

}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => ownProps.history.push('/')
      dispatch(logoutUser(confirmSuccess))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
