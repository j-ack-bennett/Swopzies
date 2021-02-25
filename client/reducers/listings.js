import { SET_LISTINGS} from '../actions/listings'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTINGS:
      return action.listings
    default:
      return state
  }
}

export default reducer
