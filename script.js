// ============================================
// API CONFIGURATION
// ============================================
// All API calls go through Netlify Functions for security
// Credentials are stored in environment variables (never in code)

// ============================================
// PRODUCT DATA
// ============================================
// Products will be loaded from Airtable
// Empty fallback array - if Airtable fails to load, no products will display
let products = [];

// Cart Management
let cart = JSON.parse(localStorage.getItem('farmCart')) || [];

// Fetch Products from Netlify Function
async function fetchProductsFromAirtable() {
    try {
        console.log('🔄 Fetching products from Netlify Function...');

        const response = await fetch('/.netlify/functions/get-products');

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        products = data.products;

        console.log(`✅ Loaded ${products.length} products`);
        return true;

    } catch (error) {
        console.error('❌ Error fetching products:', error);
        console.log('📦 No products available');
        return false;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Try to fetch products from Airtable first
    await fetchProductsFromAirtable();

    // Render products (either from Airtable or fallback)
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        // Skip products without required fields
        if (!product.name || !product.price || !product.unit) {
            console.warn('⚠️ Skipping product with missing required fields:', product);
            return;
        }

        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Use image if available, otherwise use emoji
        const productImage = product.image
            ? `<img src="${product.image}" alt="${product.name}" />`
            : product.emoji;

        productCard.innerHTML = `
            <div class="product-image">${productImage}</div>
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                </div>
                <p class="product-description">${product.description || ''}</p>
                <div class="product-meta">
                    <span class="product-badge">${product.season}</span>
                    <span class="product-badge">Per ${product.unit}</span>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to all add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            addToCart(productId);
        });
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    // Safety check - product might not exist if it was skipped during render
    if (!product) {
        console.error('Product not found:', productId);
        showNotification('Error adding product to cart');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('farmCart', JSON.stringify(cart));
}

// Update Cart Count Badge
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Render Cart Items
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)} per ${item.unit}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-change="-1">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
                </div>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            const change = parseInt(e.target.dataset.change);
            updateQuantity(productId, change);
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        });
    });
}

// Show Notification
function showNotification(message) {
    // Simple notification - you can enhance this
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2d5016;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cart Button
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('active');
        renderCart();
    });
    
    // Close Cart
    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('active');
    });
    
    // Checkout Button
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        document.getElementById('cartModal').classList.remove('active');
        document.getElementById('checkoutModal').classList.add('active');
        updateCheckoutTotal();
    });
    
    // Close Checkout
    document.getElementById('closeCheckout').addEventListener('click', () => {
        document.getElementById('checkoutModal').classList.remove('active');
    });
    
    // Checkout Form
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        handleCheckout();
    });
    
    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target;

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const contactData = {
                "Name": form.elements[0].value,
                "Email": form.elements[1].value,
                "Message": form.elements[2].value,
                "Date Received": new Date().toISOString().split('T')[0],
                "Status": "New"
            };

            const response = await fetch('/.netlify/functions/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            });

            if (response.ok) {
                showNotification('Message sent! We\'ll get back to you soon.');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            showNotification('Error sending message. Please email us directly at sproutingheartfarm@gmail.com');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Close modals on background click
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            document.getElementById('cartModal').classList.remove('active');
        }
    });
    
    document.getElementById('checkoutModal').addEventListener('click', (e) => {
        if (e.target.id === 'checkoutModal') {
            document.getElementById('checkoutModal').classList.remove('active');
        }
    });
}

// Update Checkout Total
function updateCheckoutTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

// Handle Checkout
async function handleCheckout() {
    const form = document.getElementById('checkoutForm');
    const formData = new FormData(form);
    
    // Generate order ID
    const orderId = 'SHF-' + Date.now().toString().slice(-6);
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Format order items for Airtable
    const orderItemsText = cart.map(item => 
        `${item.name} - ${item.quantity} ${item.unit}${item.quantity > 1 ? 's' : ''} @ $${item.price.toFixed(2)} = $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    // Prepare order data for Airtable
    const orderData = {
        "Order ID": orderId,
        "Order Date": new Date().toISOString().split('T')[0],
        "Customer Name": form.elements[0].value,
        "Customer Email": form.elements[1].value,
        "Customer Phone": form.elements[2].value,
        "Pickup Method": form.elements[3].options[form.elements[3].selectedIndex].text,
        "Order Items": orderItemsText,
        "Order Total": total,
        "Customer Notes": form.elements[4].value || "None",
        "Status": "New"
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('/.netlify/functions/submit-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to submit order');
        }
        
        const result = await response.json();
        console.log('Order successfully saved:', result);
        
        // Show success message
        showNotification(`Order ${orderId} submitted successfully! Check your email for confirmation.`);
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartCount();
        
        // Close modal and reset form
        document.getElementById('checkoutModal').classList.remove('active');
        form.reset();
        
    } catch (error) {
        console.error('Error submitting order:', error);
        showNotification('Error submitting order. Please try again or contact us directly.');
        
        // Show detailed error in console for debugging
        console.error('Full error details:', error);
    } finally {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
