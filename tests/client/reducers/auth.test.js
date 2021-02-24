import authReducer from '../../../client/reducers/auth'

test('Reducer intial state', () => {
  // Arrange
  const expectedProperties  = [
    'isFetching', 
    'isAuthenticated',
    'user',
    'errorMessage',
  ]

  // Act
  const actual = authReducer(undefined, {})

  // Assert
  expectedProperties.forEach(expectedProperty => {
    expect(actual).toHaveProperty(expectedProperty)
  })
})

test('Reducer login success', () => {
  // Arrange
  const expectedProperties  = [
    'isFetching', 
    'isAuthenticated',
    'user',
    'errorMessage',
  ]

  // Act
  const actual = authReducer(undefined, { type: 'LOGIN_SUCCESS' })

  // Assert all properties
  expectedProperties.forEach(expectedProperty => {
    expect(actual).toHaveProperty(expectedProperty)
  })

  // Assert specific property value
  expect(actual.isAuthenticated).toEqual(true)
})