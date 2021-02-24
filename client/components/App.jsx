import React, {useEffect} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'

import {checkAuth} from '../actions/auth'

function App ({auth, dispatch}) {
  
  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

    return (
      <Router>
        <div className="container has-text-centered">

          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
              <Link to='/' className="">
                <h1 className="title is-1">$how Me The Money</h1>
              </Link>
              <Route path="/" component={Nav} />
            </div>
          </div>

          <div className=''>
            {!auth.isAuthenticated &&
              <Route exact path="/" component={Login} />
            }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/meeting" component={Meeting} />
            <Route path="/history" component={History} />
          </div>

        </div>
      </Router>
    )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
