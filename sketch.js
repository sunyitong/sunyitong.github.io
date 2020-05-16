
function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(100);
  stroke(255,0,0);
  strokeWeight(8);
  noFill();
  ellipse(320, 240,mouseX,mouseY);
}
