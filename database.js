// 模擬數據庫系統
class MockDatabase {
    constructor() {
        this.products = [
            { id: '1', name: '皮卡丘 (Pikachu) VMAX', price: 1500, stock: 10, image: 'image/c_img8.jpg', category: 'card' },
            { id: '2', name: '噴火龍 (Charizard) ex', price: 1200, stock: 8, image: 'image/c_img7.jpg', category: 'card' },
            { id: '3', name: '超夢 (Mewtwo) V', price: 1300, stock: 15, image: 'image/c_img6.png', category: 'card' },
            { id: '4', name: '夢幻 (Mew) ex', price: 1400, stock: 12, image: 'image/c_img5.jpg', category: 'card' },
            { id: '5', name: '烈空坐 (Rayquaza) VMAX', price: 1800, stock: 6, image: 'image/c_img4.webp', category: 'card' },
            { id: '6', name: '耿鬼 (Gengar) V', price: 1100, stock: 20, image: 'image/c_img1.png', category: 'card' },
            { id: '7', name: '路卡利歐 (Lucario) ex', price: 1600, stock: 9, image: 'image/c_img3.png', category: 'card' },
            { id: '8', name: '伊布 (Eevee) 英雄', price: 2000, stock: 5, image: 'image/c_img2.jpg', category: 'card' },
            
            // 卡盒產品
            { id: 'cb1', name: '劍盾 蒼響卡盒', price: 3500, stock: 15, image: 'image/cb_img1.jpg', category: 'cardbox' },
            { id: 'cb2', name: '朱紫 擴充包盒', price: 4200, stock: 12, image: 'image/cb_img2.png', category: 'cardbox' },
            { id: 'cb3', name: '天地萬物 頂級卡盒', price: 3800, stock: 8, image: 'image/cb_img3.png', category: 'cardbox' },
            { id: 'cb4', name: 'WPTCG卡盒', price: 2800, stock: 20, image: 'image/cb_img4.webp', category: 'cardbox' },
            { id: 'cb5', name: '伊布英雄 強化擴充包', price: 5500, stock: 6, image: 'image/cb_img5.jpg', category: 'cardbox' },
            { id: 'cb6', name: '雙璧戰士 卡盒', price: 3200, stock: 10, image: 'image/cb_img6.webp', category: 'cardbox' },
            { id: 'cb7', name: 'VMAX 絕頂卡盒', price: 4800, stock: 7, image: 'image/cb_img7.webp', category: 'cardbox' },
            { id: 'cb8', name: 'PTCG 25週年黃金盒', price: 6000, stock: 5, image: 'image/cb_img8.jpg', category: 'cardbox' },
            
            // 周邊產品
            { id: 'cp1', name: '卡片保護套', price: 150, stock: 50, image: 'image/cp_img1.jpg', category: 'periphery' },
            { id: 'cp2', name: '卡片收納盒', price: 450, stock: 25, image: 'image/cp_img2.jpg', category: 'periphery' },
            { id: 'cp3', name: '卡片展示架', price: 450, stock: 15, image: 'image/cp_img3.jpg', category: 'periphery' },
            { id: 'cp4', name: '卡片收納本', price: 600, stock: 30, image: 'image/cp_img4.jpg', category: 'periphery' },
            { id: 'cp5', name: '清潔套件', price: 350, stock: 40, image: 'image/cp_img5_real.jpg', category: 'periphery' },
            
            // 特別商品
            { id: 'cs1', name: 'PSA10分🇹🇼銀包帽子莉莉艾🇹🇼', price: 33000, stock: 3, image: 'image/s1.jpg', category: 'special' },
            { id: 'cs2', name: 'BGS 10 Black Label Shiny Charizard Gx', price: 14999, stock: 2, image: 'image/s2.jpg', category: 'special' },
            { id: 'cs3', name: '日版BGS 黑10 寶可夢鑑定卡大黑噴噴火龍Vmax ssr', price: 21370, stock: 1, image: 'image/s3.jpg', category: 'special' },
            { id: 'cs4', name: '寶可夢PTCG日文版PSA10分 CGC黑10橫濱皮卡丘 鑑定卡', price: 27000, stock: 1, image: 'image/s4.jpg', category: 'special' },
            { id: 'cs5', name: 'BGS 稀有鑑定卡 萊希拉姆 & 噴火龍GX (萊噴）Tag Team HR 彩虹卡 中文版 雙倍爆擊 10分', price: 30000, stock: 1, image: 'image/s5.jpg', category: 'special' }
        ];

        this.users = [
            { id: '1', email: 'admin@example.com', password: 'admin123', name: '管理員', role: 'admin' },
            { id: '2', email: 'user@example.com', password: 'user123', name: '一般用戶', role: 'user' }
        ];

        this.messages = [
            { id: '1', user: '小明', content: '這個網站的卡片質量很好！', date: new Date('2024-01-15') },
            { id: '2', user: '小華', content: '配送速度很快，包裝也很仔細', date: new Date('2024-01-14') },
            { id: '3', user: '小李', content: '客服態度很好，解決問題很快', date: new Date('2024-01-13') }
        ];

        this.visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
        this.lastVisit = localStorage.getItem('lastVisit');
        
        // 更新訪問次數
        this.updateVisitCount();
    }

    // 獲取所有產品
    getProducts(category = null) {
        if (category) {
            return this.products.filter(product => product.category === category);
        }
        return this.products;
    }

    // 根據ID獲取產品
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    // 搜索產品
    searchProducts(query) {
        return this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    // 購買產品（減少庫存）
    purchaseProduct(productId, quantity) {
        const product = this.getProductById(productId);
        if (product && product.stock >= quantity) {
            product.stock -= quantity;
            localStorage.setItem('products', JSON.stringify(this.products));
            return { success: true, message: '購買成功' };
        }
        return { success: false, message: '庫存不足或產品不存在' };
    }

    // 用戶認證
    authenticateUser(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return { success: true, user: user };
        }
        return { success: false, message: '帳號或密碼錯誤' };
    }

    // 獲取留言板消息
    getMessages() {
        return this.messages.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // 添加新消息
    addMessage(user, content) {
        const newMessage = {
            id: (this.messages.length + 1).toString(),
            user: user,
            content: content,
            date: new Date()
        };
        this.messages.unshift(newMessage);
        localStorage.setItem('messages', JSON.stringify(this.messages));
        return newMessage;
    }

    // 更新訪問次數
    updateVisitCount() {
        this.visitCount++;
        localStorage.setItem('visitCount', this.visitCount.toString());
        localStorage.setItem('lastVisit', new Date().toLocaleString());
    }

    // 獲取訪問次數
    getVisitCount() {
        return this.visitCount;
    }

    // 添加新產品（管理員功能）
    addProduct(product) {
        const newProduct = {
            ...product,
            id: (this.products.length + 1).toString()
        };
        this.products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(this.products));
        return newProduct;
    }

    // 更新產品（管理員功能）
    updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            localStorage.setItem('products', JSON.stringify(this.products));
            return this.products[index];
        }
        return null;
    }

    // 刪除產品（管理員功能）
    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            localStorage.setItem('products', JSON.stringify(this.products));
            return deletedProduct;
        }
        return null;
    }

    // 註冊新用戶
    registerUser(userData) {
        // 檢查是否已存在相同email
        const existingUser = this.users.find(u => u.email === userData.email);
        if (existingUser) {
            return { success: false, message: '此電子郵件已被註冊' };
        }

        const newUser = {
            id: (this.users.length + 1).toString(),
            ...userData,
            role: 'user'
        };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        return { success: true, user: newUser };
    }

    // 產品評論功能
    getProductReviews(productId) {
        const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
        return reviews.filter(review => review.productId === productId)
                     .sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    addProductReview(review) {
        try {
            const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
            const newReview = {
                id: Date.now().toString(),
                ...review,
                date: new Date().toISOString()
            };
            reviews.push(newReview);
            localStorage.setItem('productReviews', JSON.stringify(reviews));
            return true;
        } catch (error) {
            console.error('Error adding product review:', error);
            return false;
        }
    }

    // 獲取當前登入用戶
    getCurrentUser() {
        const userStr = localStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    }

    // 用戶登出
    logoutUser() {
        localStorage.removeItem('currentUser');
    }

    // 獲取所有產品評論（管理員功能）
    getAllProductReviews() {
        return JSON.parse(localStorage.getItem('productReviews')) || [];
    }

    // 刪除產品評論（管理員功能）
    deleteProductReview(reviewId) {
        try {
            const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
            const filteredReviews = reviews.filter(review => review.id !== reviewId);
            localStorage.setItem('productReviews', JSON.stringify(filteredReviews));
            return true;
        } catch (error) {
            console.error('Error deleting product review:', error);
            return false;
        }
    }

    // XSS防護函數
    escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // SQL注入防護函數
    sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        
        // 防止SQL注入的基本過濾
        const sqlPatterns = [
            /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
            /['"]/g,
            /--/g,
            /\/\*/g,
            /\*\//g
        ];
        
        let sanitized = input;
        sqlPatterns.forEach(pattern => {
            sanitized = sanitized.replace(pattern, '');
        });
        
        return sanitized.trim();
    }
}

// 全局數據庫實例
window.database = new MockDatabase();

// 向後兼容
window.mockDB = window.database;

// SQL注入防護函數
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    // 防止SQL注入的基本過濾
    const sqlPatterns = [
        /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
        /['"]/g,
        /--/g,
        /\/\*/g,
        /\*\//g
    ];
    
    let sanitized = input;
    sqlPatterns.forEach(pattern => {
        sanitized = sanitized.replace(pattern, '');
    });
    
    return sanitized.trim();
}

// XSS防護函數
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Cookie管理
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookieConsent")) {
        document.getElementById("cookieBar").style.display = "flex";
    }
  
    document.getElementById("acceptCookies").onclick = function () {
      localStorage.setItem("cookieConsent", "accepted");
      document.getElementById("cookieBar").style.display = "none";
    };
  
    document.getElementById("rejectCookies").onclick = function () {
      localStorage.setItem("cookieConsent", "rejected");
      document.getElementById("cookieBar").style.display = "none";
    };
  });

// 檢查用戶是否同意Cookie使用
function checkCookieConsent() {
    if (!getCookie('cookieConsent')) {
        showCookieNotice();
    }
}

function showCookieNotice() {
    const notice = document.createElement('div');
    notice.className = 'cookie-notice';
    notice.innerHTML = `
        <div class="cookie-content">
            <p>本網站使用Cookie來提供更好的用戶體驗。繼續使用本網站即表示您同意我們的Cookie政策。</p>
            <button onclick="acceptCookies()" class="accept-btn">同意</button>
            <button onclick="declineCookies()" class="decline-btn">拒絕</button>
        </div>
    `;
    document.body.appendChild(notice);
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    document.querySelector('.cookie-notice').remove();
}

function declineCookies() {
    setCookie('cookieConsent', 'declined', 365);
    document.querySelector('.cookie-notice').remove();
}

// 頁面加載時檢查Cookie同意狀態
document.addEventListener('DOMContentLoaded', checkCookieConsent); 