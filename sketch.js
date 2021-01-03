function setup() {
  createCanvas(windowWidth, windowHeight);
}

let width = 20;
let height = 20;
let color = 0;
let stroke = 0;
let opacity = 255;

function draw() {
  
  if (keyIsDown(BACKSPACE)) {
    background(255);
  }
 
  if (mouseIsPressed) {
    fill(color,opacity);
    strokeWeight(stroke)
    ellipse(mouseX, mouseY, width, height)
  } 


}
function keyTyped() {
  if (key === 'w') {
    color = 255;
    stroke = 1;
  } else if (key === 'b') {
    color = 0;
    stroke = 0;
  } else if (key === 'e') {
    color = 255;
    stroke = 0;
  } 
  
  if (key === '2') {
    width = width+5;
    height = height+5;
  } else if (key === '1') {
    width = width-5;
    height = height-5;
  }

  if (height < 5) {
    height = 5;
    width = 5;
  }
  
  if (key === '3') {
    opacity = opacity-40;
  } else if (key === '4') {
    opacity = opacity+40;
  }

  if (opacity < 10) {
    opacity = 10;
  } else if (opacity > 255) {
    opacity = 255;
  }
}
