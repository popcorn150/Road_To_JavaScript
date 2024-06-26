function hello() {
    return 'hello world!'
}

//or

hello = () => {
    return "hello world!"
}

//or

hello = () => "hello world!"
console.log(hello())

helloAgain = (name) => `hello ${name}`
console.log(helloAgain('John'))

//or

helloAgain = name => `hello ${name}`