var numSquares = 6;
var colors = getRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = getRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = getRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}		
});

resetButton.addEventListener("click", function(){
	//generate all new colours
	colors = getRandomColors(numSquares);
	//pick a random color
	pickedColor = pickColor();
	//change color display to picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = " ";
	//change colors of squares
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});



for(var i= 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//add event listener to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			console.log(clickedColor, pickedColor);
			messageDisplay.textContent = "Correct";
			// to start playing again
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;			
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
	
function pickColor() {
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];

}

function  getRandomColors(num) {
	var arr = [];
	// loop through all colors
	for( var i=0; i< num; i++){
		// push colors into array
		arr.push(randomColors());
	}
	// return array
	return arr;
}

function randomColors() {
	// make different random color numbers for red, green and blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
















