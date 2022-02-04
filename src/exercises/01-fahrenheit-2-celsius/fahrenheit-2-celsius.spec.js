const fahrenheitToCelsius = () => 0

describe('The fahrenheit to celsius converter', () => {
  test('converts 32° fahrenheit to 0° celsius', () => {
    fahrenheitToCelsius(32).should.equal(0)
  })
  test.todo('converts 212° fahrenheit to 100° celsius')
})
