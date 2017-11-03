let x = 0
let y = 0
let speedx = 10
let speedy = 10
let r = 0
let g = 127
let b = 255
let speedr = 2
let speedg = 3
let speedb = -4

function setup() {
	createCanvas(400,400);
}

function draw() {
   background(100, 150, 200);
   stroke(255);
   strokeWeight(4);
   fill(r, g, b);
   ellipse(x, y, 100, 100);

   if (x > width) {
      speedx = -8;
      
   }

   if (x < 0) {
      speedx = 10;
   }

   if (y > height) {
      speedy = -5;
      
   }

   if (y < 0) {
      speedy = 10;
   }
 
   if (r < 0) {
      speedr = 2;
   }

   if (r > 255) {
      speedr = -2;
   }

   if (g < 0) {
      speedg = 3;
   }

   if (g > 255) {
      speedg = -3;
   }

   if (b < 0) {
      speedb = 4;
   }

   if (b > 255) {
      speedb = -4;
   }
   x = x + speedx;

   y = y + speedy;

   r = r + speedr;
   g = g + speedg;
   b = b + speedb;
   

}