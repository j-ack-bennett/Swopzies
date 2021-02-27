import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postNewComment, getCommsforListing } from '../apis/comms'

const CommThread = (props) => {
  const listingId = props.listingId

  const [ comments, setComments ] = useState([])


  const getStuff = () => {
    getCommsforListing(listingId)
    .then(sure => {
      setComments(c => sure)
    })
     
  }

  useEffect(() => {
    getStuff()
  }, [])

  return (
    <>
      {
        comments.map(comment => {
          <p>{comment.username}: {comment.text}</p>
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