describe('the canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true()
  })
})

function fahrenheit2Celsius(degreesFahrenheit) {
  return ((degreesFahrenheit - 32) * 5) / 9
}

describe('fahrenheit to celsius converter', () => {
  test('fahrenheit2Celsius(32) = 0', () => {
    fahrenheit2Celsius(32).should.equal(0)
  })
  test('fahrenheit2Celsius(212) = 100', () => {
    fahrenheit2Celsius(212).should.equal(100)
  })
  test.todo('fahrenheit2Celsius(85) = 50')
})
