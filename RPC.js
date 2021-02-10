let playerScore = 0;
let computerScore = 0;
//buttons DOM
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
//result text DOM
let result = document.getElementById("result").firstChild.nextSibling;
//scoreBoard DOM
let scoreBoardPlayer = document.getElementById("scoreBoard").childNodes[1]
  .childNodes[1];
//let scoreBoardComputer = document.getElementById("scoreBoard");
let scoreBoardComputer = document.getElementById("scoreBoard").childNodes[3]
  .childNodes[1];

function computerPlay() {
  var randNum = Math.floor(Math.random() * 3);
  var options = ["Rock", "Paper", "Scissors"];
  return options[randNum];
}

function play(playerSelection, computerSelection) {
  var reformat = playerSelection.toLowerCase().split("");
  reformat[0] = reformat[0].toUpperCase();
  var player = reformat.join("");
  if (player === "Rock") {
    if (computerSelection === "Paper") {
      computerScore += 1;
      scoreBoardComputer.textContent = computerScore;
      result.textContent = "You Lose! Paper beats Rock.";
    } else if (computerSelection === "Scissors") {
      playerScore += 1;
      scoreBoardPlayer.textContent = playerScore;
      result.textContent = "You Win! Rock beats Scissors.";
    } else {
      result.textContent = "It's a Tie!";
    }
  } else if (player === "Paper") {
    if (computerSelection === "Scissors") {
      computerScore += 1;
      scoreBoardComputer.textContent = computerScore;
      result.textContent = "You Lose! Scissors beat Paper.";
    } else if (computerSelection === "Rock") {
      playerScore += 1;
      scoreBoardPlayer.textContent = playerScore;
      result.textContent = "You Win! Paper beats Rock.";
    } else {
      result.textContent = "It's a Tie!";
    }
  } else if (player === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore += 1;
      scoreBoardComputer.textContent = computerScore;
      result.textContent = "You Lose! Rock beats Scissors.";
    } else if (computerSelection === "Paper") {
      playerScore += 1;
      result.textContent = "You Win! Scissors beat Paper.";
      scoreBoardPlayer.textContent = playerScore;
    } else {
      result.textContent = "It's a Tie!";
    }
  }
}

//disables 3 buttons: Rock & Paper & Scissors
function disabledButtons() {
  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
//if either a player or computer wins 5 rounds, declairs the final winner
function checkForFifthRound() {
  if (playerScore === 5) {
    result.textContent = "YOU WIN! You won 5 rounds of RPC :)";
    disabledButtons();
  } else if (computerScore === 5) {
    result.textContent = "BETTER LUCK NEXT TIME! Computer beat you 5 times";
    disabledButtons();
  }
}

//Button addEventListener for click
rock.addEventListener("click", function () {
  play("rock", computerPlay());
  checkForFifthRound();
});
paper.addEventListener("click", function () {
  console.log(play("paper", computerPlay()));
  checkForFifthRound();
});
scissors.addEventListener("click", function () {
  console.log(play("scissors", computerPlay()));
  checkForFifthRound();
});
/*
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt(
      "Type in your hand (choose from: rock, paper, scissors)",
      computerPlay()
    );
    let result = play(playerSelection, computerPlay());
    console.log(result);
  }
  if (playerScore > computerScore) {
    return console.log(
      `player ${playerScore} : ${computerScore} computer. Congratulations, you won!`
    );
  } else if (computerScore > playerScore) {
    return console.log(
      `player ${playerScore} : ${computerScore} computer. Better luck next time!`
    );
  } else if (computerScore === playerScore) {
    return console.log(
      `player ${playerScore} : ${computerScore} computer. It's a tie! Want to play another round?`
    );
  }
}


game();
*/
