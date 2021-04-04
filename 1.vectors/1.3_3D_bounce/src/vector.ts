class Vector {
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(v: Vector): Vector {
    return new Vector(this.x + v.x, this.y + v.y);
  }
}
