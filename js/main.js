'use strict'

var gDiameter = +document.querySelector('.ball').innerHTML

function onBallClick() {
    gDiameter += getRandomInt(20, 60)

    if (gDiameter > 400) {
        gDiameter = 100
    }

    const elBall = document.querySelector('.ball')

    elBall.style.width = gDiameter + 'px'
    elBall.style.height = gDiameter + 'px'

    elBall.innerHTML = gDiameter
}