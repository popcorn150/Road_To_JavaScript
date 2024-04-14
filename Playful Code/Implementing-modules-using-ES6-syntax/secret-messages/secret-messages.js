import { toggleHiddenElement, changeToFunkyColor, changeRandomly } from '../Module/dom-functions.js'
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(pElement);
    changeRandomly(pElement);
});