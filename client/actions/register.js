export const SET_REGO = 'SET_REGO'
export const CLEAR_REGO = 'CLEAR_REGO'

export function setRego(rego) {
  return {
      type: SET_REGO,
      rego: rego
  }
}

export function clearRego() {
  return { 
    type: CLEAR_REGO,
  }
}