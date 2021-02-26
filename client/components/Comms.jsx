import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Comms = (props) => {
  const listing_id = props.listingId
  const user_id = props.auth.user.id
  
  

  const handleChange = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  } 

  return (

    <div className='thread' >
      <form className='message' onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
        <input type='submit' />
      </form>
    </div>
  )


} 

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Comms)