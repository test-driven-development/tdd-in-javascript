let fahrenheitToCelsius = temp => 0
describe('the fahrenheit to celsius converter', () => {
  test('converts 32 to 0 celsius', () => {
    fahrenheitToCelsius(32).should.equal(0)
  })
})
