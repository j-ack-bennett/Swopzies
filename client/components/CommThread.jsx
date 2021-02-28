import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { postToThread, getCommsforListing } from "../apis/comms"

const CommThread = (props) => {
  const listingId = props.listingId
  const listing_user_id = props.listingUserId
  const user_id = props.auth.user.id

  let threads
  let fuckingThreadID

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
    const newComm = {
      listing_id: listingId,
      user_id: user_id,
      text: comment,
      thread_id: threadId,
      time: new Date(),
    }
    postToThread(newComm)
  }

  return (
    <>
      {listing_user_id == user_id ? (
        <>
          {Object.keys(comments).map((key) => {
            const fuck = key
            return (
              <div key={fuck}>
                <div key={key} style={{ borderStyle: "solid" }}>
                  {comments[key].map((comment) => {
                    return (
                      <p key={comment.id}>
                        {comment.username}: {comment.text}
                      </p>
                    )
                  })}{" "}
                  <form onSubmit={(e) => handleSubmit(e, fuck)}>
                    <label>
                      reply:
                      <input type="text" onChange={handleChange} name="text" />
                    </label>
                    <input type="submit" value="reply" />
                  </form>{" "}
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <>
          {Object.keys(comments).map((key) => {
            const fuck = key
            return (
              <div key={fuck}>
                {comments[key][0].user_id == props.auth.user.id ? (
                  <div key={key} style={{ borderStyle: "solid" }}>
                    {comments[key].map((comment) => {
                      return (
                        <p key={comment.id}>
                          {comment.username}: {comment.text}
                        </p>
                      )
                    })}{" "}
                    <form onSubmit={(e) => handleSubmit(e, fuck)}>
                      <label>
                        reply:
                        <input
                          type="text"
                          onChange={handleChange}
                          name="text"
                        />
                      </label>
                      <input type="submit" value="reply" />
                    </form>{" "}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )
          })}
        </>
      )}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps)(CommThread)
