'use strict';

let user= prompt('Hello, whats your name?');
// console.log(user)
alert ('welcome to my site ' + user);


let game= window.confirm('Lets play a guessing game, OK?');

if (game === true){
  alert('Are you ready? Lets Begin!');
} else {
  alert('Like you have a choice. Lets do this!');
}

let counter = 0;

function quest1 (){
  
  let ansOne= prompt('Was I born in washington?').toLowerCase();
  //console.log("Correct, I lived in Saudi Arabia for 2 years")
  if (ansOne === 'yes' || ansOne === 'y'){
    alert('Correct ' + user + '! In Mt. Vernon.');
    counter++;
  } else{
    alert('Sorry ' + user + ' That is incorrect. I was born in MT. Vernon.');
  }
}

quest1();



function quest2 (){
  
  let ansTwo= prompt('Did I join the army?').toLowerCase();
  //console.log('that is correct')
  if (ansTwo === 'yes' || ansTwo === 'y'){
    alert('Correct, Still not sure if that was the right call.');
    counter++;
  } else {
    alert ('Incorrect. I joined the army right out of highschool.');
  }
}

quest2();


function quest3 (){

  let ansThree= prompt('Did I jump out of perfectly good airplanes?').toLowerCase();
  //console.log('never')
  if (ansThree === 'yes' || ansThree === 'y'){
    alert('Incorrect. I Did jump out of those airplanes 70 some odd times ' + user + '.' );
  } else {
    alert('Correct! There is no such thing as a perfectly good airforce airplane !');
    counter++;
  }
}

quest3();


function quest4 (){
  let ansFour = prompt('Do I like fabricating sheetmetal?').toLowerCase();
  //console.log('I sure did')
  if (ansFour === 'yes' || ansFour === 'y'){
    alert('Correct! Its an awesome feeling to take a raw sheet of metal and make something useful.');
    counter++;
  } else {
    alert('Sorry wrong answer. Are you sure your read my bio?');
  }
}
quest4();

function quest5 (){
  let ansFive = prompt('Would I like to design video games after Code Fellows?').toLowerCase();
  //console.log('yes I would')
  if (ansFive === 'yes' || ansFive === 'y'){
    alert('Yes I would, whether it be my job or in my own free time I would like to design, code, and release at least one game.');
    counter++;
  } else {
    alert('Sorry ' + user + ' wrong answer. whether it be my job or in my own free time I would like to design, code, and release at least one game.');
  }
}

quest5();

function quest6(){


  let correctA = '37';
  let attempts = 3;
  let guessNum = prompt('guess a number between 0 and 100.');

  while (guessNum !== correctA && attempts > 0){
    attempts--;
    if (guessNum > 37){
      alert('that number is too high.');
    } else if (guessNum < 37){
      alert('that number is too low.');
    }
    guessNum = prompt('Guess Again');
  }

  if(guessNum === '37'){
    alert('That is the right number');
    counter++;
  } else {
    alert('out of guesses the correct answer was 37');
  }
}

quest6 ();

function quest7(){
  let liquors = ['whiskey', 'rum', 'vodka', 'gin', 'tequila', 'absinthe', 'brandy', 'mezcal', 'rye', 'scotch'];
  let fav = liquors[9];
  let fave = liquors[4];
  let guessLiquor = prompt(`What are my favorite types of liquor?        possible answers include ${liquors[0]}, ${liquors[1]}, ${liquors[2]}, ${liquors[3]}, ${liquors[4]}, ${liquors[5]}, ${liquors[6]}, ${liquors[7]}, ${liquors[8]}, and ${liquors[9]}. There are two correct answers.`).toLowerCase();
  let attempt = 5;

  while (guessLiquor !== fav && guessLiquor !== fave && attempt > 0){
    attempt--;
    if (guessLiquor !== fav){
      alert('Wrong Liquor!');
    }
    guessLiquor = prompt('Guess Again');
  }
  if (guessLiquor === fav){
    alert(`That is Correct the other correct answer was ${fave}.`);
    counter++;
  } else if (guessLiquor === fave){
    alert(`That is correct. The other correct answer was ${fav}.`);
    counter++;
  } else {
    alert(`you are out of guesses. The correct answers are ${fav} and ${fave}.`);
  }
}

quest7();




alert(`Thanks for playing ${user}, you got ${counter}/7 correct.  Hope you learned a little more about me.`);















