# tdd in javascript
> (work-in-progress)
 
 ___
 ## dev environment

```js
// package.json
  "engines": {
    "node": ">=10",
    "npm": ">=6",
    "yarn": ">=1"
  }
```        
_requires git `>= 2.13.0`_
 ___
## install
```sh
yarn install
```
> (the jest warning – `request@2.88.2: request has been deprecated` - is a known issue and can be safely ignored)
___

## run
```sh
yarn tdd
```
___

## scripts
```js
// package.json
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx,html}\"",
    "lint": "esw \"src/**/*.{js,jsx}\" --quiet",
    "lint:watch": "yarn lint --watch",
    "tdd": "npm-run-all --parallel lint:watch test:watch",
    "test": "NODE_ENV=testing jest --forceExit --notify --detectOpenHandles  --silent src",
    "test:coverage": "yarn test --coverage",
    "test:watch": "yarn test --watch",
    "validate": "yarn format && yarn lint && yarn test:coverage"
  }
```        
___

## commit hook
```js
// package.json
  "husky": {
    "hooks": {
      "pre-push": "yarn validate"
    }
  }
```        
___

## License
MIT
___

# Test-Driven Development with Javascript

### [The Four Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html):

* **_(purge lint violations)_**

* **_Passes the tests_**
* **_Reveals intention_**
* **_No duplication_**
* **_Fewest elements_**

___

### [The Transformation Priority Premise](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html):

````
({} —-> null) no code at all to code that employs null

(null —-> constant)

(constant —-> constant+) a simple constant to a more complex constant

(constant —-> variable) replacing a constant with a variable or an argument

(statement —-> statements) adding more unconditional statements.

(unconditional —-> if) splitting the execution path

(variable —-> array)

(array —-> container)

(statement —-> recursion)

(if —-> while)

(expression —-> function) replacing an expression with a function or algorithm

(variable —-> assignment) replacing the value of a variable.
````

___
### exercises can be found in the `src` folder:

````
src/exercises
├── 00-canary
│   ├── README.adoc
│   └── canary.spec.js
├── 01-fahrenheit-2-celsius
│   ├── README.adoc
│   └── fahrenheit-2-celsius.spec.js
├── 02-palindrome
│   └── palindrome.spec.js
├── 03-stack
│   └── stack.spec.js
├── 04-prime-numbers
│   └── prime-numbers.spec.js
├── 05-martin-fowler-movie-example
│   ├── makeCustomerFrom.js
│   ├── makeMovieFrom.js
│   ├── makeRentalFrom.js
│   ├── martin-fowler-movie-refactoring.spec.js
│   └── movie-codes.js
├── 06-martin-fowler-movie-example-2nd-ed
│   ├── Refactoring-A\ First\ Example.pdf
│   ├── invoices.json
│   ├── plays.json
│   ├── statement.js
│   └── statement.spec.js
├── 07-unusual-spending
│   └── unusual-spending-sketch.png
├── 08-functional
│   ├── 001-next-char-for-number-string.spec.js
│   ├── 002-nested-composition-with-box.spec.js
│   ├── 003-either.spec.js
│   ├── 004-chain.spec.js
│   ├── 005-either-example-open-site.spec.js
│   ├── 006-either-example-user-preferences.spec.js
│   ├── 007-either-example-street-name.spec.js
│   ├── 008-either-example-concat-unique.spec.js
│   ├── 009-either-example-wrap.spec.js
│   ├── 010-semi-group.spec.js
│   ├── 011-monoid.spec.js
│   ├── config-error.json
│   ├── config.json
│   └── functional-types.js
├── async-01-line-count-with-callback
│   ├── line-count.js
│   └── line-count.spec.js
├── async-02-line-count-with-promise
│   ├── line-count.js
│   └── line-count.spec.js
├── async-03-unusual-spending
│   └── unusual-spending-sketch.png
└── helper.js
````

___
