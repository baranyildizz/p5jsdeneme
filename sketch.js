// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces


function setup(){
  createCanvas(800,800);
  background(0);
  noStroke();
}

function draw(){
  fill(255,0,0);
  ellipse(mouseX, mouseY, 5, 5);
  text(mouseX + "," + mouseY,mouseX, mouseY);
}
