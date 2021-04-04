function setup() {
  createCanvas(400, 400, WEBGL);
}

const RESOLUTION = 10;

function draw() {
  background(200);
  rotateX(1.28);
  translate(-200, -200);

  for (let x = 0; x < width; x += RESOLUTION) {
    for (let y = 0; y < height; y += RESOLUTION) {
      beginShape();
      vertex(x, y, map(noise(x, y), 0, 1, -10, 10));
      vertex(x + 10, y, map(noise(x + 10, y), 0, 1, -10, 10));
      vertex(x + 10, y + 10, map(noise(x + 10, y + 10), 0, 1, -10, 10));
      vertex(x, y + 10, map(noise(x, y + 10), 0, 1, -10, 10));
      endShape(CLOSE);
    }
  }
}
