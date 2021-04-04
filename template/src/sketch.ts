function setup() {
  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(30);
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
