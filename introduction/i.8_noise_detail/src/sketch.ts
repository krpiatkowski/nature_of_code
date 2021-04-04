function setup() {
  createCanvas(800, 800);
  rectMode(CENTER).noFill().frameRate(30);
  noStroke();
}

let RESOLUTION = 10;
let noiseScale = 0.02;
function draw() {
  noiseDetail(10, 0.5);
  for (let x = 0; x < width; x += RESOLUTION) {
    for (let y = 0; y < height; y += RESOLUTION) {
      const noiseVal = noise(
        (mouseX + x) * noiseScale,
        (mouseY + y) * noiseScale
      );
      fill(noiseVal * 255);
      rect(x, y, RESOLUTION, RESOLUTION);
    }
  }
}
