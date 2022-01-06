// get player name input
const player1Name = prompt("First player name");
const player2Name = prompt("Second player name");
 
// selecting dom elements
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const maxScore = document.querySelector('#maxscore');
const winner = document.querySelector('#winner');
 
// updating button with corresponding player name
player1.innerText = `+1 ${player1Name}`;
player2.innerText = `+1 ${player2Name}`;
 
let score1 = 0;
let score2 = 0;
 
// add event listener for player1
player1.addEventListener('click', function () {
    console.log("Player 1");
    if (score1 === parseInt(maxScore.value) || score2 === parseInt(maxScore.value)) {
        //game already end, so do nothing
    } else {
        score1++;
        document.querySelector('#score1').innerText = score1;
        if (score1 === parseInt(maxScore.value)) {
            document.querySelector('#score1').style.color = '#0f0';
            document.querySelector('#score2').style.color = '#f00';
            player1.disabled = true;
            player2.disabled = true;
            winner.innerText = `${player1Name} wins!`;
        }
    }
});
 
// add event listener for player2
player2.addEventListener('click', function () {
    console.log('Player 2');
    if (score1 === parseInt(maxScore.value) || score2 === parseInt(maxScore.value)) {
        //game already end, so do nothing
    } else {
        score2++;
        document.querySelector('#score2').innerText = score2;
        if (score2 === parseInt(maxScore.value)) {
            document.querySelector('#score2').style.color = '#0f0';
            document.querySelector('#score1').style.color = '#f00';
            player1.disabled = true;
            player2.disabled = true;
            winner.innerText = `${player2Name} wins!`;
        }
    }
});
 
//add event listener for reset
reset.addEventListener('click', function () {
    score1 = 0;
    score2 = 0;
    document.querySelector('#score1').style.color = '#000';
    document.querySelector('#score2').style.color = 'rgb(0,0,0)';
    document.querySelector('#score1').innerText = score1;
    document.querySelector('#score2').innerText = score2;
    player1.disabled = false;
    player2.disabled = false;
    winner.innerText = 'Game in progress';
});
