input.onButtonPressed(Button.A, function () {
    numeroum = randint(0, 10)
    basic.showNumber(numeroum)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(2000)
    }
    resto = (numeroum + numerodois) % 2
    if (resto == 0) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else {
        basic.showString("I")
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    numerodois = randint(0, 10)
    basic.showNumber(numerodois)
    basic.pause(2000)
    basic.clearScreen()
})
let resto = 0
let numerodois = 0
let numeroum = 0
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()
numeroum = 0
numerodois = 0
resto = 0
