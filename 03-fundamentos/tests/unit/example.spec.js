describe('Example Component', () => {
  test('Must be greather than 10', () => {
    // Arrange
    let value = 5;

    // Act
    value += 10

    //Assert
    if(value > 10) {
      //TODO all fine
    } else {
      throw `${value} is not greather than 10`
    }
  })
})