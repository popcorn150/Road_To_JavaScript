import {name, age} from './persons.js'

const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old`
}

console.log(message)

export default message