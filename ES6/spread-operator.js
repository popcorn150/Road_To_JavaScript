const num1 = [1,2,3]
const num2 = [4,5,6]

const fullNum = [...num1, ...num2]

const [one, two, ...rest] = fullNum

console.log(fullNum)

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle)