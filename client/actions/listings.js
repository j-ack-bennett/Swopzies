import { getListings, postListing, delListing, patchListing, getBookmarked, deleteBookmark, addBookmark } from '../apis/listings'
import { setBookmarks } from './auth'

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
    return postListing(newListing) 
      .then(() => {
        dispatch(fetchListings()) 
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

export function updateListing(id, newListing, tagId) {
  return dispatch => {
    return patchListing(id, newListing, tagId)
    .then(() => {
      dispatch(fetchListings())
      return null
    })
  }
}

export function fetchBookmarksForUser(id) {
  return dispatch => {
    return getBookmarked(id)
    .then(bookmarks => {
      dispatch(setBookmarks(bookmarks))
      return null
    })
  }
}

export function removeBookmark(id, user_id) {
  return dispatch => {
    return deleteBookmark(id)
      .then(() => {
        dispatch(fetchBookmarksForUser(user_id))
      })
  }
}

export function bookmark(ids) {
  return dispatch => {
    return addBookmark(ids)
      .then(() => {
        dispatch(fetchBookmarksForUser(ids.user_id))
      })
  }
}