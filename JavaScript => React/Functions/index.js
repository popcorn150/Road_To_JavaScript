/**Function Parameters */
sum = (num1, num2, num3) => {
    console.log(num1 + num2 + num3)
}
sum(5, 7, 8)

/**Function Scope */
outerFunction = (x) => {
    innerFunction = () => {
        console.log(x = x * 2)
    }
    innerFunction()
}
outerFunction(15)

/**Function Expressions */
multiply = (a, b) => {
    console.log(a * b)
}
multiply(7, 9)

/**Recursion */
let n = 10
factorial = (n) => {
    let ans = 1

    if (n === 0)
        return 1
    for (let i = 2; i <= n; i++)
        ans = ans * i
    return ans
}
console.log(factorial(n))

/**Callback Functions */
let numA = 9
let numB = 7
calculate = (numA, numB, () => {
    let total = numA - numB
    return total
})
console.log(calculate())

/**Higher-Order Functions */
applyOperation = (1, 2, () => {})

/**Function Context */
objectCalculations = (numbers) => {
    let newObj = {}
    for (const number in numbers){
        numbers[number] = number
        return newObj[numbers]
    }
    console.log(newObj)
}

let num1 = 5, num2 = 8
objectCalculations(calculator = {
    'add': (num1 + num2),
    'subtract': (num1 - num2),
    'multiply': (num1 * num2),
    'divide': (num1 / num2)
})