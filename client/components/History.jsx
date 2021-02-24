import React from 'react'
import {connect} from 'react-redux'

function History () {
  return <div className="container">
    <h2 className="title is-2">Meeting history</h2>
  </div>
}

export default connect()(History)
