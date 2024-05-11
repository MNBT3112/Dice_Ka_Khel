'use strict';

//Defining all elements

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const diceContainer = document.getElementById('dice_container');
const rollDice = document.getElementById('rollDiceBtn');
const newGame = document.getElementById('newGameBtn');
const diceImage = document.querySelector('#dice1');
const holdBtn = document.querySelector('#holdBtn');
const currentScore1 = document.getElementById('currentScore--0');
const currentScore2 = document.getElementById('currentScore--1');
let playerActive;

let score;

let scoreSum;

const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');

let playingGame;



const init = function(){
    playingGame = true;  
    playerActive = 0;
    scoreSum = 0;
    score = [0 , 0];
    document.querySelector(`#score--0`).textContent =0;
    document.querySelector(`#score--1`).textContent =0;

    document.querySelector(`.player0`).classList.remove('player--winner');
    document.querySelector(`.player1`).classList.remove('player--winner');
    diceContainer.classList.add('hide');
document.querySelector('.left_part').classList.add('part--active');
document.querySelector('.right_part').classList.remove('part--active');

document.getElementById(`currentScore--0`).textContent = 0;
document.getElementById(`currentScore--1`).textContent = 0;

}

init();


//Starting setup Conditions


diceContainer.classList.add('hide');
document.querySelector('.left_part').classList.add('part--active');






//Some Function FOR CLEAN CODE
//function foR CURRENT SCORE switch
const switchPlayer = function(){
    scoreSum=0;

    player0.classList.toggle('part--active');
    player1.classList.toggle('part--active');

    document.getElementById(`currentScore--${playerActive}`).textContent = 0;
    playerActive = playerActive===0 ?1:0;
    
}

















//Setting Up MAIN ROLL event



rollDice.addEventListener('click', function () {
    if(playingGame){

   
const computerMove = Math.trunc(Math.random() * (5.7) +1 );

diceImage.src = `dice-${computerMove}.png`;



diceContainer.classList.remove('hide');

if(computerMove!=1){
    //adding sum of score

    scoreSum+=computerMove;

document.getElementById(`currentScore--${playerActive}`).textContent = scoreSum;







  

}
else{
switchPlayer();


 
 
    
}

}
})





newGame.addEventListener('click', function(){

init();

})




holdBtn.addEventListener('click', function(){
if(playingGame){


score[playerActive]+=scoreSum;



document.querySelector(`#score--${playerActive}`).textContent = score[playerActive];





if(score[playerActive]>=50){
    playingGame=false;
    document.querySelector(`.player${playerActive}`).classList.toggle('player--winner');
   diceContainer.classList.add('hide');

    document.querySelector(`.player${playerActive}`).classList.remove('player--active');


}

else{
    switchPlayer();
}







}
})

