function setup() {
  createCanvas(800, 800);
  background(176,224,230);
}
function draw() {
  //ellipse
  noStroke();
  fill(255,255,255);
  ellipse(mouseX,mouseY,30,30);
}
function mousePressed(){
  background(176,224,230);
}