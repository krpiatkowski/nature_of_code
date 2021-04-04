class GaussianWalker extends AbstractWalker {
  private std: number;

  constructor(std: number) {
    super();
    this.std = std;
  }

  public step(): void {
    this.x += randomGaussian(0, this.std);
    this.y += randomGaussian(0, this.std);
  }
}
