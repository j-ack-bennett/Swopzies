import {combineReducers} from 'redux'

import auth from './auth'
import listings from './listings'
import tags from './tags'

export default combineReducers({
  auth,
  listings,
  tags  
})
