// 1. Store Order Details
const orders = [
    { orderId: 101, customerName: "Alice", items: ["Laptop", "Mouse"], totalAmount: 1200 },
    { orderId: 102, customerName: "Bob", items: ["Keyboard"], totalAmount: 100 },
    { orderId: 103, customerName: "Alice", items: ["Monitor"], totalAmount: 300 },
    { orderId: 104, customerName: "Charlie", items: ["Headphones", "Mic"], totalAmount: 250 }
];

// 2. Retrieve Specific Order (by order ID or customer name)
function getOrder(searchKey) {
    const results = orders.filter(order =>
        order.orderId === searchKey || order.customerName.toLowerCase() === String(searchKey).toLowerCase()
    );

    if (results.length > 0) {
        console.log("🔍 Order(s) found:", results);
        return results;
    } else {
        console.log("❌ No order found for:", searchKey);
        return [];
    }
}

// 3. Calculate Total Revenue
function calculateTotalRevenue() {
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    console.log("💰 Total Revenue:", totalRevenue);
    return totalRevenue;
}

// 4. Filter Orders by Customer
function getOrdersByCustomer(customerName) {
    const customerOrders = orders.filter(
        order => order.customerName.toLowerCase() === customerName.toLowerCase()
    );

    if (customerOrders.length > 0) {
        console.log(`🧾 Orders by ${customerName}:`, customerOrders);
        return customerOrders;
    } else {
        console.log(`❌ No orders found for customer: ${customerName}`);
        return [];
    }
}

// ------------------
// Example Usage
// ------------------

getOrder(101); // Search by order ID
getOrder("Alice"); // Search by customer name
calculateTotalRevenue(); // Get total revenue
getOrdersByCustomer("Alice"); // Filter all orders by Alice
