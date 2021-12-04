let i = 0
basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J1)) {
        basic.pause(200)
        i = 1 - i
    }
    if (i == 0) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
    }
    if (i == 1) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
    }
})
