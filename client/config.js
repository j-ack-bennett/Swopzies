const environments = {
  development: 'http://localhost:3000/api/v1',
  test: 'http://localhost:3333/api/v1',
  production: 'https://swopzies.herokuapp.com/',
  integration: '',
  deployment: '',
  build: ''
}

const env = process.env.NODE_ENV || 'development'

export const baseApiUrl = environments[env]
