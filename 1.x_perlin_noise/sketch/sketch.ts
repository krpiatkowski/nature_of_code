function setup() {
  // FULLSCREEN CANVAS
  createCanvas(100, 100);
}

function draw() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // const bright = map(
      //   noise(x + (mouseX / windowWidth) * 2, y + (mouseY / windowHeight) * 2),
      //   0,
      //   1,
      //   00,
      //   255
      // );
      pixels[x + y * width] = 100;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
