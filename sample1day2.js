let cartTotal = 120; // Total price in shopping cart
let discount = cartTotal > 100 ? cartTotal * 0.10 : 0; // 10% discount if total > 100
let finalPrice = cartTotal - discount; // Final price after discount

console.log("Cart Total: ₹" + cartTotal);
console.log("Discount Applied: ₹" + discount); 
console.log("Final Price to Pay: ₹" + finalPrice);