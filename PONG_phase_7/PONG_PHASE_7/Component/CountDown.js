class Countdown extends Text {
	/*
		The constructor is used for creating new Countdown objects.
		It is also where the class's properties are defined.
	*/
	constructor(x,y,count,font_family,font_size,color){
		super(x,y,count,font_family,font_size,color);
		this.count = count;
		this.active = false;
	}

	/*
		decrementCount() decrements the countdown's text by 1.
	*/
	decrementCount(){
		this.count = this.count - 1;
		this.setText(this.count);
	}

	/*
		setCount() has one parameter so it takes one argument.
		It sets the count property to the parameter c. The parameter
		should be a number.
	*/
	setCount(c){
		this.count = c;
		this.setText(this.count);
	}
}