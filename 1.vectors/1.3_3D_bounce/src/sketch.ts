let currentVector: Vector;
let addVector: Vector;

function setup() {
  currentVector = new Vector(0, 0);
  addVector = new Vector(5, 5);
  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(60);
}

function draw() {
  background(255);

  if (currentVector.x > windowWidth || currentVector.x < 0) {
    addVector = new Vector(-addVector.x, addVector.y);
  }
  if (currentVector.y > windowHeight || currentVector.y < 0) {
    addVector = new Vector(addVector.x, -addVector.y);
  }

  currentVector = currentVector.add(addVector);
  stroke(0);
  fill(175);
  ellipse(currentVector.x, currentVector.y, 32, 32);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
