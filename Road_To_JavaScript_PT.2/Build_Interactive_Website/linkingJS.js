function blooming() {
    var image = document.getELementById('myImage');
    if (image.src.match('normal')) {
        image.src = 'flower.png';
    } else {
        image.src = 'normal.png';
    }
}