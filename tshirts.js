const products = [
  {
    name: "Ferrari Crew Neck Tee",
    image: "image/ferrari-tshirt.jpg",
    price: "₹999",
    description: "Classic red Ferrari tee with Scuderia chest logo and soft cotton comfort."
  },
  {
    name: "Mercedes Petronas T-Shirt",
    image: "image/mercedes-tshirt.jpg",
    price: "₹1099",
    description: "Black performance tee with Mercedes-AMG Petronas team branding."
  },
  {
    name: "Red Bull Racing Graphic Tee",
    image: "image/redbull-tshirt.jpg",
    price: "₹1049",
    description: "Stylish navy tee featuring Red Bull Racing car graphics and sponsor details."
  },
  {
    name: "McLaren Everyday Tee",
    image: "image/mclaren-tshirt.jpg",
    price: "₹949",
    description: "Lightweight charcoal McLaren T-shirt with sleek logo print and relaxed fit."
  },
  {
  name: "Aston Martin T-Shirt",
  image: "image/astonmartin-tshirt.jpg",
  price: "₹1399",
  description: "Premium green Aston Martin tee with subtle team logo."
},
{
  name: "Alfa Romeo Racing Tee",
  image: "image/alfaromeo-tshirt.jpg",
  price: "₹1299",
  description: "Classic white Alfa Romeo Racing tee with signature red branding."
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
