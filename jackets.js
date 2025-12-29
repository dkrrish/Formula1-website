const products = [
  {
    name: "Ferrari Jacket",
    image: "image/jackets.jpg",
    price: "₹2999",
    description: "Official Ferrari team windbreaker with embroidered logo."
  },
  {
    name: "Mercedes Puffer Jacket",
    image: "image/mercedes-jacket.jpg",
    price: "₹3499",
    description: "Warm and water-resistant, premium quality F1 gear."
  },
  {
    name: "Red Bull Racing Softshell",
    image: "image/redbull-jacket.jpg",
    price: "₹2199",
    description: "Stylish softshell jacket with Red Bull Racing team details."
  },
  {
    name: "McLaren Zip-Up Jacket",
    image: "image/mclaren-jacket.jpg",
    price: "₹2199",
    description: "Comfortable fleece-lined hoodie with McLaren orange accents and logo."
  },
  {
  name: "Aston Martin Team Jacket",
  image: "image/astonmartin-jacket.jpg",
  price: "₹2899",
  description: "Sleek green Aston Martin F1 team jacket with zip pockets and breathable material."
},
{
  name: "Alpine F1 Softshell Jacket",
  image: "image/alpine-jacket.jpg",
  price: "₹2599",
  description: "Blue Alpine F1 softshell with team branding and thermal insulation for trackside comfort."
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
      <button class="btn" onclick='addToCart(${JSON.stringify(product)
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
  }, 3000);
}

displayProducts();
