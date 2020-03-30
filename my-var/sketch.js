let x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(30);
  
  // Draw a circle
  noStroke();
  fill(220);
  ellipse(x, y, 50, 50);
  
  x = x ++;
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}