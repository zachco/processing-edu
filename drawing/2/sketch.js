function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(250, 0, 250);
  rectMode(CENTER);
  //draw 1st rectangle
  noStroke();
  fill(151, 249, 249);
  rect(50, 50, 1000, 100, 4);
  //draw 2nd
  fill(164, 222, 249);
  rect(50, 150, 1000, 100, 4);
  //draw 3rd
  fill(193, 224, 247);
  rect(50, 250, 1000, 100, 4);
  //draw 4th
  fill(207, 186, 225);
  rect(50, 350, 1000, 100, 4);
  //draw 5th
  fill(197, 159, 201);
  rect(50, 450, 1000, 100, 4);
}