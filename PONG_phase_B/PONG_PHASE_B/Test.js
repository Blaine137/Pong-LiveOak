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


//TASK: Create a variable named c1Velocity. Use the vector class to store a vector object inside it. 
//Provide it with the arguments (0,0).
var c1Velocity = new Vector(0,0);


//TASK: Set the length of the c1Velocity vector to the number 1.
c1Velocity.setLength(1);

//TASK: Set the angle of the c1Velocity vector to the angle 0.
c1Velocity.setAngle(0);


/*#############################################################################################
CIRCLE 2
#############################################################################################*/
var c2X = 400;
var c2Y = 150;
var c2Radius = 40;
var c2Color = "red";
var circle2 = new Circle(c2X, c2Y, c2Radius, c2Color);

//TASK: Create a variable named c2Velocity. Use the vector class to store a vector object inside it. 
//Provide it with the arguments (0,0).
var c2Velocity = new Vector(0,0);

//TASK: Set the length of the c2Velocity vector to the number 4.
c2Velocity.setLength(4);

//TASK: Set the angle of the c2Velocity vector to the angle Math.PI
c2Velocity.setAngle(Math.PI);



/*#############################################################################################
UPDATE FUNCTION (redraws the board at 60 FPS)
#############################################################################################*/
function update(){
	//TASK: Clear the board's previous drawings. Use the board object's clear() method.
	board.clear();

	circle1.draw();
	//TASK: Add the c1Velocity vector to the circle1 object's position vector
	circle1.position.add(c1Velocity); 

	circle2.draw()
	//TASK: Add the c2Velocity vector to the circle2 object's position vector
	circle2.position.add(c2Velocity);

	window.requestAnimationFrame(update);
}//update()