function setup() {
    createCanvas(100, 100);
}
function draw() {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            pixels[x + y * width] = 100;
        }
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map