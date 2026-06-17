
// Randy Nunez

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartButton = document.getElementById("restart");

let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const humanPlayer = "X";
const computerPlayer = "O";

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

restartButton.addEventListener("click", restartGame);

function handleCellClick() {
    const index = this.getAttribute("data-index");

    if (!gameActive || board[index] !== "") {
        return;
    }

    makeMove(index, humanPlayer);

    if (checkGameOver(humanPlayer)) {
        return;
    }

    statusText.textContent = "Computer is thinking...";

    setTimeout(computerMove, 500);
}

function computerMove() {
    if (!gameActive) {
        return;
    }

    const availableMoves = board
        .map((cell, index) => (cell === "" ? index : null))
        .filter(index => index !== null);

    if (availableMoves.length === 0) {
        return;
    }

    const randomIndex = Math.floor(
        Math.random() * availableMoves.length
    );

    const move = availableMoves[randomIndex];

    makeMove(move, computerPlayer);

    checkGameOver(computerPlayer);
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;

    if (player === humanPlayer) {
        cells[index].style.color = "#ff6b6b";
    } else {
        cells[index].style.color = "#4ecdc4";
    }
}

function checkGameOver(player) {
    const roundWon = winPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });

    if (roundWon) {
        statusText.textContent =
            player === humanPlayer
                ? "You win!"
                : "Computer wins!";

        gameActive = false;
        return true;
    }

    if (!board.includes("")) {
        statusText.textContent = "It's a tie!";
        gameActive = false;
        return true;
    }

    statusText.textContent =
        player === humanPlayer
            ? "Computer's turn"
            : "Your turn (X)";

    return false;
}

function restartGame() {
    gameActive = true;
    board = ["", "", "", "", "", "", "", "", ""];

    statusText.textContent = "Your turn (X)";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.color = "";
    });
}

