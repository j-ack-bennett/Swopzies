import React from 'react'
import { Link }from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

const Nav = (props) => {
    const auth = props.auth
  return (
      <nav className='navbar'>
          <div className='navbar__title'>
            <h1>Jack Of All Trades</h1>
            <img src='' alt='Logo for Jack of all Trades' />
          </div>
          <div className='navbar__links'>
            { auth.isAuthenticated
            ?   (<>
                    <Link to="">Home</Link>
                    <Link to="">Profile</Link>
                    <Link onClick={() => logOff()}>Log Off</Link>
                </>):
                (<>
                    <Link to="">Sign in</Link>
                    <Link to="">Register</Link>
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

export default connect(mapStateToProps)(Nav)
