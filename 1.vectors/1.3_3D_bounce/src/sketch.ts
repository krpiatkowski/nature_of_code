let v: Vector3D;
let addVector: Vector3D;

const CANVAS_SIZE = 1000;
const BOX_SIZE = 200;
const SPHERE_SIZE = 10;
const HALF_SPHERE_SIZE = SPHERE_SIZE / 2;

function setup() {
  v = new Vector3D(0, 0, 0);
  addVector = new Vector3D(1, 1, 2);
  createCanvas(CANVAS_SIZE, CANVAS_SIZE, WEBGL);
}

function draw() {
  background(255);

  rotateY(mouseY * 0.001);
  rotateZ(mouseX * 0.001);

  let newV = v.add(addVector);

  if (
    !(
      -BOX_SIZE + HALF_SPHERE_SIZE < newV.x &&
      newV.x < BOX_SIZE - HALF_SPHERE_SIZE
    )
  ) {
    addVector = new Vector3D(-addVector.x, addVector.y, addVector.z);
  }
  if (
    !(
      -BOX_SIZE + HALF_SPHERE_SIZE < newV.y &&
      newV.y < BOX_SIZE - HALF_SPHERE_SIZE
    )
  ) {
    addVector = new Vector3D(addVector.x, -addVector.y, addVector.z);
  }
  if (
    !(
      -BOX_SIZE + HALF_SPHERE_SIZE < newV.z &&
      newV.z < BOX_SIZE - HALF_SPHERE_SIZE
    )
  ) {
    addVector = new Vector3D(addVector.x, addVector.y, -addVector.z);
  }

  v = v.add(addVector);

  noFill();
  box(BOX_SIZE * 2);

  translate(v.x, v.y, v.z);
  sphere(SPHERE_SIZE);
}
