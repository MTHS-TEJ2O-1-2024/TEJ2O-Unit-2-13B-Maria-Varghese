/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Sep 2024
 * This program does program in loops
*/

//variable
let number: number = 4
let neopixelStrip: neopixel.Strip = null

//setup
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.pause(500)

//counting down from 4 to 0 and showing neopixel lights
input.onButtonPressed(Button.A, function() {
    
    while (number > -1) {
        basic.showNumber(number)

        if (number == 4) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (number == 3) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (number == 2) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (number == 1) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (number == 0) {
            neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(500)
        }

        basic.pause(1000)
        number = number - 1
    }
})

//clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
