const container = document.getElementsByClassName('attendanceContainer')[0]
const userInput = document.getElementById('textInput')
const clearList = document.getElementById('clearList')


userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addToAttendance()
    }
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

    divChild.appendChild(notCheckIcon)

    clearList.addEventListener('click', function () {
        divParent.remove()
    })

    divParent.appendChild(divChild)

    container.appendChild(divParent)
    userInput.value = ''
}