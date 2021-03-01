import { SET_REGO, CLEAR_REGO } from '../actions/register'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGO:
      return action.rego
    case CLEAR_REGO: 
      return initialState
    default :
      return state
  }
}

export default reducer