const books = [
    { title: "Atomic Habits", author: "James Clear", price: 350, category: "Education" },
    { title: "Harry Potter", author: "J.K. Rowling", price: 500, category: "Fiction" },
    { title: "A Brief History of Time", author: "Stephen Hawking", price: 450, category: "Science" },
    { title: "Marvel Avengers", author: "Stan Lee", price: 250, category: "Comics" },
    { title: "Deep Work", author: "Cal Newport", price: 300, category: "Education" }
];

// -------------- CART FROM LOCALSTORAGE ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ----------------- DISPLAY BOOKS -----------------
function displayBooks() {
    const list = document.getElementById("bookList");
    const search = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const priceRange = document.getElementById("priceFilter").value;

    list.innerHTML = "";

    const filtered = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search);

        const matchesCategory =
            category === "All" || book.category === category;

        let matchesPrice = true;
        if (priceRange !== "All") {
            const [min, max] = priceRange.split("-").map(Number);
            matchesPrice = book.price >= min && book.price <= max;
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    if (filtered.length === 0) {
        list.innerHTML = "<p>No books found.</p>";
        return;
    }

    filtered.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-card";
        div.innerHTML = `
                <div>
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Category: ${book.category}</p>
                    <p>Price: ₹${book.price}</p>
                </div>
                <button onclick='addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')})'>
                    Add to Cart
                </button>
            `;
        list.appendChild(div);
    });
}

// ---------------- ADD TO CART ------------------
function addToCart(book) {
    cart.push(book);
    saveCart();
    alert(`${book.title} added to cart!`);
}

displayBooks(); // initial load