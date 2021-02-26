import React from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { connect } from 'react-redux'

const Nav = (props) => {
  const logout = props.logout
  const auth = props.auth

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="duck.jpg" alt="Logo" />
          </Link>
          <h1 className='title'>Jack Of All Trades</h1>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            {auth.isAuthenticated
              ? (<>
                <span className='navbar-item'><Link to="/" className="navbar-link is-arrowless">Home</Link></span>
                <span className='navbar-item'><Link to="/profile" className="navbar-link is-arrowless">Profile</Link></span>
                <span className='navbar-item'><Link to='/' onClick={() => logout()} className="navbar-link is-arrowless">Log Off</Link></span>
              </>) :
              (<>
                <span className='navbar-item'><Link to="/login" className="navbar-link is-arrowless">Sign in</Link></span>
                <span className='navbar-item'><Link to="/register" className="navbar-link is-arrowless">Register</Link></span>
              </>)
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => {
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


{/* <nav className='navbar'>
          <div className='navbar__title'>
            <img className='logo' src='duck.jpg' alt='Logo for Jack of all Trades' />
            <h1 className='title'>Jack Of All Trades</h1>
          </div>
          <div className='navbar__links'>
            {auth.isAuthenticated
            ?   (<>
                    <span className='navbar-item'><Link to="">Home</Link></span>
                    <span className='navbar-item'><Link to="">Profile</Link></span>
                    <span className='navbar-item'><Link to='/' onClick={() => logout()}>Log Off</Link></span>
                </>):
                (<>
                    <span className='navbar-item'><Link to="/login">Sign in</Link></span>
                    <span className='navbar-item'><Link to="/register">Register</Link></span>
                </>)
            }
          </div>
      </nav> */}