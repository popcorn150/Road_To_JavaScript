const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style = "display: block; width: 200px; height: 150px;";
    } else {
        domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

let randomTexts = ['Inner Peace', 'Dinner Please', 'Dinner with Pess', 'Make it bigger please', 'Modules are fancy!']
const changeRandomly = (domElement) => {
    domElement.innerHTML = (randomTexts[Math.floor(Math.random() * randomTexts.length)])
}

export { toggleHiddenElement, changeToFunkyColor, changeRandomly };