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
var p2Width = 16;
var p2Height = 80;
var p2X = board.rightSide - p2Width;
var p2Y = board.height * 0.5;
var p2Color = "white";
var paddle2 = new Paddle(p2X, p2Y, p2Width, p2Height, p2Color);

paddle2.velocity.setLength(14);

paddle2.setMoveUpKey(38);
paddle2.setMoveDownKey(40);

/*#############################################################################################
BALL
#############################################################################################*/
//TASK: Create a variable named bX. Assign it the number equal to half of the board's width.
var bX = boardWidth * 0.5;

//TASK: Create a variable named bY. Assign it the number equal to half of the board's height.
var bY = boardHeight * 0.5;

//TASK: Create a variable named bRadius. Assign it the number 12.
var bRadius = 12;

//TASK: Create a variable named bColor. Assign it the string "white".
var bColor = "white";

//TASK: Create a variable named ball. Use the Ball Class to store a ball object inside ball.
//pass the the following arguments into the class constructor: (bX, bY, bRadius, bColor)
var ball = new Ball(bX, bY, bRadius, bColor);


//TASK: Set the length of ball.velocity to the number 10.
ball.velocity.setLength(10);

//TASK: Set the angle of ball.velocity to the angle (Math.PI * 0.25)
ball.velocity.setAngle(Math.PI * 0.25);



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
	paddle2.draw();

	if(paddle2.moveUpKeyActivated()){
		paddle2.velocity.setAngle(1.5 * Math.PI);
		paddle2.position.add(paddle2.velocity);
	}

	if(paddle2.moveDownKeyActivated()){
		paddle2.velocity.setAngle(0.5 * Math.PI);
		paddle2.position.add(paddle2.velocity);
	}

	if(paddle2.topWallCollision()){
		paddle2.position.setY(board.topSide);
	}

	if(paddle2.bottomWallCollision()){
		paddle2.position.setY(board.bottomSide - paddle2.getHeight());
	}


	/*######################################################
	BALL ANIMATION
	######################################################*/

	//TASK: Call ball's draw() method.
	ball.draw();

	//TASK: Add ball.velocity to ball.position.
	ball.position.add(ball.velocity);

	//TASK: Use a conditional statement. If ball collides with the bottom wall,
	//set ball.position's y-value equal to (the board's bottom side minus ball's radius)
	//and flip the y-direction of ball.
	if(ball.bottomWallCollision()){
		ball.position.setY(board.bottomSide - ball.getRadius());
		ball.flipYDir();
	}

	
	//TASK: Use a conditional statement. If ball collides with the top wall,
	//set ball.position's y-value equal to (the board's top side plus ball's radius)
	//and flip the y-direction of ball.
	if(ball.topWallCollision()){
		ball.position.setY(board.topSide + ball.getRadius());
		ball.flipYDir();
	}


	//TASK: Use a conditional statement. If ball collides with paddle1,
	//set ball.position's x-value equal to (the board's left side plus paddle1's
	//width plus ball's radius). Then flip the x-direction of ball.
	if(ball.paddleCollision(paddle1)){
		ball.position.setX(board.leftSide + paddle1.width + ball.getRadius());
		ball.flipXDir();
	}


	//TASK: Use a conditional statement. If ball collides with paddle2,
	//set ball.position's x-value equal to (the board's right side minus paddle2's
	//width minus ball's radius). Then flip the x-direction of ball.
	if(ball.paddleCollision(paddle2)){
		ball.position.setX(board.rightSide - paddle2.width - ball.getRadius());
		ball.flipXDir();
	}


	window.requestAnimationFrame(update);
}//update()
