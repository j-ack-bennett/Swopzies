import {combineReducers} from 'redux'

import auth from './auth'
import listings from './listings'
import tags from './tags'
import register from './register'

export default combineReducers({
  auth,
  listings,
  tags,
  register  
})
