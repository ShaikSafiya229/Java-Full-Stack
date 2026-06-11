/*let name = "Safiya";
var age=20;
const height = "1.72";
console.log(name);
console.log(age);
console.log(age+5);
console.log(age-3);
console.log(age*2);
console.log(age/2);
console.log(age%3);
console.log(height);
age+=3;
console.log(age);
age-=2;
console.log(age);
age*=2;
console.log(age);
age/=2;
console.log(age);
age%=3;
console.log(age);
let age1 = 25;
let age2 = 30;
console.log(age1 > age2);
console.log(age1 < age2);
console.log(age1 >= age2);
console.log(age1 <= age2);
console.log(age1 == age2);
console.log(age1 != age2);
let food="Pizza";
let breakfast="Pancakes";
let food2="idly";
let food3="dosa";
let food4="vada";
let food5="poori";
 if(food==breakfast){
    console.log("I love Pancakes!");
}
else if(food==food2) 
{
    console.log("I love Idly!");
}
else if(food==food3)
 {
    console.log("I love Dosa!");
}
else if (food==food4)
 {
    console.log("I love Vada!");
}
else if (food==food5) 
{
    console.log("I love Poori!");
}
else{
    console.log("I love Pizza!");
}*
let amount = 52100;

let notes500 = 0;
let notes200 = 0;
let notes100 = 0;

if (amount >= 500) {
    notes500 = Math.floor(amount / 500);
    amount = amount % 500;
}

if (amount >= 200) {
    notes200 = Math.floor(amount / 200);
    amount = amount % 200;
}

if (amount >= 100) {
    notes100 = Math.floor(amount / 100);
    amount = amount % 100;
}

console.log("500 notes = " + notes500);
console.log("200 notes = " + notes200);
console.log("100 notes = " + notes100);
let amount = 10000;

let num1= 500;
let num2= 200;
let num3= 100;
if(amount%500==0){
    console.log( amount/500+"notes of 500");
}
if(amount%200==0){
    console.log( amount/200+"notes of 200");
}
if(amount%100==0) {
        console.log( amount/100+"notes of 100");
}
else{
    console.log("Invalid amount");
}
let amount = 5200;
if (amount >= 500) {
    let notes = Math.floor(amount / 500);
    console.log("500 notes x " + notes);
    amount = amount % 500;                
}
if (amount >= 200) {
    let notes = Math.floor(amount / 200);
    console.log("200 notes x " + notes);
    amount = amount % 200;
}
if (amount >= 100) {
    let notes = Math.floor(amount / 100);
    console.log("100 notes x " + notes);
    amount = amount % 100;
}
if (amount > 0) {
    console.log("Remaining change: " + amount);
}
for(let i=1; i<=30;){
    console.log("Day"+i+"completed");
    i++;
}
let username = "Safiya";
let password = "Safiyya123";
let name="amjad";
let pin = 1234;
let name1="Abuzar";
let pin1=5678;
if(name=="amjad"){
    console.log(name);
    if(pin==1234){
        console.log("logged in successfully");
    }
}
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(i+"x" + j+"="+ (j*i));
    }
}
let totalPersons = 5;
let totalGifts = 30;

let index = 0; 
let lastReceiver;

for (let i = 1; i <= totalGifts; i++) {
    lastReceiver = index + 1;

    console.log("Gift " + i + " goes to person " + lastReceiver);

    index = (index + 2) % totalPersons; 
}

console.log("The last gift goes to person: " + lastReceiver);
function cook()
{
    console.log("Pour the batter into the pan.");
    console.log("Rub it round order with gareta");
    console.log("spill some oil above it then wait");
    console.log("Twist it with dosa gareta");
    console.log("At last gently serve it to anyone");
}
for(i=1;i<=9;i++){
    cook();
}
function dishwash(vessels){
    console.log("we have to wash "+vessels+ "vessels");
}
dishwash(2);
*/
function guess(n)
{
    let userGuess = Number(prompt("Enter a number:"));
    if (n == userGuess) {
        console.log("Your guess is right");
    }
    else if (n < userGuess) {
        console.log("Try a small number");
        guess(n);
    }
    else {
        console.log("Try a big number");
        guess(n);
    }
}
let number = Math.floor(Math.random() * 100);
guess(number);