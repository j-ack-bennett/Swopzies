import { getListings } from '../apis/listings'

export const SET_LISTINGS = "SET_LISTINGS"

export function setListings(listings) {
  return {
    type: SET_TASKS,
    listings
  }
}

export function fetchListings() {
  return (dispatch) => {
    return getListings()
    .then((listings) => {
      dispatch(setListings(listings))
      return null
    })
  }
}