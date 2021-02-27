import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import { postToThread, getCommsforListing } from '../apis/comms'

const CommThread = (props) => {
  const listingId = props.listingId
  const user_id = props.auth.user.id
  let threads

  const [comments, setComments] = useState({})
  const [comment, setComment] = useState('')


  const getStuff = () => {
    getCommsforListing(listingId)
      .then(sure => {
        setComments(sortThreads(sure))
      })
  }

  const sortThreads = (comments) => {
    return comments.reduce((obj, comment) => {
      const thread = comment.thread_id

      if (!obj[thread]) {
        obj[thread] = []
      }
      obj[thread].push(comment)
      return obj
    }, {})
  }

  useEffect(() => {
    getStuff()
  }, [])

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e, threadId) => {
    e.preventDefault()
    const newComm = {
      listing_id: listingId,
      user_id: user_id,
      text: comment,
      thread_id: threadId,
      time: new Date()
    }
    postToThread(newComm)
  }

  return (
    <>
      {Object.keys(comments).map(key => {
        return <div style={{ borderStyle: "solid" }}>{comments[key].map(comment => {
          return <p>{comment.text}</p>
        })
        } <form onSubmit={(e) => handleSubmit(e, comment.thread_id)}>
            <label>
              reply:
            <input type='text' onChange={handleChange} />
            </label>
            <input type='submit' value='reply' />
          </form> </div>
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