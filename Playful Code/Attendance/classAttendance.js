const attendanceList = document.getElementsByClassName('attendance')[0]
const userInput = document.getElementById('textInput')
const clearList = document.getElementById('clearList')


userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter')
        addToAttendance()
})

function addToAttendance() {
    let divParent = document.createElement('div')
    let divChild = document.createElement('div')
    let checkIcon = document.createElement('i')
    let notCheckIcon = document.createElement('i')

    divParent.className = 'item'
    divParent.innerHTML = '<div>' + userInput.value + '</div>'

    checkIcon.className = 'fa fa-check-square'
    checkIcon.style.color = 'lightgray'
    checkIcon.addEventListener('click', function () {
        checkIcon.style.color = 'limegreen'
    })

    divChild.appendChild(checkIcon)

    notCheckIcon.className = 'fa fa-window-close'
    notCheckIcon.style.color = 'lightgray'
    notCheckIcon.addEventListener('click', function () {
        notCheckIcon.style.color = 'red'
    })

    clearList.addEventListener('click', function () {
        divParent.remove()
    })

    divChild.appendChild(notCheckIcon)

    divParent.appendChild(divChild)

    attendanceList.appendChild(divParent)
    userInput.value = ''
}