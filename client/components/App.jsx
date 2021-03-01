import React, { useEffect } from "react"
import { HashRouter as Router, Link, Route } from "react-router-dom"
import { connect } from "react-redux"

import Login from "./Login"
import Register from "./Register"
import Nav from "./Nav"
import Landing from "./Landing"
import Home from "./Home"
import Listings from "./Listings"
import Profile from "./Profile"
import UpdateProfileForm from "./UpdateProfileForm"
import ListingForm from "./ListingForm"
import Listing from "./Listing"
import Contact from "./Contact"
import Register2 from "./Register2"
import EditListing from './EditListing'
import { fetchListings } from '../actions/listings'


import { checkAuth } from "../actions/auth"
import { fetchTags } from "../actions/tags"

function App({ auth, dispatch }) {
  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
    dispatch(fetchListings())
    dispatch(fetchTags())
  }, [])


  return (
    <>
      <Router>
        <Route path="/" component={Nav} />
        {!auth.isAuthenticated
          ? (<>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" exact component={Register} />
          </>
          )
          : (
            <>
              <Route exact path="/" component={Home} />
              <Route path="/listings" component={Listings} />
              <Route path="/profile" component={Profile} />
              <Route path="/update" component={UpdateProfileForm} />
              <Route path="/listingform" component={ListingForm} />
              <Route path="/editlisting/:id" component={EditListing} />
              <Route path="/listing/:id" component={Listing} />
              <Route path="/register2" component={Register2} />
            </>
          )}
        <Route path="/contact" component={Contact} />

        <div className="footer">
          <div className="container">
            <div className="navbar-brand">
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-start logo-wrap">
                  <img className="logo" src="logo.png" />
                </div>
                <div className="navbar-end">
                  <Link to="/contact" className="button is-black is-outlined">
                    <div className="icon">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(App)

