calculate = (a, b) => {
    const add = a + b
    const subtract = a - b
    const multiply = a * b
    const divide = a / b

    return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide] = calculate(4, 7)
console.log(`sum: ${add}\n subtract: ${subtract}\n multiply: ${multiply}\n divide: ${divide}`)

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({ type, color, brand, model }) {
    return message = `My ${type} is a ${color} ${brand} ${model}.`;
}

console.log(message);