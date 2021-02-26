function setup() {
  // FULLSCREEN CANVAS
  createCanvas(windowWidth, windowHeight);
}

const xyStdFactor = 7;
const colorStd = 40;

function draw() {
  const x = randomGaussian(windowWidth / 2, windowWidth / xyStdFactor);
  const y = randomGaussian(windowHeight / 2, windowHeight / xyStdFactor);
  const r = randomGaussian(255 / 2, colorStd);
  const g = randomGaussian(255 / 2, colorStd);
  const b = randomGaussian(255 / 2, colorStd);

  noStroke();

  fill(r, g, b, 75);
  ellipse(x, y, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
