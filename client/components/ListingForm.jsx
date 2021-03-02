import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { newListing } from "../actions/listings"

function ListingForm(props) {
  const [form, setForm] = useState({})
  const [tag, setTag] = useState(0)
  const [type, setType ] = useState(localStorage.getItem("type"))

  const tags = props.tags

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if(form.type){
      setType(form.type)
    }
  }, [form])

  const handleSelect = (e) => {
    setTag(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (tag == 0) {
      alert("Please select a category.")
    } else if (!form.type) {
      alert("Please select either offering or looking.")
    } else if (!form.title) {
      alert("Please add a title to your post.")
    } else {
      const newestListing = {
        ...form,
        user_id: props.auth.user.id,
        time: new Date(),
      }

      const data = {
        listing: newestListing,
        tagId: tag,
      }

      props.dispatch(newListing(data))

      props.history.push("/")
    }
  }

  return (
    <div className="container">
      {console.log(type)}
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
          <h1 className="center-text">Add a Listing</h1>
          <div className="auto-margin">
            <form className="listingForm">
              <div className="auto-margin2">
                <label className="has-text-weight-bold">Category Tags:</label>
                <select
                  className="capitalize add-listing-dropdown"
                  onChange={handleSelect}
                  name="tag"
                  defaultValue="placeholder"
                >
                  <option disabled={true} value="placeholder" hidden>
                    Select a Category...
                  </option>
                  {
                    tags.map((tag) => {
                      return (
                        <option value={tag.id} key={tag.id}>
                          {tag.tag_name}
                        </option>
                      )
                    }) // on change on the select tag, value on the option tag.
                  }
                </select>
              </div>
            </form>

            <form className="listingForm radio-buttons">
              <label className="has-text-weight-bold">
                <input
                  onChange={handleChange}
                  className="margin-right-radio"
                  type="radio"
                  name="type"
                  value="looking"
                  checked={type == "looking"}
                />
                I'm looking for something...
              </label>

              <label className="has-text-weight-bold">
                <input
                  onChange={handleChange}
                  className="margin-right-radio"
                  type="radio"
                  name="type"
                  value="offer"
                  checked={type == "offer"}
                />
                I've got something to offer...
              </label>
            </form>
          </div>

          <form className="listingForm">
            <label className="listing__title has-text-weight-bold ">
              Title:
            </label>
            <input
              className="input"
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Listing title"
            />
          </form>

          <form className="listingForm">
            <label className="listing__description has-text-weight-bold ">
              Description:
            </label>
            <textarea
              className="textarea"
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Add any details of what you're seeking/offering."
            />
          </form>
          <div className="buttons has-addons">
            <button
              className="button is-primary is-fullwidth"
              onClick={(e) => handleSubmit(e)}
            >
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
    tags: globalState.tags,
  }
}

export default connect(mapStateToProps)(ListingForm)
