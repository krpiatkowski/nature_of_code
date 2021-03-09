function setup() {
    createCanvas(800, 800);
    rectMode(CENTER).noFill().frameRate(30);
    noStroke();
}
var RESOLUTION = 10;
var noiseScale = 0.02;
function draw() {
    noiseDetail(10, 0.5);
    for (var x = 0; x < width; x += RESOLUTION) {
        for (var y = 0; y < height; y += RESOLUTION) {
            var noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);
            fill(noiseVal * 255);
            rect(x, y, RESOLUTION, RESOLUTION);
        }
    }
}
//# sourceMappingURL=../sketch/sketch/build.js.map