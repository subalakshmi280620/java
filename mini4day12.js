// 1️⃣ Store Book Records
let library = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        available: true,
        borrower: null
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        available: true,
        borrower: null
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        available: false,
        borrower: "Alice"
    }
];

// 2️⃣ Search Books by title, author, or genre
function searchBooks(keyword) {
    keyword = keyword.toLowerCase();
    const results = library.filter(book =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword) ||
        book.genre.toLowerCase().includes(keyword)
    );
    console.log("🔍 Search Results:", results);
    return results;
}

// 3️⃣ Track Borrowed Books
function borrowBook(bookId, borrowerName) {
    const book = library.find(b => b.id === bookId);
    if (book) {
        if (book.available) {
            book.available = false;
            book.borrower = borrowerName;
            console.log(`📕 "${book.title}" has been borrowed by ${borrowerName}.`);
        } else {
            console.log(`⚠️ "${book.title}" is already borrowed by ${book.borrower}.`);
        }
    } else {
        console.log("❌ Book not found.");
    }
}

function returnBook(bookId) {
    const book = library.find(b => b.id === bookId);
    if (book) {
        if (!book.available) {
            book.available = true;
            console.log(`✅ "${book.title}" has been returned by ${book.borrower}.`);
            book.borrower = null;
        } else {
            console.log(`⚠️ "${book.title}" was not borrowed.`);
        }
    } else {
        console.log("❌ Book not found.");
    }
}

// 4️⃣ List Available Books
function listAvailableBooks() {
    const availableBooks = library.filter(book => book.available);
    console.log("📚 Available Books:");
    availableBooks.forEach(book =>
        console.log(`- ${book.title} by ${book.author} (${book.genre})`)
    );
    return availableBooks;
}

// ----------------------
// 💡 Example Usage
// ----------------------
searchBooks("classic");
borrowBook(2, "John");
listAvailableBooks();
returnBook(3);
listAvailableBooks();