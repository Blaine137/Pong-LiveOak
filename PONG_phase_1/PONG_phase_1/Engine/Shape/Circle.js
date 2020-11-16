class Circle extends Shape {
	constructor(x, y, r, c){
		super();
		this.radius = r;
		this.color = c;
		this.position = new Vector(x, y);

		this.leftSide = this.position.getX() - this.getRadius();
		this.rightSide = this.position.getX() + this.getRadius();
		this.topSide = this.position.getY() - this.getRadius();
		this.bottomSide = this.position.getY() + this.getRadius();
	} 

	draw(){
		this.context.fillStyle = this.color;
		this.context.beginPath();
		this.context.arc(this.position.getX(), this.position.getY(), this.radius, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.fill();
		this.context.closePath();
	}

	overlayImage(url){
		this.image = new Image();
		this.image.src = url;
		this.context.drawImage(this.image, this.position.getX() - this.radius, this.position.getY() - this.radius, this.radius*2, this.radius*2);
	}

	getX(){
		return this.position.getX();
	}

	getY(){
		return this.position.getY();
	}

	setX(x){
		this.position.setX(x);
		this.resetSides();
	}

	setY(y){
		this.position.setY(y);
		this.resetSides();
	}

	getRadius(){
		return this.radius;
	}

	setRadius(r){
		this.radius = r;
	}

	getColor(){
		return this.color;
	}

	setColor(c){
		this.color = c;
	}

	resetSides(){
		this.leftSide = this.position.getX() - this.getRadius();
		this.rightSide = this.position.getX() + this.getRadius();
		this.topSide = this.position.getY() - this.getRadius();
		this.bottomSide = this.position.getY() + this.getRadius();
	}

}