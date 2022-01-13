'use strict';

let user= prompt('Hello, whats your name?');
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
  if (ansTwo === 'yes' || ansTwo === 'y'){
    alert('Correct, Still not sure if that was the right call.');
    counter++;
  } else {
    alert ('Incorrect. I joined the army right out of highschool.');
  }
}

quest2();


function quest3 (){

  let ansThree= prompt('Did I Not jump out of perfectly good airplanes?').toLowerCase();
  if (ansThree === 'yes' || ansThree === 'y'){
    alert('Incorrect. I Did jump out of those airplanes 70 some odd times. ' + user + '.' );
  } else {
    alert('Correct! There is no such thing as a perfectly good airforce airplane !');
    counter++;
  }
}

quest3();


function quest4 (){
  let ansFour = prompt('Do I like fabricating sheetmetal?').toLowerCase();
  if (ansFour === 'yes' || ansFour === 'y'){
    alert('Correct! Its an awesome feeling to take a raw sheet of metal and make something useful.');
    counter++;
  } else {
    alert('nope,nope,nope. Are you sure your read my bio?');
  }
}
quest4();

function quest5 (){
  let ansFive = prompt('Are boats my passion?').toLowerCase();
  if (ansFive === 'yes' || ansFive === 'y'){
    alert('Oh yes boats are the things that stir my soul.');
    counter++;
  } else {
    alert('Sorry ' + user + ' nope wrong again.I LOVE boats!');
  }
//}

//quest5();

//function quest6(){


  let correctA = '20';
  let attempts = 3;
  let guessNum = prompt('guess a number between 0 and 100.');

  while (guessNum !== correctA && attempts > 0){
    attempts--;
    if (guessNum > 20){
      alert('that number is too high.');
    } else if (guessNum < 20){
      alert('that number is too low.');
    }
    guessNum = prompt('Guess Again');
  //}

  if(guessNum === '20'){
    alert('That is the right number');
    counter++;
  } else {
    alert('out of guesses the correct answer was 20');
  }
//}

//quest6 ();

//function quest7(){
  let Beers = ['Trappist Tripel', 'Hefe Weissbeer', 'English Best Bitter', 'West Coast IPA', 'Pilsner', 'Flanders Red', 'Australian Pale Ale', 'Brown Ale', 'Amber Lager', 'Guinness'];
  let fav = Beers[4];
  let fave = Beers[2];
  let guessBeer = prompt(`What are my favorite types of Beer?        possible answers include ${Beers[0]}, ${Beers[1]}, ${Beers[2]}, ${Beers[3]}, ${Beers[4]}, ${Beers[5]}, ${Beers[6]}, ${Beers[7]}, ${Beers[8]}, ${Beers[9]}, ${Beers[10]}, and ${Beers[11]}. There are two correct answers.`).toLowerCase();
  let attempt = 1;

  while (guessBeer !== fav && guessBeer !== fave && attempt > 0){
    attempt--;
    if (guessBeer !== fav){
      alert('Wrong Beer!');
    }
    guessBeer = prompt('Guess Again');
  }
  if (guessBeer === fav){
    alert(`That is Correct the other correct answer was ${fave}.`);
    counter++;
  } else if (guessBeer === fave){
    alert(`That is correct. The other correct answer was ${fav}.`);
    counter++;
  } else {
    alert(`you are out of guesses. The correct answers are ${fav} and ${fave}.`);
  }
//}

//quest7();




alert(`Thanks for playing ${user}, you got ${counter}/7 correct.  Hope you learned a little more about me.`);















