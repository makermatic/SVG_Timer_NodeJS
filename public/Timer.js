class Timer {
    constructor(amount, fontSize, color) {
        this.amount = amount
        this.fontSize = fontSize
        this.color = color
    }

    display() {
        textAlign(CENTER, CENTER)
        textSize(this.fontSize)
        fill(this.color)
        noStroke()
        text(this.amount, width / 2, height / 2.4)
    }

    go() {
        if (frameCount % 60 === 0 && this.amount > 0) {
            this.amount--
        }
        console.log ("Going")
    }

    stop() {
        this.amount = this.amount + 0
        console.log ("Stopped")
    }

    reset () {
        this.amount = seconds
    }
}