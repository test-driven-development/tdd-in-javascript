// noinspection JSUnresolvedFunction

import {replace, verify, when} from 'testdouble'

describe('unusual spending feature', () => {
  test(`successfully orchestrates the collaboration between fetch, categorize and email`, () => {
    // arrange
    const fetch = replace('./fetch')['fetch']
    const categorize = replace('./categorize')['categorize']
    const email = replace('./email')['email']

    const userId = 'user ID'

    const payments = {
      current: ['current payments'],
      prior: ['prior payments'],
    }

    const categorizedPayments = {
      current: ['current categorized payments'],
      prior: ['prior categorized payments'],
    }

    when(fetch(userId)).thenReturn(payments)
    when(categorize(payments)).thenReturn(categorizedPayments)

    // noinspection JSFileReferences
    const unusualSpending = require('./unusual-spending')[
      'unusualSpending'
    ]

    // act
    unusualSpending(userId)

    // assert
    verify(email(userId, categorizedPayments))
  })

  test.todo(
    `cannot orchestrate the collaboration because fetch fails`,
  )
})
