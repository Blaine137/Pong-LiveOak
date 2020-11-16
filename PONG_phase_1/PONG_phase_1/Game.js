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

//TASK: Create a variable named p1X. Assign it the number 0.
var p1X = 0;

//TASK: Create a variable named p1Y. Assign it the number equal to half of the board's height.
var p1Y = board.height * 0.5;

//TASK: Create a variable named p1Width. Assign it the number 16.
var p1Width = 16;

//TASK: Create a variable named p1Height. Assign it the number 80.
var p1Height = 80;

//TASK: Create a variable named p1Color. Assign it the string "white".
var p1Color = "white";

//TASK: Create a variable named paddle1. Use the Paddle Class to store a paddle object inside paddle1.
//pass the the following arguments into the class constructor: (p1X, p1Y, p1Width, p1Height, p1Color)
var paddle1 = new Paddle(p1X, p1Y, p1Width, p1Height, p1Color);

//TASK: Set the length of paddle1.velocity to the number 14.
paddle1.velocity.setLength(14);

//Set paddle1's move-up key to the keycode for the "W" key found on your keyboard.
paddle1.setMoveUpKey(87);

//Set paddle1's move-down key to the keycode for the "S" key found on your keyboard.
paddle1.setMoveDownKey(83);


/*#############################################################################################
UPDATE FUNCTION
#############################################################################################*/
function update(){
	//TASK: Call the board's clear() method.
	board.clear();

	/*######################################################
	PADDLE 1 ANIMATION
	######################################################*/
	//TASK: Call paddle1's draw() method.
	paddle1.draw();

	//TASK: Use a conditional statement. If the paddle1 "move up" key is activated,
	//set paddle1.velocity's angle to (1.5 * Math.PI) and add paddle1.velocity
	//to paddle1.position.
	if(paddle1.moveUpKeyActivated()){
		paddle1.velocity.setAngle(1.5 * Math.PI);
		paddle1.position.add(paddle1.velocity);
	}


	//TASK: Use a conditional statement. If the paddle1 "move down" key is activated,
	//set paddle1.velocity's angle to (0.5 * Math.PI) and add paddle1.velocity
	//to paddle1.position.
	if(paddle1.moveDownKeyActivated()){
		paddle1.velocity.setAngle(0.5 * Math.PI);
		paddle1.position.add(paddle1.velocity);
	}

	//TASK: Use a conditional statement. If paddle1 collides with the top wall,
	//set paddle1.position's y-value to the board's top side.
	if(paddle1.topWallCollision()){
		paddle1.position.setY(board.topSide);
	}

	//TASK: Use a conditional statement. If paddle1 collides with the bottom wall,
	//set paddle1.position's y-value to (the board's bottom side minus paddle1's height).
	if(paddle1.bottomWallCollision()){
		paddle1.position.setY(board.bottomSide - paddle1.height);
	}

	window.requestAnimationFrame(update);
}//update()
