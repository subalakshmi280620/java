const productList = document.getElementById('productList');
const priceFilter = document.getElementById('priceFilter');
const sortSelect = document.getElementById('sort');
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

let products = [];

// Fetch product data
async function fetchProducts() {
    const res = await fetch('products.json');
    products = await res.json();
    displayProducts(products);
}

// Display products
function displayProducts(list) {
    productList.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <p>${p.category}</p>
    `;
        card.addEventListener('click', () => showProductDetails(p));
        productList.appendChild(card);
    });
}

// Filter by price
priceFilter.addEventListener('change', () => {
    let filtered = [...products];
    const filterValue = priceFilter.value;
    if (filterValue !== 'all') {
        filtered = filtered.filter(p => p.price < parseFloat(filterValue));
    }
    applySort(filtered);
});

// Sort by price
sortSelect.addEventListener('change', () => {
    applySort();
});

function applySort(customList = products) {
    let sorted = [...customList];
    const sortValue = sortSelect.value;

    if (sortValue === 'low-high') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'high-low') {
        sorted.sort((a, b) => b.price - a.price);
    }

    displayProducts(sorted);
}

// Show product details in modal
function showProductDetails(p) {
    document.getElementById('modalImage').src = p.image;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalPrice').textContent = `Price: $${p.price}`;
    document.getElementById('modalCategory').textContent = `Category: ${p.category}`;
    document.getElementById('modalDescription').textContent = p.description;
    modal.style.display = 'block';
}

// Close modal
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

// Initialize
fetchProducts();
