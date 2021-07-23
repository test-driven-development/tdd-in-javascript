import {prior, current} from './months'
import {api} from './api'

export const fetch = userId => {
  const priorMonths = prior()
  const currentMonths = current()

  const priorMonthsPayments = api(userId, priorMonths)
  const currentMonthsPayments = api(userId, currentMonths)

  return [...priorMonthsPayments, ...currentMonthsPayments]
}
