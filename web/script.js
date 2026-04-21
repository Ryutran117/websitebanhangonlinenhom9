// Dữ liệu sản phẩm mẫu (Product Data) mở rộng với 6 danh mục
const products = [
    // Điện tử
    { id: 1, categoryId: 'electronics', name: "Tai nghe chống ồn Sony WH-1000XM5", brand: "Sony", price: 8990000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/1c/dd/b7/8b02cc1ddf5ab52bb1fcf5e88b2ee4d8.png" },
    { id: 2, categoryId: 'electronics', name: "Đồng hồ thông minh Apple Watch Series 8", brand: "Apple", price: 9990000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/1f/71/07/2737da777121f2af749bca5ac8d3a2b5.jpeg" },
    { id: 5, categoryId: 'electronics', name: "Điện thoại Samsung Galaxy S23 Ultra", brand: "Samsung", price: 25990000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/e0/90/d4/5a7a6c38a5c7f32600e22048c7135027.jpg" },
    { id: 7, categoryId: 'electronics', name: "Loa Bluetooth JBL Flip 6 Không Dây", brand: "JBL", price: 2690000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/23/78/82/52853bd8c89cdc73206e3f66eeac8aab.png" },
    { id: 11, categoryId: 'electronics', name: "Bàn phím cơ Keychron K8 Pro", brand: "Keychron", price: 2150000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/51/0f/b4/ddc8047be15e76ee2bc1c7888ff5f05b.jpg" },

    // Thời trang
    { id: 3, categoryId: 'fashion', name: "Giày Sneaker Nike Air Max 270", brand: "Nike", price: 3500000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/89/ac/85/77b714008fe3305f4570d996d05348f4.jpg" },
    { id: 8, categoryId: 'fashion', name: "Áo Thun Cổ Tròn Basic Cotton", brand: "Uniqlo", price: 250000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/4b/e5/dd2e98c627dc8529ae7ac6b64508cd64.jpg" },
    { id: 12, categoryId: 'fashion', name: "Quần Jean Nam Ống Đứng cao cấp", brand: "Levis", price: 1200000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/81/88/af/5941ebe8a410c5f98daa09b5aae9ba47.jpg" },
    { id: 13, categoryId: 'fashion', name: "Áo Khoác Da Nữ Mẫu Mới", brand: "Zara", price: 2500000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/1d/07/2e/8db79d44b5fc4e20b28019ddbd53e37c.jpg" },
    { id: 14, categoryId: 'fashion', name: "Giày Cao Gót Mũi Nhọn Trắng", brand: "Charles & Keith", price: 1800000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/2c/49/64/8e0562a634e70ae5e8763aa2ea34ed07.jpg" },

    // Phụ kiện
    { id: 4, categoryId: 'accessories', name: "Balo Thời Trang Nam Nữ Chống Nước", brand: "Local Brand", price: 450000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/bb/90/07/0eccde3360ed4425e601d7dbafcbf770.png" },
    { id: 6, categoryId: 'accessories', name: "Kính mát Unisex Ray-Ban Aviator", brand: "Ray-Ban", price: 2100000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/f1/7c/5a/b9f249a7221be83ae9c92aacb8bfad99.jpg" },
    { id: 15, categoryId: 'accessories', name: "Nhẫn Bạc Đính Đá Elegant", brand: "PNJ", price: 850000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/15/36/34/ccec89a8ae6d78ebc1910301dd7b9fa8.jpg" },
    { id: 16, categoryId: 'accessories', name: "Ví Da Nam Cao Cấp", brand: "Leonardo", price: 650000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/1f/c9/63/cafd37f70bcfcc6c43b60a20c8a3a529.PNG" },
    { id: 17, categoryId: 'accessories', name: "Dây Chuyền Mặt Trăng Khuyết", brand: "Swarovski", price: 3200000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/22/82/4a/543bca71ef2e4946fb65796d49276752.png" },

    // Mỹ phẩm
    { id: 9, categoryId: 'cosmetics', name: "Nước hoa Chanel No.5 Eau De Parfum", brand: "Chanel", price: 3450000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/5f/e7/24/1a9b128d501b35a15700fa52d5d7937a.jpg" },
    { id: 10, categoryId: 'cosmetics', name: "Kem dưỡng da ẩm La Mer", brand: "La Mer", price: 4500000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/fa/d6/2c/49d128bf7627e4197d69ce5292d29b1d.jpeg" },
    { id: 18, categoryId: 'cosmetics', name: "Son Môi MAC Ruby Woo", brand: "MAC", price: 650000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/de/13/d1/9419e2402bf457ccd751f7694e2f99ee.png" },
    { id: 19, categoryId: 'cosmetics', name: "Kem Chống Nắng Anessa", brand: "Anessa", price: 490000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/d9/90/4e/0f2a7fccb596c3adf5b139c7cb31c136.png" },
    { id: 20, categoryId: 'cosmetics', name: "Sữa Rửa Mặt Cetaphil", brand: "Cetaphil", price: 350000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/58/14/2b/e2f400114f376d11c333438792c03277.png" },

    // Sách
    { id: 21, categoryId: 'books', name: "Nhà Giả Kim - Paulo Coelho", brand: "NXB Hội Nhà Văn", price: 79000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/19/b6/1b/ced6cfc9b0119ef2ed3565ecef27f395.jpg" },
    { id: 22, categoryId: 'books', name: "Đắc Nhân Tâm", brand: "First News", price: 86000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/f6/cf/30/7d07be35cd3432d455fc9b77285379ce.jpg" },
    { id: 23, categoryId: 'books', name: "Sapiens - Lược sử loài người", brand: "Yuval Noah Harari", price: 250000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/54/44/ec/20755ddad37cc1e7477f9a98aed12c77.jpg" },
    { id: 24, categoryId: 'books', name: "Tâm Lý Học Tội Phạm", brand: "Nhiều Tác Giả", price: 150000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/84/18/27/3694a0eb3685db5e596d02f65333abfe.jpeg" },

    // Thể thao
    { id: 25, categoryId: 'sports', name: "Vợt Cầu Lông Yonex Astrox", brand: "Yonex", price: 1550000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/69/c8/e5/6e82b14e24bf572d04357f52c1217272.jpg" },
    { id: 26, categoryId: 'sports', name: "Bóng Đá Adidas World Cup", brand: "Adidas", price: 890000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/b2/fc/bc/de550df153b3b7eefd464b0a3106d8cd.jpg" },
    { id: 27, categoryId: 'sports', name: "Thảm Tập Yoga Định Tuyến", brand: "Liforme", price: 3500000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/c2/0a/a4/8e5b2fc6f9aed9c8c3e7ee19be9d33a7.jpg" },
    { id: 28, categoryId: 'sports', name: "Tạ Đơn Điều Chỉnh Bowflex", brand: "Bowflex", price: 4200000, image: "https://salt.tikicdn.com/cache/750x750/ts/product/be/40/69/9aed5a482b65cfd969fa21199975fab0.jpg" }
];

// Trạng thái giỏ hàng (Cart State)
let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCountElements = document.querySelectorAll('.cart-count');

// Thanh tìm kiếm Elements
const searchInputs = document.querySelectorAll('.search-bar input');
const searchBtns = document.querySelectorAll('.search-bar button');
const productDetailContainer = document.getElementById('productDetailContainer');

// Hàm định dạng tiền tệ Việt Nam
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const categoryNames = {
    'electronics': 'Điện tử',
    'fashion': 'Thời trang',
    'accessories': 'Phụ kiện',
    'cosmetics': 'Mỹ phẩm',
    'books': 'Sách',
    'sports': 'Thể thao'
};

// Hiển thị danh sách sản phẩm
const renderProducts = () => {
    if (!productGrid) return;
    
    // Check url params for category filtering or searching
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('type');
    const searchQuery = urlParams.get('q');
    
    // Change section title dynamically based on category or search
    const sectionTitle = document.querySelector('.section-title');
    if (searchQuery) {
        if (sectionTitle) sectionTitle.textContent = 'Kết quả tìm kiếm cho: "' + searchQuery + '"';
        document.title = 'Tìm kiếm: ' + searchQuery + ' - NEUSHOP';
    } else if (categoryFilter) {
        if (sectionTitle) {
            sectionTitle.textContent = "Danh mục - " + (categoryNames[categoryFilter] || 'Tất cả');
            document.title = (categoryNames[categoryFilter] || 'Sản phẩm') + " - NEUSHOP";
        }
    } else {
        if (sectionTitle) {
            const isProductPageCheck = window.location.pathname.includes('products.html');
            sectionTitle.textContent = isProductPageCheck ? "Tất cả sản phẩm" : "Sản phẩm bán chạy";
            document.title = isProductPageCheck ? "Sản phẩm - NEUSHOP" : "NEUSHOP - Cửa Hàng Hiện Đại";
        }
    }

    let productsToRender = products;
    
    // Áp dụng bộ lọc
    if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        productsToRender = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query)
        );
    } else if (categoryFilter) {
        productsToRender = products.filter(p => p.categoryId === categoryFilter);
    }
    
    // Hiển thị
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #6b7280;">Không tìm thấy sản phẩm nào phù hợp.</p>';
        return;
    }
    
    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-img">
                <a href="product-detail.html?id=${product.id}" class="product-link" aria-label="Xem chi tiết ${product.name}">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/500x500/f3f4f6/6b7280?text=ShopVip';">
                </a>
                <div class="product-action">
                    <button class="add-to-cart" onclick="event.preventDefault(); event.stopPropagation(); addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-title"><a href="product-detail.html?id=${product.id}" class="product-link">${product.name}</a></h3>
                <div class="product-price">${formatPrice(product.price)}</div>
            </div>
        </div>
    `).join('');
};

const renderProductDetail = () => {
    if (!productDetailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number.parseInt(urlParams.get('id'), 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        productDetailContainer.innerHTML = `
            <div class="product-not-found">
                <h2>Không tìm thấy sản phẩm</h2>
                <p>Sản phẩm bạn đang tìm có thể đã được cập nhật hoặc không còn hiển thị.</p>
                <a href="products.html" class="btn btn-primary">Quay lại trang sản phẩm</a>
            </div>
        `;
        return;
    }

    document.title = `${product.name} - NEUSHOP`;

    productDetailContainer.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-detail-media">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/700x700/f3f4f6/6b7280?text=ShopVip';">
            </div>
            <div class="product-detail-info">
                <span class="product-detail-brand">${product.brand}</span>
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="product-detail-price">${formatPrice(product.price)}</div>
                <p class="product-detail-desc">Sản phẩm chính hãng thuộc danh mục ${categoryNames[product.categoryId] || 'khác'}, thiết kế hiện đại và phù hợp nhu cầu mua sắm hằng ngày.</p>
                <div class="product-detail-meta">
                    <div><strong>Mã sản phẩm:</strong> SP${String(product.id).padStart(4, '0')}</div>
                    <div><strong>Danh mục:</strong> ${categoryNames[product.categoryId] || 'Khác'}</div>
                    <div><strong>Thương hiệu:</strong> ${product.brand}</div>
                    <div><strong>Tình trạng:</strong> Còn hàng</div>
                </div>
                <div class="product-detail-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                    </button>
                    <a href="products.html" class="btn product-detail-back">Quay lại sản phẩm</a>
                </div>
            </div>
        </div>
    `;
};

// Xử lý Tìm kiếm (Search)
const executeSearch = (query, scrollToProducts = false) => {
    const isProductPage = document.getElementById('productGrid') !== null;
    
    if (!isProductPage) {
        if (query.trim() !== '') {
            window.location.href = `products.html?q=${encodeURIComponent(query.trim())}`;
        }
        return;
    }

    const newUrl = new URL(window.location.href);
    if (query.trim() !== '') {
        newUrl.searchParams.set('q', query.trim());
    } else {
        newUrl.searchParams.delete('q');
    }
    window.history.pushState({path: newUrl.href}, '', newUrl.href);
    
    renderProducts();

    if (scrollToProducts && query.trim() !== '') {
        const productSection = document.getElementById('products');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Cập nhật lại UI khi người dùng ấn nút Back/Forward trên trình duyệt
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q') || '';
    searchInputs.forEach(input => input.value = searchQuery);
    renderProducts();
});

// Hàm hiển thị kết quả tìm kiếm (Dropdown)
const showSearchDropdown = (input, dropdown, query) => {
    query = query.toLowerCase().trim();
    if (!query) {
        dropdown.classList.remove('active');
        return;
    }

    const matchedProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query)
    ).slice(0, 5); // Giới hạn 5 kết quả

    if (matchedProducts.length === 0) {
        dropdown.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">Không tìm thấy sản phẩm</div>';
    } else {
        dropdown.innerHTML = matchedProducts.map(product => `
            <div class="search-result-item" onclick="window.location.href='products.html?q=${encodeURIComponent(product.name)}'">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://placehold.co/40x40/f3f4f6/6b7280?text=ShopVip';">
                <div class="search-result-info">
                    <div class="search-result-title">${product.name}</div>
                    <div class="search-result-price">${formatPrice(product.price)}</div>
                </div>
            </div>
        `).join('');
    }
    dropdown.classList.add('active');
};

searchInputs.forEach((input, index) => {
    const searchBar = input.closest('.search-bar');
    let dropdown = searchBar.querySelector('.search-dropdown');
    
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'search-dropdown';
        searchBar.appendChild(dropdown);
    }

    // Tìm kiếm thời gian thực (Live Search) trực tiếp trên trang hiện tại
    input.addEventListener('input', function() {
        executeSearch(this.value, false);
        // Đồng bộ nhiều ô tìm kiếm
        searchInputs.forEach(otherInput => {
            if (otherInput !== input) otherInput.value = this.value;
        });
        
        // Hiển thị dropdown
        showSearchDropdown(this, dropdown, this.value);
    });

    // Ẩn dropdown khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Hiển thị lại dropdown khi focus vào ô tìm kiếm
    input.addEventListener('focus', function() {
        if (this.value) {
            showSearchDropdown(this, dropdown, this.value);
        }
    });

    // Tìm kiếm bằng phím Enter (Có tự động cuộn đến phần kết quả)
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            dropdown.classList.remove('active');
            executeSearch(this.value, true);
        }
    });
    
    // Tìm kiếm bằng Click chuột vào Icon Kính lúp (Có tự động cuộn đến phần kết quả)
    if(searchBtns[index]) {
        searchBtns[index].addEventListener('click', () => {
            dropdown.classList.remove('active');
            executeSearch(input.value, true);
        });
    }
    
    // Tự động điền lại từ khóa cũ vào ô tìm kiếm theo URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    if(searchQuery) {
        input.value = searchQuery;
    }
});

// Bật/Tắt giao diện giỏ hàng
const toggleCart = () => {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
};

if (cartBtn) cartBtn.addEventListener('click', toggleCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

// Thêm sản phẩm vào giỏ hàng
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Tự động mở giỏ hàng khi thêm sản phẩm
    if(!cartSidebar.classList.contains('active')) toggleCart();
};

// Xóa sản phẩm khỏi giỏ hàng
window.removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

// Cập nhật số lượng sản phẩm
window.updateQuantity = (productId, change) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
};

// Cập nhật giao diện giỏ hàng (UI)
const updateCartUI = () => {
    // Cập nhật thẻ số lượng trên icon giỏ hàng
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);

    // Cập nhật danh sách hiển thị
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Giỏ hàng của bạn đang trống</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='https://placehold.co/80x80/f3f4f6/6b7280?text=ShopVip';">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">
                                <i class="fa-solid fa-minus" style="font-size: 10px;"></i>
                            </button>
                            <input type="text" class="qty-input" value="${item.quantity}" readonly>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">
                                <i class="fa-solid fa-plus" style="font-size: 10px;"></i>
                            </button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Xóa</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Cập nhật tổng tiền
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = formatPrice(total);
};

// Xử lý tạo Modal Overlay thanh toán bằng QR Code
const initPaymentModal = () => {
    let paymentModal = document.getElementById('paymentModal');
    if(!paymentModal) {
        paymentModal = document.createElement('div');
        paymentModal.id = 'paymentModal';
        paymentModal.className = 'cart-overlay'; // Tái sử dụng CSS từ cart-overlay
        paymentModal.innerHTML = `
            <div style="background: white; width: 90%; max-width: 420px; margin: 10vh auto; padding: 2rem; border-radius: 1rem; text-align: center; position: relative; z-index: 1005; display: flex; flex-direction: column; align-items: center; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);">
                <button onclick="const m = document.getElementById('paymentModal'); m.classList.remove('active'); m.style.visibility = 'hidden'; m.style.opacity = '0';" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #6b7280;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Thanh toán đơn hàng</h3>
                <p style="margin-bottom: 1.5rem; color: #6b7280; font-size: 0.9rem;">Sử dụng App Ngân hàng hoặc Ví điện tử (MoMo, ZaloPay,...) để quét mã QR bên dưới.</p>
                <div id="qrContainer" style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; width: 100%; display: flex; justify-content: center; min-height: 250px;">
                    <!-- Hình ảnh QR Code sẽ được nhúng vào đây -->
                </div>
                <div style="font-size: 1rem; color: #4b5563;">Số tiền cần thanh toán:</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #2563eb; margin-top: 0.5rem;" id="qrTotalAmount">0 ₫</div>
            </div>
        `;
        document.body.appendChild(paymentModal);
    }

    // Lựa chọn nút thanh toán thông qua class dùng chung ở cart-footer
    const checkoutBtn = document.querySelector('.cart-footer button');
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) {
                alert('Giỏ hàng của bạn đang trống!');
                return;
            }
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // API tạo QR Code của VietQR
            // Cấu trúc: https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>
            // Ở đây tôi dùng số Ngân hàng VCB demo
            const qrUrl = `https://img.vietqr.io/image/vcb-0123456789-compact2.png?amount=${total}&addInfo=${encodeURIComponent("SHOPVIP Thanh Toan Don Hang")}&accountName=${encodeURIComponent("SHOP VIP STORE")}`;
            
            document.getElementById('qrContainer').innerHTML = `<img src="${qrUrl}" alt="Mã QR Thanh Toán" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">`;
            document.getElementById('qrTotalAmount').textContent = formatPrice(total);
            
            // Đóng giỏ hàng & Mở Modal thanh toán
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            
            const modal = document.getElementById('paymentModal');
            modal.style.visibility = 'visible';
            modal.style.opacity = '1';
            modal.style.zIndex = '1002'; // Cao hơn overlay giỏ hàng
            modal.classList.add('active'); 
        });
    }
};

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', () => {
    initPaymentModal();
    renderProducts();
    renderProductDetail();
    updateCartUI();
});
