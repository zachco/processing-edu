let x = 0;
let y = 22;
let speed = 4;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);

  if(x > width ||  x < 0  ) {
    speed = speed * -1;
    }
  if( y > width || y < 0) {
    speed = speed * -1;
  }
  x = x + speed;
  y = y + speed;
}