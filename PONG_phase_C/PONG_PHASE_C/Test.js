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
Rectangle
#############################################################################################*/
//TASK: Create a variable named rX. Assign it the number 100.
var rX = 100;

//TASK: Create a variable named rY. Assign it the number 100.
var rY = 100;

//TASK: Create a variable named rWidth. Assign it the number 40.
var rWidth = 40;

//TASK: Create a variable named rHeight. Assign it the number 60.
var rHeight = 60;

//TASK: Create a variable named rColor. Assign it the string "green".
var rColor = "green";

//TASK: Create a variable named rectangle. Store a rectangle object inside of the rectangle
//variable using the Rectangle class. Pass the following variables into the constructor as arguments: 
//(rX, rY, rWidth, rHeight, rColor)
var rectangle = new Rectangle(rX, rY, rWidth, rHeight, rColor);


//TASK: Create a variable named rVelocity. Use the Vector class to store a vector object inside it. 
//Provide it with the arguments (0,0).
var rVelocity = new Vector(0,0);

//TASK: Set the length of the rVelocity vector to the number 8.
rVelocity.setLength(8);

//TASK: Set the angle of the rVelocity vector to the angle Math.PI/2
rVelocity.setAngle(Math.PI/2)


/*#############################################################################################
UPDATE FUNCTION
#############################################################################################*/
function update(){
	board.clear();

	circle1.draw();
	circle1.position.add(c1Velocity);

	circle2.draw()
	circle2.position.add(c2Velocity);

	//TASK: Call the rectangle object's draw() method.
	rectangle.draw();

	//TASK: Add the rVelocity vector to the rectangle object's position vector
	rectangle.position.add(rVelocity); 


	window.requestAnimationFrame(update);
}//update()