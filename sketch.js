function setup() {
  createCanvas(windowWidth, windowHeight);
}

let width = 20;
let height = 20;
let color = 0;
let stroke = 0;
let back = 0;
function draw() {
  if (mouseIsPressed) {
    fill(color,100);
    strokeWeight(stroke)
  } else {
    fill(color,0);
    strokeWeight(0)
  }

  ellipse(mouseX, mouseY, width, height);

  background(255,back);
}
function keyTyped() {
  if (key === 'w') {
    color = 255;
    stroke = 1;
  } else if (key === 'b') {
    color = 0;
    stroke = 0;
  }
  
  if (key === 'e') {
    width = width+10;
    height = height+10;
  } else if (key === 'q') {
    width = width-10;
    height = height-10;
  }
  
}
