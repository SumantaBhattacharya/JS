
let boxes = document.body.querySelectorAll(".box")
let resetBtn = document.getElementById("reset-btn")
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#message")

let turn_0 = true;//playerX playerY

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let resetGame = () => {
    turn_0 = true;// to reset the game
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach(box => {
    box.addEventListener("click", e => {
        if(turn_0 === true){// turn_0 == true
            box.classList.add("playerX");
            box.innerText = "0"
            turn_0 = false;
        }else{
            box.classList.add("playerO");
            box.innerText = "X"
            turn_0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Winner: ${winner} Congratulations, you won the game!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let i of winPatterns) {
        let post1_val = boxes[i[0]].innerText;
        let post2_val = boxes[i[1]].innerText;
        let post3_val = boxes[i[2]].innerText;

        if (post1_val !== "" && post2_val !== "" && post3_val !== "") {
            if (post1_val === post2_val && post2_val === post3_val) {
                // console.log("Winner",post1_val);
                showWinner(post1_val);

            }
        }
    }
};



newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// . The classList property returns a DOMTokenList object representing the list of class attributes of the element. 
// if (turn_0 === true) { box.classList.add("playerX"); ... } else { box.classList.add("playerO"); ... }:
//  This conditional statement checks the value of the variable turn_0. If turn_0 is true, it means it's player X's turn, and the class "playerX" is added to the class list of the clicked box using box.classList.add("playerX"). If turn_0 is false, indicating player O's turn,
//  the class "playerO" is added to the class list using box.classList.add("playerO").