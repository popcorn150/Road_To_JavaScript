import { toggleHiddenElement } from '../Module/dom-functions.js'
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');

toggleHiddenElement(imgElement)

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(imgElement);
});

let x = 0
while (x < 5 === true) {
    x++
    console.log("running")
}