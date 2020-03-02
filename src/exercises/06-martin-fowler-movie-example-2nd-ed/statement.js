import {configure} from './configure'

export function statement(invoice, plays) {
  return renderPlainText(invoice, plays, configure(plays, invoice))
}

function renderPlainText(invoice, plays, config) {
  function usd(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number / 100)
  }

  let result = `Statement for ${config.customer}\n`
  for (let performance of config.performances) {
    // print line for this order
    result += `  ${performance.play.name}: ${usd(performance.amount)} (${
      performance['audience']
    } seats)\n`
  }

  result += `Amount owed is ${usd(config.totalAmount)}\n`
  result += `You earned ${config.totalVolumeCredits} credits\n`
  return result
}
