import { getListings } from '../apis/listings'

export const SET_LISTINGS = "SET_LISTINGS"

export function setListings(listings) {
  return {
    type: SET_LISTINGS,
    listings
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