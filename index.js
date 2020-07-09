// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * In counter 1, the variable count is inside the counterMaker scope so you can't easily access it from outside the function.
 * In counter 2, the variable count is global and can be acccessed anytime.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 is a closure because it returns a function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * If you want to be able to access the count variable anywhere, don't use the closure (counter1)
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  min = 0;
  max = 3; //up to but not including 3
  score = Math.floor(Math.random() * (max - min)) + min; //returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.
  return score;
}
let teamscore = inning(); //assigns the random score (from the function) to the variable
console.log(teamscore);


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numberOfInnings){ //Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into.
  let home = 0; //initialize the variables to contain the scores starting at 0.
  let away = 0;
  for (i=0; i < numberOfInnings; i++) { //loop the number of innings
    home = home + callback();//add the existing score to a new random score
    away = away + callback();
  }
  return { //create an object to show scores for Home and Away.
    "Home": home,
    "Away": away,
  }
}

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function getInningScore(awayTeam, homeTeam, inning) { //There's no details on what getInningScore should be doing so I just console logged the score.
  console.log(`Inning ${inning}: Away ${awayTeam} - Home ${homeTeam}`);
}


function scoreboard(getInningScore, inning, numberOfInnings) {
  let home = 0; //initialize the variables to contain the scores starting at 0.
  let away = 0;
  for (i=0; i < numberOfInnings; i++) { //loop the number of innings
    home = home + inning();//add the existing score to a new random score
    away = away + inning();
    getInningScore(away, home, i+1)//run getInningScore callback function with current scores and inning.
    //i starts at 0 but innings start at 1 so have to add 1 to i.
  }
  console.log(`Final Score: Away ${away} - Home ${home}`);
}

scoreboard(getInningScore, inning, 9);

