# tdd in javascript
> (work-in-progress)
 
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
 
## install
```sh
yarn install
```
> (the jest warning – `request@2.88.2: request has been deprecated` - is a known issue and can be safely ignored)

## run
```sh
yarn tdd
```

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

## commit hook
```js
// package.json
  "husky": {
    "hooks": {
      "pre-push": "yarn validate"
    }
  }
```        

## License
MIT

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
