window.onload = initAll;

function initAll () {
	if (document.getElementById){
		for (var i = 0; i < 24 ; i++) {
			setSquare(i);
		}
	}
	else {
		alert("Sorry,your browser doesn't support this script.")
	}
}

function setSquare(thisSquare){
	var currSquare = "square" + thisSquare;
	
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasic = colPlace [thisSquare] * 15;
	var newNum = colBasic + Math.floor(Math.random() * 15) + 1;

	document.getElementById(currSquare).innerHTML = newNum;
}