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
var GaussianWalker = (function (_super) {
    __extends(GaussianWalker, _super);
    function GaussianWalker(std) {
        var _this = _super.call(this) || this;
        _this.std = std;
        return _this;
    }
    GaussianWalker.prototype.step = function () {
        this.x += randomGaussian(0, this.std);
        this.y += randomGaussian(0, this.std);
    };
    return GaussianWalker;
}(AbstractWalker));
var walker;
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
//# sourceMappingURL=../sketch/sketch/build.js.map