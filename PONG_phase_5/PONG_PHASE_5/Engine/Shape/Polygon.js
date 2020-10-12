class Polygon extends Shape {
	constructor(vectorCount, centerX, centerY){
		super();
		this.vectorCount = vectorCount;
		this.vectorArray = [];
		this.intialize();
		this.rotationAxis = new Vector(0,0);
	}

	intialize(){
		for(let i = 0; i < this.vectorCount; i++){
			this.vectorArray[i] = new Vector(0,0);

			let vectorName = "v" + (i+1);
			this.vectorArray[vectorName] = this.vectorArray[i];
		}
	}

	setRotationAxis(x, y){
		this.rotationAxis.setX(x);
		this.rotationAxis.setY(y);
	}

	getRotationAxis(){
		return this.rotationAxis;
	}

	/*################################################################
    BIND POLYGON 
    ################################################################*/
	overlayRect(orientation, rect){
		if(orientation == 'center'){
			this.setRotationAxis(rect.getCenterX(), rect.getCenterY());

			this.vectorArray['v1'].setXY(-rect.width/2, -rect.height/2);
			this.vectorArray['v2'].setXY(rect.width/2, -rect.height/2);
			this.vectorArray['v3'].setXY(-rect.width/2, rect.height/2);
			this.vectorArray['v4'].setXY(rect.width/2, rect.height/2);

			this.vectorArray['v1'].setAngle(rect.angle + this.vectorArray['v1'].getAngle());
			this.vectorArray['v2'].setAngle(rect.angle + this.vectorArray['v2'].getAngle());
			this.vectorArray['v3'].setAngle(rect.angle + this.vectorArray['v3'].getAngle());
			this.vectorArray['v4'].setAngle(rect.angle + this.vectorArray['v4'].getAngle());

	    	this.vectorArray['v1'].add(this.getRotationAxis());
	    	this.vectorArray['v2'].add(this.getRotationAxis());
	    	this.vectorArray['v3'].add(this.getRotationAxis());
	    	this.vectorArray['v4'].add(this.getRotationAxis());
	    }

	    else if(orientation == 'origin'){
	    	this.setRotationAxis(rect.getX(), rect.getY());
			
			this.vectorArray['v1'].setXY(0, 0);
			this.vectorArray['v2'].setXY(rect.width, 0);
			this.vectorArray['v3'].setXY(0, rect.height);
			this.vectorArray['v4'].setXY(rect.width, rect.height);

			this.vectorArray['v1'].setAngle(rect.angle + this.vectorArray['v1'].getAngle());
			this.vectorArray['v2'].setAngle(rect.angle + this.vectorArray['v2'].getAngle());
			this.vectorArray['v3'].setAngle(rect.angle + this.vectorArray['v3'].getAngle());
			this.vectorArray['v4'].setAngle(rect.angle + this.vectorArray['v4'].getAngle());

	    	this.vectorArray['v1'].add(this.getRotationAxis());
	    	this.vectorArray['v2'].add(this.getRotationAxis());
	    	this.vectorArray['v3'].add(this.getRotationAxis());
	    	this.vectorArray['v4'].add(this.getRotationAxis());
	    }
	}
/*
	drawVertices(){
		for(let i = 0; i < this.vectorArray.length; i++){
			this.context.fillStyle = 'red';
			this.context.beginPath();
			this.context.arc(this.vectorArray['v' + (i+1)].getX(), this.v1.getY(), 4, 0, 2 * Math.PI);
			this.context.stroke();
			this.context.fill();
			this.context.closePath();
		}
	}
	*/
	/*
		drawVPoint(){
		this.context.fillStyle = 'red';
		this.context.beginPath();
		this.context.arc(this.v1.getX(), this.v1.getY(), 4, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.fill();
		this.context.closePath();

		this.context.fillStyle = 'blue';
		this.context.beginPath();
		this.context.arc(this.v2.getX(), this.v2.getY(), 4, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.fill();
		this.context.closePath();

		this.context.fillStyle = 'green';
		this.context.beginPath();
		this.context.arc(this.v3.getX(), this.v3.getY(), 4, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.fill();
		this.context.closePath();

		this.context.fillStyle = 'purple';
		this.context.beginPath();
		this.context.arc(this.v4.getX(), this.v4.getY(), 4, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.fill();
		this.context.closePath();
	}
	*/
}