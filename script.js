const defaultSettings = {
  shopName: "Abhusan Bhandar",
  location: "Mughalsarai Railway Settlement, Uttar Pradesh",
  tagline: "Trusted local jewellery shop",
  heroText:
    "Explore graceful jewellery for weddings, festivals, gifts, and everyday wear from a welcoming shop rooted in the Mughalsarai community.",
  aboutText:
    "Abhusan Bhandar is a jewellery shop located in the Mughalsarai Railway Settlement of Uttar Pradesh. The establishment serves the local community with a friendly, welcoming environment for customers seeking jewellery products for important occasions and daily elegance.",
  contactText:
    "Add your favourite pieces to the cart and submit an enquiry. The shop team can confirm availability, final pricing, and purchase details.",
  whatsappNumber: "919876543210",
  phoneNumber: "9876543210",
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
  email: "abhusanbhandar@example.com",
  storeHours: "10:00 AM - 8:00 PM",
  mapUrl: "https://maps.google.com/",
  priceNote: "Final price may vary with live metal rate, product weight, stone work, and design confirmation."
};

const defaultProducts = [
  {
    id: 1,
    name: "Bridal Kundan Set",
    category: "bridal",
    stockStatus: "In Stock",
    metalType: "gold",
    carat: "22K",
    weight: 18.5,
    price: 48500,
    makingCharge: 7.22,
    gstPercent: 3,
    finalPrice: 53562,
    gemstone: "Kundan stones",
    sizeOptions: "Free size",
    deliveryTime: "3-5 working days",
    shippingInfo: "Store pickup and local delivery available",
    returnPolicy: "Exchange available after store confirmation.",
    rating: 4.9,
    reviewCount: 31,
    featured: true,
    description: "Statement necklace and earrings for wedding occasions.",
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=80",
    extraImages:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 2,
    name: "Classic Gold Necklace",
    category: "necklace",
    stockStatus: "Made to Order",
    metalType: "gold",
    carat: "22K",
    weight: 14.2,
    price: 32500,
    makingCharge: 7.69,
    gstPercent: 3,
    finalPrice: 36050,
    gemstone: "None",
    sizeOptions: "Free size",
    deliveryTime: "7-12 working days",
    shippingInfo: "Insured delivery after confirmation",
    returnPolicy: "Made-to-order items can be exchanged only after store approval.",
    rating: 4.8,
    reviewCount: 22,
    featured: true,
    description: "Elegant traditional necklace with a polished finish.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    extraImages:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    category: "earring",
    stockStatus: "In Stock",
    metalType: "silver",
    carat: "Silver",
    weight: 4.8,
    price: 6200,
    makingCharge: 12.9,
    gstPercent: 3,
    finalPrice: 7209,
    gemstone: "Pearl",
    sizeOptions: "Free size",
    deliveryTime: "2-4 working days",
    shippingInfo: "Store pickup and local delivery available",
    returnPolicy: "Exchange available for unused items after store confirmation.",
    rating: 4.7,
    reviewCount: 18,
    featured: true,
    description: "Lightweight pair for festive and formal outfits.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    extraImages: "",
    visible: true
  },
  {
    id: 4,
    name: "Ruby Accent Ring",
    category: "ring",
    stockStatus: "In Stock",
    metalType: "gold",
    carat: "18K",
    weight: 3.2,
    price: 8800,
    makingCharge: 10.23,
    gstPercent: 3,
    finalPrice: 9991,
    gemstone: "Ruby accent",
    sizeOptions: "6, 7, 8, 9",
    deliveryTime: "2-5 working days",
    shippingInfo: "Size adjustment available on request",
    returnPolicy: "Exchange depends on size alteration and condition.",
    rating: 4.8,
    reviewCount: 15,
    featured: false,
    description: "A graceful ring with a rich red centre accent.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    extraImages: "",
    visible: true
  },
  {
    id: 5,
    name: "Gold Finish Bangles",
    category: "bangle",
    stockStatus: "Made to Order",
    metalType: "gold",
    carat: "22K",
    weight: 8.6,
    price: 14800,
    makingCharge: 9.46,
    gstPercent: 3,
    finalPrice: 16685,
    gemstone: "None",
    sizeOptions: "2.4, 2.6, 2.8",
    deliveryTime: "7-10 working days",
    shippingInfo: "Made after size confirmation",
    returnPolicy: "Made-to-order bangles require store approval for exchange.",
    rating: 4.6,
    reviewCount: 11,
    featured: false,
    description: "A pair of refined bangles for daily and occasion wear.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    extraImages: "",
    visible: true
  },
  {
    id: 6,
    name: "Minimal Chain Pendant",
    category: "necklace",
    stockStatus: "In Stock",
    metalType: "gold",
    carat: "18K",
    weight: 5.1,
    price: 7600,
    makingCharge: 9.21,
    gstPercent: 3,
    finalPrice: 8548,
    gemstone: "None",
    sizeOptions: "Free size",
    deliveryTime: "2-4 working days",
    shippingInfo: "Gift packing available in store",
    returnPolicy: "Exchange available after store confirmation.",
    rating: 4.5,
    reviewCount: 9,
    featured: false,
    description: "A simple pendant chain suitable for gifting.",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
    extraImages: "",
    visible: true
  },
  {
    id: 7,
    name: "Festival Jhumka",
    category: "earring",
    stockStatus: "Out of Stock",
    metalType: "gold",
    carat: "Imitation",
    weight: 6.4,
    price: 5400,
    makingCharge: 6.48,
    gstPercent: 3,
    finalPrice: 5922,
    gemstone: "Decorative stones",
    sizeOptions: "Free size",
    deliveryTime: "Ask shop for next availability",
    shippingInfo: "Available after restock",
    returnPolicy: "Exchange available only when in stock.",
    rating: 4.4,
    reviewCount: 8,
    featured: false,
    description: "Traditional jhumka style with festive detailing.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    extraImages: "",
    visible: true
  },
  {
    id: 8,
    name: "Engagement Ring",
    category: "ring",
    stockStatus: "Made to Order",
    metalType: "diamond",
    carat: "22K",
    weight: 4.5,
    price: 16500,
    makingCharge: 9.09,
    gstPercent: 3,
    finalPrice: 18540,
    gemstone: "Diamond-style centre stone",
    sizeOptions: "6, 7, 8, 9, custom",
    deliveryTime: "10-15 working days",
    shippingInfo: "Order after size confirmation",
    returnPolicy: "Custom size orders require store approval for exchange.",
    rating: 4.9,
    reviewCount: 26,
    featured: true,
    description: "A polished ring choice for memorable moments.",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80",
    extraImages: "",
    visible: true
  }
];

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function metalFromCarat(carat) {
  if (carat === "Silver") return "silver";
  if (carat === "Platinum") return "platinum";
  if (carat === "Imitation") return "gold";
  return "gold";
}

function defaultSizes(category) {
  if (category === "ring") return "6, 7, 8, 9";
  if (category === "bangle") return "2.4, 2.6, 2.8";
  if (category === "payal") return "9 inch, 10 inch, 11 inch";
  if (category === "kardhani") return "28 inch, 30 inch, 32 inch";
  if (category === "nose-ring") return "Small, Medium, Large";
  return "Free size";
}

function defaultOccasion(category) {
  if (category === "bridal" || category === "kardhani") return "Wedding";
  if (category === "ring") return "Engagement";
  if (category === "payal" || category === "jhumka") return "Festival";
  return "Everyday";
}

function calculateFinalPrice(price, makingPercent, gstPercent) {
  const basePrice = Number(price || 0);
  const makingAmount = basePrice * (Number(makingPercent || 0) / 100);
  const subtotal = basePrice + makingAmount;
  return Math.round(subtotal + subtotal * (Number(gstPercent || 0) / 100));
}

function normalizeProduct(product) {
  const price = Number(product.price || 0);
  const savedFinalPrice = Number(product.finalPrice || 0);
  let makingCharge = Number(product.makingCharge || 0);
  const gstPercent = Number(product.gstPercent || 3);

  if (makingCharge > 100 && price > 0 && savedFinalPrice > price) {
    makingCharge = ((savedFinalPrice - price) / price) * 100;
  }

  return {
    ...product,
    stockStatus: product.stockStatus || "In Stock",
    metalType: product.metalType || metalFromCarat(product.carat),
    sku: product.sku || `AB-${String(product.id).padStart(4, "0")}`,
    weight: Number(product.weight || 0),
    makingCharge: Number(makingCharge.toFixed(2)),
    gstPercent,
    gemstone: product.gemstone || "None",
    certification: product.certification || "BIS Hallmark / store certified where applicable",
    occasion: product.occasion || defaultOccasion(product.category),
    audience: product.audience || "Women",
    sizeOptions: product.sizeOptions || defaultSizes(product.category),
    deliveryTime: product.deliveryTime || "2-5 working days",
    shippingInfo: product.shippingInfo || "Store pickup and local delivery available",
    returnPolicy: product.returnPolicy || "Exchange after store confirmation for eligible items.",
    careInstructions:
      product.careInstructions || "Keep away from perfume, moisture, and harsh chemicals. Store separately.",
    rating: Number(product.rating || 4.8),
    reviewCount: Number(product.reviewCount || 12),
    featured: product.featured === true || product.id <= 3,
    extraImages: product.extraImages || "",
    finalPrice:
      product.gstPercent === undefined
        ? calculateFinalPrice(price, makingCharge, gstPercent)
        : savedFinalPrice || calculateFinalPrice(price, makingCharge, gstPercent)
  };
}

function productImages(product) {
  const extras = String(product.extraImages || "")
    .split(",")
    .map((image) => image.trim())
    .filter(Boolean);
  return [product.image, ...extras].filter(Boolean);
}

const products = readJson("abhusanProducts", defaultProducts)
  .filter((product) => product.visible !== false)
  .map(normalizeProduct);

const state = {
  category: "all",
  search: "",
  metal: "all",
  stock: "all",
  occasion: "all",
  audience: "all",
  sort: "featured",
  cart: []
};

let wishlist = readJson("abhusanWishlist", []);
let activeSettings = { ...defaultSettings, ...readJson("abhusanSettings", {}) };

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const productGrid = document.querySelector("#productGrid");
const featuredGrid = document.querySelector("#featuredGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const metalFilter = document.querySelector("#metalFilter");
const stockFilter = document.querySelector("#stockFilter");
const occasionFilter = document.querySelector("#occasionFilter");
const audienceFilter = document.querySelector("#audienceFilter");
const sortSelect = document.querySelector("#sortSelect");
const cartPanel = document.querySelector(".cart-panel");
const overlay = document.querySelector(".overlay");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const enquiryForm = document.querySelector("#enquiryForm");
const formStatus = document.querySelector("#formStatus");
const productDialog = document.querySelector("#productDialog");
const productDetail = document.querySelector("#productDetail");

function whatsappUrl(message) {
  const number = String(activeSettings.whatsappNumber || "").replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function applySettings() {
  activeSettings = { ...defaultSettings, ...readJson("abhusanSettings", {}) };
  const locationShort = activeSettings.location.split(",")[0] || activeSettings.location;

  document.querySelectorAll("[data-setting]").forEach((element) => {
    const key = element.dataset.setting;
    element.textContent = key === "locationShort" ? locationShort : activeSettings[key];
  });

  document.querySelector("#whatsappContact").href = whatsappUrl("Hello, I want to enquire about jewellery.");
  document.querySelector("#instagramLink").href = activeSettings.instagramUrl || "#";
  document.querySelector("#facebookLink").href = activeSettings.facebookUrl || "#";
  document.querySelector("#callLink").href = `tel:${activeSettings.phoneNumber || ""}`;
  document.querySelector("#emailLink").href = `mailto:${activeSettings.email || ""}`;
  document.querySelector("#mapLink").href = activeSettings.mapUrl || "#";
  document.querySelector("#storeHours").textContent = activeSettings.storeHours || "";
  document.querySelector("#priceNote").textContent = activeSettings.priceNote || "";
}

function matchesProduct(product) {
  const search = state.search.trim().toLowerCase();
  const inCategory = state.category === "all" || product.category === state.category;
  const inMetal = state.metal === "all" || product.metalType === state.metal;
  const inStock = state.stock === "all" || product.stockStatus === state.stock;
  const inOccasion = state.occasion === "all" || product.occasion === state.occasion;
  const inAudience = state.audience === "all" || product.audience === state.audience;
  const inSearch = [
    product.name,
    product.sku,
    product.category,
    product.description,
    product.metalType,
    product.gemstone,
    product.certification,
    product.occasion,
    product.audience,
    product.stockStatus
  ]
    .join(" ")
    .toLowerCase()
    .includes(search);

  return inCategory && inMetal && inStock && inOccasion && inAudience && inSearch;
}

function sortProducts(productList) {
  return [...productList].sort((a, b) => {
    if (state.sort === "priceLow") return a.finalPrice - b.finalPrice;
    if (state.sort === "priceHigh") return b.finalPrice - a.finalPrice;
    if (state.sort === "rating") return b.rating - a.rating;
    return Number(b.featured) - Number(a.featured);
  });
}

function saveWishlist() {
  localStorage.setItem("abhusanWishlist", JSON.stringify(wishlist));
}

function isWishlisted(productId) {
  return wishlist.includes(productId);
}

function renderProductCard(product) {
  const images = productImages(product);
  const disabled = product.stockStatus === "Out of Stock" ? "disabled" : "";
  return `
    <article class="product-card">
      <button class="wishlist-button ${isWishlisted(product.id) ? "saved" : ""}" type="button" data-wishlist="${product.id}" aria-label="Save ${product.name}">&hearts;</button>
      <button class="image-button" type="button" data-view="${product.id}" aria-label="View ${product.name}">
        <img src="${images[0]}" alt="${product.name}" loading="lazy">
      </button>
      <div class="product-info">
        <div class="stock-row">
          <span class="stock-pill ${product.stockStatus.toLowerCase().replaceAll(" ", "-")}">${product.stockStatus}</span>
          <span class="rating">&#9733; ${product.rating} (${product.reviewCount})</span>
        </div>
        <div class="product-meta">
          <h3>${product.name}</h3>
          <span>${rupees.format(product.finalPrice)}</span>
        </div>
        <p class="sku-line">${product.sku} &middot; ${product.certification}</p>
        <p class="price-detail">${product.metalType} &middot; ${product.carat || "22K"} &middot; ${product.weight || 0} gm &middot; GST ${product.gstPercent}%</p>
        <p>${product.description}</p>
        <div class="card-actions">
          <button class="primary-action" type="button" data-add="${product.id}" ${disabled}>${product.stockStatus === "Out of Stock" ? "Out of Stock" : "Add to Cart"}</button>
          <a class="whatsapp-mini" href="${whatsappUrl(`I want to enquire about ${product.name}`)}" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const visibleProducts = sortProducts(products.filter(matchesProduct));
  productGrid.innerHTML = visibleProducts.map(renderProductCard).join("");
  emptyState.hidden = visibleProducts.length > 0;
}

function renderFeaturedProducts() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  featuredGrid.innerHTML = featured.map(renderProductCard).join("");
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product || product.stockStatus === "Out of Stock") return;

  const cartLine = state.cart.find((item) => item.id === productId);

  if (cartLine) {
    cartLine.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

function updateQuantity(productId, change) {
  const cartLine = state.cart.find((item) => item.id === productId);
  if (!cartLine) return;

  cartLine.quantity += change;
  state.cart = state.cart.filter((item) => item.quantity > 0);
  renderCart();
}

function renderCart() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + item.finalPrice * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = rupees.format(totalPrice);
  checkoutButton.disabled = state.cart.length === 0;

  if (state.cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-state">Your cart is empty.</p>';
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${productImages(item)[0]}" alt="${item.name}">
          <div>
            <h3>${item.name}</h3>
            <p>${item.metalType} &middot; ${item.carat || "22K"} &middot; ${item.weight || 0} gm</p>
            <p>${rupees.format(item.finalPrice)} each, incl. GST</p>
          </div>
          <div class="quantity" aria-label="Quantity for ${item.name}">
            <button type="button" data-quantity="${item.id}" data-change="-1">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-quantity="${item.id}" data-change="1">+</button>
          </div>
        </div>
      `
    )
    .join("");
}

function priceBreakdown(product) {
  const makingAmount = product.price * (product.makingCharge / 100);
  const subtotal = product.price + makingAmount;
  const gstAmount = subtotal * (product.gstPercent / 100);

  return `
    <dl class="price-breakdown">
      <div><dt>Base price</dt><dd>${rupees.format(product.price)}</dd></div>
      <div><dt>Making (${product.makingCharge}%)</dt><dd>${rupees.format(makingAmount)}</dd></div>
      <div><dt>GST (${product.gstPercent}%)</dt><dd>${rupees.format(gstAmount)}</dd></div>
      <div><dt>Final price</dt><dd>${rupees.format(product.finalPrice)}</dd></div>
    </dl>
  `;
}

function openProductDetail(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const images = productImages(product);
  productDetail.innerHTML = `
    <div class="detail-layout">
      <div>
        <div class="zoom-frame">
          <img id="detailImage" src="${images[0]}" alt="${product.name}">
        </div>
        <div class="thumb-row">
          ${images
            .map(
              (image) =>
                `<button type="button" data-thumb="${image}"><img src="${image}" alt="${product.name} view"></button>`
            )
            .join("")}
        </div>
      </div>
      <div class="detail-copy">
        <p class="eyebrow">${product.stockStatus}</p>
        <h2>${product.name}</h2>
        <p class="rating">&#9733; ${product.rating} rating from ${product.reviewCount} reviews</p>
        <p>${product.description}</p>
        ${priceBreakdown(product)}
        <div class="detail-grid">
          <span>Metal: ${product.metalType}</span>
          <span>Carat: ${product.carat}</span>
          <span>Weight: ${product.weight} gm</span>
          <span>SKU: ${product.sku}</span>
          <span>Sizes: ${product.sizeOptions}</span>
          <span>Gemstone: ${product.gemstone}</span>
          <span>Certification: ${product.certification}</span>
          <span>Occasion: ${product.occasion}</span>
          <span>For: ${product.audience}</span>
          <span>Delivery: ${product.deliveryTime}</span>
        </div>
        <p><strong>Shipping:</strong> ${product.shippingInfo}</p>
        <p><strong>Return/exchange:</strong> ${product.returnPolicy}</p>
        <p><strong>Care:</strong> ${product.careInstructions}</p>
        <div class="card-actions">
          <button class="primary-action" type="button" data-add="${product.id}" ${product.stockStatus === "Out of Stock" ? "disabled" : ""}>Add to Cart</button>
          <a class="whatsapp-action" href="${whatsappUrl(`I want to order/enquire about ${product.name}`)}" target="_blank" rel="noreferrer">WhatsApp Inquiry</a>
        </div>
      </div>
    </div>
  `;
  productDialog.showModal();
}

function saveEnquiryNotification(formData) {
  const enquiries = readJson("abhusanEnquiries", []);
  const totalPrice = state.cart.reduce((sum, item) => sum + item.finalPrice * item.quantity, 0);
  const cartSummary = state.cart.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    carat: item.carat || "22K",
    weight: item.weight || 0,
    metalType: item.metalType,
    finalPrice: item.finalPrice
  }));

  enquiries.unshift({
    id: Date.now(),
    createdAt: new Date().toISOString(),
    name: formData.get("name").trim(),
    phone: formData.get("phone").trim(),
    message: formData.get("message").trim(),
    items: cartSummary,
    total: totalPrice,
    read: false
  });

  localStorage.setItem("abhusanEnquiries", JSON.stringify(enquiries));
}

function toggleWishlist(productId) {
  wishlist = isWishlisted(productId)
    ? wishlist.filter((id) => id !== productId)
    : [...wishlist, productId];
  saveWishlist();
  renderFeaturedProducts();
  renderProducts();
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    state.category = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

metalFilter.addEventListener("change", (event) => {
  state.metal = event.target.value;
  renderProducts();
});

stockFilter.addEventListener("change", (event) => {
  state.stock = event.target.value;
  renderProducts();
});

occasionFilter.addEventListener("change", (event) => {
  state.occasion = event.target.value;
  renderProducts();
});

audienceFilter.addEventListener("change", (event) => {
  state.audience = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const wishlistButton = event.target.closest("[data-wishlist]");
  const viewButton = event.target.closest("[data-view]");
  const thumbButton = event.target.closest("[data-thumb]");

  if (addButton) addToCart(Number(addButton.dataset.add));
  if (wishlistButton) toggleWishlist(Number(wishlistButton.dataset.wishlist));
  if (viewButton) openProductDetail(Number(viewButton.dataset.view));
  if (thumbButton) document.querySelector("#detailImage").src = thumbButton.dataset.thumb;
});

cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  if (!quantityButton) return;

  updateQuantity(Number(quantityButton.dataset.quantity), Number(quantityButton.dataset.change));
});

document.querySelector(".cart-toggle").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector(".modal-close").addEventListener("click", () => productDialog.close());
overlay.addEventListener("click", closeCart);

checkoutButton.addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  closeCart();

  const summary = state.cart.map((item) => `${item.name} x ${item.quantity}`).join(", ");
  const messageField = enquiryForm.querySelector('[name="message"]');
  const nameField = enquiryForm.querySelector('[name="name"]');
  messageField.value = summary ? `I want to buy/enquire about: ${summary}` : "";
  nameField.focus();
});

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveEnquiryNotification(new FormData(enquiryForm));
  formStatus.textContent = "Thank you. Your enquiry has been sent to the shop.";
  enquiryForm.reset();
  state.cart = [];
  renderCart();
});

applySettings();
renderFeaturedProducts();
renderProducts();
renderCart();
