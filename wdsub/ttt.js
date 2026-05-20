let winText = document.querySelector("#end-of-game p");
let squareArr = document.querySelectorAll("div.ttt-square");
let currentPlayer = "X";
let EOGDiv = document.getElementById("end-of-game");

for (const element of squareArr) {
  element.addEventListener("click", (event) => markSymbol(event));  
}



function markSymbol(event) {
 let clickedSquare = event.target;

  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;
  if (checkWinner() == false) checkDraw();
  changePlayer();
  }
}
function checkWinner() {
 let isGameOver = false;
  // Check for 3 in a row 
  for (let i = 0; i < 3; i++) {
  if (squareArr[3 * i].innerText == currentPlayer
   && squareArr[3 * i + 1].innerText == currentPlayer
   && squareArr[3 * i + 2].innerText == currentPlayer) isGameOver = true;
    }
    
  // Check for 3 in a colum
   for (let i = 0; i < 3; i++) {
  if (squareArr[i].innerText == currentPlayer
   && squareArr[i + 3].innerText == currentPlayer
   && squareArr[i + 6].innerText == currentPlayer) isGameOver = true;
   }
  // Check for 3 in a diag
  if (squareArr[0].innerText == currentPlayer
   && squareArr[4].innerText == currentPlayer
   && squareArr[8].innerText == currentPlayer) isGameOver = true;
else if (squareArr[2].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[6].innerText == currentPlayer) isGameOver = true;
  //If game is over, diplay "end-of-game" div
  if (isGameOver) {
    showWinner();
  }
  return isGameOver;
}
 


function checkDraw () {
  let isDraw = true;
  for (const elem of squareArr) {
    if (elem.innerText == "") isDraw = false;
  }
  
  if (isDraw) showDraw();
  
  
}


function showWinner() {
EOGDiv.style.display = "block";
  winText.innerText = "" + curretPlayer + "Player Wins!"
}
function showDraw() {
  EOGDiv.style.display = "block";
  winText.innerText = "No winner"
  
}
function changePlayer() {
  currentPlayer = ((currentPlayer == "X") ? "O" : "X");
}


function resetGame() {
  // Hide end of game div
  EOGDiv.style.display = "none";
  
  //  Clear the board
  for (const elem of squareArr) {
    elem.innerText = "";
    
  }
}











