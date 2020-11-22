class Collision {
	/*
		This collision class was created based on the ideas of Jeffrey Thompson's Collision algorithmns. 
		However, it is written in pure Javascript instead of Processing-Js, and there have been other 
		modifications to the code. This collision class is only a tool used for our coding education
		platform, and the Vector library it works in tandem with is our own Vector Library. 
	*/
	circleVsRectangle(circle, rectangle){
		let cx = circle.getX();
		let cy = circle.getY();
		let cr = circle.getRadius();

		let rx = rectangle.getX();
		let ry = rectangle.getY();
		let rWidth = rectangle.getWidth();
		let rHeight = rectangle.getHeight();

		let rTop = ry;
		let rBottom = ry + rHeight;
		let rLeft = rx;
		let rRight = rx + rWidth;

		let collisionX = cx;
		let collisionY = cy;

		if(cx < rLeft){
			collisionX = rLeft;
		}
		else if(cx > rRight){
			collisionX = rRight;
		}

		if(cy < rTop){
			collisionY = rTop;
		}
		else if(cy > rBottom){
			collisionY = rBottom;
		}

		let distanceX = cx - collisionX;
		let distanceY = cy - collisionY;
		let distVector = new Vector(distanceX, distanceY);

		if(distVector.getLength() < cr){
			return true;
		}

		return false;
	}//circleVsRectangle

 
	circleVsCircle(circle1, circle2){
		let c1r = circle1.getRadius();
		let c2r = circle2.getRadius();
		let sumOfRadii = c1r + c2r;

		let c1x = circle1.getX();
		let c1y = circle1.getY();
		let c2x = circle2.getX();
		let c2y = circle2.getY();

		let distanceX = c1x - c2x;
		let distanceY = c1y - c2y;

		let distVector = new Vector(distanceX, distanceY);

		if(distVector.getLength() < sumOfRadii){
			return true;
		}

		return false;
	}//circleVsCircle

	pointVsPoint(x1,y1,x2,y2){
		if(x1 == x2 && y1 == y2){
			return true;
		}
		return false;
	}

	pointVsCircle(x,y,circle){
		let cx = circle.getX();
		let cy = circle.getY();
		let diffx = cx - x;
		let diffy = cy - y;
		let distance = Math.sqrt(diffx*diffx + diffy*diffy);

		if(distance < circle.getRadius()){
			return true;
		}
		return false;
	}

	pointVsRectangle(x,y,rectangle){
		let rTop = rectangle.getY();
		let rBottom = rectangle.getY() + rectangle.getHeight();
		let rLeft = rectangle.getX();
		let rRight = rectangle.getX() + rectangle.getWidth();

		if(y > rTop && y < rBottom && x > rLeft && x < rRight){
			return true;
		}

		return false;
	}

	pointVsLine(x1,y1,x2,y2,px,py){
		let lineLength = this.distance(x1,y1,x2,y2);

		let distance1 = this.distance(px,py,x1,y1);
		let distance2 = this.distance(px,py,x2,y2);

		let buffer = 0.1;

		if((distance1+distance2) >= (lineLength-buffer) && (distance1+distance2) <= (lineLength+buffer)){
			return true;
		}

		return false;
	}

	distance(x1,y1,x2,y2){
		let diffx = x1 - x2;
		let diffy = y1 - y2;
		let distance = Math.sqrt(diffx*diffx + diffy*diffy);

		return distance;
	}

	pointVsPoly(vertices,px,py){
		let collision = false;
		let next = 0;
		for (let current=0; current<vertices.length; current++) {

		    next = current + 1;
		    if (next == vertices.length){
		    	next = 0;
		    }

		    let vc = vertices[current];
		    let vn = vertices[next];       

		    if (((vc._y >= py && vn._y < py) || (vc._y < py && vn._y >= py)) &&
		         (px < (vn._x-vc._x)*(py-vc._y) / (vn._y-vc._y)+vc._x)) {
		            collision = !collision;
		    }
		  }
		  return collision;
	}

	lineVsCircle(x1, y1, x2, y2, circle){
		let cx = circle.getX();
		let cy = circle.getY();
		let cr = circle.getRadius();

		let lineLength = this.distance(x1, y1, x2, y2);

		let lineStartCollision = this.pointVsCircle(x1,y1,circle);
		let lineEndCollision = this.pointVsCircle(x2,y2,circle);

		if(lineStartCollision || lineEndCollision){
			return true;
		}

		let dot = (((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1))) 
				  / (lineLength*lineLength);

		let nearestX = x1 + (dot * (x2-x1));
		let nearestY = y1 + (dot * (y2-y1));

		let distx = nearestX - cx;
  		let disty = nearestY - cy;
  		let distance = Math.sqrt((distx*distx) + (disty*disty));

		let onLineSegment = this.pointVsLine(x1,y1,x2,y2,nearestX,nearestY);

		if(!onLineSegment){
			return false;
		}

  		if (distance < cr) {
   			return true;
 		}

 		return false;
	}

	circleVsPoly(circle, vertices){
		let cx = circle.getX();
		let cy = circle.getY();
		let r = circle.getRadius();

		let next = 0;
		for (let current=0; current<vertices.length; current++) {

			next = current+1;
			if (next == vertices.length) next = 0;

		    let vc = vertices[current];
		    let vn = vertices[next];       

		    let collision = this.lineVsCircle(vc._x, vc._y, vn._x, vn._y, circle);
		    if (collision){
		    	return true;
		 	}
		}

		let centerInside = this.pointVsPoly(vertices, cx, cy);
		if (centerInside) {
			return true;
		}

		return false;
	}

	// POLYGON/RECTANGLE
	polyVsRectangle(vertices, rectangle) {
		let rx = rectangle.getX();
		let ry = rectangle.getY();
		let rw = rectangle.getWidth();
		let rh = rectangle.getHeight();

 		let next = 0;
  		for (let current=0; current<vertices.length; current++) {

    		next = current+1;
    		if (next == vertices.length){
    			next = 0;
    		}

    		let vc = vertices[current];
    		let vn = vertices[next];

    		let collision = this.lineVsRectangle(vc._x,vc._y,vn._x,vn._y, rx,ry,rw,rh);
    		if (collision.status){
    			return collision;
    		}

    		let inside = this.pointVsPoly(vertices, rx,ry);
    		if (inside) {
    			return true;
    		}
  		}

  		return false;
	}


	// LINE/RECTANGLE
	lineVsRectangle(x1, y1, x2, y2, rx, ry, rw, rh) {

 		let left = this.lineVsLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
  		let right = this.lineVsLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
  		let top = this.lineVsLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
  		let bottom = this.lineVsLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);

  		if (left) {
  			let data = {status: true, side: "left"}
    		return data;
  		}
  		else if(right){
  			let data = {status: true, side: "right"}
    		return data;
  		}
  		else if(top){
  			let data = {status: true, side: "top"}
    		return data;
  		}
  		else if(bottom){
  			let data = {status: true, side: "bottom"}
    		return data;
  		}
  		return false;
	}


	lineVsLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  		let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
  		let uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

  		if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    		return true;
  		}
  		return false;
	}


	polygonVsPoint(vertices, px, py) {
  		let collision = false;

  		let next = 0;
  		for (let current=0; current<vertices.length; current++) {

    		next = current+1;
    		if (next == vertices.length){
    			next = 0;
    		}

    		let vc = vertices[current];
    		let vn = vertices[next];   

    		if (((vc._y > py && vn._y < py) || (vc._y < py && vn._y > py)) &&
         		(px < (vn._x-vc._x)*(py-vc._y) / (vn._y-vc._y)+vc.x)) {
            	collision = !collision;
    		}
 		}
  		return collision;
	}

	polygonVsLine(vertices, x1, y1, x2, y2) {

		var next = 0;
		for (let current=0; current<vertices.length; current++) {

		    next = current+1;
		    if (next == vertices.length){
		    	next = 0;
		    }

		    let x3 = vertices[current]._x;
		    let y3 = vertices[current]._y;
		    let x4 = vertices[next]._x;
		    let y4 = vertices[next]._y;

		    let hit = this.lineVsLine(x1, y1, x2, y2, x3, y3, x4, y4);

		    if (hit) {
		      return true;
		    }
	  	}

		return false;
	}

 	polygonVsPolygon(p1, p2) {

		var next = 0;
		for (let current=0; current<p1.length; current++) {

	    	next = current+1;
	    	if (next == p1.length){ 
	    		next = 0;
	    	}

		    let vc = p1[current]; 
		    let vn = p1[next];     

		    let collision = this.polygonVsLine(p2, vc._x,vc._y,vn._x,vn._y);

		    if (collision){
		    	return true;
		    }

		    collision = this.polygonVsPoint(p1, p2[0]._x, p2[0]._y);
		    if (collision){
		    	return true;
		    } 
	  	}

	  	return false;
	}


	rectangleVsRectangle(rectangle1, rectangle2){
		let r1 = rectangle1;
		let r2 = rectangle2;

		var dx=(r1.getX()+r1.getWidth()/2)-(r2.getX()+r2.getWidth()/2);
    	var dy=(r1.getY()+r1.getHeight()/2)-(r2.getY()+r2.getHeight()/2);
    	var width=(r1.getWidth()+r2.getWidth())/2;
    	var height=(r1.getHeight()+r2.getHeight())/2;
    	var crossWidth=width*dy;
    	var crossHeight=height*dx;
    	var collision='none';
    	//
    	if(Math.abs(dx)<=width && Math.abs(dy)<=height){
	        if(crossWidth>crossHeight){
	            collision=(crossWidth>(-crossHeight))?'bottom':'left';
	            let data = {status: true, side: collision};
	            return data;
	        }else{
	            collision=(crossWidth>-(crossHeight))?'right':'top';
	           	let data = {status: true, side: collision};
	            return data;
	        }
   		}

    	return false;
		/*let r1x = rectangle1.getX();
		let r1y = rectangle1.getY();
		let r1w = rectangle1.getWidth();
		let r1h = rectangle1.getHeight();

		let r2x = rectangle2.getX();
		let r2y = rectangle2.getY();
		let r2w = rectangle2.getWidth();
		let r2h = rectangle2.getHeight();

		let left = this.lineVsLine(r1x+r1w,r1y,r1x+r1w,r1y+r1h,  r2x,r2y,r2x,r2y+r2h);
  		let right = this.lineVsLine(r1x,r1y,r1x,r1y+r1h,  r2x+r2w,r2y,r2x+r2w,r2y+r2h);
  		let top = this.lineVsLine(r1x,r1y+r1h,r1x+r1w,r1y+r1h,  r2x,r2y,r2x+r2w,r2y);
  		let bottom = this.lineVsLine(r1x,r1y,r1x+r1w,r1y,  r2x,r2y+r2h,r2x+r2w,r2y+r2h);

  		if(left) {
  			console.log("left");
  			return true;
  		}

  		else if(right) {
  			console.log("right");
  			return true;
  		}

  		else if(top) {
  			console.log("top");
  			return true;
  		}

  		else if(bottom) {
  			console.log("bottom");
  			return true;
  		}

  		return false;*/
		/*let r1Top = rectangle1.getY();
		let r1Bottom = rectangle1.getY() + rectangle1.getHeight();
		let r1Left = rectangle1.getX();
		let r1Right = rectangle1.getX() + rectangle1.getWidth();

		let r2Top = rectangle2.getY();
		let r2Bottom = rectangle2.getY() + rectangle2.getHeight();
		let r2Left = rectangle2.getX();
		let r2Right = rectangle2.getX() + rectangle2.getWidth();

		if(r1Bottom > r2Top && 
		   r1Top < r2Bottom && 
		   r1Right > r2Left && 
		   r1Left < r2Right){
		return true;
		}
		return false;*/
	}
}