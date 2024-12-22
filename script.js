let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");

let scoreUser = document.querySelector("#userScore");
let scorecomp = document.querySelector("#compScore");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper","scissor"]
    const random =options[Math.floor(Math.random()*3)];
    return random;
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin ===true){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "#2a9d8f";
        ++userScore;
        scoreUser.innerText = userScore;
    } else {
        msg.innerText = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.color = "#d62828";
        ++compScore;
        scorecomp.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User's Choice : ", userChoice)
    //Generate Computer's Choice
    let compChoice = genCompChoice();
    console.log("Computer's Choice : ", compChoice)

    if(userChoice===compChoice){
        msg.innerText = "Game was Draw";
        msg.style.color = "rgb(9, 81, 189)";
    }else {
        let userWin=true;
        if(userChoice=="rock"){
            userWin = compChoice =="paper" ? false : true;
        } 
        else if(userChoice=="paper"){
            userWin = compChoice =="scissor" ? false : true;
        }
        else{
            userWin = compChoice =="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

for(let choice of choices){
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}

reset.addEventListener("click", () =>{
        msg.innerText = "Let's see who wins";
        scoreUser.innerText = 0;
        userScore = 0;
        scorecomp.innerText = 0;
        compScore = 0;
        msg.style.color = "rgb(9, 81, 189)";
})