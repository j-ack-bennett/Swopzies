import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchListings, updateListing } from "../actions/listings"

function EditListing(props) {
  const [oldListing, setOldListing] = useState({
    type: "",
    title: "",
    description: "",
    tag_id: 0
  })

  const [tag, setTag] = useState(0)

  const id = props.match.params.id
  const listings = props.listings
  const tags = props.tags

  useEffect(() => {
    setOldListing(listings.find((listing) => listing.id == id))
  }, [listings])

  useEffect(() => {
    if (oldListing) {
      setTag(oldListing.tag_id)
    }
  }, [oldListing])


  const handleSelect = (e) => {
    setTag(e.target.value)
    setOldListing({
      ...oldListing,
      [e.target.name]: e.target.value,
    })
  }

  const handleChange = (e) => {
    setOldListing({
      ...oldListing,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const tempListing = {
      title: oldListing.title,
      type: oldListing.type,
      description: oldListing.description,
      time: new Date(),
    }

    props.dispatch(updateListing(oldListing.id, tempListing, tag))
    props.history.push(`/listing/${id}`)
  }

  return (
    <div className="container add-listing-margin-top">
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
        <h1 className="center-text">Edit Listing</h1>

        {oldListing && (
          <>
          <div className="auto-margin">
            <form className="listingForm" onSubmit={handleSubmit}>
              <div className="auto-margin2">
                <label className="has-text-weight-bold is-size-4">Category Tags:</label>
                <select className="capitalize add-listing-dropdown is-size-4 margin-bottom" autoFocus name="tag_id" onChange={handleSelect} value={oldListing.tag_id}>
                  {
                    tags.map((tag) => {
                      return (
                        <option value={tag.id} key={tag.id} name="tag_name">
                          {tag.tag_name}
                        </option>
                      )
                    }) // on change on the select tag, value on the option tag.
                  }
                </select>
              </div>
            </form>

            <form className="listingForm radio-buttons">
              <div>
              <input
                className="margin-right-radio"
                type="radio"
                name="type"
                value="looking"
                checked={oldListing.type == "looking"}
                onChange={handleChange}
                />
                <label className="has-text-weight-bold is-size-4">
                  I'm looking for something...
                </label>
              </div>

              <div className="margin-left-offer">
                <input
                  className="margin-right-radio"
                  type="radio"
                  name="type"
                  value="offer"
                  checked={oldListing.type == "offer"}
                  onChange={handleChange}
                />
                <label className="has-text-weight-bold is-size-4">
                  I've got something to offer...
                </label>
                </div>
              </form>
            </div>

            <label className="listing__title has-text-weight-bold add-listing-margin is-size-4">
              Title:
              <input
                className="input"
                type="text"
                name="title"
                value={oldListing.title}
                onChange={handleChange}
                maxLength="70"
              />
            </label>

            <label className="listing__description has-text-weight-bold add-listing-margin is-size-4">
              Description:
              <textarea
                className="textarea"
                type="text"
                name="description"
                value={oldListing.description}
                onChange={handleChange}
              />
            </label>

            <div className="buttons has-addons">
              <button className="button is-primary is-fullwidth is-size-5"
                onClick={(e) => handleSubmit(e, tag.id)}>
                Save
              </button>
            </div>
            <div className="buttons has-addons">
              <button className="button is-fullwidth is-size-5 is-danger" 
                onClick={() =>props.history.goBack()}>
                Cancel
              </button>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings,
    tags: globalState.tags,
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps)(EditListing)











{/* <div className="container add-listing-margin-top">
<div className="add-listing-page">
  <div className="add-listing-page add-listing-center add-listing-centering">
    
    <h1 className="center-text">Edit Listing</h1>

      {oldListing && (
        <div className="auto-margin">
          <form className="listingForm" onSubmit={handleSubmit}>
            <div className="auto-margin2">
              <label className="has-text-weight-bold is-size-4">Category Tags: </label>
              <select className="capitalize add-listing-dropdown is-size-4 margin-bottom" autoFocus name="tag_id" onChange={handleSelect} value={oldListing.tag_id} >
                {
                  tags.map((tag) => {
                    return (
                      <option value={tag.id} key={tag.id} name="tag_name">
                        {tag.tag_name}
                      </option>
                    )
                  }) // on change on the select tag, value on the option tag.
                }
              </select>
              </div>

              <div className="listingForm radio-buttons">
                <div>
                <label className="has-text-weight-bold is-size-4">             
                  <input
                    className="margin-right-radio"
                    type="radio"
                    name="type"
                    value="looking"
                    checked={oldListing.type == "looking"}
                    onChange={handleChange}
                  />
                  I'm looking for something...
                </label>
                </div>
    
                <div className="margin-left-offer">
                  <label className="has-text-weight-bold is-size-4">
                    <input
                      className="margin-right-radio"
                      type="radio"
                      name="type"
                      value="offer"
                      checked={oldListing.type == "offer"}
                      onChange={handleChange}
                    />
                    I've got something to offer...
                  </label>
                </div>
              </div>
            </div>


            <label className="listing__title has-text-weight-bold add-listing-margin is-size-4">
              Title:
              <input
                className="input"
                type="text"
                name="title"
                value={oldListing.title}
                onChange={handleChange}
              />
            </label>

            <label className="listing__description has-text-weight-bold add-listing-margin is-size-4">
              Description:
              <textarea
                className="textarea"
                type="text"
                name="description"
                value={oldListing.description}
                onChange={handleChange}
              />
            </label>
            <div className="buttons has-addons"></div>
            <button className="button is-primary is-fullwidth is-size-5">Edit</button>
    </form>
)}
</div>
</div>
</div> */}