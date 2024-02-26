const userInput = document.getElementById('textInput')
const clearList = document.getElementById('clearList')

// clearList.addEventListener('click', function () {
//     attendanceList.innerHTML = ''
// })

userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addAttendanceList()
    }
})

function addAttendanceList() {
    
}