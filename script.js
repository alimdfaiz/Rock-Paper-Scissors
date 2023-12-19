let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
let myScore = document.querySelector(".score-user");
let myComp = document.querySelector(".score-comp");
let myMsg = document.querySelector("#msg");



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
       const userChoice = choice.getAttribute("id")
    //     console.log("choice is clicked",userChoice);
    playGame(userChoice)
     })
})




const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
const choiceOfComp = compChoice() ;
console.log("choiceOfComp =" , choiceOfComp);
if(userChoice ===choiceOfComp ){
    // console.log(" game is draw");
    drawGame();
}else{
     let userWin = true;
    if (userChoice === "rock"){
        userWin = choiceOfComp === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = choiceOfComp === "scissor" ? false : true;
    }else {
        userWin = choiceOfComp === "rock" ? false : true;
    }
    showWinner(userWin)
}
    };
   
   
    const compChoice = () => {
        const computerGame = ["rock","paper","scissor"];
    let randomIndx = Math.floor(Math.random() * 3);
    return computerGame[randomIndx];
    }

    const drawGame = () =>{
        console.log(" game is draw");
        myMsg.innerText = "Game is Drawn! Play again";
        myMsg.style.backgroundColor = "yellow";
    }
    
    const showWinner = (userWin, userChoice, choiceOfComp) => {
        if(userWin){
            console.log("you win !");
            myMsg.innerText = "Hurray! you won";
            myMsg.style.backgroundColor = "green"
        }else {
            console.log("you lose");
            myMsg.innerText = "OOPS! you lose";
            myMsg.style.backgroundColor = "red";
        }
    }