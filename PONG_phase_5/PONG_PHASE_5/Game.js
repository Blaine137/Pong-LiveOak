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
var bX = board.width * 0.5;
var bY = board.height * 0.5;
var bRadius = 12;
var bColor = "white";
var ball = new Ball(bX, bY, bRadius, bColor);
ball.velocity.setLength(10);
ball.velocity.setAngle(Math.PI * 0.25);

/*#############################################################################################
SCOREBOARD 1
#############################################################################################*/
var s1X = board.leftSide + 220;
var s1Y = 60;
var s1Score = 0;
var s1FontFamily = "Comic Sans MS";
var s1FontSize = "40px";
var s1FontColor = "white";
var scoreboard1 = new Scoreboard(s1X, s1Y, s1Score, s1FontFamily, s1FontSize, s1FontColor);

/*#############################################################################################
SCOREBOARD 2
#############################################################################################*/
var s2X = board.rightSide - 220;
var s2Y = 60;
var s2Score = 0;
var s2FontFamily = "Comic Sans MS";
var s2FontSize = "40px";
var s2FontColor = "white";
var scoreboard2 = new Scoreboard(s2X, s2Y, s2Score, s2FontFamily, s2FontSize, s2FontColor);

/*#############################################################################################
COUNTDOWN
#############################################################################################*/

//TASK: Create a variable named cdX. Assign it the number equal to half the board's width.

//TASK: Create a variable named cdY. Assign it the number equal to half the board's height.

//TASK: Create a variable named cdText. Assign it the number 3.

//TASK: Create a variable named cdFontFamily. Assign it the string "Comic Sans MS".

//TASK: Create a variable named cdFontSize. Assign it the string "80px".

//TASK: Create a variable named cdFontColor. Assign it the string "white".

//TASK: Create a variable named countdown. Use the CountDown Class to store a count down object 
//inside countdown. Pass the following arguments into the class constructor: 
//(cdX, cdY, cdText, cdFontFamily, cdFontSize, cdFontColor)


//TASK: Create a variable named countdownCounter. Assign it the number 180.

//TASK: Assign countdown.active the boolean value true.


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
	//TASK: Write the condition for the conditional statement below.
	//If countdown.active is equal to the boolean false, run the code
	//inside the conditional statement's body.
	if(true){
		ball.draw();
		ball.position.add(ball.velocity);

		if(ball.bottomWallCollision()){
			ball.position.setY(board.bottomSide - ball.getRadius());
			ball.flipYDir();
		}
			
		if(ball.topWallCollision()){
			ball.position.setY(board.topSide + ball.getRadius());
			ball.flipYDir();
		}

		if(ball.paddleCollision(paddle1)){
			ball.setX(board.leftSide + paddle1.getWidth() + ball.getRadius());
			ball.flipXDir();
		}

		if(ball.paddleCollision(paddle2)){
			ball.setX(board.rightSide - paddle2.getWidth() - ball.getRadius());
			ball.flipXDir();
		}
	}

	/*######################################################
	SCOREBOARD ANIMATION
	######################################################*/
	scoreboard1.draw();
	scoreboard2.draw();

	if(ball.leftWallCollision()){
		scoreboard2.incrementScore();
		ball.position.setX(bX);
		ball.position.setY(bY);
		//TASK: Assign countdown.active the boolean value true
	}

	if(ball.rightWallCollision()){
		scoreboard1.incrementScore();
		ball.position.setX(bX);
		ball.position.setY(bY);
		//TASK: Assign countdown.active the boolean value true
	}

	/*######################################################
	COUNTDOWN ANIMATION
	######################################################*/
	//TASK: Write the condition for the conditional statement below.
	//If countdown.active is equal to the boolean true, run the code
	//inside the conditional statement's body.
	if(true){
		//TASK: Call countdown's draw() method.


		//TASK: Use a conditional statement. If countdownCounter is equal to 120,
		//decrement countdown.


		//TASK: Use a conditional statement. If countdownCounter is equal to 60,
		//decrement countdown.


		//TASK: Use a conditional statement. If countdownCounter is equal to 0,
		//assign countdown.active the boolean value false, set countdown's text to the
		//number 3, and assign countdownCounter the number 180.


		//TASK: Decrement countdownCounter using the decrement operator.
		
	}


	window.requestAnimationFrame(update);
}//update()
