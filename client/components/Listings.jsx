import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTags } from "../actions/tags"
import ListingCard from "./ListingCard"


function Listings(props) {
  const type = localStorage.getItem('type')
  const tags = props.tags
  const allListings = props.listings
  const [ filter, setFilter ] = useState('all')
  const [ listings, setListings ] = useState(props.listings)
  

  useEffect(() => {
    props.dispatch(fetchTags())
    .then(() => {
      filterListings()
    }
    )
  }, [])

  // useEffect(() => {
  //   filterListings()
  //   console.log("are you going")
  // }, [filter])

  const filterListings = () => {
    if (filter === 'all') {
      setListings(props.listings)
      }
    else {      
        setListings(allListings.filter(listing => {
        if (listing.tag_name === filter) {
          return listing
        }
      }))
    }
  }

  const handleChange = (e) => {
    console.log(listings)
    setFilter(e.target.value)
    // filterListings()
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(filter)
    filterListings()
}

  return (
    <>
      {type == "looking"
      ? <h1 className="title"> People are seeking!</h1> 
      : <h1 className="title"> People are offering!</h1>
      }
      <div>
        <select 
          className='tagSelect' 
          name='tag' 
          onChange={handleChange}>
          <option value='all'>All categories</option> 
          {tags.map(tag => {
              return <option value={tag.tag_name} key={tag.id}>
                        {tag.tag_name}
                     </option>
            })}
        </select> 
        <button onClick={handleClick}>Goooo YOU BASTARD!!</button>
      </div>
      <div className="container"> 
        {listings.map(listing => {
          if(listing.type == type){
            return <ListingCard key={listing.id} listing={listing}/>
          }
        })}
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings,
    tags:globalState.tags
  }
}

export default connect(mapStateToProps)(Listings)
