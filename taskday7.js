//using constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person("suba", 25);
console.log(person1);
//using constructor return
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            return `Hello, my name is ${this.name}`;
        }
    };
}
let person = createPerson("suba", 25);
console.log(person.greet());

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
let mycar = new Car("suzuki", "autoX", 2017);
console.log(mycar);

class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getAge() {
        const currentyear = new Date().getFullYear();
        return currentyear - this.year;
    }
}
const myCars = new Cars("Toyota", "Camry", 2018);
console.log(`My car is a ${myCars.make} ${myCars.model} from ${myCars.year}.`);
console.log(`It is ${myCars.getAge()} years old.`);

function DynamicObject(initialProperty, dynamickey, dynamicvalue) {
    this.fixedProperty = initialProperty;
    this[dynamickey] = dynamicvalue;
    this.addOrUpdateProperty = function (key, value) {
        this[key] = value;
    };
}
const myObject = new DynamicObject("Hello", "customfield", 123);
console.log(myObject.fixedProperty);
console.log(myObject.customField);
myObject.addOrUpdateProperty("newProperty", "a new value");
console.log(myObject.newProperty);
myObject.addOrUpdateProperty("customField", 456);
console.log(myObject.customField);

class Bankaccount {
    constructor(accountnumber, initialbalance) {
        this.accountnumber = accountnumber;
        this.balance = initialbalance;
        console.log(`Accoun ${this.accountnumber} created with initail balance: $${this.balance}`);
    }

deposit(amount){
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}
withdraw(amount){
    if (amount > 0) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`withdraw $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("insuffiecient funds for withdrawal.");
        }
    } else {
        console.log("withdrawal amount must be positive.");
    }

}
getBalance(){
    return this.balance;
}
}
const myaccount=new Bankaccount("123456789",1000);
myaccount.deposit(500);
myaccount.withdraw(200);
myaccount.withdraw(1500);
console.log(`current balance for account ${myaccount.accountnumber}: $${myaccount.getBalance()}`);

const{state="none"}={};
console.log(state);

function Student(name,grades){
    this.name=name;
    this.grades=grades;
    this.calculateAveragegrade=function(){
        if (!Array.isArray(this.grades)|| this.grades.length===0){
            return 0;
        }
        const sum=this.grades.reduce((total,grade)=>total+grade,0);
        return sum/this.grades.length;
    };
}
const student1=new Student("suba",[85,90,78,92]);
console.log(`${student1.name}'s average grade: ${student1.calculateAveragegrade()}`);
const student2=new Student("muthu",[60,70,65]);
console.log(`${student2.name}'s average grade: ${student2.calculateAveragegrade()}`);
const student3=new Student("ananthi",[]);
console.log(`${student3.name}'s average grade: ${student3.calculateAveragegrade()}`);

function Persons(name,age){
    this.name=name;
    this.age=age;
}
const persons1 =new Persons("suba", 25);
Persons.prototype.greet=function(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

};
const persons2=new Persons("muthu",30);
console.log(persons1.greet());
console.log(persons2.greet());

function Book(title,author,price){
    this.title=title;
    this.author=author;
    this.price=price;
}
const book1=new Book("The Hobbit","J.R.R.Tolkien",15.99);
const book2=new Book("The lord of the rings","J.R.R.Tolkien",25.00); 
const allBooks=[book1,book2];
function filterBookByprice(books, maxprice){
    return books.filter(book=>book.price<=maxprice);
}
const affordableBooks=filterBookByprice(allBooks,15.00);
console.log("All Books:");
console.log(allBooks);
console.log("/nBooks cheaper than or equal to $15:");
console.log(affordableBooks);

function Employee(name,id){
    this.name=name;
    this.id=id;
}
    function Manager(name,id,department,managedTeam){
        Employee.call(this, name,id);
        this.department=department;
    }
    Employee.prototype.getDetails=function(){
        return `Name: ${this.name}, ID: ${this.id}`;
    };
    Manager.prototype=Object.create(Employee.prototype);
    Manager.prototype.constructor=Manager;
    Manager.prototype.getManagerdetails=function(){
        return `${this.getDetails()}, department: ${this.department}`;

};
const emp1=new Employee("suba","E001");
console.log(emp1.getDetails());
const manager1=new Manager("muthu","M001","Sales");
console.log(manager1.getDetails());
console.log(manager1.getManagerdetails());

function PERSON(name,age){
    this.name=name;
    this.age=age;
}
function CreatePERSONInstance(personName,personAge){
  const newperson=new PERSON(personName,personAge);
  return newperson;
}
const suba=CreatePERSONInstance("suba",25);
console.log(suba);
console.log(suba.name);