import {
  isAuthenticated as authIsAuthenticated,
  getDecodedToken,
  logOff,
} from "authenticare/client"
import { saveAuthToken } from "authenticare/client/auth"

export function isAuthenticated() {
  return authIsAuthenticated()
}

export function getUserTokenInfo() {
  return getDecodedToken()
}

export function saveUserToken(token) {
  return saveAuthToken(token)
}

export function removeUser() {
  return logOff()
}
