input.onButtonPressed(Button.A, function () {
    kovetkezo += 1
    basic.showNumber(kovetkezo)
})
input.onButtonPressed(Button.B, function () {
    if (kovetkezo == _2 + _1) {
        basic.pause(2000)
        basic.showString(" UGYES VAGY!")
    }
})
let kovetkezo = 0
let _1 = 0
let _2 = 0
_2 = randint(0, 10)
_1 = randint(0, 10)
basic.showNumber(_1)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.showNumber(_2)
basic.clearScreen()
basic.forever(function () {
    if (kovetkezo == 21) {
        kovetkezo = 0
    }
})
