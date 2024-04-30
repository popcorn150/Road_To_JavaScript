/** These are all the upgraded codes from the previous file - index.js */

/**Function Parameters */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(5, 2, 5, 6, 7, 8, 10))

/**Function Scope */
function outerFunction() {
    let x = 5
    function innerFunction() {
        return x * 2
    }
    return innerFunction()
}
console.log(outerFunction())

/**Function Expressions */
const multiply = function (a, b) {
    return a * b
}
console.log(multiply(7, 8))

/**Recursion */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(6))
/** |--> 
    -- What's going on under the hood of factorial n --
    0! = 1
    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    5! = 5 * 4 * 3 * 2 * 1 = 120
    factorial(n - 1) = 120
    n * 120 = ?
    i.e n = ?
<--| */

/**Callback Functions */
function calculate(a, b, callback) {
    return callback(a, b)
}
function add(a, b) {
    return a + b
}

console.log(calculate(7, 3, add))

/**Higher-Order Functions */
function applyOperation(a, b, operation) {
    return operation(a, b)
}
function square(a) {
    return a * a
}

console.log(applyOperation(4, 3, square))

/**Function Context */
const calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (c, d) {
        return c - d
    },
    multiply: function (e, f) {
        return e * f
    },
    division: function (g, h) {
        return g / h
    }
}
console.log(calculator.add(2, 9))
console.log(calculator.multiply(2, 9))
console.log(calculator.subtract(2, 9))
console.log(calculator.division(2, 9))