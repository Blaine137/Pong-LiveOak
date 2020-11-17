/*#############################################################################################
BOARD
#############################################################################################*/
var boardWidth = 1100;
var boardHeight = 600;
var boardColor = "black";
var boardBorderWidth = 3;
var boardBorderColor = "gray";
var board = new Board(boardWidth, boardHeight, boardColor, boardBorderWidth, boardBorderColor);
board.start();

/*#############################################################################################
GLOBALS
#############################################################################################*/
GLOBALS.keyListener();
GLOBALS.store("board", board);

/*#############################################################################################
PADDLE 1
#############################################################################################*/
var p1X = 0;
var p1Y = board.height * 0.5;
var p1Width = 16;
var p1Height = 80;
var p1Color = "white";
var paddle1 = new Paddle(p1X, p1Y, p1Width, p1Height, p1Color);

paddle1.velocity.setLength(14);

paddle1.setMoveUpKey(87);
paddle1.setMoveDownKey(83);


/*#############################################################################################
PADDLE 2
#############################################################################################*/
//TASK: Create a variable named p2Width. Assign it the number 16.
var p2Width = 16;

//TASK: Create a variable named p2Height. Assign it the number 80.
var p2Height = 80;

//TASK: Create a variable named p2X. Assign it the number equal to the board's rightSide minus
//p2Width
var p2X = board.rightSide - p2Width;

//TASK: Create a variable named p2Y. Assign it the number equal to half of the board's height.
var p2Y = boardHeight * 0.5;

//TASK: Create a variable named p2Color. Assign it the number equal to the string "white".
var p2Color = "white";

//TASK: Create a variable named paddle2. Use the Paddle Class to store a paddle object inside paddle2.
//pass the the following arguments into the class constructor: (p2X, p2Y, p2Width, p2Height, p2Color)
var paddle2 = new Paddle(p2X, p2Y, p2Width, p2Height, p2Color);


//TASK: Set the length of paddle2.velocity to the number 14.
paddle2.velocity.setLength(14);


//TASK: Set paddle2's move-up key to the keycode for the up-arrow key found on your keyboard.
paddle2.setMoveUpKey(38);

//TASK: Set paddle2's move-down key to the keycode for the down-arrow key found on your keyboard.
paddle2.setMoveDownKey(40);



/*#############################################################################################
UPDATE FUNCTION
#############################################################################################*/
function update(){
	board.clear();

	/*######################################################
	PADDLE 1 ANIMATION
	######################################################*/
	paddle1.draw();

	if(paddle1.moveUpKeyActivated()){
		paddle1.velocity.setAngle(1.5 * Math.PI);
		paddle1.position.add(paddle1.velocity);
	}

	if(paddle1.moveDownKeyActivated()){
		paddle1.velocity.setAngle(0.5 * Math.PI);
		paddle1.position.add(paddle1.velocity);
	}

	if(paddle1.topWallCollision()){
		paddle1.position.setY(board.topSide);
	}

	if(paddle1.bottomWallCollision()){
		paddle1.position.setY(board.bottomSide - paddle1.getHeight());
	}

	/*######################################################
	PADDLE 2 ANIMATION
	######################################################*/
	//TASK: Call paddle2's draw() method.
	paddle2.draw();

	//TASK: Use a conditional statement. If the paddle2 "move up" key is activated,
	//set paddle2.velocity's angle to (1.5 * Math.PI) and add paddle2.velocity
	//to paddle2.position.
	if(paddle2.moveUpKeyActivated()){
		paddle2.velocity.setAngle(1.5 * Math.PI);
		paddle2.position.add(paddle2.velocity);
	}


	//TASK: Use a conditional statement. If the paddle2 "move down" key is activated,
	//set paddle2.velocity's angle to (0.5 * Math.PI) and add paddle2.velocity
	//to paddle2.position.
	if(paddle2.moveDownKeyActivated()){
		paddle2.velocity.setAngle(0.5 * Math.PI);
		paddle2.position.add(paddle2.velocity);
	}


	//TASK: Use a conditional statement. If paddle2 collides with the top wall,
	//set paddle2.position's y-value to the board's top side.
	if(paddle2.topWallCollision()){
		paddle2.position.setY(board.topSide);
	}

	//TASK: Use a conditional statement. If paddle2 collides with the bottom wall,
	//set paddle2.position's y-value to the board's bottom side minus paddle2's height.
	if(paddle2.bottomWallCollision()){
		paddle2.position.setY(board.bottomSide - paddle2.height);
	}


	window.requestAnimationFrame(update);
}//update()
