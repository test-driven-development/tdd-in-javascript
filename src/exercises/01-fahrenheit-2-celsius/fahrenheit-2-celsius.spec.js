describe('the canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true()
  })
})

function fahrenheit2Celsius() {
  return 0
}

describe('fahrenheit to celsius converter', () => {
  test('fahrenheit2Celsius(32) = 0', () => {
    fahrenheit2Celsius(32).should.equal(0)
  })
  test.todo('fahrenheit2Celsius(212) = 100')
  test.todo('fahrenheit2Celsius(85) = 50')
})
