var myVariable = "";

var d = new Date();

d.getSeconds();

function writeName() {
	myVariable = '<div class ="bloczek">Pawel</div>';
	document.getElementById("bloczek").innerHTML = myVariable;

	myVariable = '<div class ="bloczek2">Mroczek</div>';
	document.getElementById("bloczek2").innerHTML = myVariable;

	writeSeconds();
	//uruchamia funkcje co 1s
}

function writeSeconds() {
	document.getElementById("czas").innerHTML = d.getSeconds();
	setTimeout("writeSeconds()", 500);
}

function myMove() {
	var elem = document.getElementById("animate");
	var stepInterval = 2.0 * Math.PI / 360.0;	// 2pi is a whole period for sinus, 
	//so arguments will take values only from this range for sin func  
	var sinMove = 0;
	var scaleSinMove = 0;
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == 360) {
			pos = 0;
			//clearInterval(id);
		}
		else {
			pos++;
			sinMove = Math.sin(stepInterval * pos); //sinus returns values from -1 to 1 which are not integer. We need integer values in range from 1 to 360 for example.
			scaleSinMove = (sinMove + 1) * 400.0;
			elem.style.top = 1 + Math.round(scaleSinMove) + 'px'; // movement in y axis
			elem.style.left = 600 + 'px'; //movement in x axis

			//in order to make a circle movement is needed to combine movement in y an x axis
			//in y axis movement is sinus
			//in x axis is needed to divide to 4 cases 
			//1 case: central possition += stepIncrement this is for 1/4 whole period length
			//2 case:  central position -= stepIncrement this is from 1/4 to 3/4 period length
			//3 case:  central possition += stepIncrement this is for 1/4 whole period length
		}
	}
}


window.onload = writeName;