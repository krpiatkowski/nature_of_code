let walker: CustomDistributionWalker;
let randomCounts: number[];
function setup() {
  resizeCanvas(windowWidth, windowHeight);
  // walker = new CustomDistributionWalker();
  randomCounts = [];
  for (let i = 0; i < 10; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);
  const index = CustomDistributionWalker.pick(0, 10);
  randomCounts[Math.floor(index)]++;

  stroke(0);
  fill(175);

  const w = windowWidth / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, windowHeight - randomCounts[x], w - 1, randomCounts[x]);
  }

  // walker.step();
  // clear();
  // walker.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
