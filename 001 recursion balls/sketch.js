
let angle = 0;
let slider;

function setup() {
  createCanvas(500, 500);
  slider = createSlider(0, 360, 0);
  slider.size(400);
  slider.position(50, 70);
}


function draw() {
  background(117, 28, 103);
  angle = map(slider.value(), 0, 360, 0, TWO_PI);
  textSize(36);
  fill(255);
  text(slider.value() + "\xB0", 222, 40);
  stroke(255);
  translate(250, height);
  branch(250);


}

function branch(len) {
  noFill();
  ellipse(0, 0, len, len);
  translate(0, -0.5 * len);
  if (len > 10) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}