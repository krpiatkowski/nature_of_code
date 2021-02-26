abstract class AbstractWalker {
  protected x: number;
  protected y: number;

  public constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
  }

  public abstract step(): void;

  public display() {
    ellipse(this.x, this.y, 10, 10);
  }
}
