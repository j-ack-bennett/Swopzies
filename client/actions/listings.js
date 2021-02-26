import { getListings, postListing } from '../apis/listings'

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
      dispatch(setListings(listings))
      return null
    })
  }
}

export function newListing(newListing) {
  console.log(newListing)
  return dispatch => {
    return postListing(newListing) //this is being sent off to the DB
      .then(() => {
        dispatch(addListing(newListing.newListing)) // this is being sent off to reducer
        return null
      })
  }
}


