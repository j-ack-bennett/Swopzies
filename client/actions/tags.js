import { getTags } from '../apis/tags'


export const SET_TAGS = 'SET_TAGS'

export function setTags(tags) {
    return {
        type: SET_TAGS,
        tags: tags
    }
}

export function fetchTags() {
    return dispatch => {
        return getTags()
            .then(tags => {
                dispatch(setTags(tags))
                return null
            })
    }
}