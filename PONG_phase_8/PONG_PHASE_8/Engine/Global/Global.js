GLOBALS = {
	keys : [],
  mousePositionX : 0,
  mousePositionY : 0,
  store(name, payload) {
    GLOBALS[name] = payload;
  },
	keyListener: function() {
		window.addEventListener('keydown', function (e) {
      		GLOBALS.keys = (GLOBALS.keys || []);
      		GLOBALS.keys[e.keyCode] = true;
    	});
    	window.addEventListener('keyup', function (e) {
      		GLOBALS.keys[e.keyCode] = false;
    	});
	},
  mouseListener: function() {
    GLOBALS.board.canvas.addEventListener('mousemove', function (e) {
      GLOBALS.mousePositionX = e.offsetX;
      GLOBALS.mousePositionY = e.offsetY;
    });
  },
}//Globals