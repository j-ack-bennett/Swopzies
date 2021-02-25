import { SET_TAGS } from '../actions/tags'

const intialState = []

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_TAGS:
            return action.tags
        default:
            return state
    }
}

export default reducer