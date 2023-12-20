/*
# Coding Challenge : 1

Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
console.log("Mark Mass (Kg) = " + markMass);
console.log("Mark Height (M.) = " + markHeight);
console.log("John Height (M.) = " + johnHeight);
console.log("John Mass (Kg) = " + johnMass);

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("\nMark BMI : " + markBMI.toFixed(2));
console.log("John BMI : " + johnBMI.toFixed(2));
console.log("markHigherBMI : " + markHigherBMI);

*/

/*let markHigherBMI;
if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log("\nmark has a higher BMI than john.");
} else {
    markHigherBMI = false;
    console.log("john has a higher BMI than mark.");
}
*/



// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
console.log("Mark Mass (Kg) : " + markMass);
console.log("Mark Height (M.) : " + markHeight);
console.log("John Height (M.) : " + johnHeight);
console.log("John Mass (Kg) : " + johnMass);

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("\nMark BMI : " + markBMI.toFixed(2));
console.log("John BMI : " + johnBMI.toFixed(2));
console.log("markHigherBMI : " + markHigherBMI);

*/

/*let markHigherBMI;
if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log("\nmark has a higher BMI than john.");
} else {
    markHigherBMI = false;
    console.log("\njohn has a higher BMI than mark.");
}
*/


// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// TEST 1: 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"


//Solution :

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// console.log("Mark Mass (Kg) = " + markMass);
// console.log("Mark Height (M.) = " + markHeight);
// console.log("John Height (M.) = " + johnHeight);

const markBMI = (markMass / markHeight ** 2);
const johnBMI = (johnMass / johnHeight ** 2);
console.log("\nMark BMI : " + markBMI.toFixed(2));
console.log("John BMI : " + johnBMI.toFixed(2));

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

*/

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = (markMass / markHeight ** 2).toFixed(2);
const johnBMI = (johnMass / johnHeight ** 2).toFixed(2);
console.log("\nMark BMI : " + markBMI);
console.log("John BMI : " + johnBMI);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/


// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// 1. Calculate the average score for each team, using the test data below.
// const avgDolphin = ((96 + 108 + 89) / 3).toFixed(2);
// const avgKoalas = ((88 + 91 + 110) / 3).toFixed(2);
// console.log("Average Score Team Dolphins : " + avgDolphin);
// console.log("Average Score Team Koalas : " + avgKoalas);

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// if (avgDolphin > avgKoalas) {
//     console.log("Winner of the Competition is Dolphins Team. ");
// }

// else if (avgDolphin === avgKoalas) {
//     console.log("Both Team Score Equal. Match is Draw!");
// }

// else {
//     console.log("Winner of the Competition is Koalas Team.");
// }

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// const scoreDolphins = ((97 + 112 + 101)).toFixed(2);
// const scoreKoalas = ((109 + 95 + 106)).toFixed(2);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy.');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('koalas win the trophy.');
// } else {
//     console.log('No one win the trophy');
// }



//  BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// const scoreDolphins = ((97 + 112 + 101) / 3).toFixed(2);
// const scoreKoalas = ((109 + 95 + 123) / 3).toFixed(2);
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(' Both win the trophy 🏆');
// } else {
//     console.log(' No One win the trophy 🏆');

// }











