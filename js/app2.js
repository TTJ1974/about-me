'use strict';
let counter = 0;

function answerQuestions_yes_or_no(Q_string, userAnswer, trueAnswer) {
    let score = 0;
    while (!(userAnswer === 'yes') && !(userAnswer === 'no') && !(userAnswer === 'y') && !(userAnswer === 'n')) {

        alert("Yes or no answers only please... we cool?")
        userAnswer = prompt(Q_string).toLowerCase()
        //console.log(userAnswer)
        //console.log(userAnswer)
    }
    if (userAnswer === trueAnswer) {
        score++;
        //console.log("function answer  " + userAnswer, score)
        return score;
    } else return score;

}
let UserInput = prompt("Hello! Could you tell me your name?");
while (!UserInput) {
    UserInput = prompt('please provide a name !');
}
alert("welcome to my site " + UserInput);
alert("I would like to ask you a few questions. Just yes or no answers please.");


function Quest1(){

}
let Question01 = "Is my name John? "
let nameGuess = prompt(Question01).toLowerCase();
answerQuestions_yes_or_no(Question01, nameGuess, 'y');
//console.log("counter1 ", counter)
Quest1();

function Quest2(){

}

let Question02 = "Was i born in Washington State?"
let ageGuess = prompt(Question02).toLowerCase();
answerQuestions_yes_or_no(Question02, ageGuess, 'y');
//console.log("counter2 ", counter)
Quest2();

function Quest3(){

}


let Question03 = "Do i jump out of perfectly good airplanes ?"
let majorGuess = prompt(Question03).toLowerCase();
answerQuestions_yes_or_no(Question03, majorGuess, 'y');
//console.log("counter3 ", counter)
Quest3();

function Quest4(){

}


let Question04 = "Do i like building things?"
let statusGuess = prompt(Question04).toLowerCase();
answerQuestions_yes_or_no(Question04, statusGuess, 'y');
//console.log("counter4 ", counter)
Quest4();


function Quest5(){

}

let Question05 = "Is my goal to master PYTHON?"
let confermGuess = prompt(Question05).toLowerCase();
answerQuestions_yes_or_no(Question05, confermGuess, 'y');
//console.log("counter5= ", counter)
Quest5();

alert(`Looks like you read my bio, your a machine ${UserInput}, now that that is established lets play a game !`);

function quest6(){

    let guessNum = prompt('Guess a number between 0 and 50');
    let attempts = 3;
    let correctA = '20'; //variables for function

while (guessNum !==correctA && attempts > 0) {
    attempts--;// while loop
}








let

let guessNum = prompt(question06).toLowerCase();
checkNumber(question06, guessNum,);

}























