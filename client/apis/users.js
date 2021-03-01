import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

// const baseUrl = '/api/v1/profile'

export function updateUserProfile(updatedProfile) {
  return request.patch(baseUrl + '/profile')
    .set(getAuthorizationHeader())
    .send(updatedProfile)
    .then(res => res.body)
}