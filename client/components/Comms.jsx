import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postNewComment } from '../apis/comms'

import CommThread from './CommThread'

const Comms = (props) => {
  const listing_id = props.listingId
  const user_id = props.auth.user.id

  const [comment, setComment] = useState('')
  

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e ,thread_id) => {
    console.log(thread_id)
    e.preventDefault()
    const newComment = {
      listing_id,
      user_id,
      text: comment,
      time: new Date()
    } 
    if(thread_id) {
      newComment.thread_id = thread_id
    }
    console.log(newComment)
    postNewComment(newComment)
  } 

  return (
    <>
      <div className='newCommentThread' >
        <form className='message' onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} />
          <input type='submit' />
        </form>
      </div>
      <div className='threads'>
        <CommThread listingId={listing_id} 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </>
  )
} 

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Comms)