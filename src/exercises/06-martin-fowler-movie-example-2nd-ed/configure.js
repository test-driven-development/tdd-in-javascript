export function configure(plays, invoice) {
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

  function volumeCreditsFor(performance) {
    let volumeCredits = 0
    volumeCredits += Math.max(performance['audience'] - 30, 0)
    if (performance.play.type === 'comedy')
      volumeCredits += Math.floor(performance['audience'] / 5)

    return volumeCredits
  }

  function totalVolumeCredits(performances) {
    return performances.reduce((acc, p) => {
      return p.volumeCredits + acc
    }, 0)
  }

  function totalAmount(performances) {
    return performances.reduce((acc, p) => {
      return p.amount + acc
    }, 0)
  }

  const config = {}
  config.customer = invoice.customer
  config.performances = invoice.performances.map(p => {
    const performance = {...p}
    performance.play = playFor(performance)
    performance.amount = amountFor(performance)
    performance.volumeCredits = volumeCreditsFor(performance)
    return performance
  })
  config.totalVolumeCredits = totalVolumeCredits(config.performances)
  config.totalAmount = totalAmount(config.performances)
  return config
}
