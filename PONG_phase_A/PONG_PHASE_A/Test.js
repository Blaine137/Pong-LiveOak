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
//TASK: Create a variable named c1X. Assign it the number equal to half the board's width.
var c1X = boardWidth/2;


//TASK: Create a variable named c1Y. Assign it the number equal to half the board's height.
var c1Y = boardHeight/2;


//TASK: Create a variable named c1Radius. Assign it the number 20.
var c1Radius = 20;

//TASK: Create a variable named c1Color. Assign it the string "blue".
var c1Color = "blue";

//TASK: Create a variable named circle1. Store a circle object inside of the circle1
//variable using the Circle class. Pass the following variables into the constructor as arguments: 
//(c1X, c1Y, c1Radius, c1Color)
var circle1 = new Circle(c1X, c1Y, c1Radius, c1Color);



/*#############################################################################################
CIRCLE 2
#############################################################################################*/
//TASK: Create a variable named c2X. Assign it the number 400.
var c2X = 400;

//TASK: Create a variable named c2Y. Assign it the number 150.
var c2Y = 150;

//TASK: Create a variable named c2Radius. Assign it the number 40.
var c2Radius = 40

//TASK: Create a variable named c2Color. Assign it the string "red".
var c2Color = "red";

//TASK: Create a variable named circle2. Store a circle object inside of the circle2
//variable using the Circle class. Pass the following variables into the constructor as arguments: 
//(c2X, c2Y, c2Radius, c2Color)
var circle2 = new Circle(c2X, c2Y, c2Radius, c2Color);



/*#############################################################################################
UPDATE FUNCTION
#############################################################################################*/
function update(){

	/*######################################################
	CIRCLE 1 ANIMATION
	######################################################*/
	//TASK: Call the circle1 object's draw() method.
	circle1.draw();

	/*######################################################
	CIRCLE 2 ANIMATION
	######################################################*/
	//TASK: Call the circle2 object's draw() method.
	circle2.draw();

	window.requestAnimationFrame(update);
}//update()