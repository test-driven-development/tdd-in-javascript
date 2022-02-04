const fahrenheitToCelsius = fahrenheit =>
  ((fahrenheit - 32) * 5) / 9

describe('the fahrenheit to celsius converter', () => {
  test(`converts 32° fahrenheit to 0° celsius`, () => {
    fahrenheitToCelsius(32).should.equal(0)
  })
  test('converts 212° fahrenheit to 100° celsius', () => {
    fahrenheitToCelsius(212).should.equal(100)
  })
})
