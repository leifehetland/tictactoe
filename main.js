var squareEl = document.getElementsByClassName("square");



var counter = 0;

function handleSquareClick(e){
	if (counter % 2 === 0) {
		this.innerHTML = "X";
	}else{
		this.innerHTML = "O";
	}
	counter++;
}

for (var i = 0; i < squareEl.length; i++) {
  squareEl.item(i).addEventListener("click", handleSquareClick);
}