function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 450) {
    arc(479, 300, 280, 280, PI, TWO_PI);
  } else if (mouseX > 350) {
    triangle(300, 200, 100, 100, 200, 20);
  } else if (mouseX > 250) {
     ellipse(300, 200, 100, 100);
   } else if (mouseX > 150) {
     rect(300, 200, 100, 100);
   } else if (mouseX > 50) {
     line(0, 0, width, height);
   } else {
     point(300, 200);
   }
}