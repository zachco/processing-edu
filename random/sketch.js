let spot = {
x: 100,
y: 50,
};

let col = {
r: 0, 
g: 0,
b: 0
};

function setup() {
  createCanvas(720, 400);
  background(20);
}

function draw() {
col.r = random(20, 150);
col.g = random(40, 90);
col.b = random(80, 120);
spot.x = random(0, width);
spot.y = random(0, height);
noStroke();
fill(col.r, col.g, col.b, 120);
ellipse(spot.x, spot.y, random(20, 70), random(20,70));
}