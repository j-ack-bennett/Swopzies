import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { updateListing } from "../actions/listings"

function EditListing(props) {
  const [oldListing, setOldListing] = useState({
    type: "",
    title: "",
    description: "",
  })
  const [tag, setTag] = useState(0)

  const id = props.match.params.id
  const listings = props.listings
  const tags = props.tags

  useEffect(() => {
    setOldListing(listings.find((listing) => listing.id == id))
  }, [listings])

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

    const data = {
      id: oldListing.id,
      listing: tempListing,
      tagId: tag,
    }

    props.dispatch(updateListing(oldListing.id, tempListing, tag.id))

    props.history.push("/")
  }

  return (
    <>
      {oldListing && (
        <>
        {console.log(oldListing)}
          {/* {console.log("type:", oldListing.type)} */}
          <form className="listingForm" onSubmit={handleSubmit}>
            <label>category tags: </label>
            <select autoFocus name="tag" onChange={handleSelect} value={oldListing.tag_id} >
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
            <h3>Type of listing: </h3>
            <label>
              I'm looking for something...
              <input
                type="radio"
                name="type"
                value="looking"
                checked={oldListing.type == "looking"}
                onChange={handleChange}
              />
            </label>
            <label>
              I've got something to offer...
              <input
                type="radio"
                name="type"
                value="offer"
                checked={oldListing.type == "offer"}
                onChange={handleChange}
              />
            </label>
            <label className="listing__title">
              Title of listing:
              <input
                type="text"
                name="title"
                value={oldListing.title}
                onChange={handleChange}
              />
            </label>
            <label className="listing__description">
              Add a description of your listing:
              <input
                className="listing__description--input"
                type="text"
                name="description"
                value={oldListing.description}
                onChange={handleChange}
              />
            </label>
            <button className="button">Edit</button>
          </form>
        </>
      )}
    </>
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
