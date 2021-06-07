describe('the canary spec', () => {
  test('shows the test infrastructure works', () => {
    true.should.be.true()
  })
})

function fahrenheit2Celsius(degreesF) {
  return ((degreesF - 32) * 5) / 9
}

describe('a fahrenheit to celsius converter works like this:', () => {
  test('fahrenheit2Celsius(32) = 0', () => {
    fahrenheit2Celsius(32).should.equal(0)
  })

  test('fahrenheit2Celsius(212) = 100', () => {
    fahrenheit2Celsius(212).should.equal(100)
  })

  test.todo('fahrenheit2Celsius(85) = 50')
})
