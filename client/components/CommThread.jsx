import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { postToThread, getCommsforListing } from "../apis/comms"

const CommThread = (props) => {
  const listingId = props.listingId
  const listing_user_id = props.listingUserId
  const user_id = props.auth.user.id

  let threads
  let ThreadID

  const [comments, setComments] = useState({})
  const [comment, setComment] = useState("")

  const getStuff = () => {
    getCommsforListing(listingId).then((sure) => {
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
    window.location.reload()
  }

  return (
    <div className="margin-bottom margin-top">
        <>
          {Object.keys(comments).map((key) => {
            const flower = key
            return (
              <div key={flower}>
                <div key={key}>
                  {comments[key].map((comment) => {
                    const extraClass = comment.user_id == props.auth.user.id ? '' : ' message-thread--right'
                    return (
                      <div className={`message-thread${extraClass}`}>
                        <p key={comment.id}>
                          {comment.username}: {comment.text}
                        </p>
                      </div>
                    )
                  })}{" "}

                  <form onSubmit={(e) => handleSubmit(e, flower)}>
                    <label>
                      <textarea
                        className="textarea is-large margin-top"
                        type="text" 
                        onChange={handleChange} 
                        name="text" 
                        required
                      />
                    </label>
                    <div className="buttons has-addons">
                      <input className="button is-primary is-fullwidth" type="submit" value="Reply" />
                    </div>
                  </form>{" "}
                </div>
              </div>
            )
          })}
        </>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps)(CommThread)
