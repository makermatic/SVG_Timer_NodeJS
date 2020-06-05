//global vars
let socket

let timer
let tFont
let fps = 60
let seconds = 30

function preload() {
  tFont = loadFont("assets/passion.otf")
}

function setup() {
  createCanvas(600, 600)
  textFont(tFont)
  timer = new Timer(seconds, 500, "white")

  textFont(tFont)
  timer = new Timer(30, 500, "white")

  socket = io.connect ('http://localhost:8080/')
  socket.on ('keyCode', 
    function (data) {
      console.log ("Received:" + data.keyCode)
    })
}

function draw() {
  clear() //<-- transparent bg

  //background/square setup 
  fill("#9400FF")
  stroke("white")
  strokeWeight(3)
  rect(0, 0, width, height)


  timer.display()

  //C key toggles timer
  if (keyTyped && keyCode === 67) {
    timer.go()
    //Any other key stops timer
  } else if (keyTyped) {
    timer.stop()
  }
  if (keyTyped && keyCode === 32) {
    timer.reset()
  }
}

function keyTyped() {
  //empty function that gets called into memory
}

function sendKey (keyCode) {
  console.log ("Sending:" + data.keyCode)

  var data = {
    key: keyCode,
  }
  socket.emit ('keyCode', data)
}