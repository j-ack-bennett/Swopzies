import React from 'react'
import { Link }from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

const Nav = (props) => {
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
                    <span className='navbar__links--link'><Link onClick={() => logOff()}>Log Off</Link></span>
                </>):
                (<>
                    <span className='navbar__links--link'><Link to="">Sign in</Link></span>
                    <span className='navbar__links--link'><Link to="">Register</Link></span>
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
