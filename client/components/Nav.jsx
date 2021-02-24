import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logoutUser} from '../actions/auth'

function Nav ({auth, logout}) {
  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible(currentBurgerState => {
      return !currentBurgerState
    })
  }

    return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active': ''}`} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
          <div className="navbar-end">
            { auth.isAuthenticated
              ? (
                  <Link to='/' className="navbar-item is-large" onClick={() => logout()}>Logout</Link>
                )
              : (
                <>
                  <Link onClick={toggleBurger} className="navbar-item is-large" to='/login'>Login</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/register'>Register</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </nav>
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => ownProps.history.push('/')
      dispatch(logoutUser(confirmSuccess))
    }
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
