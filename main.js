var squares = document.getElementsByClassName("square");
var winningCombo = [["0","1","2"], ["3","4","5"], ["6","7","8"],
                                    ["0","4","8"],["2","4","6"], ["0","3","6"],
                                    ["1","4","7"],["2","5","8"]];

var counter = 0;
var player1 = [];
var player2 = [];

function handleSquareClick(e) {
    if(this.innerHTML==="") {
        if (counter % 2 === 0 ) {
            this.innerHTML = "X";
            console.log(this, this.id);
        } else {
            this.innerHTML = "O";
            console.log(this, this.id);
        }
        console.log(counter);
        counter++;
    }
}

for(var i = 0; i < squares.length; i++) {
    squares.item(i).addEventListener("click", handleSquareClick);
}