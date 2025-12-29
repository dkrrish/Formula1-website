const products = [
  {
    name: "Ferrari Ceramic Mug",
    image: "image/ferrari-mug.jpg",
    price: "₹499",
    description: "Red ceramic mug with Scuderia Ferrari logo and matte finish."
  },
  {
    name: "Mercedes AMG Mug",
    image: "image/mercedes-mug.jpg",
    price: "₹549",
    description: "Glossy black mug with Mercedes-AMG Petronas logo and silver rim."
  },
  {
    name: "Red Bull Racing Coffee Mug",
    image: "image/redbull-mug.jpg",
    price: "₹479",
    description: "Stylish navy Red Bull mug with printed car graphics and team crest."
  },
  {
    name: "McLaren Thermal Mug",
    image: "image/mclaren-mug.jpg",
    price: "₹599",
    description: "Insulated travel mug with McLaren branding and secure lid for on-the-go."
  },
  {
  name: "Alpine Racing Ceramic Mug",
  image: "image/alpine-mug.jpg",
  price: "₹479",
  description: "Sleek white mug with Alpine’s iconic blue and pink team livery."
},
{
  name: "Aston Martin F1 Mug",
  image: "image/astonmartin-mug.jpg",
  price: "₹559",
  description: "Matte black mug featuring Aston Martin’s green logo and F1 branding."
}

];



function displayProducts() {
  const grid = document.querySelector(".shop-grid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <button onclick='addToCart(${JSON.stringify(product)
        .replace(/'/g, "\\'")
        .replace(/"/g, '&quot;')})'>Add to Cart</button>
    `;

    grid.appendChild(card);
  });
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${product.name} added to cart`);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Toast disappears after 3 seconds
}

displayProducts();
