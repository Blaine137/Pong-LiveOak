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

var cdX = board.width * 0.5;
var cdY = board.height * 0.5;
var cdText = 3;
var cdFontFamily = "Comic Sans MS";
var cdFontSize = "80px";
var cdFontColor = "white";
var countdown = new Countdown(cdX, cdY, cdText, cdFontFamily, cdFontSize, cdFontColor);
var countdownCounter = 180;
countdown.active = true;

/*#############################################################################################
MOD 1
#############################################################################################*/
//TASK: Create a variable named m1X. Assign it the number equal to one-quarter of the board's width.
var m1X = board.width * 0.25;

//TASK: Create a variable named m1Y. Assign it the number equal to one-half of the board's height.
var m1Y = board.height * 0.5;

//TASK: Create a variable named m1Radius. Assign it the number 8.
var m1Radius = 8;

//TASK: Create a variable named m1Color. Assign it the string "blue".
var m1Color = "blue";

//TASK: Create a variable named mod1. Use the Mod Class to store a mod object 
//inside mod1. Pass the following arguments into the class constructor: 
//(m1X, m1Y, m1Radius, m1Color)
var mod1 = new Mod(m1X, m1Y, m1Radius, m1Color);


//TASK: Set the length of mod1.velocity to the number 4.
mod1.velocity.setLength(4);

//TASK: Set the angle of mod1.velocity to (Math.PI * 0.75)
mod1.velocity.setAngle(Math.PI * 0.75);


//TASK: Create a variable named mod1Counter. Assign it the value 360.
var mod1Counter = 360;



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
	if(countdown.active == false){
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
		countdown.active = true;
	}

	if(ball.rightWallCollision()){
		scoreboard1.incrementScore();
		ball.position.setX(bX);
		ball.position.setY(bY);
		countdown.active = true;
	}

	/*######################################################
	COUNTDOWN ANIMATION
	######################################################*/
	if(countdown.active){
		countdown.draw();

		if(countdownCounter == 120){
			countdown.decrementCount();
		}

		if(countdownCounter == 60){
			countdown.decrementCount();
		}

		if(countdownCounter == 0){
			countdown.active = false;
			countdown.setCount(3);
			countdownCounter = 180;
		}

		countdownCounter--;
	}

	/*######################################################
	MOD 1 ANIMATION
	######################################################*/
	//TASK: Call mod1's draw() method.
	mod1.draw();

	//TASK: Add mod1.velocity to mod1.position
	mod1.position.add(mod1.velocity);


	//TASK: Use a conditional statement. If mod1 collides with the board's top wall,
	//set mod1.position's y-value to (the board's top side plus mod1's radius) and
	//flip mod1's y-direction
	if(mod1.topWallCollision()){
		mod1.position.setY(board.topSide - mod1.getRadius());
		mod1.flipYDir();
	} 


	//TASK: Use a conditional statement. If mod1 collides with the board's bottom wall,
	//set mod1.position's y-value to (the board's bottom side minus mod1's radius) and
	//flip mod1's y-direction
	if(mod1.bottomWallCollision()){
		mod1.position.setY(board.bottomSide - mod1.getRadius());
		mod1.flipYDir();
	} 


	//TASK: Use a conditional statement. If mod1 collides with the board's left wall,
	//set mod1.position's x-value to (the board's left side plus mod1's radius) and
	//flip mod1's x-direction 
	if(mod1.leftWallCollision()){
		mod1.position.setX(board.leftSide + mod1.getRadius());
		mod1.flipXDir();
	}


	//TASK: Use a conditional statement. If mod1 collides with the board's right wall,
	//set mod1.position's x-value to (the board's right side minus mod1's radius) and
	//flip mod1's x-direction
	if(mod1.rightWallCollision()){
		mod1.position.setX(board.rightSide - mod1.getRadius());
		mod1.flipXDir();
	} 


	//TASK: Use a conditional statement. If mod1 collides with the ball,
	//set ball.velocity's length to the number 15, and assign mod1.active
	//the boolean value true	
	if(mod1.ballCollision(ball)){
		ball.velocity.setLength(15);
		mod1.active = true;
	}


	//TASK: Write the condition for the conditional statement below.
	//If mod1.active is equal to the boolean true, run the code
	//inside the conditional statement's body.
	if(mod1.active == true){
		//TASK: Use a conditional statement. If mod1Counter is greater than 0,
		//decrement mod1Counter using the decrement operator.
		if(mod1Counter > 0){
			mod1Counter--;
		}

		//TASK: Use a conditional statement. If mod1Counter is equal to 0,
		//set ball.velocity's length to the number 10, assign mod1Counter
		//the number 360, and assign mod1.active the boolean value false.
		if(mod1Counter == 0){
			ball.velocity.setLength(10);
			mod1Counter = 360;
			mod1.active = false;
		}

	}
	window.requestAnimationFrame(update);
}//update()
