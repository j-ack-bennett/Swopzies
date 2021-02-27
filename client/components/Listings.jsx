import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTags } from "../actions/tags"
import ListingCard from "./ListingCard"



function Listings(props) {
  const type = localStorage.getItem('type')
  const tags = props.tags

  useEffect(() => {
    props.dispatch(fetchTags())
  }, [])

  return (
    <>
      {type == "looking"
      ? <h1 className="title"> People are seeking!</h1> 
      : <h1 className="title"> People are offering!</h1>
      }
      <div>
        <select className='tagSelect' name='tag' >
          <option value='all'>all</option> 
          {tags.map(tag => {
              return <option value={tag.value} key={tag.id}>
                        {tag.tag_name}
                     </option>
            })}
        </select> 
      </div>
      <div className="container"> 
        {props.listings.map(listing => {
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
