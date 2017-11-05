// NEW EMPTY FILE - bubbleclass.js
// x, y coordinatoren
// d is de diameter, r de straal
// vx de horizontale snelheid, vy de verticale
// accx en accy zijn de versnellingen in x en y richting

class Bubble {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.d = random(5, 50);
		this.vx = 0;
		this.vy = -5;
		this.accx = 0;
		this.accy = 0.5;
		this.r = this.d / 2;
	}
		
	show() {
		// kleur mappen aan de hoogte
		colorMode(HSB);
		let col = map(this.y, 0, windowHeight, 0, 360);
		noStroke();
		fill(col, 100, 100);
		ellipse(this.x, this.y, this.d);
	}
	
	
	move() {
		if (this.y >= (windowHeight - this.r) && this.vy > 0) {
			this.vy = (this.vy - this.accy) * -0.95;
		}
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
		this.vx = this.vx + this.accx;
		this.vy = this.vy + this.accy;
	}
	
}
