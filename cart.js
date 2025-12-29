function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const cartSummary = document.getElementById("cart-summary");

  cartContainer.innerHTML = "";
  cartSummary.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  cart.forEach((product, index) => {
    const priceNum = parseInt(product.price.replace("₹", ""));
    total += priceNum;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price}</strong><br>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartContainer.appendChild(card);
  });

 cartSummary.innerHTML = `
  <h3>Total Items: ${cart.length}</h3>
  <h2>Total: ₹${total}</h2>
  <a href="checkout.html">
    <button style="margin-top:1em;">Proceed to Checkout</button>
  </a>
  <br><br>
  <button onclick="clearCart()">Clear Cart</button>
`;

}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

loadCart();
