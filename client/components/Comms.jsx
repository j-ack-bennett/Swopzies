import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postNewComment } from '../apis/comms'

import CommThread from './CommThread'

const Comms = (props) => {
  const listing_id = props.listingId
  const user_id = props.auth.user.id
  const listing_user_id = props.listingUserId

  const [comment, setComment] = useState('')
  
  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    const newComment = {
      listing_id,
      user_id,
      text: comment,
      time: new Date()
    }
    postNewComment(newComment)
  } 

  return (
    <>
      <div className='newCommentThread' >
        <form className='message' onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} name="text"/>
          <input type='submit' />
        </form>
      </div>
      <div className='threads'>
        <CommThread listingId={listing_id} listingUserId={listing_user_id}
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