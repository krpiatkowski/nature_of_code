class CustomDistributionWalker extends AbstractWalker {
  public step(): void {
    let stepSize = CustomDistributionWalker.pick(0, 10);

    const stepx = random(-stepSize, stepSize);
    const stepy = random(-stepSize, stepSize);

    this.x += stepx;
    this.y += stepy;
  }

  public static pick(from: number, to: number) {
    while (true) {
      const p1 = random(from, to);
      const p2 = random(from, to);
      const p = p1;

      if (p < p2) {
        return p1;
      }
    }
  }
}
