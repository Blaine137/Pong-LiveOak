class Text extends Shape {
	constructor(x, y, text, font_family, font_size, color){
		super();
		this.text = text;
		this.font_family = font_family;
		this.font_size = font_size;
		this.color = color;
		this.x = x;
		this.y = y;
	}

	draw(){
		this.context.font = this.font_size + " " + this.font_family;
		this.context.fillStyle = this.color;
		this.context.fillText(this.text, this.x, this.y);
	}

	getText(){
		return this.text;
	}

	setText(t){
		this.text = t;
	}
}//Text