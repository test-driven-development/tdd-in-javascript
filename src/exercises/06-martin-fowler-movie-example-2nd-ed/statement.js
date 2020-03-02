export function statement(invoice, plays) {
  function playFor(performance) {
    return plays[performance['playID']]
  }
  function amountFor(performance) {
    let result = 0
    switch (performance.play.type) {
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
        throw new Error(`unknown type: ${performance.play.type}`)
    }

    return result
  }

  const config = {}
  config.customer = invoice.customer
  config.performances = invoice.performances.map(p => {
    const performance = {...p}
    performance.play = playFor(performance)
    performance.amount = amountFor(performance)
    return performance
  })
  return renderPlainText(invoice, plays, config)
}

function renderPlainText(invoice, plays, config) {
  function volumeCreditsFor(performance) {
    let volumeCredits = 0
    volumeCredits += Math.max(performance['audience'] - 30, 0)
    if (performance.play.type === 'comedy')
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
  function totalVolumeCredits() {
    let volumeCredits = 0
    for (let performance of config.performances) {
      volumeCredits += volumeCreditsFor(performance)
    }
    return volumeCredits
  }
  function totalAmount() {
    let totalAmount = 0
    for (let performance of config.performances) {
      totalAmount += performance.amount
    }
    return totalAmount
  }

  let result = `Statement for ${config.customer}\n`
  for (let performance of config.performances) {
    // print line for this order
    result += `  ${performance.play.name}: ${usd(performance.amount)} (${
      performance['audience']
    } seats)\n`
  }

  result += `Amount owed is ${usd(totalAmount())}\n`
  result += `You earned ${totalVolumeCredits()} credits\n`
  return result
}
