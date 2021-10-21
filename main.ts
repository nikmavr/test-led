let player1 = game.createSprite(2, 4)
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
        }
    }
})
