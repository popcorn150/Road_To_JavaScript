function check_gas_rating() {
    const ratingExplanation = [
        "This means that you can still use your gas for the time being without fear of it finishing !",
        "This means that you can still use your gas but it could finish anytime soon.",
        "Alert! No Gas, head to the nearest filling station for a refill!"
    ]

    let gasRate = Math.floor(Math.random() * 101)
    let img = document.getElementById('gas_images')
    if (gasRate >= 50) {
        document.getElementById('gas_readings').innerHTML = `Your Gas is at ${gasRate}%`
        img.src = 'pictures/full_gas.png'
        document.getElementById('gas_rating_explanation').innerHTML = ratingExplanation[0]
    } else if (gasRate >= 20) {
        document.getElementById('gas_readings').innerHTML = `Your Gas is at ${gasRate}%`,
            img.src = 'pictures/normal_gas.png',
            document.getElementById('gas_rating_explanation').innerHTML = ratingExplanation[1]
    } else if (gasRate <= 19) {
        document.getElementById('gas_readings').innerHTML = `Your Gas is at ${gasRate}%`,
            img.src = 'pictures/empty_gas.png',
            document.getElementById('gas_rating_explanation').innerHTML = ratingExplanation[2]
    } else {
        alert("Can not read Gas rating!!")
    }
}