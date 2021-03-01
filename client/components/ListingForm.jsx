import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { newListing } from '../actions/listings'
import { fetchTags } from "../actions/tags"

function ListingForm(props) {
  const [ form, setForm ] = useState({})
  const [ tag, setTag ] = useState (0)

  const tags = props.tags

  useEffect(() => {
    props.dispatch(fetchTags())
  },[]
  )

  const handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

const handleSelect = (e) => {
  setTag(e.target.value)
}

 const handleSubmit = (e) => {
    e.preventDefault()
    
    // console.log(tag)
    const newestListing = {
      ...form,
      user_id: props.auth.user.id,
      time: new Date()
    }

    const data = {
      listing: newestListing,
      tagId: tag
    }
    // console.log(data)

    props.dispatch(newListing(data))
      // .then(() => setForm({}))

     props.history.push("/")
  }

  return (
    <div className="container">
      <div className="hero is-fullheight">
        <div className="hero-body add-listing-center add-listing-centering">
          <h1 className="center-text">Post a Listing</h1>
          <form className="listingForm">
              <label>Category Tags:</label>
              <select className="capitalize" onChange={handleSelect} name='tag'>
                <option disabled hidden selected>Select a Category...</option>
                {tags.map(tag => {
                  return <option value={tag.id} key={tag.id}>{tag.tag_name}</option>
                }) // on change on the select tag, value on the option tag.
                }
              </select>
          </form>

          <form className="listingForm">
            <input onChange={handleChange} type='radio' name='type' value='looking' />
            <label>I'm looking for something...</label>
            
            <input onChange={handleChange} type='radio' name='type' value='offer' />
            <label>I've got something to offer...</label>
          </form>

          <form className="listingForm">
            <label className='listing__title'>Title of listing:</label>
            <input className="input" type='text' name='title' onChange={handleChange} />
          </form>

          <form className="listingForm">   
            <label className='listing__description'>Add a description of your listing:</label>
              <textarea className="textarea"
              type='text' name='description' 
              onChange={handleChange} 
              placeholder="In here you should add the specifics of what you're needing/offering, also put some details of what you might like in return or have to offer in return" />
          </form>

          <button className='button' 
            onClick={ (e) => handleSubmit (e, tag.id)}>
            Add    
          </button>
        </div>
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
