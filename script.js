"use strict";

// let scorePlayer1 = document.getElementsByClassName("scorePlayer1")[0].innerHTML;
// let scorePlayer2 = document.getElementsByClassName("scorePlayer2")[0].innerHTML;
// let maxScore = document.getElementsByClassName("maxScore")[0].innerHTML;


let btnPlayer1 = document.getElementsByClassName("btnPlayer1")[0];
let btnPlayer2 = document.getElementsByClassName("btnPlayer2")[0];
let btnReset = document.getElementsByClassName("btnReset")[0];

let score1 = 0;
let score2 = 0;
let maxScore = 5;

function scoreIncrement1() {

    if(score1 === maxScore) {
        freeze();
        return;
    
    
} else { score1++;

}    

document.getElementsByClassName('scorePlayer1')[0].innerHTML = score1;

    console.log(score1);
}

function scoreIncrement2() {
    if(score2 === maxScore) {
        freeze();
        return;
    
    
} else { score2++;

}     
document.getElementsByClassName('scorePlayer2')[0].innerHTML = score2;
  
    console.log(score2);
}

function freeze() {
    
    btnPlayer1.disabled = true;
    btnPlayer2.disabled = true;

}


function resetScore() {
    document.getElementsByClassName('scorePlayer1')[0].innerHTML = 0;

    document.getElementsByClassName('scorePlayer2')[0].innerHTML = 0;
    score1 = 0;
    score2 = 0;
    

    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;

    console.log(score1);
    console.log(score2);
}

