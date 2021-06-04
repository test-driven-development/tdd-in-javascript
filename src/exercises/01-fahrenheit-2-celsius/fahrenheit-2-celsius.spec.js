describe('the canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true()
  })
})

function fahrenheit2celsius(number) {
  return 0
}

describe('fahrenheit to celsius converter', () => {
  test('fahrenheit2celsius(32) = 0', () => {
    fahrenheit2celsius(32).should.equal(0)
  })
  test.todo('fahrenheit2celsius(212) = 100')
  test.todo('fahrenheit2celsius(85) = 50')
})
