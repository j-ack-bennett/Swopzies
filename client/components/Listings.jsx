import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import ListingCard from "./ListingCard"

function Listings(props) {
  const type = localStorage.getItem("type")
  const tags = props.tags
  const allListings = props.listings
  const [filter, setFilter] = useState("all")
  const [locations, setLocations] = useState([])
  const [locationFilter, setLocationFilter] = useState("all")
  const [listings, setListings] = useState([{}])

  useEffect(() => {
    filterListings()
  }, [filter, locationFilter])

  useEffect(() => {
    setListings(allListings)
  }, [allListings])

  useEffect(() => {
    setLocations(findListingLocations())
  }, [listings])

  const findListingLocations = () => {
    return allListings.reduce((arr, lst) => {
      const location = lst.location
      if (!arr.includes(location)) {
        arr.push(location)
      }
      return arr
    }, [])
  }

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

  //if tag filter is all, and location filter is all, just use setListings
  //if tag filter is all and location filter is something, just use allListing filtered by location
  //if tag filter is something and location filter is all, just use allListings filtered by tag
  //if tag filter is something and location filter is something, filter by both

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value)
  }

  return (
    <div className="container margin-top margin-bottom">
    <div className="add-listing-page">
    <div className="add-listing-page add-listing-center add-listing-centering">
    <div className="auto-margin">
    <div className="auto-margin2">
      {type == "looking" ? (
        <h1 className="center-text"> People are seeking!</h1>
      ) : (
        <h1 className="center-text"> People are offering!</h1>
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
      </div>
      </div>

          <div className="card">
            <div className="card-content my-listings-margin">
            {listings.map((listing) => {
              if (listing.type == type) {
                return <ListingCard key={listing.id} listing={listing} />
              }
            })}
            </div>
          </div>
    </div>
    </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings,
    tags: globalState.tags,
  }
}

export default connect(mapStateToProps)(Listings)
