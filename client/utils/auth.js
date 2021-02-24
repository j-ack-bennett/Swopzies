import { isAuthenticated as authIsAuthenticated, getDecodedToken, logOff } from 'authenticare/client'

export function isAuthenticated () {
  return authIsAuthenticated()
}

export function getUserTokenInfo () {
  return getDecodedToken()
}

export function removeUser () {
  return logOff()
}
