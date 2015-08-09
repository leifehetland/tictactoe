var squareEl = document.getElementsByClassName("square");
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
            player1.push(this.id);
            console.log(player1);
        } else {
            this.innerHTML = "O";
            player2.push(this.id);
            console.log(player2);
        }
        counter++;
        console.log(counter);
    }
}

for(var i = 0; i < squareEl.length; i++) {
    squareEl.item(i).addEventListener("click", handleSquareClick);
}