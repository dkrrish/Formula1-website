const products = [
  {
    name: "Ferrari Racing Cap",
    image: "image/ferrari-cap.jpg",
    price: "₹699",
    description: "Classic red cap with Scuderia Ferrari shield and adjustable strap."
  },
  {
    name: "Mercedes Team Cap",
    image: "image/mercedes-cap.jpg",
    price: "₹749",
    description: "Black Mercedes-AMG cap with embroidered logo and curved visor."
  },
  {
    name: "Red Bull Flexfit Cap",
    image: "image/redbull-cap.jpg",
    price: "₹799",
    description: "Bold navy Red Bull Racing cap with stretch fit and energy branding."
  },
  {
    name: "McLaren Team Cap",
    image: "image/mclaren-cap.jpg",
    price: "₹729",
    description: "Modern McLaren papaya orange cap with clean stitch detail and team logo."
  },
  {
  name: "Aston Martin Racing Cap",
  image: "image/astonmartin-cap.jpg",
  price: "₹799",
  description: "Dark green curved brim cap with embroidered Aston Martin logo."
},
{
  name: "Alpine Racing Cap",
  image: "image/alpine-cap.jpg",
  price: "₹749",
  description: "Blue Alpine cap with contrast brim and team emblem."
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
