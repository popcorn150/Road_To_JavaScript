function genSalt() {
    const currentDate = new Date();

    const twoDigitDay = String(currentDate.getDate()).padStart(2, "0");
    const twoDigitMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const twoDigitYear = String(currentDate.getFullYear()).slice(-2);

    return `${twoDigitDay}${twoDigitMonth}${twoDigitYear}`;
}
console.log(genSalt())