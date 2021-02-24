import { register as authRegister, signIn as authLogin } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

const errorMessages = {
  "USERNAME_UNAVAILABLE": "Sorry, that username is taken.",
  "INVALID_CREDENTIALS": "Sorry, your username or password is incorrect.",
}

export function register (creds) {
  return authRegister(creds, { baseUrl })
    .catch(err => {
      throw errorMessages[err.response.body.errorType]
    })
}

export function login (creds) {
  return authLogin(creds, { baseUrl })
    .catch(err => {
      throw errorMessages[err.response.body.errorType]
    })
}
