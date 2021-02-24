import React from 'react'
import {connect} from 'react-redux'

function Landing () {
  return <div className="container">
    <h2 className="title is-2">Start Meeting</h2>
  </div>
}

export default connect()(Landing)
