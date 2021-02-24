import React from 'react'
import { isAuthenticated } from 'authenticare/client'

export function ifAuthenticated ({ childrern }) {
    return isAuthenticated()
    ? <>{ children }</>
    :null
}

export function ifNotAuthenticated ({ childrern }) {
    return !isAuthenticated()
    ? <>{ children }</>
    :null
}