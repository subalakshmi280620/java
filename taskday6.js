//using array
let studentsname=["suba","muthu","ananthi","inthu","mamtha"];
console.log(studentsname);
//using push
studentsname.push("anisha");
console.log(studentsname);
//using pop
studentsname.pop();
console.log(studentsname);
//using map
let students=studentsname.map(stud=>stud.toUpperCase());
console.log(students);
//using forEach
studentsname.forEach(stude=>console.log(stude));
//using objects
let book={title:"The greatest gatsby",author:"F.Scott Fitzgerald",price:"₹1396"};
console.log(book);
//using objectkeys
console.log(Object.keys(book));
//using objectvalues
console.log(Object.values(book));
//using objectassign
let genre={genre:"fiction"};
let completebook=Object.assign(book,genre);
console.log(completebook);
//using delete
delete book.price;
console.log(book);
//using objectentries
console.log(Object.entries(book));
//using merge books
let publisher={
    name:"Charles scribner sons",location:"new york",established:"1846",
};
let mergedbook={...book,...publisher};
console.log(mergedbook);
