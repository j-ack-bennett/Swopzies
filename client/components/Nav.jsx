import React from 'react'
import { Link }from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

const Nav = () => {
  return (
      <nav className='navBar'>
        <div className="container">
          <div>
            <h1>Jack Of All Trades</h1>
          </div>
          <div>
            { auth.isAuthenticated
            ? (<>
            )}
          </div>
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


