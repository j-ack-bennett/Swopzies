import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postNewComment } from '../apis/comms'

const CommThread = (props) => {


  return (
    <h1>HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</h1>
  )

}



const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}



export default connect(mapStateToProps)(CommThread)