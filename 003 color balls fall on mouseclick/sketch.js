let bubble = [];
let previousIsPressed = false;
	
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(240);
	if (mouseIsPressed && !previousIsPressed) {
	   bubble.push(new Bubble(mouseX, mouseY));
	}
	
	for (let i = 0; i < bubble.length; i ++) {
		bubble[i].show();
		bubble[i].move();
	}
	previousIsPressed = mouseIsPressed;
}
