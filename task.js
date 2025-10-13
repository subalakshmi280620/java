let title="Javascript!"
var a = "apple"; //Function Scoped,can be re-declared
let b = "20"; //Block scoped, can be reassigned
const c = "red"; //Block scoped,cannot be changed
let student = {Name:"suba", Age:25, Qualification:"B.E",};
let colors = ["blue,green,red,black,violet"];
let fruits = ["apple,banana,orange"];
console.log("title:Hello,"  + title);
console.log(a,b,c);
b="green";
console.log(b);
console.log("Favourite_colors:", colors);
console.log("Student_Details:", student);
//type of different data types
console.log(typeof "apple");
console.log(typeof false);
console.log(typeof ["3,4,5"]);
//string to Number
console.log(parseInt("100"));
//Number to string
console.log((100).toString());
// returns boolean value
console.log(fruits instanceof Array);
//checking their types
console.log(typeof null);
console.log(typeof undefined);
//bigint
const number = BigInt("12345678987654323451678");
console.log(typeof number);
//even or odd
const isEvenOrOdd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');
console.log(isEvenOrOdd(6));
console.log(isEvenOrOdd(9));
//celsius to fahrenheit using variable
let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log('{celsiusTemperature} degree celsius is equal to {fahrenheitTemperature} degrees Fahrenheit.'); 
//unique id
const id1 = Symbol('1234');
const id2 = Symbol('5678');
if (id1 == id2){
    console.log('Symbols are equal.');
} else{
    console.log('Symbols are not equal.');
}