"use strict";
let scorePlayer1 = document.getElementsByClassName("scorePlayer1")[0].innerHTML;
let scorePlayer2 = document.getElementsByClassName("scorePlayer2")[0].innerHTML;

let btnPlayer1 = document.getElementsByClassName("btnPlayer1");
let btnPlayer2 = document.getElementsByClassName("btnPlayer");
let btnReset = document.getElementsByClassName("btnReset");

function scoreIncrement (score) {
score = 0;
score ++;

}
scoreIncrement(scorePlayer1);
