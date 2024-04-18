let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let container = document.querySelector(".container");
let resetbtn = document.querySelector("#reset-btn");
let newgmbtn = document.querySelector("#new-game");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawcont = document.querySelector(".msg-container-draw hide");
let draw = document.querySelector("#draw");

let turnO = true; //playerX,playerO
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const restgame = () => {
  turnO = true;
  c = 0;
  enablebox();
  msgcont.classList.add("hide");
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations Player ${winner} You WON`;
  msgcont.classList.remove("hide");
  disablebox();
};

const nowin = () => {
  msg.innerText = "Game is Draw";
  msgcont.classList.remove("hide");
  disablebox();
};

let c = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    c++;
    if (turnO) {
      //player0
      box.innerText = "O";
      turnO = false;
    } else {
      //player1
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    let iswinner = checkwinner();

    if (c == 9 && iswinner != true) {
      nowin();
    }
  });
});
//Logic : after every entry we are checking the value stored in patter array of win pattern if it's all three values are same then it's a winner

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 == posval2 && posval2 == posval3) {
        showwinner(posval1);
        disablebox();
      }
    }
  }
};

newgmbtn.addEventListener("click", restgame);
resetbtn.addEventListener("click", restgame);
