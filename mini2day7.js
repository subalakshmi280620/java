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