'use strict'

var gDiameter = +document.querySelector('.ball').innerHTML

function onBallClick(elBall, maxDiameter) {
    gDiameter += getRandomInt(20, 60)

    if (gDiameter > maxDiameter) {
        gDiameter = 100
    }

    elBall.style.backgroundColor = getRandomColor()

    elBall.style.width = gDiameter + 'px'
    elBall.style.height = gDiameter + 'px'

    elBall.innerHTML = gDiameter
}