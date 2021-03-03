import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import ListingCard from "./ListingCard"

function Listings(props) {
  const type = localStorage.getItem("type")
  const tags = props.tags
  const allListings = props.listings
  const [filter, setFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [listings, setListings] = useState([{}])

  const locations  = ['Auckland', 'Bay of Plenty', 'Canterbury', 'Gisborne', 'Hawke\'s Bay', 'Manawatu-Whanganui', 'Marlborough', 'Nelson', 'Northland', 'Otago', 'Southland', 'Taranaki', 'Tasman', 'Waikato', 'Wellington', 'West Coast']

  useEffect(() => {
    filterListings()
  }, [filter, locationFilter])


  useEffect(() => {
    setListings(allListings)
  }, [allListings])


  const filterListings = () => {
    if (filter === "all" ) {
      if(locationFilter == 'all'){
        setListings(props.listings)
      } else {
        setListings(
          allListings.filter(listing => {
            if(listing.location == locationFilter){
              return listing
            }
          })
        )
      }
    } else {
      if(locationFilter == 'all'){
        setListings(
          allListings.filter((listing) => {
            if (listing.tag_name === filter) {
              return listing
            }
          })
        )
      } else {
        setListings(
          allListings.filter(listing => {
            if (listing.tag_name == filter && listing.location == locationFilter){
              return listing
            }
          })
        )
      }
    }
  }


  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value)
  }

  return (
    <>
    <div className="text-box">
        <Link to="/listingform" className="btn btn-blue btn-animate">
          Add a Listing
        </Link>
      </div>

      {type == "looking" ? (
        <h1 className="title"> People are seeking!</h1>
      ) : (
        <h1 className="title"> People are offering!</h1>
      )}
      <div>
        <select name="tag" onChange={handleChange} value={filter}>
          <option value="all" disable="true" hidden>
            Choose category
          </option>
          {tags.map((tag) => {
            return (
              <option value={tag.tag_name} key={tag.id}>
                {tag.tag_name}
              </option>
            )
          })}
        </select>
        <button onClick={() => setFilter('all')}>reset</button>
      </div>
      <div>
        <select className='locationSelect' name="location" onChange={handleLocationFilterChange} value={locationFilter}>
          <option value={"all"} disable="true" hidden>Choose location</option>
          {locations.map((l) => {
            return <option key={l} value={l}>{l}</option>
          })}
        </select>
        <button onClick={() => setLocationFilter('all')}>reset</button>
      </div>
      <div className="container">
        {listings.map((listing) => {
          if (listing.type == type) {
            return <ListingCard key={listing.id} listing={listing} />
          }
        })}
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings,
    tags: globalState.tags,
  }
}

export default connect(mapStateToProps)(Listings)
