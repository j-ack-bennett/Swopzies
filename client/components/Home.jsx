import React, { useEffect, useState} from "react"
import { connect } from "react-redux"
// import Listings from './Listings'
import { getListings } from '../apis/listings'

function Home() {

  const [listings, setListings] = useState([])

  const fetchListings = () => {
    getListings()
      .then(listings => {
        setListings(listings)
      })
  }

  useEffect(() => {
    fetchListings()
  }, [])

  return (
    <div className="container">
      <div>
      <h1>I'm looking for. . .</h1>


        {console.log(listings)}

      
      </div>
      
      <div>
      <h1>I can offer. . . </h1>
      </div>
    </div>
    )
}

export default connect()(Home)
