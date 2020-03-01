import {statement} from './statement'
import {htmlStatement} from './html-statement'
import invoices from './invoices'
import missingInvoices from './missing-invoices'
import plays from './plays'
import badPlay from './bad-play'

describe(`statement is characterized`, () => {
  it(`as follows`, () => {
    statement(invoices[0], plays).should.equal(
      'Statement for BigCo\n' +
        '  Hamlet: $650.00 (55 seats)\n' +
        '  As You Like It: $580.00 (35 seats)\n' +
        '  Othello: $500.00 (40 seats)\n' +
        'Amount owed is $1,730.00\n' +
        'You earned 47 credits\n',
    )
  })

  it(`handles missing cases`, () => {
    statement(missingInvoices[0], plays).should.equal(
      'Statement for BigCo\n' +
        '  As You Like It: $345.00 (15 seats)\n' +
        '  Othello: $400.00 (20 seats)\n' +
        'Amount owed is $745.00\n' +
        'You earned 3 credits\n',
    )
  })

  it(`errors`, () => {
    ;(() => {
      statement(invoices[0], badPlay)
    }).should.throw('unknown type: bad-type')
  })
})

describe(`html statement`, () => {
  it(`prints a header`, () => {
    htmlStatement(invoices[0], plays).should.containEql(
      `<h1>Statement for BigCo</h1>`,
    )
  })

  it(`prints the table start`, () => {
    htmlStatement(invoices[0], plays).should.containEql(`<table>\n`)
  })

  it(`prints the header row`, () => {
    const headerRow = `<tr><th>play</th><th>seats</th><th>cost</th></tr>\n`
    htmlStatement(invoices[0], plays).should.containEql(headerRow)
  })

  it(`prints the first row play and seats`, () => {
    htmlStatement(invoices[0], plays).should.containEql(
      `  <tr><td>Hamlet</td><td>55</td>`,
    )
  })

  it(`prints the first row cost`, () => {
    htmlStatement(invoices[0], plays).should.containEql(
      `<td>$650.00</td></tr>\n`,
    )
  })

  it(`prints the table end`, () => {
    htmlStatement(invoices[0], plays).should.containEql(`</table>\n`)
  })

  it(`prints the total in the footer`, () => {
    const totalFooter = `<p>Amount owed is <em>$1,730.00</em></p>\n`
    htmlStatement(invoices[0], plays).should.containEql(totalFooter)
  })

  it(`prints the total volume credits in the footer`, () => {
    const creditsFooter = `<p>You earned <em>47</em> credits</p>\n`
    htmlStatement(invoices[0], plays).should.containEql(creditsFooter)
  })

  it(`prints the whole statement`, () => {
    const statement =
      `<h1>Statement for BigCo</h1>\n` +
      `<table>\n` +
      `<tr><th>play</th><th>seats</th><th>cost</th></tr>\n` +
      `  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n` +
      `  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n` +
      `  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n` +
      `</table>\n` +
      `<p>Amount owed is <em>$1,730.00</em></p>\n` +
      `<p>You earned <em>47</em> credits</p>\n`

    htmlStatement(invoices[0], plays).should.equal(statement)
  })

  it(`errors`, () => {
    ;(() => {
      htmlStatement(invoices[0], badPlay)
    }).should.throw('unknown type: bad-type')
  })
})
