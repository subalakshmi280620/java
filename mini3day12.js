// 1. Store Product Details: Array of objects
let products = [
    { id: 101, name: "Laptop", category: "Electronics", quantity: 10, price: 750 },
    { id: 102, name: "Headphones", category: "Electronics", quantity: 25, price: 50 },
    { id: 103, name: "Shoes", category: "Apparel", quantity: 15, price: 90 },
    { id: 104, name: "Book", category: "Stationery", quantity: 30, price: 15 }
];

// 2. Check Stock Availability by ID or Name
function checkStock(searchTerm) {
    let product = products.find(
        p => p.id === searchTerm || p.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (product) {
        console.log(`✅ Product Found: ${product.name}`);
        console.log(`Category: ${product.category}`);
        console.log(`Quantity: ${product.quantity}`);
        console.log(`Price: $${product.price}`);
    } else {
        console.log("❌ Product not found in inventory.");
    }
}

// 3. Update Inventory (Add or Remove Stock)
function updateStock(productId, quantityChange) {
    let product = products.find(p => p.id === productId);

    if (!product) {
        console.log("❌ Product ID not found.");
        return;
    }

    product.quantity += quantityChange;

    if (product.quantity < 0) {
        product.quantity = 0;
        console.log(`⚠️ Stock cannot go negative. Reset to 0.`);
    }

    console.log(`✅ Updated ${product.name} stock: ${product.quantity}`);
}

// 4. Calculate Total Inventory Value
function calculateTotalValue() {
    let totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
    console.log(`💰 Total Inventory Value: $${totalValue.toFixed(2)}`);
    return totalValue;
}

// --- Example Usage ---
console.log("=== Initial Inventory ===");
console.table(products);

checkStock("Laptop");         // Search by name
checkStock(103);              // Search by ID

updateStock(102, 5);          // Add 5 Headphones
updateStock(104, -10);        // Sell 10 Books

calculateTotalValue();        // Compute total inventory value

console.log("=== Updated Inventory ===");
console.table(products);

