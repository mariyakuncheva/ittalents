
var planeLeft = 0;
var planeBottom = 0;
var speed = 5;
var bulletX;
var bulletY;
var shots = 100;

var movement = {
	left: false,
	right: false,
	top: false,
	bottom: false
};

window.addEventListener('load', function() {
	var plane = document.getElementById('plane');
	var width = window.innerWidth;
	var height = window.innerHeight;
	var planeHeight = 75;
	var planeWidth = 101;
	var enemyPosition = 0;
	var availHeight = height - planeHeight;
	var availWidth = width - planeWidth;
	
	document.addEventListener('keydown', function(event) {
		handleKeyEvent(event.keyCode, true)
	}, false);
	
	document.addEventListener('keyup', function(event) {
		handleKeyEvent(event.keyCode, false)
	}, false);	

function shoot(id, currentX, currentY) {
			bulletX = currentX + 25;
			bulletY = currentY + 70;
			var plane = '<span id="'+ id +'" style="left:'+ bulletX +'px; bottom:'+ bulletY +'px; "></span>';
			document.getElementById('stage').innerHTML += plane;
	}
	
function bullet() {
	var state = 0;
	var weapon = document.getElementsByTagName('span');
	for(i = 0; i < weapon.length; i++){
			
		state = parseInt(weapon[i].style.bottom);
		if(state > height - 150 && state < height - 100 && bulletX > enemyPosition && bulletX < enemyPosition + 100){
			weapon[i].style.display = 'none';
			weapon[i].style.bottom = 1500   +'px';				
		} else if(state > height){
			weapon[i].style.display = 'none';
			weapon[i].style.bottom = 1500   +'px';
		} else {
			weapon[i].style.bottom = state + speed   +'px';
		}		
	}
}
	
function handleKeyEvent(keyCode, pressed) {
	if (keyCode == 38) {
			movement.top = pressed;
		}
		
	if (keyCode == 40) {
			movement.bottom = pressed;
		}
		
	if (keyCode == 37) {
			movement.left = pressed;
		}
		
	if (keyCode == 39) {
			movement.right = pressed;
		}
		
	if (keyCode == 32 && pressed == true) {
			shoot(shots--,planeLeft, planeBottom );
		}	
	}
	
function updatePlanePosition() {
	var initialBottom = planeBottom;
	var initialLeft = planeLeft;
		
	if ((movement.top ) &&  planeBottom < availHeight) {
			planeBottom += speed;
		}
		
    if ((movement.bottom) && planeBottom > 0) {
			planeBottom -= speed;	
		}
		
	if ((movement.left) && planeLeft > 0) {
			planeLeft -= speed;	
		}
		
	if ((movement.right) && planeLeft < availWidth) {
			planeLeft += speed;
		}
		
	if (initialLeft != planeLeft) {
			plane.style.left = planeLeft + 'px';			
		}
		
	if (initialBottom != planeBottom) {
			plane.style.bottom = planeBottom + 'px';			
		}
	}

function updateState() {
		updatePlanePosition();
		bullet();
		window.requestAnimationFrame(updateState);
	}
	updateState();
})