import { register as authRegister, signIn as authLogin } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

const errorMessages = {
  "USERNAME_UNAVAILABLE": "Sorry, that username is taken.",
  "INVALID_CREDENTIALS": "Sorry, your username or password is incorrect.",
  "Bad Request": "Sorry, your username or password is incorrect."
}

export function register (creds) {
  return authRegister(creds, { baseUrl })
    .catch(err => {
      if(err.message == 'Bad Request') {
        throw 'that username already exists, please choose another one'
      }
      throw errorMessages[err.response.body.errorType]
    })
}

export function login (creds) {
  console.log('api creds', creds)
  return authLogin(creds, { baseUrl })
    .catch(err => {
      console.log(err)
      if(err.message == 'Bad Request') {
        throw errorMessages[err.message]
      }
      throw errorMessages[err.response.body.errorType]
    })
}
