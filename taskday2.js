let pen=40;
let note=60;
let bag=300;
let total=pen+note+bag;
console.log(total);
// check even or odd
let isEvenOrOdd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');
console.log(isEvenOrOdd(9));
// increament
let num=5;
console.log(++num);
// check eligible of vote
let userage=25;
let vote = userage>=18 ? "Eligible":"Not eligible";
console.log(vote);
//compare two strings
 let watch= 200;
console.log(watch=="200");
console.log(watch==="200");
// check valid email and password
let email= "suba@gmail.com" ? "valid" : "invalid";
let password= 1234589 ? "valid" : "invalid";
let valid = email && password;
console.log(valid);
//wallet balance
let walletbalance = 1000;
 walletbalance += 300;
console.log("Balance after adding funds: ₹" + walletbalance);
//ternary operator
let product = 30;
let available = product<=20 ? "instock" : "out of stock";
console.log(available);
 let a=10, b=5;
 console.log(a>b);
/// apply discounts
 let carttotal = 100;
 let discount = carttotal>50 ? carttotal*0.08 : 0;
 let finalprice = carttotal - discount;
console.log("Cartfinalprice: ₹" + finalprice);
// login using phonenumber
let number = 9543836378;
let confirm_number = "yes";
let login = 9543836378 == 9543836378 || confirm_number==="no";
console.log(login);
//leap year
 let year = 2025;
 let leap_year = (year % 400 == 0) ? "leap year" : "not a leap year";
console.log(leap_year);