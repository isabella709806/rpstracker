input.onGesture(Gesture.Shake, function () {
    reset()
})
function updateScores () {
    OLED.clear()
    OLED.writeStringNewLine("player 1" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("ties" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds" + rounds)
}
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Shall we play a game?")
    ties = 0
    rounds = 0
    p2 = 0
    p1 = 0
    basic.pause(2000)
    updateScores()
}
let rounds = 0
let ties = 0
let p2 = 0
let p1 = 0
reset()
