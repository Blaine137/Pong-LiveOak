class Scoreboard extends Text {
	/*
		The constructor is used for creating new Scoreboard objects.
		It is also where the class's properties are defined.
	*/
	constructor(x,y,score,font_family,font_size,color){
		super(x,y,score,font_family,font_size,color);
		this.score = score;
	}

	/*
		incrementScore() increments the scoreboard's text by 1.
	*/
	incrementScore(){
		this.score = this.score + 1;
		this.setText(this.score);
	}
}