export function statement(invoice, plays) {
  function playFor(performance) {
    return plays[performance['playID']]
  }
  function amountFor(performance) {
    let result = 0
    switch (playFor(performance).type) {
      case 'tragedy':
        result = 40000
        if (performance['audience'] > 30) {
          result += 1000 * (performance['audience'] - 30)
        }
        break
      case 'comedy':
        result = 30000
        if (performance['audience'] > 20) {
          result += 10000 + 500 * (performance['audience'] - 20)
        }
        result += 300 * performance['audience']
        break
      default:
        throw new Error(`unknown type: ${playFor(performance).type}`)
    }

    return result
  }
  function volumeCreditsFor(performance) {
    let volumeCredits = 0
    volumeCredits += Math.max(performance['audience'] - 30, 0)
    if (playFor(performance).type === 'comedy')
      volumeCredits += Math.floor(performance['audience'] / 5)

    return volumeCredits
  }
  function usd(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number / 100)
  }

  let totalAmount = 0
  let result = `Statement for ${invoice['customer']}\n`

  let volumeCredits = 0
  for (let performance of invoice['performances']) {
    volumeCredits += volumeCreditsFor(performance)
  }

  for (let performance of invoice['performances']) {
    // print line for this order
    result += `  ${playFor(performance).name}: ${usd(
      amountFor(performance),
    )} (${performance['audience']} seats)\n`
    totalAmount += amountFor(performance)
  }
  result += `Amount owed is ${usd(totalAmount)}\n`
  result += `You earned ${volumeCredits} credits\n`
  return result
}
