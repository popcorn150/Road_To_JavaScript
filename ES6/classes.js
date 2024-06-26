class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return `I have a ${this.brand}`
    }
}


class Model extends Car {
    constructor(name, mod) {
        super(name) //the super method refers to the parent class (Car) in this case
        this.model = mod
    }
    show() {
        return `${this.present()}, it is a ${this.model}`
    }
}

const myCar = new Model('Benz', 'Mustang')
console.log(myCar.show())