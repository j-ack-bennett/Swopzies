import React, { useEffect, useState } from "react"
import { connect } from "react-redux"


function EditListing(props) {

  const [listing, setListing] = useState(null)

  const id = props.match.params.id
  const tags = props.tags
  // const listing = props.listings.find(listing => listing.id == id)

  const fuck = () => {
    const fuckYouRob = props.listings.find(listing => listing.id == id)
    setListing(fuckYouRob)
  }

  useEffect(() => {
    fuck()
  }, [])

  useEffect(() => {
  }, [listing])

  return (<> 
  <div className="container">
      <div>
        <form className="listingForm">
          <label>category tags: </label>
          <select  name='tag' >
            <option value='placeholder'>placeholder</option>
            {tags.map(tag => {
              return <option value={tag.id} key={tag.id}>{tag.tag_name}</option>
            }) // on change on the select tag, value on the option tag.

            }
          </select>
          <h3>Type of listing: </h3>
          <label>I'm looking for something...
            <input  type='radio' name='type' value='looking' />
          </label>
          <label>I've got something to offer...
            <input type='radio' name='type' value='offer' />
          </label>
          <label className='listing__title'>
            Title of listing:
            <input type='text' name='title' />
          </label>
          <label className='listing__description'>
            Add a description of your listing:
            <input className='listing__description--input'
            type='text' name='description' 
            
            placeholder="In here you should add the specifics of what you're needing/offering, also put some details of what you might like in return or have to offer in return" />
          </label>
          <button className='button' 
            >
            Add    
          </button>
        </form>
      </div>

    </div>


  </>)
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings,
    tags: globalState.tags
  }

}

export default connect(mapStateToProps)(EditListing)
