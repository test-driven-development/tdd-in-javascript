function isOneWord(phrase) {
  return phrase.split(' ').length === 1
}

function isTheSameForwardAndBackward(phrase) {
  return (
    phrase ===
    phrase
      .split('')
      .reverse()
      .join('')
  )
}

function isArray(phrase) {
  return phrase instanceof Array
}

function isString(phrase) {
  return typeof phrase === 'string'
}

function isObject(phrase) {
  return typeof phrase === 'object'
}

function isPalindrome(phrase) {
  if (phrase === null) {
    throw new Error('Phrase cannot be null')
  }

  if (isArray(phrase)) {
    throw new Error('Phrase cannot be an array')
  }

  if (isObject(phrase)) {
    throw new Error('Phrase cannot be an object')
  }

  return (
    isString(phrase) &&
    isTheSameForwardAndBackward(phrase) &&
    isOneWord(phrase)
  )
}

describe(`the isPalindrome function returns`, () => {
  test(`"true" for "level"`, () => {
    isPalindrome('level').should.be.true()
  })

  test(`"false" for "lover"`, () => {
    isPalindrome('lover').should.be.false()
  })

  test(`"false" for "heh heh"`, () => {
    isPalindrome('heh heh').should.be.false()
  })

  test(`"true" for a single character like "a"`, () => {
    isPalindrome('a').should.be.true()
  })

  test(`"false" for 1`, () => {
    isPalindrome(1).should.be.false()
  })

  test(`throw for []`, () => {
    ;(() => {
      isPalindrome([])
    }).should.throw('Phrase cannot be an array')
  })

  test(`throw for {}`, () => {
    ;(() => {
      isPalindrome({})
    }).should.throw('Phrase cannot be an object')
  })
  test(`throw for null`, () => {
    ;(() => {
      isPalindrome(null)
    }).should.throw('Phrase cannot be null')
  })
})
