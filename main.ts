input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.showIcon(IconNames.Confused)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music.playTone(587, music.beat(BeatFraction.Double))
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Square)
})
basic.showIcon(IconNames.Happy)
