import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { newListing } from '../actions/listings'
import { fetchTags } from "../actions/tags"

function ListingForm(props) {
  const [form, setForm] = useState({})
  const [tag, setTag] = useState(0)

  const tags = props.tags

  useEffect(() => {
    props.dispatch(fetchTags())
  }, []
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
    <div className="container add-listing-margin-top">
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
          <h1 className="center-text">Add a Listing</h1>

          <div className="auto-margin">
            <form className="listingForm">
              <div className="auto-margin2">
                <label className="has-text-weight-bold is-size-4">Category Tags:</label>
                <select className="capitalize add-listing-dropdown is-size-4 margin-bottom" onChange={handleSelect} name='tag' defaultValue="placeholder">
                  <option disabled={true} value="placeholder" hidden>Select a Category...</option>
                  {tags.map(tag => {
                    return <option value={tag.id} key={tag.id}>{tag.tag_name}</option>
                  }) // on change on the select tag, value on the option tag.
                  }
                </select>
              </div>
            </form>

            <form className="listingForm radio-buttons">
              <div>
                <input onChange={handleChange} className="margin-right-radio" type='radio' name='type' value='looking' />
                <label className="has-text-weight-bold is-size-4">I'm looking for something...</label>
              </div>

              <div className="margin-left-offer">
                <input onChange={handleChange} className="margin-right-radio" type='radio' name='type' value='offer' />
                <label className="has-text-weight-bold is-size-4">I've got something to offer...</label>
              </div>
            </form>
          </div>

          <form>
            <label className="listing__title has-text-weight-bold add-listing-margin is-size-4">Title:</label>
            <input className="input" type="text" name="title" onChange={handleChange}
              placeholder="Listing title" />
          </form>

          <form>
            <label className="listing__description has-text-weight-bold add-listing-margin is-size-4">Description:</label>
            <textarea className="textarea"
              type="text" name="description"
              onChange={handleChange}
              placeholder="Add any details of what you're seeking/offering." />
          </form>

          <div className="buttons has-addons">
            <button className="button is-primary is-fullwidth is-size-5"
              onClick={(e) => handleSubmit(e, tag.id)}>
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
