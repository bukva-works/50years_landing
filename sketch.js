function setup() {
  createCanvas(1920, 1080);
}

function draw() {
	
	background(255);
	fill(255)
	ellipse (1000,540,50,200);
	
	fill (200,100,100);
	stroke (0);
	strokeWeight (2);
	rect (mouseX,mouseY,30,160, 20);

	
	fill (255)
	ellipse (1025,540,50,200);
	line (1015,600,1040,570);
	line (1015,570,1040,540);
	line (1015,540,1040,510);
	line (1015,510,1040,480);
	
}
