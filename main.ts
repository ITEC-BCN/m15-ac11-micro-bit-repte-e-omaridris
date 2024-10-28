let x = 2
let y = 2
basic.forever(function on_forever() {
    led.plotBarGraph(input.temperature(), 50)
    
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    let acc_x = input.acceleration(Dimension.X)
    let acc_y = input.acceleration(Dimension.Y)
    if (acc_x <= 150 && x > 0) {
        x = x - 1
    } else if (acc_x > 150 && x < 4) {
        x += 1
    }
    
    if (acc_y <= 150 && y > 0) {
        y = y - 1
    } else if (acc_y > 150 && y < 4) {
        y += 1
    }
    
})
