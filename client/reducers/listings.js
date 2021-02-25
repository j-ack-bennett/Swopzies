import { SET_LISTINGS, ADD_LISTING } from '../actions/listings'

const initialState = [] 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTINGS:
      return action.listings
    case ADD_LISTING:
      return [...state, action.listing]
    default:
      return state
  }
}

export default reducer
