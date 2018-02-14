// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var img;
function preload() {
  img = loadImage('Asset.jpg');
}

function setup(){
  createCanvas(800,800);
  background(0);
  noStroke();
  image(img, 0,0);
}

function draw(){
  fill(255,0,0);
  ellipse(mouseX, mouseY, 5, 5);
  text(mouseX + "," + mouseY,mouseX, mouseY);
}
