function setup() {
  createCanvas(700, 500);
}

function draw() {
  
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 250) {
    ellipse(350,250,50,50);
  }
  if (mouseY > 250) {
    ellipse(350,250, 25, 25);
  }
  if (mouseX < 250) {
    ellipse(350,250,150,150);
  }
  if (mouseY < 250) {
    ellipse(350,250,100,100);
  }

  ellipse(350,250,200,200);
}