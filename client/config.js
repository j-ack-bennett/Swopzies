const environments = {
  development: 'http://localhost:3000/api/v1',
  test: 'http://localhost:3333/api/v1',
  production: 'https://swopzies-project.herokuapp.com/api/v1',
  integration: '',
  deployment: '',
  build: ''
}

const env = process.env.NODE_ENV || 'development'

export const baseApiUrl = environments[env]
