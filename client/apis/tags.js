import request from 'superagent'

const baseUrl = '/api/v1/tags'

export function getTags() {
    return request
        .get(baseUrl)
        .then(res => res.body)
}