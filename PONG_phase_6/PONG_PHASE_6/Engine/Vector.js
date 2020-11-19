class Vector {
	constructor(x, y){
		this._x = x;
		this._y = y;
		this.startX = null;
		this.startY = null;
		this.endX = null;
		this.endY = null;
	}

	copy(){
		return this;
	}

	getX(){
		return this._x;
	}

	getY(){
		return this._y;
	}

	setX(x){
		this._x = x;
	}

	setY(y){
		this._y = y;
	}

	setXY(x,y){
		this._x = x;
		this._y = y;
	}

	mul(scaler){
		this._x *= scaler;
		this._y *= scaler;
	}

	div(scaler){
		this._x /= scaler;
		this._y /= scaler;
	}

	add(vector){
		this._x += vector.getX();
		this._y += vector.getY();
	}

	sub(vector){
		this._x -= vector.getX();
		this._x -= vector.getY();
	}

	getAngle(){
		return Math.atan2(this._y, this._x);
	}

	setAngle(angle){
		let length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	}

	getRelativeAngleBetween(vector){
		let initialX = this.getX();
		let initialY = this.getY(); 

		let terminalX = vector.getX();
		let terminalY = vector.getY();

		let diffX = (terminalX - initialX);
		let diffY = (terminalY - initialY);

		return Math.atan2(diffY, diffX);
	}

	getAngleBetween(v){
		let dot = this.getDot(v);
		let length1 = this.getLength();
		let length2 = v.getLength();
		let angleBetween = Math.acos(dot/(length1 * length2));

		return angleBetween;
	}

	getDot(v){
		let dot = (this._x * v.getX()) + (this._y * v.getY());
		return dot;
	}

	getLength(){
		let sum_of_squares = (this._x * this._x) + (this._y * this._y);
		return Math.sqrt(sum_of_squares);
	}

	setLength(length){
		let angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	}

	setStartPoint(x,y){
		this.startX = x;
		this.startY = y;
	}

	setEndPoint(x,y){
		this.startX = x;
		this.startY = y;
	}

	getStartPoint(){
		return {x: this.startX, y: this.startY};
	}

	getEndPoint(){
		return {x: this.endX, y: this.endY};
	}

	setRandomAngle(min,max){
		let randomAngle = Math.random() * (max - min) + min;
		randomAngle.toFixed(2);
		this.setAngle(randomAngle);
	}

	setRandomLength(min,max){
		let randomLength = Math.random() * (max - min) + min;
		randomLength.toFixed(2);
		this.setLength(randomLength);
	}
}//Vector 


