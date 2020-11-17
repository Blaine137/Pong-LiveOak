class Board{
	constructor(width, height, backgroundColor, borderWidth, borderColor){
		this.width = width;
		this.height = height;

		this.leftSide = 0;
		this.rightSide = this.width
		this.topSide = 0;
		this.bottomSide = this.height;

		this.backgroundColor = backgroundColor;
		this.borderWidth = borderWidth + "px";
		this.borderColor= borderColor;
		this.borderStyle = "solid";

		this.canvas = document.createElement("canvas");

		this.mouseXPosition = null;
		this.mouseYPosition = null;

		this.image = null;
	}

	getWidth(){
		return this.width;
	}

	getHeight(){
		return this.height;
	}

	start(){
		this.context = this.canvas.getContext("2d");
	    this.canvas.width = this.width;
	    this.canvas.height = this.height;
	    this.canvas.style.backgroundColor = this.backgroundColor;
	    this.canvas.style.borderWidth = this.borderWidth;
		this.canvas.style.borderColor = this.borderColor;
		this.canvas.style.borderStyle = this.borderStyle;
		this.canvas.style.display = 'block';
		this.canvas.setAttribute("id", "canvas");
	    this.addToDocumentBody(this.canvas);
	}

	addToDocumentBody(el){
		document.body.insertBefore(el, document.body.childNodes[0]);
	}

	clear(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	overlayImage(url){
		this.image = new Image();
		this.image.src = url;
		this.context.drawImage(this.image, 0, 0, this.width, this.height);
	}
}//Board