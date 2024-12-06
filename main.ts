radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendNumber(2)
})
