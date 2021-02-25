import React, { useState } from "react"
import { connect } from "react-redux"

function ListingForm() {
  const [ form, setForm ] = useState({})

  const handleChange = (e) => {

  }

  const handleSubmit = () => {

  }

  return (
    <div className="container">
      <div>
        <form className="listingForm">
          <h3>Type of listing: </h3>
          <label for='tag'>category tags: </label>
          <select name='tag'>
            <option value='placeholder'>placeholder</option>
          </select>
          <label>I'm looking for something...
            <input type='radio' name='type' value='looking' />
          </label>
          <label>I've got something to offer...
            <input type='radio' name='type' value='offer' />
          </label>
          <label className='listing__title'>
            Title of listing:
            <input type='text' name='title' onChange={handleChange} />
          </label>
          <label className='listing__description'>
            Add a description of your listing:
            <input className='listing__description--input'
            type='text' name='description' onChange={handleChange} 
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

export default connect()(ListingForm)
