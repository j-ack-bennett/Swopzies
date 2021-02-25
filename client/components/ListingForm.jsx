import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { newListing } from '../actions/listings'
import { fetchTags } from "../actions/tags"

function ListingForm(props) {
  const [ form, setForm ] = useState({})

  const tags = props.tags

  useEffect(() => {
    props.dispatch(fetchTags())
  })

  const handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const listingData = {
      ...form,
      user_id: props.auth.user.id,
      time: new Date()
    }
    props.dispatch(newListing(listingData))
    .then(() => setForm({}))
  }

  return (
    <div className="container">
      <div>
        <form className="listingForm">
          <label>category tags: </label>
          <select name='tag'>
            <option value='placeholder'>placeholder</option>
            {tags.map(tag => {
              return <option key={tag.id}>{tag.tag_name}</option>
            })

            }
          </select>
          <h3>Type of listing: </h3>
          <label>I'm looking for something...
            <input onChange={handleChange} type='radio' name='type' value='looking' />
          </label>
          <label>I've got something to offer...
            <input onChange={handleChange} type='radio' name='type' value='offer' />
          </label>
          <label className='listing__title'>
            Title of listing:
            <input type='text' name='title' onChange={handleChange} />
          </label>
          <label className='listing__description'>
            Add a description of your listing:
            <input className='listing__description--input'
            type='text' name='description' 
            onChange={handleChange} 
            placeholder="In here you should add the specifics of what you're needing/offering, also put some details of what you might like in return or have to offer in return" />
          </label>
          <button className='button' 
            onClick={handleSubmit}>
            Add    
          </button>
        </form>
      </div>

    </div>
    )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
    tags: globalState.tags
  }
}

export default connect(mapStateToProps)(ListingForm)
