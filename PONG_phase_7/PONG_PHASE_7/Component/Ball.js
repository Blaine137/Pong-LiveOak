class Ball extends Circle {
	/*
		The constructor is used for creating new Ball objects.
		It is also where the class's properties are defined.
	*/
	constructor(x,y,r,c){
		super(x,y,r,c);

		this.position = new Vector(x, y);
		this.velocity = new Vector(0,0);

		this.collision = new Collision();
	}

	/*
		bottomWallCollision() returns true if the ball collides with the
		bottom wall or moves past the bottom wall. Otherwise, it returns false. 
	*/
	bottomWallCollision(){
		if((this.position.getY() + this.getRadius()) > GLOBALS.board.bottomSide){
			return true;
		}
		else {
			return false;
		}
	}

	/*
		topWallCollision() returns true if the ball collides with the
		top wall or moves past the top wall. Otherwise, it returns false. 
	*/
	topWallCollision(){
		if((this.position.getY() - this.getRadius()) < GLOBALS.board.topSide){
			return true;
		}
		else {
			return false;
		}
	}

	/*
		rightWallCollision() returns true if the ball collides with the
		right wall or moves past the right wall. Otherwise, it returns false. 
	*/
	rightWallCollision(){
		if((this.position.getX() + this.getRadius()) > GLOBALS.board.rightSide){
			return true;
		}
		else {
			return false;
		}
	}

	/*
		leftWallCollision() returns true if the ball collides with the
		left wall or moves past the left wall. Otherwise, it returns false. 
	*/
	leftWallCollision(){
		if((this.position.getX() - this.getRadius()) < GLOBALS.board.leftSide){
			return true;
		}
		else {
			return false;
		}
	}

	/*
		flipXDir() flips the x-direction of the velocity vector.
	*/
	flipXDir(){
		let vx = this.velocity.getX() * -1;
		this.velocity.setX(vx);
	}

	/*
		flipYDir() flips the y-direction of the velocity vector.
	*/
	flipYDir(){
		let vy = this.velocity.getY() * -1;
		this.velocity.setY(vy);
	}

	/*
		paddleCollision() has one parameter so it takes one argument.
		paddleCollision() returns true if ball collides with the
		paddle object passed as an argument. Otherwise, it returns false.
	*/
	paddleCollision(paddle){
		let hit = this.collision.circleVsRectangle(this, paddle);
		if(hit){
			return true;
		}
		else {
			return false;
		}
	}

}//Ball