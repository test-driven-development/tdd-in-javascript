import {replace, when} from 'testdouble'

describe('fetch feature', () => {
  test('orchestrates prior months payments', () => {
    // arrange
    const months = replace('./months')
    const api = replace('./api')['api']

    const priorMonth = {
      year: 2016,
      month: 10,
    }

    const currentMonth = {
      year: 2016,
      month: 11,
    }

    const priorMonthsPayments = [
      {amount: 90, category: 'golf'},
      {amount: 490, category: 'dinner'},
    ]

    const currentMonthsPayments = [
      {amount: 780, category: 'skateboarding'},
      {amount: 490, category: 'space trip'},
    ]

    const userId = 'user ID'

    when(months.prior()).thenReturn(priorMonth)
    when(months.current()).thenReturn(currentMonth)
    when(api(userId, priorMonth)).thenReturn(
      priorMonthsPayments,
    )
    when(api(userId, currentMonth)).thenReturn(
      currentMonthsPayments,
    )

    const sut = require('./fetch')['fetch']

    const expectedPayments = [
      {amount: 90, category: 'golf'},
      {amount: 490, category: 'dinner'},
      {amount: 780, category: 'skateboarding'},
      {amount: 490, category: 'space trip'},
    ]

    // act
    const payments = sut(userId)

    // assert
    payments.should.deepEqual(expectedPayments)
  })
})
