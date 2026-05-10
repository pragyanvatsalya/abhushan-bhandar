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
    price: 48500,
    carat: "22K",
    weight: 18.5,
    makingCharge: 7.22,
    finalPrice: 52002,
    description: "Statement necklace and earrings for wedding occasions.",
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 2,
    name: "Classic Gold Necklace",
    category: "necklace",
    price: 32500,
    carat: "22K",
    weight: 14.2,
    makingCharge: 7.69,
    finalPrice: 35000,
    description: "Elegant traditional necklace with a polished finish.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    category: "earring",
    price: 6200,
    carat: "18K",
    weight: 4.8,
    makingCharge: 12.9,
    finalPrice: 7000,
    description: "Lightweight pair for festive and formal outfits.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 4,
    name: "Ruby Accent Ring",
    category: "ring",
    price: 8800,
    carat: "18K",
    weight: 3.2,
    makingCharge: 10.23,
    finalPrice: 9700,
    description: "A graceful ring with a rich red centre accent.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 5,
    name: "Gold Finish Bangles",
    category: "bangle",
    price: 14800,
    carat: "22K",
    weight: 8.6,
    makingCharge: 9.46,
    finalPrice: 16200,
    description: "A pair of refined bangles for daily and occasion wear.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 6,
    name: "Minimal Chain Pendant",
    category: "necklace",
    price: 7600,
    carat: "18K",
    weight: 5.1,
    makingCharge: 9.21,
    finalPrice: 8300,
    description: "A simple pendant chain suitable for gifting.",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 7,
    name: "Festival Jhumka",
    category: "earring",
    price: 5400,
    carat: "Imitation",
    weight: 6.4,
    makingCharge: 6.48,
    finalPrice: 5750,
    description: "Traditional jhumka style with festive detailing.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    visible: true
  },
  {
    id: 8,
    name: "Engagement Ring",
    category: "ring",
    price: 16500,
    carat: "22K",
    weight: 4.5,
    makingCharge: 9.09,
    finalPrice: 18000,
    description: "A polished ring choice for memorable moments.",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80",
    visible: true
  }
];

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const settingsForm = document.querySelector("#settingsForm");
const settingsStatus = document.querySelector("#settingsStatus");
const productForm = document.querySelector("#productForm");
const productStatus = document.querySelector("#productStatus");
const productList = document.querySelector("#productList");
const cancelEdit = document.querySelector("#cancelEdit");
const enquiryList = document.querySelector("#enquiryList");
const unreadCount = document.querySelector("#unreadCount");
const imageUpload = document.querySelector("#imageUpload");

const goldRates = {
  "18K": 5200,
  "20K": 5800,
  "22K": 6500,
  "24K": 7200,
  "Silver": 90,
  "Imitation": 500
};



let products = loadProducts();
let enquiries = readJson("abhusanEnquiries", []);

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function loadProducts() {
  return readJson("abhusanProducts", defaultProducts).map(normalizeProduct);
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
    gstPercent,
    sizeOptions: product.sizeOptions || defaultSizes(product.category),
    gemstone: product.gemstone || "None",
    certification: product.certification || "BIS Hallmark / store certified where applicable",
    occasion: product.occasion || defaultOccasion(product.category),
    audience: product.audience || "Women",
    deliveryTime: product.deliveryTime || "2-5 working days",
    shippingInfo: product.shippingInfo || "Store pickup and local delivery available",
    returnPolicy: product.returnPolicy || "Exchange after store confirmation for eligible items.",
    careInstructions:
      product.careInstructions || "Keep away from perfume, moisture, and harsh chemicals. Store separately.",
    rating: Number(product.rating || 4.8),
    reviewCount: Number(product.reviewCount || 12),
    featured: product.featured === true || product.id <= 3,
    extraImages: product.extraImages || "",
    makingCharge: Number(makingCharge.toFixed(2)),
    finalPrice:
      product.gstPercent === undefined
        ? calculateFinalPrice(price, makingCharge, gstPercent)
        : savedFinalPrice || calculateFinalPrice(price, makingCharge, gstPercent),
    visible: product.visible !== false
  };
}

function metalFromCarat(carat) {
  if (carat === "Silver") return "silver";
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
  const percent = Number(makingPercent || 0);
  const gst = Number(gstPercent || 0);
  const subtotal = basePrice + basePrice * (percent / 100);
  return Math.round(subtotal + subtotal * (gst / 100));
}

function updateFinalPrice() {
  const weight = Number(productForm.elements.weight.value || 0);
  const carat = productForm.elements.carat.value;

  if (weight > 0 && goldRates[carat]) {
    const calculatedBasePrice = Math.round(weight * goldRates[carat]);
    productForm.elements.price.value = calculatedBasePrice;
  }

  const finalPrice = calculateFinalPrice(
    productForm.elements.price.value,
    productForm.elements.makingCharge.value,
    productForm.elements.gstPercent.value
  );

  productForm.elements.finalPrice.value = finalPrice || "";
}
  
function saveProducts() {
  localStorage.setItem("abhusanProducts", JSON.stringify(products));
}

function loadSettings() {
  return { ...defaultSettings, ...readJson("abhusanSettings", {}) };
}

function saveSettings(settings) {
  localStorage.setItem("abhusanSettings", JSON.stringify(settings));
}

function fillSettingsForm() {
  const settings = loadSettings();
  Object.entries(settings).forEach(([key, value]) => {
    const field = settingsForm.elements[key];
    if (field) field.value = value;
  });
}

function productFromForm() {
  const formData = new FormData(productForm);
  const existingId = formData.get("id");

  return {
    id: existingId ? Number(existingId) : Date.now(),
    name: formData.get("name").trim(),
    sku: formData.get("sku").trim(),
    category: formData.get("category"),
    stockStatus: formData.get("stockStatus"),
    metalType: formData.get("metalType"),
    carat: formData.get("carat"),
    weight: Number(formData.get("weight")),
    price: Number(formData.get("price")),
    makingCharge: Number(formData.get("makingCharge")),
    gstPercent: Number(formData.get("gstPercent")),
    finalPrice: calculateFinalPrice(
      formData.get("price"),
      formData.get("makingCharge"),
      formData.get("gstPercent")
    ),
    image: formData.get("image").trim(),
    extraImages: formData.get("extraImages").trim(),
    sizeOptions: formData.get("sizeOptions").trim(),
    gemstone: formData.get("gemstone").trim(),
    certification: formData.get("certification").trim(),
    occasion: formData.get("occasion"),
    audience: formData.get("audience"),
    deliveryTime: formData.get("deliveryTime").trim(),
    shippingInfo: formData.get("shippingInfo").trim(),
    rating: Number(formData.get("rating") || 4.8),
    reviewCount: Number(formData.get("reviewCount") || 0),
    description: formData.get("description").trim(),
    returnPolicy: formData.get("returnPolicy").trim(),
    careInstructions: formData.get("careInstructions").trim(),
    featured: formData.get("featured") === "on",
    visible: formData.get("visible") === "on"
  };
}

function resetProductForm() {
  productForm.reset();
  productForm.elements.id.value = "";
  productForm.elements.sku.value = "";
  productForm.elements.stockStatus.value = "In Stock";
  productForm.elements.metalType.value = "gold";
  productForm.elements.carat.value = "22K";
  productForm.elements.gstPercent.value = 3;
  productForm.elements.rating.value = 4.8;
  productForm.elements.reviewCount.value = 0;
  productForm.elements.occasion.value = "Everyday";
  productForm.elements.audience.value = "Women";
  productForm.elements.featured.checked = false;
  productForm.elements.visible.checked = true;
  cancelEdit.hidden = true;
}

function editProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  productForm.elements.id.value = product.id;
  productForm.elements.name.value = product.name;
  productForm.elements.sku.value = product.sku || "";
  productForm.elements.category.value = product.category;
  productForm.elements.stockStatus.value = product.stockStatus || "In Stock";
  productForm.elements.metalType.value = product.metalType || "gold";
  productForm.elements.carat.value = product.carat || "22K";
  productForm.elements.weight.value = product.weight || 0;
  productForm.elements.price.value = product.price;
  productForm.elements.makingCharge.value = product.makingCharge || 0;
  productForm.elements.gstPercent.value = product.gstPercent || 3;
  productForm.elements.finalPrice.value = product.finalPrice || product.price;
  productForm.elements.image.value = product.image;
  productForm.elements.extraImages.value = product.extraImages || "";
  productForm.elements.sizeOptions.value = product.sizeOptions || "";
  productForm.elements.gemstone.value = product.gemstone || "";
  productForm.elements.certification.value = product.certification || "";
  productForm.elements.occasion.value = product.occasion || "Everyday";
  productForm.elements.audience.value = product.audience || "Women";
  productForm.elements.deliveryTime.value = product.deliveryTime || "";
  productForm.elements.shippingInfo.value = product.shippingInfo || "";
  productForm.elements.rating.value = product.rating || 4.8;
  productForm.elements.reviewCount.value = product.reviewCount || 0;
  productForm.elements.description.value = product.description;
  productForm.elements.returnPolicy.value = product.returnPolicy || "";
  productForm.elements.careInstructions.value = product.careInstructions || "";
  productForm.elements.featured.checked = product.featured === true;
  productForm.elements.visible.checked = product.visible !== false;
  cancelEdit.hidden = false;
  productForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteProduct(productId) {
  products = products.filter((item) => item.id !== productId);
  saveProducts();
  renderProducts();
}

function toggleProduct(productId) {
  products = products.map((item) =>
    item.id === productId ? { ...item, visible: item.visible === false } : item
  );
  saveProducts();
  renderProducts();
}

function saveEnquiries() {
  localStorage.setItem("abhusanEnquiries", JSON.stringify(enquiries));
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function toggleEnquiry(enquiryId) {
  enquiries = enquiries.map((enquiry) =>
    enquiry.id === enquiryId ? { ...enquiry, read: !enquiry.read } : enquiry
  );
  saveEnquiries();
  renderEnquiries();
}

function renderEnquiries() {
  const unread = enquiries.filter((enquiry) => !enquiry.read).length;
  unreadCount.textContent = unread;

  if (enquiries.length === 0) {
    enquiryList.innerHTML = '<p class="empty-note">No customer enquiries yet.</p>';
    return;
  }

  enquiryList.innerHTML = enquiries
    .map((enquiry) => {
      const enquiryItems = Array.isArray(enquiry.items) ? enquiry.items : [];
      const items = enquiryItems.length
        ? enquiryItems
            .map(
              (item) =>
                `<li>${item.name} x ${item.quantity} (${item.metalType || "gold"}, ${item.carat}, ${item.weight || 0} gm, ${rupees.format(item.finalPrice)} each)</li>`
            )
            .join("")
        : "<li>No cart items selected</li>";

      return `
        <article class="enquiry-card ${enquiry.read ? "read" : "unread"}">
          <div>
            <h3>${enquiry.name}</h3>
            <p>${enquiry.phone} &middot; ${formatDate(enquiry.createdAt)}</p>
          </div>
          <p>${enquiry.message || "No extra message"}</p>
          <ul>${items}</ul>
          <strong>Total estimate: ${rupees.format(enquiry.total || 0)}</strong>
          <button class="plain-button" type="button" data-enquiry="${enquiry.id}">
            Mark ${enquiry.read ? "Unread" : "Read"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderProducts() {
  productList.innerHTML = products
    .map(
      (product) => `
        <article class="product-row">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${product.sku} &middot; ${product.certification}</p>
            <p>${product.category} &middot; ${product.metalType} &middot; ${product.carat || "22K"} &middot; ${product.weight || 0} gm</p>
            <p>${product.stockStatus} &middot; ${rupees.format(product.finalPrice || product.price)}</p>
            <p>Base ${rupees.format(product.price)} + making ${product.makingCharge || 0}% + GST ${product.gstPercent || 3}%</p>
            <p>${product.description}</p>
            <span class="badge ${product.visible === false ? "hidden" : ""}">
              ${product.visible === false ? "Hidden" : "Visible"}
            </span>
          </div>
          <div class="row-actions">
            <button class="plain-button" type="button" data-edit="${product.id}">Edit</button>
            <button class="plain-button" type="button" data-toggle="${product.id}">
              ${product.visible === false ? "Show" : "Hide"}
            </button>
            <button class="plain-button danger-button" type="button" data-delete="${product.id}">Delete</button>
          </div>
        </article>
      `
    )
    .join("");
}

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const settings = Object.fromEntries(new FormData(settingsForm));
  saveSettings(settings);
  settingsStatus.textContent = "Website details saved.";
});

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const product = normalizeProduct(productFromForm());
  const existingIndex = products.findIndex((item) => item.id === product.id);

  if (existingIndex >= 0) {
    products[existingIndex] = product;
    productStatus.textContent = "Product updated.";
  } else {
    products = [product, ...products];
    productStatus.textContent = "Product added.";
  }

  saveProducts();
  renderProducts();
  resetProductForm();
});

productList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit]");
  const toggleButton = event.target.closest("[data-toggle]");
  const deleteButton = event.target.closest("[data-delete]");

  if (editButton) editProduct(Number(editButton.dataset.edit));
  if (toggleButton) toggleProduct(Number(toggleButton.dataset.toggle));
  if (deleteButton) deleteProduct(Number(deleteButton.dataset.delete));
});

enquiryList.addEventListener("click", (event) => {
  const enquiryButton = event.target.closest("[data-enquiry]");
  if (!enquiryButton) return;

  toggleEnquiry(Number(enquiryButton.dataset.enquiry));
});

cancelEdit.addEventListener("click", resetProductForm);

productForm.elements.weight.addEventListener("input", updateFinalPrice);
productForm.elements.carat.addEventListener("change", updateFinalPrice);
productForm.elements.makingCharge.addEventListener("input", updateFinalPrice);
productForm.elements.gstPercent.addEventListener("input", updateFinalPrice);
document.querySelector("#resetSettings").addEventListener("click", () => {
  saveSettings(defaultSettings);
  imageUpload.addEventListener("change", () => {
  const file = imageUpload.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    productForm.elements.image.value = event.target.result;
  };

  reader.readAsDataURL(file);
});

fillSettingsForm();
renderProducts();
renderEnquiries();
  
  settingsStatus.textContent = "Website details reset.";
});

document.querySelector("#resetProducts").addEventListener("click", () => {
  products = defaultProducts.map(normalizeProduct);
  saveProducts();
  renderProducts();
  productStatus.textContent = "Products reset.";
});

document.querySelector("#clearRead").addEventListener("click", () => {
  enquiries = enquiries.filter((enquiry) => !enquiry.read);
  saveEnquiries();
  renderEnquiries();
});

fillSettingsForm();
renderProducts();
renderEnquiries();
