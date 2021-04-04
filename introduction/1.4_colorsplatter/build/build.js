function setup() {
    createCanvas(windowWidth, windowHeight);
}
var xyStdFactor = 7;
var colorStd = 40;
function draw() {
    var x = randomGaussian(windowWidth / 2, windowWidth / xyStdFactor);
    var y = randomGaussian(windowHeight / 2, windowHeight / xyStdFactor);
    var r = randomGaussian(255 / 2, colorStd);
    var g = randomGaussian(255 / 2, colorStd);
    var b = randomGaussian(255 / 2, colorStd);
    noStroke();
    fill(r, g, b, 75);
    ellipse(x, y, 10, 10);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map