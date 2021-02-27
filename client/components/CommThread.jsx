import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import { postNewComment, getCommsforListing } from '../apis/comms'

const CommThread = (props) => {
  const listingId = props.listingId
  const handleSubmit = props.handleSubmit
  const handleChange = props.handleChange

  const [ comments, setComments ] = useState([])


  const getStuff = () => {
    getCommsforListing(listingId)
      .then(sure => {
        setComments(sure)
      })
  }

  useEffect(() => {
    getStuff()
  }, [])

  return (
    <>
      {
        comments.map(comment => {
          return (
            <>
            <h3>{comment.username}</h3>
            <p>{comment.text}</p>
            <form onSubmit={(e) => handleSubmit(e, comment.thread_id)}>
              <label>
                reply:
                <input type='text' onChange={handleChange}/>
              </label>
              <input type='submit' value='reply'/>
            </form>
            </>
          )
        })
      }
    </>
  )

}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(CommThread)