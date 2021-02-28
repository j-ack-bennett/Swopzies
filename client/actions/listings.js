import { getListings, postListing, delListing, patchListing } from '../apis/listings'

export const SET_LISTINGS = "SET_LISTINGS"
export const ADD_LISTING = "ADD_LISTING"


export function setListings(listings) {
  return {
    type: SET_LISTINGS,
    listings
  }
}

export function addListing(listing) {
  return {
    type: ADD_LISTING,
    listing
  }
}

export function fetchListings() {
  // console.log("fetching")
  return dispatch => {
    return getListings()
    .then(listings => {
      listings.reverse()
      dispatch(setListings(listings))
      return null
    })
  }
}

export function newListing(newListing) {
  return dispatch => {
    return postListing(newListing) //this is being sent off to the DB
      .then(() => {
        dispatch(fetchListings()) // no
      })
  }
}

export function deleteListing(id) {
  return dispatch => {
    return delListing(id)
    .then(() => {
      dispatch(fetchListings())
      return null
    })
  }
}

export function updateListing(id, newListing) {
  return dispatch => {
    return patchListing(id, newListing)
    .then(() => {
      dispatch(fetchListing())
      return null
    })
  }
}

