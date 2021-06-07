var possibleChoices = ["rock", "paper", "scissors"]


function addUserEvent(userChoice) {

    var btn = document.getElementById("btn-" + userChoice);
    btn.addEventListener("click", function () {

        var randomChoiceIndex = Math.floor(Math.random() * 3);
        var pcChoice = possibleChoices[randomChoiceIndex];

        var winner = whoWins(pcChoice, userChoice);

        updateScoreBoard(winner);


        console.log("PC choice - " + pcChoice);
        console.log("User choice - " + userChoice);
        console.log(whoWins(pcChoice, userChoice));
    });
}
addUserEvent("rock");
addUserEvent("paper");
addUserEvent("scissors");

function newGame() {

    var userScore = document.getElementById('user-score');
    var computerScore = document.getElementById("pc-score");
    var playAgain = document.getElementById('play-again');
    playAgain.setAttribute('disabled', 'disabled');

    playAgain.addEventListener('click', function () {
        userScore.innerText = 0;
        computerScore.innerText = 0;
        playAgain.setAttribute('disabled', 'disabled');
        document.getElementById('rezultat').innerText = "..."
        document.getElementById('winner').innerText = "...";
        var buttons = document.getElementsByClassName('game-button');
        for (i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute('disabled', 'disabled');
        }
    })
}
newGame('play-again');



function whoWins(pcChoice, userChoice) {
    var userScore = document.getElementById('user-score');
    var computerScore = document.getElementById("pc-score");


    if (pcChoice === "rock" && userChoice === "paper") {
        document.getElementById('rezultat').innerText = "User wins"

        return "User wins"
    }

    if (pcChoice === "rock" && userChoice === "scissors") {
        document.getElementById('rezultat').innerText = "PC wins"

        return "PC wins"
    }

    if (pcChoice == "paper" && userChoice == "rock") {
        document.getElementById('rezultat').innerText = "PC wins"

        return "PC wins"
    }

    if (pcChoice == "paper" && userChoice == "scissors") {
        document.getElementById('rezultat').innerText = "User wins";
        return "User wins"
    }

    if (pcChoice == "scissors" && userChoice == "rock") {
        document.getElementById('rezultat').innerText = "User wins";

        return "User wins"
    }

    if (pcChoice == "scissors" && userChoice == "paper") {
        document.getElementById('rezultat').innerText = "PC wins"

        return "PC wins"
    }

    else {
        document.getElementById('rezultat').innerText = "Draw";
        return "Draw"
    }
}

function updateScoreBoard(winner) {

    var userScore = document.getElementById('user-score');
    var computerScore = document.getElementById("pc-score");

    if (winner === "User wins") {
        userScore.innerText = parseInt(userScore.innerText) + 1;
        if (parseInt(userScore.innerText) === 7) {
            document.getElementById('winner').innerText = "Congratulations USER!!!";
            var playAgain = document.getElementById('play-again');
            playAgain.removeAttribute('disabled', 'disabled');
            var buttons = document.getElementsByClassName('game-button');
            for (i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('disabled', 'disabled');
            }


        }
    }
    else if (winner === "PC wins") {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        if (parseInt(computerScore.innerText) === 7) {
            document.getElementById('winner').innerText = "Congratulations COMPUTER!!!";
            var playAgain = document.getElementById('play-again');
            playAgain.removeAttribute('disabled', 'disabled');
            var buttons = document.getElementsByClassName('game-button');
            for (i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('disabled', 'disabled');
            }

            // userScore.innerText = 0;
        }
    }

}