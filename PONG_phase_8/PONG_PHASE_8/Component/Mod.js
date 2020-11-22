class Mod extends Circle {
	/*
		The constructor is used for creating new Mod objects.
		It is also where the class's properties are defined.
	*/
	constructor(x,y,r,c){
		super(x,y,r,c);

		this.position = new Vector(x, y);
		this.velocity = new Vector(0,0);

		this.collision = new Collision();

		this.active = false;
	}

	/*
		bottomWallCollision() returns true if the mod collides with the
		bottom wall or moves past the bottom wall. Otherwise, it returns false. 
	*/
	bottomWallCollision(){
		if((this.position.getY() + this.getRadius()) > GLOBALS.board.bottomSide){
			return true;
		}
		return false;
	}

	/*
		topWallCollision() returns true if the mod collides with the
		top wall or moves past the top wall. Otherwise, it returns false. 
	*/
	topWallCollision(){
		if((this.position.getY() - this.getRadius()) < GLOBALS.board.topSide){
			return true;
		}
		return false;
	}

	/*
		rightWallCollision() returns true if the mod collides with the
		right wall or moves past the right wall. Otherwise, it returns false. 
	*/
	rightWallCollision(){
		if((this.position.getX() + this.getRadius()) > GLOBALS.board.rightSide){
			return true;
		}
		return false;
	}

	/*
		leftWallCollision() returns true if the mod collides with the
		left wall or moves past the left wall. Otherwise, it returns false. 
	*/
	leftWallCollision(){
		if((this.position.getX() - this.getRadius()) < GLOBALS.board.leftSide){
			return true;
		}
		return false;
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
		ballCollision() has one parameter, so it takes one argument. 
		The argument must be a ball object. ballCollision() returns
		true if mod1 collides with ball, otherwise it returns false.
	*/
	ballCollision(ball){
		let hit = this.collision.circleVsCircle(this, ball);

		if(hit){
			return true;
		}
		else {
			return false;
		}
	}

}//Mod