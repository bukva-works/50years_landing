function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  
  if (mouseIsPressed) {
    fill(255);
  } else {
    noFill();
  }
    rect(mouseX, mouseY, 15, 30);
    rect(mouseX+40, mouseY, 15, 30);
}
