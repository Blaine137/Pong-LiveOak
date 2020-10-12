/*#############################################################################################
BOARD
#############################################################################################*/
var boardWidth = 800;
var boardHeight = 600;
var boardColor = "white";
var boardBorderWidth = "3px";
var boardBorderColor = "gray";
var board = new Board(boardWidth, boardHeight, boardColor, boardBorderWidth, boardBorderColor);
board.start();


/*#############################################################################################
CIRCLE 1
#############################################################################################*/
var c1X = 400;
var c1Y = 300;
var c1Radius = 20;
var c1Color = "blue";
var circle1 = new Circle(c1X, c1Y, c1Radius, c1Color);

var c1Velocity = new Vector(0,0);
c1Velocity.setLength(1);
c1Velocity.setAngle(0);

/*#############################################################################################
CIRCLE 2
#############################################################################################*/
var c2X = 400;
var c2Y = 150;
var c2Radius = 40;
var c2Color = "red";
var circle2 = new Circle(c2X, c2Y, c2Radius, c2Color);

var c2Velocity = new Vector(0,0);
c2Velocity.setLength(4);
c2Velocity.setAngle(Math.PI);

/*#############################################################################################
RECTANGLE
#############################################################################################*/

var rX = 100;
var rY = 100;
var rWidth = 40;
var rHeight = 60;
var rColor = "Green";
var rectangle = new Rectangle(rX, rY, rWidth, rHeight, rColor);

var rVelocity = new Vector(0,0);
rVelocity.setLength(8);
rVelocity.setAngle(0.5 * Math.PI);


/*#############################################################################################
UPDATE FUNCTION
#############################################################################################*/
function update(){
	board.clear();

	circle1.draw();
	circle1.position.add(c1Velocity);

	circle2.draw()
	circle2.position.add(c2Velocity);

	rectangle.draw();
	rectangle.position.add(rVelocity);

	//TASK: Use a conditional statement. If the circle1 object's x-value is greater than 600,
	//set the circle1 object's color to the string "purple".
	if(circle1.position._x > 600){
		circle1.color = "purple";
	}
	

	//TASK: Use a conditional statement. If the circle1 object's x-value is greater than or equal to
	//the board object's rightSide, set the c1Velocity object's angle to Math.PI
	if(circle1.position._x >= board.rightSide){
		c1Velocity.setAngle(Math.PI);
	}

	//TASK: Use a conditional statement. If the circle1 object's x-value is less than or equal to
	//the board object's leftSide, set the c1Velocity object's angle to the number 0.
	if(circle1.position._x <= board.leftSide){
		c1Velocity.setAngle(0);
	}

	//TASK: Use a conditional statement. If the circle2 object's x-value is greater than or equal to
	//the board object's rightSide, set the c2Velocity object's angle to Math.PI
	if(circle2.position._x >= board.rightSide){
		c2Velocity.setAngle(Math.PI);
	}

	//TASK: Use a conditional statement. If the circle2 object's x-value is less than or equal to
	//the board object's leftSide, set the c2Velocity object's angle to the number 0
	if(circle2.position._x <= board.leftSide){
		c2Velocity.setAngle(0);
	}

	//TASK: Use a conditional statement. If the rectangle object's y-value is greater than or equal to
	//the board object's bottomSide, set the rVelocity object's angle to (1.5 * Math.PI)
	if(rectangle.position._x >= board.bottomSide){
		rVelocity.setAngle(1.5 * Math.PI);
	}

	//TASK: Use a conditional statement. If the rectangle object's y-value is less than or equal to
	//the board object's topSide, set the rVelocity object's angle to (0.5 * Math.PI)
	if(rectangle.position._y <= board.topSide){
		rVelocity.setAngle(0.5 * Math.PI);
	}

	window.requestAnimationFrame(update);
}//update()