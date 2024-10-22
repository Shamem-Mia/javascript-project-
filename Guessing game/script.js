// initialization
let totalAttemps = 5;
let attemps = 0;
let totalWon = 0;
let totalLost = 0;

// finding elements 
const form = document.querySelector("form");
const container = document.querySelector(".container");
const cardBody = document.querySelector(".card-body");
const guessingNumber = cardBody.querySelector("#guessingNumber");
const btn = cardBody.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempt = cardBody.querySelector(".remainingAttempts");

// create element 
const lostWonMsg = document.createElement("p");

// Code 

form.addEventListener("submit", function(event){
    event.preventDefault();
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    guessingNumber.value = "";
});


function checkResult (guessingNumber) {
    const randomNumber = getRandomNumber(5);
    attemps++;
    if(guessingNumber === randomNumber) {
        totalWon++;
        resultText.innerHTML = `You won`;
    }else{
        resultText.innerHTML = `You have lost: random number was ${randomNumber}`;
        totalLost++;
    }
    
    if((totalAttemps - attemps) === 0) {
        guessingNumber.disabled = true;
        btn.disabled = true;
    }  
        remainingAttempt.innerHTML = `Remaining attemps ${totalAttemps - attemps}`;
    
    lostWonMsg.innerHTML = `won: ${totalWon} Lost: ${totalLost}`;
    lostWonMsg.classList.add("large-text");
    cardBody.appendChild(lostWonMsg);

};


function getRandomNumber (limit) {
    return Math.floor(Math.random() * limit ) + 1 ;
}