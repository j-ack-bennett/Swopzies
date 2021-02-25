import {combineReducers} from 'redux'

import auth from './auth'
import listings from './listings'

export default combineReducers({
  auth,
  listings
})
