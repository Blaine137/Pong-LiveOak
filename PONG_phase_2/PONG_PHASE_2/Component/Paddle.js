class Paddle extends Rectangle {
	/*
		The constructor is used for creating new Paddle objects.
		It is also where the class's properties are defined.
	*/
	constructor(x, y, w, h, c){
		super(x, y, w, h, c);

		this.position = new Vector(x, y);
		this.velocity = new Vector(0,0);

		this.moveUpKey = null;
		this.moveDownKey = null;
	}

	/*
		setMoveUpKey() has one parameter, so it it takes one argument.
		It sets the moveUpKey property to the parameter k. The argument
		should be a keycode.
	*/
	setMoveUpKey(k){
		this.moveUpKey = k;
	}

	/*
		setMoveDownKey() has one parameter, so it it takes one argument.
		It sets the moveDownKey property to the parameter k. The argument
		should be a keycode.
	*/
	setMoveDownKey(k){
		this.moveDownKey = k;
	}

	/*
		moveUpKeyActivated() returns true if the moveUpKey is pressed down.
		Otherwise, it returns false.
	*/
	moveUpKeyActivated(){
		if(GLOBALS.keys[this.moveUpKey]){
			return true;
		}
		else{
			return false;
		}
	}

	/*
		moveDownKeyActivated() returns true if the moveDownKey is pressed down.
		Otherwise, it returns false.
	*/
	moveDownKeyActivated(){
		if(GLOBALS.keys[this.moveDownKey]){
			return true;
		}
		else {
			return false;
		}
	}

	/*
		topWallCollision() returns true if the paddle collides with the
		top wall or moves past the top wall. Otherwise, it returns false. 
	*/
	topWallCollision(){
		if(this.position.getY() < GLOBALS.board.topSide){
			return true;
		}
		else{
			return false;
		}
	}

	/*
		bottomWallCollision() returns true if the paddle collides with the
		bottom wall or moves past the bottom wall. Otherwise, it returns false. 
	*/
	bottomWallCollision(){
		if((this.position.getY() + this.getHeight()) > GLOBALS.board.bottomSide){
			return true;
		}
		else {
			return false;
		}
	}
}//Paddle