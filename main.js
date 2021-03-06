var squareEl = document.getElementsByClassName("square");
var winningCombo = [["0","1","2"], ["3","4","5"], ["6","7","8"],
                                    ["0","4","8"],["2","4","6"], ["0","3","6"],
                                    ["1","4","7"],["2","5","8"]];

var counter = 0;
var player1 = [];
var player2 = [];
var game = true;

function handleSquareClick(e) {
    if(this.innerHTML === "" && (game)) {
        if (counter % 2 === 0 ) {
            this.innerHTML = "X";
            player1.push(this.id);
            checkWinner(player1);
        } else {
            this.innerHTML = "O";
            player2.push(this.id);
            checkWinner(player2);
        }
        counter++;
    }
    if (counter === 9 && game) {
        alert("DRAW!");
        game = false;
    }
}

function checkWinner(playerArray) {
    for(var i = 0; i < winningCombo.length; i++) {
        if((playerArray.indexOf(winningCombo[i][0]) > -1)&&(playerArray.indexOf(winningCombo[i][1]) > -1 )&&(playerArray.indexOf(winningCombo[i][2]) > -1)) {
            if ( counter % 2 === 0 ) {
                alert("Player 2 is a loser!");
                game = false;
            } else {
                alert("Player 1 is a loser!");
                game = false;
            }
        }
    }
}

function resetGame(e){
    for(var i = 0; i < squareEl.length; i++) {
        squareEl.item(i).innerHTML = "";
    }
    counter = 0;
    player1 = [];
    player2 = [];
    game = true;
}

for(var i = 0; i < squareEl.length; i++) {
    squareEl.item(i).addEventListener("click", handleSquareClick);
}

var button = document.getElementById("reset");
button.onclick = resetGame;