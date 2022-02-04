let fahrenheitToCelsius = fahrenheit =>
  ((fahrenheit - 32) * 5) / 9
describe('the fahrenheit to celsius converter', () => {
  test('converts 32 to 0 celsius', () => {
    fahrenheitToCelsius(32).should.equal(0)
  })

  test('converts 212℉ to celsius degree', () => {
    fahrenheitToCelsius(212).should.equal(100)
  })
})
