let a = 10;
if (a > 0) {
    console.log("The number is positive");
}
let age = 20;
if (age >= 18) {
    console.log("Person is adult");
} else {
    console.log("The person is not adult");
}

let score = 75;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

let number = 40;
if (number % 2 == 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}

let drivingage = 17;
if (drivingage >= 18) {
    console.log("Eligible for Driving");
} else {
    console.log("Not Eligible for Driving");
}

let login = false;
let Admin = true;
if (login) {
    if (Admin) {
        console.log("Welcome, Admin!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("please Log in!");
}

let day = "sunday";
switch (day) {
    case "monday":
        console.log("start of the week!");
        break;
    case "wednesday":
        console.log("middle of the week!");
        break;
    case "sunday":
        console.log("most lovable day of the week because of holiday!");
        break;
    default:
        console.log("it is a normal day!");
}

let Ages=70;
let seniorcitizenage=65;
let EligibleforDiscount=(Ages>=seniorcitizenage) ? "Eligible for senior citizen" : "Not Eligible for senior citizen";

console.log(EligibleforDiscount);

let username=true;
let password=true;
if(username&&password){
    console.log(" Logged in!");
}else{
    console.log("please, Log in!")
}

let user="";
let email="suba@gmail.com";
if(user||email){
    console.log("Either username or email is provided.");
}else{
    console.log("Neither username nor email is provided.");
}

let year=2025;
if(year%400==0){
    console.log("this year is a leap year");
}else{
    console.log("This year is not a leap year");
}
 let boolean=true;
 let negateboolean=!boolean;

 console.log(negateboolean);

 let Password=1234567890;
 if(Password.length>=8 == Password.length<=20){
    console.log("Password is a valid length.");
 }else{
    console.log("Password must be between 8 and 20 characters.");
 }