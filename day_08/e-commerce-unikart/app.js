// Application Data
const appData = {
  "products": [
    {
      "id": 1,
      "name": "Minimalist Cotton T-Shirt",
      "price": 29.99,
      "category": "Fashion",
      "subcategory": "Clothing",
      "rating": 4.5,
      "reviews": 128,
      "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      "description": "Premium cotton t-shirt with modern minimalist design. Perfect for casual wear and layering.",
      "stock": 45,
      "colors": ["Black", "White", "Gray", "Navy"],
      "sizes": ["XS", "S", "M", "L", "XL"]
    },
    {
      "id": 2,
      "name": "Wireless Bluetooth Headphones",
      "price": 89.99,
      "category": "Electronics",
      "subcategory": "Audio",
      "rating": 4.7,
      "reviews": 89,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      "stock": 23,
      "features": ["Noise Cancelling", "20h Battery", "Fast Charging", "Bluetooth 5.0"]
    },
    {
      "id": 3,
      "name": "Elegant Table Lamp",
      "price": 79.99,
      "category": "Home Decor",
      "subcategory": "Lighting",
      "rating": 4.3,
      "reviews": 67,
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "description": "Modern ceramic table lamp with warm LED lighting. Perfect for bedrooms and living rooms.",
      "stock": 15,
      "colors": ["White", "Black", "Gray"]
    },
    {
      "id": 4,
      "name": "Leather Crossbody Bag",
      "price": 149.99,
      "category": "Accessories",
      "subcategory": "Bags",
      "rating": 4.6,
      "reviews": 234,
      "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "description": "Genuine leather crossbody bag with adjustable strap and multiple compartments.",
      "stock": 18,
      "colors": ["Brown", "Black", "Tan"]
    },
    {
      "id": 5,
      "name": "Smart Fitness Watch",
      "price": 199.99,
      "category": "Electronics",
      "subcategory": "Wearables",
      "rating": 4.4,
      "reviews": 156,
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      "description": "Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life.",
      "stock": 31,
      "features": ["Heart Rate Monitor", "GPS", "Waterproof", "7-day Battery"]
    },
    {
      "id": 6,
      "name": "Bohemian Wall Art Print",
      "price": 39.99,
      "category": "Home Decor",
      "subcategory": "Wall Art",
      "rating": 4.8,
      "reviews": 92,
      "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      "description": "Beautiful bohemian-style wall art print on premium paper. Perfect for modern home decor.",
      "stock": 67,
      "sizes": ["12x16", "16x20", "20x24"]
    },
    {
      "id": 7,
      "name": "Denim Jacket",
      "price": 89.99,
      "category": "Fashion",
      "subcategory": "Outerwear",
      "rating": 4.2,
      "reviews": 78,
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      "description": "Classic denim jacket with modern fit and premium quality denim fabric.",
      "stock": 29,
      "colors": ["Light Blue", "Dark Blue", "Black"],
      "sizes": ["XS", "S", "M", "L", "XL"]
    },
    {
      "id": 8,
      "name": "Scented Candle Set",
      "price": 59.99,
      "category": "Home Decor",
      "subcategory": "Candles",
      "rating": 4.7,
      "reviews": 145,
      "image": "https://images.unsplash.com/photo-1602874801006-e26c44e16f25?w=400",
      "description": "Set of 3 premium scented candles with 40-hour burn time each. Made with natural soy wax.",
      "stock": 42,
      "scents": ["Vanilla", "Lavender", "Ocean Breeze"]
    },
    {
      "id": 9,
      "name": "Minimalist Watch",
      "price": 129.99,
      "category": "Accessories",
      "subcategory": "Watches",
      "rating": 4.5,
      "reviews": 201,
      "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
      "description": "Elegant minimalist watch with leather strap and Swiss movement. Perfect for any occasion.",
      "stock": 24,
      "colors": ["Black", "Brown", "Navy"]
    },
    {
      "id": 10,
      "name": "Portable Speaker",
      "price": 69.99,
      "category": "Electronics",
      "subcategory": "Audio",
      "rating": 4.6,
      "reviews": 187,
      "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      "description": "Compact Bluetooth speaker with 360-degree sound and 12-hour battery life.",
      "stock": 38,
      "features": ["360° Sound", "12h Battery", "Waterproof", "Bluetooth 5.0"]
    },
    {
      "id": 11,
      "name": "Ceramic Vase",
      "price": 49.99,
      "category": "Home Decor",
      "subcategory": "Vases",
      "rating": 4.4,
      "reviews": 73,
      "image": "https://images.unsplash.com/photo-1578749556568-bc2c40e68629?w=400",
      "description": "Handcrafted ceramic vase with modern geometric design. Perfect for fresh or dried flowers.",
      "stock": 21,
      "colors": ["White", "Black", "Beige"]
    },
    {
      "id": 12,
      "name": "Designer Sunglasses", 
      "price": 159.99,
      "category": "Accessories",
      "subcategory": "Eyewear",
      "rating": 4.3,
      "reviews": 119,
      "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      "description": "Premium designer sunglasses with UV protection and polarized lenses.",
      "stock": 33,
      "features": ["UV Protection", "Polarized", "Anti-Glare", "Scratch Resistant"]
    }
  ],
  "categories": [
    {
      "name": "Fashion",
      "subcategories": ["Clothing", "Outerwear", "Shoes", "Activewear"],
      "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400"
    },
    {
      "name": "Electronics", 
      "subcategories": ["Audio", "Wearables", "Mobile", "Computing"],
      "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400"
    },
    {
      "name": "Home Decor",
      "subcategories": ["Lighting", "Wall Art", "Candles", "Vases", "Furniture"],
      "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
    },
    {
      "name": "Accessories",
      "subcategories": ["Bags", "Watches", "Jewelry", "Eyewear"],
      "image": "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=400"
    }
  ]
};

// Application State
let currentPage = 'home';
let filteredProducts = [...appData.products];
let cart = [];
let currentUser = null;
let searchTimeout = null;

// Utility Functions
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (hasHalfStar) {
    stars += '☆';
  }
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    stars += '☆';
  }
  
  return stars;
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3000);
}

// Theme Management
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme} mode`);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// Navigation Management
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    
    // Close mobile menu
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    if (navMenu) navMenu.classList.remove('active');
    if (navToggle) navToggle.classList.remove('active');
    
    // Initialize page content
    if (pageId === 'shop') {
      renderProducts();
    } else if (pageId === 'cart') {
      renderCartItems();
    }
  }
}

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  
  if (navMenu) navMenu.classList.toggle('active');
  if (navToggle) navToggle.classList.toggle('active');
}

// Product Rendering
function renderProductCard(product) {
  return `
    <div class="product-card" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn--primary" onclick="showProductDetail(${product.id})">View</button>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const featured = appData.products.slice(0, 6);
  const featuredGrid = document.getElementById('featured-products-grid');
  if (featuredGrid) {
    featuredGrid.innerHTML = featured.map(product => renderProductCard(product)).join('');
  }
}

function renderCategories() {
  const categoriesGrid = document.getElementById('categories-grid');
  if (categoriesGrid) {
    categoriesGrid.innerHTML = appData.categories.map(category => `
      <div class="category-card" onclick="filterByCategory('${category.name}')">
        <img src="${category.image}" alt="${category.name}" class="category-image" loading="lazy">
        <div class="category-overlay">
          <h3 class="category-name">${category.name}</h3>
        </div>
      </div>
    `).join('');
  }
}

function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  const resultsCount = document.getElementById('results-count');
  
  if (!productsGrid) return;
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No products found</h3>
        <p>Try adjusting your filters or search terms.</p>
      </div>
    `;
    if (resultsCount) resultsCount.textContent = 'No products found';
    return;
  }
  
  productsGrid.innerHTML = filteredProducts.map(product => renderProductCard(product)).join('');
  if (resultsCount) resultsCount.textContent = `${filteredProducts.length} products found`;
}

// Product Detail
function showProductDetail(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const productDetail = document.getElementById('product-detail');
  if (productDetail) {
    productDetail.innerHTML = `
      <div class="product-detail-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-detail-image" loading="lazy">
      </div>
      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <div class="product-detail-price">${formatPrice(product.price)}</div>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <p class="product-detail-description">${product.description}</p>
        <div class="product-detail-actions">
          <button class="btn btn--primary btn--lg" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn--secondary btn--lg" onclick="buyNow(${product.id})">Buy Now</button>
        </div>
      </div>
    `;
  }
  
  showPage('product-detail');
}

// Search Functionality
function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const searchSuggestions = document.getElementById('search-suggestions');
  
  if (!searchInput) return;
  
  const query = searchInput.value.toLowerCase().trim();
  
  if (query === '') {
    if (searchSuggestions) searchSuggestions.style.display = 'none';
    filteredProducts = [...appData.products];
  } else {
    filteredProducts = appData.products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
    
    // Show suggestions
    const suggestions = filteredProducts.slice(0, 5);
    if (suggestions.length > 0 && searchSuggestions) {
      searchSuggestions.innerHTML = suggestions.map(product => `
        <div class="suggestion-item" onclick="selectSuggestion('${product.name}', ${product.id})">
          ${product.name}
        </div>
      `).join('');
      searchSuggestions.style.display = 'block';
    } else if (searchSuggestions) {
      searchSuggestions.style.display = 'none';
    }
  }
  
  renderProducts();
}

function selectSuggestion(name, productId) {
  const searchInput = document.getElementById('search-input');
  const searchSuggestions = document.getElementById('search-suggestions');
  
  if (searchInput) searchInput.value = name;
  if (searchSuggestions) searchSuggestions.style.display = 'none';
  showProductDetail(productId);
}

// Filtering
function initFilters() {
  const categoryFilters = document.getElementById('category-filters');
  const ratingFilters = document.getElementById('rating-filters');
  
  if (categoryFilters) {
    const categories = [...new Set(appData.products.map(p => p.category))];
    categoryFilters.innerHTML = categories.map(category => `
      <label class="filter-checkbox">
        <input type="checkbox" value="${category}" onchange="applyFilters()">
        ${category}
      </label>
    `).join('');
  }
  
  if (ratingFilters) {
    ratingFilters.innerHTML = [4, 3, 2, 1].map(rating => `
      <label class="filter-checkbox">
        <input type="checkbox" value="${rating}" onchange="applyFilters()">
        ${rating}+ Stars
      </label>
    `).join('');
  }
}

function applyFilters() {
  let filtered = [...appData.products];
  
  // Category filter
  const categoryFilters = document.getElementById('category-filters');
  if (categoryFilters) {
    const selectedCategories = Array.from(categoryFilters.querySelectorAll('input:checked')).map(cb => cb.value);
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
  }
  
  // Price filter
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  if (priceMin && priceMax) {
    const minPrice = parseInt(priceMin.value);
    const maxPrice = parseInt(priceMax.value);
    filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }
  
  // Rating filter
  const ratingFilters = document.getElementById('rating-filters');
  if (ratingFilters) {
    const selectedRatings = Array.from(ratingFilters.querySelectorAll('input:checked')).map(cb => parseInt(cb.value));
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product => selectedRatings.some(rating => product.rating >= rating));
    }
  }
  
  // Search filter
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    const searchQuery = searchInput.value.toLowerCase().trim();
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
      );
    }
  }
  
  filteredProducts = filtered;
  sortProducts();
  renderProducts();
}

function filterByCategory(category) {
  showPage('shop');
  
  setTimeout(() => {
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
      // Clear all filters first
      categoryFilters.querySelectorAll('input').forEach(cb => cb.checked = false);
      
      // Check the specific category
      const categoryCheckbox = categoryFilters.querySelector(`input[value="${category}"]`);
      if (categoryCheckbox) {
        categoryCheckbox.checked = true;
        applyFilters();
      }
    }
  }, 100);
}

function clearAllFilters() {
  const categoryFilters = document.getElementById('category-filters');
  const ratingFilters = document.getElementById('rating-filters');
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const searchInput = document.getElementById('search-input');
  
  if (categoryFilters) categoryFilters.querySelectorAll('input').forEach(cb => cb.checked = false);
  if (ratingFilters) ratingFilters.querySelectorAll('input').forEach(cb => cb.checked = false);
  if (priceMin) priceMin.value = 0;
  if (priceMax) priceMax.value = 300;
  if (searchInput) searchInput.value = '';
  
  updatePriceRange();
  filteredProducts = [...appData.products];
  renderProducts();
}

function updatePriceRange() {
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const priceMinVal = document.getElementById('price-min-val');
  const priceMaxVal = document.getElementById('price-max-val');
  
  if (priceMin && priceMax && priceMinVal && priceMaxVal) {
    const min = parseInt(priceMin.value);
    const max = parseInt(priceMax.value);
    
    priceMinVal.textContent = min;
    priceMaxVal.textContent = max;
    
    applyFilters();
  }
}

// Sorting
function sortProducts() {
  const sortSelect = document.getElementById('sort-select');
  if (!sortSelect) return;
  
  const sortBy = sortSelect.value;
  
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
    default:
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
}

// Cart Management
function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartUI();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  renderCartItems();
  showToast('Item removed from cart');
}

function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
    updateCartUI();
    renderCartItems();
  } else if (newQuantity <= 0) {
    removeFromCart(productId);
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById('cart-count');
  
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function calculateCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCartItems() {
  const cartItems = document.getElementById('cart-items');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>
    `;
    if (cartSubtotal) cartSubtotal.textContent = '$0.00';
    if (cartTotal) cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
      <div class="cart-item-info">
        <h3 class="cart-item-name">${item.name}</h3>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <input type="number" value="${item.quantity}" class="quantity-input" onchange="updateQuantity(${item.id}, parseInt(this.value))" min="1">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
  
  const total = calculateCartTotal();
  if (cartSubtotal) cartSubtotal.textContent = formatPrice(total);
  if (cartTotal) cartTotal.textContent = formatPrice(total);
}

function buyNow(productId) {
  addToCart(productId);
  showPage('cart');
}

// Authentication
function showAuthModal(mode = 'login') {
  const authModal = document.getElementById('auth-modal');
  if (authModal) {
    authModal.classList.remove('hidden');
  }
}

function hideAuthModal() {
  const authModal = document.getElementById('auth-modal');
  if (authModal) {
    authModal.classList.add('hidden');
  }
}

// Make functions globally available
window.showPage = showPage;
window.toggleTheme = toggleTheme;
window.toggleMobileMenu = toggleMobileMenu;
window.showProductDetail = showProductDetail;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.buyNow = buyNow;
window.filterByCategory = filterByCategory;
window.selectSuggestion = selectSuggestion;
window.applyFilters = applyFilters;
window.clearAllFilters = clearAllFilters;
window.updatePriceRange = updatePriceRange;
window.showAuthModal = showAuthModal;
window.hideAuthModal = hideAuthModal;

// Initialization
function init() {
  // Set initial theme
  document.documentElement.setAttribute('data-color-scheme', 'light');
  updateThemeIcon('light');
  
  // Setup event listeners
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const cartBtn = document.getElementById('cart-btn');
  const authBtn = document.getElementById('auth-btn');
  const searchInput = document.getElementById('search-input');
  const clearFilters = document.getElementById('clear-filters');
  const sortSelect = document.getElementById('sort-select');
  const backBtn = document.getElementById('back-btn');
  const modalClose = document.getElementById('modal-close');
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (navToggle) navToggle.addEventListener('click', toggleMobileMenu);
  if (cartBtn) cartBtn.addEventListener('click', () => showPage('cart'));
  if (authBtn) authBtn.addEventListener('click', () => showAuthModal());
  if (backBtn) backBtn.addEventListener('click', () => showPage('shop'));
  if (modalClose) modalClose.addEventListener('click', hideAuthModal);
  if (clearFilters) clearFilters.addEventListener('click', clearAllFilters);
  
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(handleSearch, 300);
    });
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortProducts();
      renderProducts();
    });
  }
  
  if (priceMin) priceMin.addEventListener('input', updatePriceRange);
  if (priceMax) priceMax.addEventListener('input', updatePriceRange);
  
  // Navigation event delegation
  document.addEventListener('click', function(e) {
    if (e.target.hasAttribute('data-page')) {
      e.preventDefault();
      const page = e.target.getAttribute('data-page');
      showPage(page);
    }
  });
  
  // Product card clicks
  document.addEventListener('click', function(e) {
    const productCard = e.target.closest('.product-card');
    if (productCard && !e.target.closest('button')) {
      const productId = parseInt(productCard.getAttribute('data-product-id'));
      showProductDetail(productId);
    }
  });
  
  // Initialize content
  initFilters();
  renderFeaturedProducts();
  renderCategories();
  renderProducts();
  updateCartUI();
}

// Start the application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}