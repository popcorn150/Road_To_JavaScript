const userInput = document.getElementById('textInput')
const attendanceList = document.getElementById('studentList')
const clearList = document.getElementById('clearList')

clearList.addEventListener('click', function () {
    attendanceList.innerHTML = ''
})

userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addAttendanceList()
    }
})

function addAttendanceList() {
    let h2 = document.createElement('h2')
    h2.innerHTML = '>'+ ' ' + userInput.value

    attendanceList.insertAdjacentElement('beforeend', h2)
    userInput.value = ''
}