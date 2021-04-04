let walker: GaussianWalker;
function setup() {
  resizeCanvas(windowWidth, windowHeight);
  walker = new GaussianWalker(2);
}

function draw() {
  walker.step();
  clear();
  walker.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
