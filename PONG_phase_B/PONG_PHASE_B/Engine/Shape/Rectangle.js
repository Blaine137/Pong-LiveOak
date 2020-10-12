class Rectangle extends Shape{
	constructor(x, y, w, h, c){
		super();

		this.position = new Vector(x,y);

		this.width = w;
		this.height = h;
		this.color = c;
		this.topSide = this.position.getY();
		this.bottomSide = this.position.getY() + this.height;
		this.leftSide = this.position.getX();
		this.rightSide = this.position.getX() + this.width;

		this.centerX = this.position.getX() + this.width * 0.5;
		this.centerY = this.position.getY() + this.height * 0.5;
	}

	draw(){
		this.context.fillStyle = this.color;
		this.context.fillRect(this.getX(), this.getY(), this.width, this.height);
		this.context.closePath();
	}

	overlayImage(url){
		this.image = new Image();
		this.image.src = url;
		this.context.drawImage(this.image, this.position.getX(), this.position.getY(), this.width, this.height);
	}

	getX(){
		return this.position.getX();
	}

	getY(){
		return this.position.getY();
	}

	setX(x){
		this.x = x;
		this.resetSides();
	}

	setY(y){
		this.y = y;
		this.resetSides();
	}

	getWidth(){
		return this.width;
	}

	getHeight(){
		return this.height;
	}

	getColor(){
		return this.color;
	}

	setWidth(w){
		this.width = w;
		this.resetSides();
	}

	setHeight(h){
		this.height = h;
		this.resetSides();
	}

	setColor(c){
		this.color = c
	}

	resetSides(){
		this.topSide = this.y;
		this.bottomSide = this.y + this.height;
		this.leftSide = this.x;
		this.rightSide = this.x + this.width;
	}

	getCenterX(){
		let cx = this.position.getX() + this.width * 0.5;
		return cx;
	}

	getCenterY(){
		let cy = this.position.getY() + this.height * 0.5;
		return cy;
	}

}