/**
 * 
 */

var moves = function(stage) {

	document.addEventListener('keydown', function(e){

		if(e.keyCode == 38){
			stage.getPlayer().jump();
		}
	});

document.addEventListener('keydown', function(e){

	if(e.keyCode == 40){
		stage.getPlayer().duck();
	}
});

document.addEventListener('keydown', function(e){

	if(e.keyCode == 32){
		stage.getPlayer().down();
	}
});
}