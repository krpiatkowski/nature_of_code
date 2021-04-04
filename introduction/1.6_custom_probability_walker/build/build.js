var AbstractWalker = (function () {
    function AbstractWalker() {
        this.x = windowWidth / 2;
        this.y = windowHeight / 2;
    }
    AbstractWalker.prototype.display = function () {
        ellipse(this.x, this.y, 10, 10);
    };
    return AbstractWalker;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomDistributionWalker = (function (_super) {
    __extends(CustomDistributionWalker, _super);
    function CustomDistributionWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDistributionWalker.prototype.step = function () {
        var stepSize = CustomDistributionWalker.pick(0, 10);
        var stepx = random(-stepSize, stepSize);
        var stepy = random(-stepSize, stepSize);
        this.x += stepx;
        this.y += stepy;
    };
    CustomDistributionWalker.pick = function (from, to) {
        while (true) {
            var p1 = random(from, to);
            var p2 = random(from, to);
            var p = p1;
            if (p < p2) {
                return p1;
            }
        }
    };
    return CustomDistributionWalker;
}(AbstractWalker));
var walker;
var randomCounts;
function setup() {
    resizeCanvas(windowWidth, windowHeight);
    randomCounts = [];
    for (var i = 0; i < 10; i++) {
        randomCounts[i] = 0;
    }
}
function draw() {
    background(255);
    var index = CustomDistributionWalker.pick(0, 10);
    randomCounts[Math.floor(index)]++;
    stroke(0);
    fill(175);
    var w = windowWidth / randomCounts.length;
    for (var x = 0; x < randomCounts.length; x++) {
        rect(x * w, windowHeight - randomCounts[x], w - 1, randomCounts[x]);
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map