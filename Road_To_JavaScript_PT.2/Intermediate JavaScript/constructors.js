/** Constructor */

class Surgeon {
    constructor(name, department){
        this._name =  name;
        this._department = department;
    }
}
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')

console.log(surgeonJackson)
console.log(surgeonRomero)