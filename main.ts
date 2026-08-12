input.onButtonPressed(Button.A, function () {
    radio.sendValue("pccccccccccccc", 199)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # # # # #
        `)
    basic.pause("go".indexOf("goooooo"))
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    led.toggle(3, 2)
})
basic.forever(function () {
    music.play(music.stringPlayable("D F A B C A F D ", 120), music.PlaybackMode.InBackground)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C5 F A B G D C F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 1498, 216, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Square, 775, 1, 194, 0, 8000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D C5 B A G F E ", 120), music.PlaybackMode.UntilDone)
    music.ringTone(349)
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 5000, 2303, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C F D A E B A C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D B F A G A E ", 120), music.PlaybackMode.InBackground)
    music.ringTone(349)
    music.play(music.stringPlayable("C5 G E B D F D C ", 120), music.PlaybackMode.UntilDone)
})
