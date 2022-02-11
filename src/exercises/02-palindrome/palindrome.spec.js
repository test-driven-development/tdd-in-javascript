let isPalindrome = phrase => {
  const isOneWord = phrase.split(' ').length === 1

  const isTheSameForwardAndBackward =
    phrase ===
    phrase
      .split('')
      .reverse()
      .join('')

  return isTheSameForwardAndBackward && isOneWord
}

describe(`the isPalindrome function`, () => {
  test(`returns "true" for a "level"`, () => {
    isPalindrome('level').should.be.true()
  })
  test(`returns "false" for a "lover"`, () => {
    isPalindrome('lover').should.be.false()
  })
  test(`returns "false" for a "heh heh"`, () => {
    isPalindrome('heh heh').should.be.false()
  })
  test.todo(`returns "true" for a "a"`)
  test.todo(`returns "true" for a "e"`)
  test.todo(`returns "false" for a 1`)
  test.todo(`returns "false" for a 0`)
  test.todo(`returns "false" for a 9`)
  test.todo(`returns "false" for a 1628`)
  test.todo(`returns "true" for a " "`)
  test.todo(`returns "true" for a "   "`)
  test.todo(`returns "true" for a ""`)
  test.todo(`throw for a []`)
  test.todo(`throw for a {}`)
  test.todo(`throw for a null`)
})
