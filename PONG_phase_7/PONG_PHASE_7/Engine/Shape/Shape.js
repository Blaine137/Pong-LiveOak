class Shape {
	constructor(){
		this.canvas = document.getElementById("canvas");
		this.context = this.canvas.getContext("2d");
	}

	getContext() {
		return this.context;
	}
}