// finding elements

let card = document.querySelector(".card");
let cardBody = document.querySelector(".card-body");
let boxes = cardBody.querySelectorAll(".boxes");
let resetBtn = document.querySelector(".reset-btn");
let form = document.querySelector("form");
let user1 = document.getElementById("userInput1");
let user2 = document.getElementById("userInput2");
let userData = document.querySelector(".user-data");

// start game
card.hidden = true;
const start = () => {
  card.hidden = true;
};

// creating html div for showing user name

const showUsersName = (name1, name2) => {
  userElement1.innerText = `1st player: "${name1}" "O" and`;
  userElement2.innerText = `2nd player: "${name2}" "X"`;
  card.hidden = false;
};
// user data handling

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userName1 = user1.value;
  let userName2 = user2.value;
  form.hidden = true;
  userElement1.hidden = false;
  userElement2.hidden = false;
  showUsersName(userName1, userName2);
});

// creating element for winner msg

let winnerMsg = document.createElement("div");
winnerMsg.classList.add("win-msg");
card.appendChild(winnerMsg);

const userElement1 = document.createElement("p");
userElement1.classList.add("user-names");
userData.appendChild(userElement1);

const userElement2 = document.createElement("p");
userElement2.classList.add("user-names");
userData.appendChild(userElement2);

// checking winnwer

let winnerPaterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableGame = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const shoeWinner = (winner) => {
  if (winner == "O") {
    winnerMsg.innerText = `"${user1.value}" Wins the game`;
    turnO = true;
  }
  if (winner == "X") {
    winnerMsg.innerText = `"${user2.value}" Wins the game`;
    turnO = true;
  }

  disableGame();
};

const checkWiner = () => {
  for (patturn of winnerPaterns) {
    let pos1Value = boxes[patturn[0]].innerText;
    let pos2Value = boxes[patturn[1]].innerText;
    let pos3Value = boxes[patturn[2]].innerText;
    if (pos1Value && pos2Value && pos3Value) {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        shoeWinner(pos1Value);
      }
    }
  }
};

// adding listener in boxes
let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (turnO) {
      box.innerText = `O`;

      turnO = false;
    } else {
      box.innerText = `X`;
      turnO = true;
    }
    box.disabled = true;
    checkWiner();
  });
});

// reset game
const resetGame = () => {
  winnerMsg.innerText = "";
  form.hidden = false;
  userElement1.hidden = true;
  userElement2.hidden = true;
  form.reset();
  start();
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetBtn.addEventListener("click", resetGame);
