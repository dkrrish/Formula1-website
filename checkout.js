document.addEventListener("DOMContentLoaded", () => {
  const summary = document.getElementById("checkout-summary");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    summary.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("checkout-form").style.display = "none";
    return;
  }

  let total = 0;
  cart.forEach(product => {
    const price = parseInt(product.price.replace("₹", ""));
    total += price;
  });

  summary.innerHTML = `<h2>Total to Pay: ₹${total}</h2>`;
});

document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Simulate placing order
  localStorage.removeItem("cart");
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("checkout-summary").style.display = "none";
  document.getElementById("order-confirmation").style.display = "block";
});
