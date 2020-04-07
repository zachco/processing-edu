
let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(700, 500);
  extraCanvas = createGraphics(700, 500);
  extraCanvas.clear();
  background(0);
}

function draw() {
  
  // No trails!
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);
	
  // trails
  //if (mouseIsPressed) {
    extraCanvas.fill(255, 160);
    extraCanvas.noStroke();
    let starX = random(width);
    let starY = random(height);
    extraCanvas.rect(starX, starY, 20, 20);
    //extraCanvas.rect(mouseX, mouseY, 60, 60);
  //}
  
  image(extraCanvas, 0, 0);
  fill(100, 130, 255);
  noStroke();
  rectMode(CENTER);
  ellipse(x, y, 80, 80);

  
}