/*
////////////////////////////////////
// Linking a JavaScript File from html <script>src=script.js</script>
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions ---------------------------------------------------------------------------
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jamie');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 24;
age = 25;

const birthYear = 1996;
// birthYear = 1995;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Sing';
console.log(lastName);


// math operators -------------------------------------------------------------------------
const now = 2100;
const ageJamie = now - 1996;
const ageBob = now - 2001;
console.log(ageJamie, ageBob);

console.log(ageJamie * 2, ageJamie / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3= 2 * 2 * 2

const firstName = 'Jamie';
const lastName = 'Singbubpha';
console.log(firstName + ' ' + lastName);

// Assignment operators -----------------------------------------------------------------------------------
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x + x + 1
x--;
x--;
console.log(x);

// Comparison operators ----------------------------------------------------------------------------------
console.log(ageJamie > ageBob); // >, <, >=, <=
console.log(ageBob >= 18);

const isFullAge = ageBob >= 18;

console.log(now - 1996 > now - 2001);

const now = 2037;
const ageJamie = now - 1991;
const ageBob = now - 2018;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJamie + ageBob) / 2
console.log(ageJamie, ageBob, averageAge);


// Coding Challenge #1 ---------------------------------------------------------------------------

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);


// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI)


const firstName = 'Jamie';
const job = 'Potato';
const birthYear = 1996;
const year = 2021;

const jamie = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jamie); // old way

// Template string ---------------------------------------------------------------------------------------
const jamieNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jamieNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
     console.log('Sarah can start driving license');
} else {
     const yearsLeft = 18 - age;
     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
// Challenge 2 --------------------------------------------------------------------------------------------------

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
     console.log(`Mark's BMI is is higher than John's!`);
} else {
     console.log(`John's BMI is higher than Mark's!`);
}

if (BMIMark < BMIJohn) {
     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// type conversion ---------------------------------------------------------------------------------------
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jamie'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion ----------------------------------------------------------------------------------------
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '12' + 1; // `11`
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null , NaN ----------------------------------------------------------------

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jamie'));
console.log(Boolean({}));

const money = 0;
if (money) {
     console.log("Don't spend it all!");
} else {
     console.log('You should get a job!');
}

let height = 0;
if (height) {
     console.log('You got it defined');
} else {
     console.log('nah undefined bruva');
}

// Equality operators: == vs. ===  ----------------------------------------------------------------------------

const age = 18;
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

const favoruite = Number(prompt("What's your favourite number?"));
console.log(favoruite);

if (favoruite === 23) { // '23' == 23/ 23 === 23 : add Number(prompt))
     console.log('Cool! 23 is an amazing number!')
} else if (favoruite === 7) {
     console.log('7 is also a cool number')
} else if (favoruite === 9) {
     console.log('9 is also a cool number')
} else {
     console.log('Number is not 23 or 7 or 9')
}

if (favoruite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//      console.log('Sarah is able to drive');
// } else {
//      console.log('Someone else should drive....');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
     console.log('Sarah is able to drive');
} else {
     console.log('Someone else should drive....');
}



// Challenge #3 ----------------------------------------------------------------------------------

const dolphinScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;
console.log(dolphinScore, koalaScore);

if (dolphinScore > koalaScore) {
     console.log('Dolphins win the trophy!');
} else if (koalaScore > dolphinScore) {
     console.log('Koalas win the trophy!');
} else if (dolphinScore === koalaScore) {
     console.log('Both Win');
}

// BONUS 1

const dolphinScore = (97 + 112 + 101) / 3;
const koalaScore = (109 + 95 + 106) / 3;
console.log(dolphinScore, koalaScore);

if (dolphinScore > koalaScore && dolphinScore >= 100) {
     console.log('Dolphins win the trophy!');
} else if (koalaScore > dolphinScore && koalaScore >= 100) {
     console.log('Koalas win the trophy!');
} else if (dolphinScore === koalaScore && dolphinScore >= 100 && koalaScore >= 100) {
     console.log('Both win trophy');
} else {
     console.log('No one wins');
}


// Switch statement, easier ------------------------------------------------------------------------------------
const day = 'monday';

switch (day) {
     case 'monday': // day === 'monday'
          console.log('Plan course structure');
          console.log('Go to coding meetup');
          break;
     case 'tuesday':
          console.log('Prepare theory videos');
          break;
     case 'wednesday':
     case 'thursday':
          console.log('Write code examples');
          break;
     case 'friday':
          console.log('Record videos');
          break;
     case 'saturday':
     case 'sunday':
          console.log('kick back this that');
          break;
     default:
          console.log('Not a valid day');

}



// different symptex but more complicated... --------------------------------------------------------------
if (day === 'monday') {
     console.log('Plan course structure');
     console.log('Go to coding meetup');
} else if (day === 'tuesday') {
     console.log('Prepare theory videos');

} else if (day === 'wednesday' || day === 'thursday') {
     console.log('Write code examples');

} else if (day === 'friday') {
     console.log('Record videos');

} else if (day === 'saturday' || day === 'sunday') {
     console.log('kick back this that');
} else {
     console.log('Not a valid day');
}

// statements and expression ----------------------------------------------------------------------

3 + 4 // expression
1996
true && false && !false

if (23 > 10) { // If else is a statement, Same as switch statement
     const str = '23 is bigger'; // string is also an expression | expression produce value. This Line = statement
}


const me = 'Jamie';
console.log(`I'm ${2037 - 1996} years old ${me}`) // expression


// The conditional operator ---------------------------------------------------------------------
const age = 24;
age >= 18 ? console.log('I like to drink beer') : console.log('I like water'); // requires another log after.
// Operator always produces value and is also an expression
// If you have value means you can assign to a variable. To decalre variable

const drink = age >= 18 ? 'Wine' : 'water'; // expression produce value then you can make it into a var
console.log(drink);

let drink2;
if (age >= 18) {
     drink2 = 'wine';
} else {
     drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'water'}`);


// Challenge 4 ------------------------------------------------------------------------------------------
Frank wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:

§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

const bill = tip ? [272 + 40 + 430] * 20 / 100
console.log(bill);




