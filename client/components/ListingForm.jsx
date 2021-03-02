import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { newListing } from '../actions/listings'
import { fetchTags } from "../actions/tags"

function ListingForm(props) {
  const [ form, setForm ] = useState({})
  const [ tag, setTag ] = useState (0)
  const [ image, setImage ] = useState(null);

  const tags = props.tags

  useEffect(() => {
    props.dispatch(fetchTags())
  },[]
  )

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

const handleSelect = (e) => {
  setTag(e.target.value)
}

const handleFileSelect = (e) => {
  if (e.target.files.length === 1) {
    setImage(e.target.files[0]);
  } else {
    setImage(null);
  }
}

 const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(tag)
    const newestListing = {
      ...form,
      user_id: props.auth.user.id,
      time: new Date()
    }

    // const data = {
    //   listing: newestListing,
    //   tagId: tag
    // }

    // {"listing":{"title":"Dog feeding","description":"I want to feed!","type":"looking","user_id":1,"time":"2021-03-02T10:20:31.974Z"},"tagId":"4"}
    const formData = new FormData();

    formData.append("tagId", tag);
    formData.append("title", newestListing.title);
    formData.append("description", newestListing.description);
    formData.append("type", newestListing.type);
    formData.append("user_id", newestListing.user_id);
    formData.append("time", newestListing.time.toISOString());

    if (image !== null) {
      formData.append("img", image);
    }

    // console.log(data)

    props.dispatch(newListing(formData))
      // .then(() => setForm({}))

     props.history.push("/")
  }

  return (
    <div className="container">
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
          <h1 className="center-text">Add a Listing</h1>

          <div className="auto-margin">
          <form className="listingForm">
            <div className="auto-margin2">
              <label className="has-text-weight-bold">Category Tags:</label>
              <select className="capitalize add-listing-dropdown" onChange={handleSelect} name='tag' defaultValue="placeholder">
                <option disabled={true} value="placeholder"hidden>Select a Category...</option>
                {tags.map(tag => {
                  return <option value={tag.id} key={tag.id}>{tag.tag_name}</option>
                }) // on change on the select tag, value on the option tag.
                }
              </select>
            </div>
          </form>

          <form className="listingForm radio-buttons">
            <input onChange={handleChange} className="margin-right-radio" type='radio' name='type' value='looking' />
            <label className="has-text-weight-bold">I'm looking for something...</label>

            <input onChange={handleChange} className="margin-right-radio" type='radio' name='type' value='offer' />
            <label className="has-text-weight-bold">I've got something to offer...</label>
          </form>
          </div>

          <form className="listingForm">
            <label className="listing__title has-text-weight-bold ">Title:</label>
            <input className="input" type="text" name="title" onChange={handleChange}
            placeholder="Listing title" />
            </form>

          <form className="listingForm">
            <label className="listing__description has-text-weight-bold ">Description:</label>
              <textarea className="textarea"
              type="text" name="description"
              onChange={handleChange}
              placeholder="Add any details of what you're seeking/offering."  />
          </form>

          <div>Add image:
              <input onChange={handleFileSelect} type='file' />
          </div>

          <div className="buttons has-addons">
            <button className="button is-primary is-fullwidth"
              onClick={ (e) => handleSubmit (e, tag.id)}>
              Add
            </button>
          </div>
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
