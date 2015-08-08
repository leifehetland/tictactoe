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

var winningCombo = [["0","1","2"], ["3","4","5"], ["6","7","8"], ["0","4","8"],["2","4","6"], ["0","3","6"], ["1","4","7"],["2","5","8"]];

for (var i = 0; i < squareEl.length; i++) {
  squareEl.item(i).addEventListener("click", handleSquareClick);
}