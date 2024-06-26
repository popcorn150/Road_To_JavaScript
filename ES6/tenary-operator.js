renderApp = () => {
    return 'App rendered!'
}

renderLogin = () => {
    return 'Welcome to the Login page...'
}

const authenticated = false
console.log(authenticated ? renderApp() : renderLogin());