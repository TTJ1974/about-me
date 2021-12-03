'use strict';
let counter = 0;

function answerQuestions_yes_or_no(Q_string, userAnswer, trueAnswer) {
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
        alert("welcome to my site " + UserInput);
        alert("I would like to ask you a few questions. Just yes or no answers please.");
    }

    

let Question01 = "Is my name John? "
let nameGuess = prompt(Question01).toLowerCase();
answerQuestions_yes_or_no(Question01, nameGuess, 'y');
//console.log("counter1 ", counter)





let Question02 = "Was i born in Washington State?"
let ageGuess = prompt(Question02).toLowerCase();
answerQuestions_yes_or_no(Question02, ageGuess, 'y');
//console.log("counter2 ", counter)





let Question03 = "Do i jump out of perfectly good airplanes ?"
let majorGuess = prompt(Question03).toLowerCase();
answerQuestions_yes_or_no(Question03, majorGuess, 'y');
//console.log("counter3 ", counter)




let Question04 = "Do i like building things?"
let statusGuess = prompt(Question04).toLowerCase();
answerQuestions_yes_or_no(Question04, statusGuess, 'y');
//console.log("counter4 ", counter)






let Question05 = "Is my goal to master PYTHON?"
let confermGuess = prompt(Question05).toLowerCase();
answerQuestions_yes_or_no(Question05, confermGuess, 'y');
//console.log("counter5= ", counter)


























  


