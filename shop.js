const categories = [
  {
    name: "Jackets",
    image: "image/jackets.jpg",
    link: "jackets.html"
  },
  {
    name: "T-Shirts",
    image: "image/tshirts.jpg",
    link: "tshirts.html"
  },
  {
    name: "Cap",
    image: "image/caps.jpg",
    link: "caps.html"
  },
  {
    name: "Mugs",
    image: "image/mugs.jpg",
    link: "mugs.html"
  }
];

function generateCategoryGrid() {
  const grid = document.querySelector(".category-grid");

  categories.forEach(category => {
    const card = document.createElement("div");
    card.classList.add("category-card");
    card.innerHTML = `
      <a href="${category.link}">
        <img src="${category.image}" alt="${category.name}" />
        <h3>${category.name}</h3>
      </a>
    `;
    grid.appendChild(card);
  });
}

generateCategoryGrid();
