userScore = 0;
compScore = 0;

const userScoreParagraph = document.querySelector("#user-score")
const compScoreParagraph = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]//options[randIdx]: This syntax means "access the element at the index randIdx in the options array."
}

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor = 'black';
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){
        // console.log(`You win!`);
        userScore++;
        userScoreParagraph.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        // console.log("you lose!");
        compScore++;
        compScoreParagraph.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) => {
    console.log("userChoice: " + userChoice);
    const compChoice = getCompChoice();
    console.log("compChoice: " + compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            // if (compChoice === "paper"){
            //     userWin = false;
            // }else{//(compChoice === "scissor")
            //     userWin = true;
            // }
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{//userChoice === "scissor"
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {//1
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});


