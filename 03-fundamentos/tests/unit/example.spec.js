describe('Example Component', () => {
  test('Must be greather than 10', () => {
    // Arrange
    let value = 5;

    // Act
    value += 33

    //Assert
    expect(value).toBeGreaterThan(10)
  })
})