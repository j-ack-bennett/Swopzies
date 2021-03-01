import React from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { connect } from 'react-redux'

const Nav = (props) => {
  const logout = props.logout
  const auth = props.auth

  return (
    <>
    <section className="hero is-dark">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              {/* <Link to="/" className="logo">
                <img src="duckie.png" alt="Logo" />
              </Link> */}
              {/* <div className="nav-title-container">
                <h1 className="nav-title">swopsies</h1>
              </div> */}
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
                    <span className="navbar-item">
                      <Link to="/" className="button is-white is-outlined">
                        <span className="icon">
                          <i className="fa fa-home"></i>
                        </span>
                        <span>Home</span>
                      </Link>
                    </span>

                    <span className="navbar-item">
                      <Link to="/profile" className="button is-white is-outlined">
                        <span className="icon">
                          <i className="far fa-id-badge"></i>
                        </span>
                        <span>Profile</span>
                      </Link>
                    </span>

                    <span className="navbar-item">
                      <Link to="/" onClick={() => logout()} className="button is-white is-outlined">
                        <span className="icon">
                          <i className="fa fa-book"></i>
                        </span>
                        <span>Log Off</span>
                      </Link>
                    </span>
                  </>) :
                  (<>
                    <span className="navbar-item">
                      <Link to="/login" className="button is-white is-outlined">
                        <span className="icon">
                          <i className="fas fa-sign-in-alt"></i>
                        </span>
                        <span>Login</span>
                      </Link>
                    </span>

                    <span className="navbar-item">
                      <Link to="/register" className="button is-white is-outlined">
                        <span className="icon">
                          <i className="fas fa-user-plus"></i>
                        </span>
                        <span>Register</span>
                      </Link>
                    </span>
                  </>)
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </>
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