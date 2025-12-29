const teams = [
    {
        id: 1,
        name: "Mercedes",
        logo: "image/merclogo.png",
        description: "Mercedes is a German Formula 1 team that has won multiple championships.",
        drivers: [
            { name: "Lewis Hamilton", nationality: "British" },
            { name: "George Russell", nationality: "British" }
        ]
    },
    {
        id: 2,
        name: "Ferrari",
        logo: "image/ferrlogo.png",
        description: "Ferrari is an Italian Formula 1 team that has a rich history in the sport.",
        drivers: [
            { name: "Charles Leclerc", nationality: "Monegasque" },
            { name: "Carlos Sainz", nationality: "Spanish" }
        ]
    },
    {
        id: 3,
        name: "Redbull",
        logo: "image/redlogo.png",
        description: "Red Bull Racing team is known for its innovative approach to racing and its commitment to developing young drivers.",
        drivers: [
            { name: "Max Verstappen", nationality: "Dutch" },
            { name: "Sergio Perez", nationality: "Mexican" }
        ]
    },
    {
        id: 4,
        name: "Aston Martin",
        logo: "image/astonlogo.png",
        description: "Aston Martin F1 Team is a British Formula One team that was rebranded from Racing Point in 2021, with a rich history dating back to 1991 as Jordan Grand Prix.",

        drivers: [
            { name: "Fernando Alonso", nationality: "Spanish" },
            { name: "Lance Stroll", nationality: "Canadian" }
        ]
    },
    {
        id: 5,
        name: "McLaren",
        logo: "image/mclogo.png",
        description: "McLaren F1 Team is a British Formula One team that has been competing in the sport since 1963. The team has a rich history , with 20 World Drivers' Championships and 8 World Constructors' Championships.",
        drivers: [
            { name: "Lando Norris", nationality: "British" },
            { name: "Oscar Piastri", nationality: "Australian" }
        ]
    },
    {
        id: 6,
        name: "RB F1 Team",
        logo: "image/rblogo.png",
        description: "RB Formula One Team, is an Italian Formula One racing team and constructor that is competing in the 2024 season. It is one of two Formula One constructors owned by Austrian conglomerate Red Bull GmbH.",
        drivers: [
            { name: "Daniel Ricciardo", nationality: "Australian" },
            { name: "Yuki tsunoda", nationality: "Japanese" }
        ]
    },
    {
        id: 7,
        name: "Alpine F1 Team",
        logo: "image/alplogo.png",
        description: "Alpine F1 Team is a French Formula One team that was rebranded from Renault F1 Team in 2021. The team has a rich history, with 2 World Drivers' Championships and 2 World Constructors' Championships",
        drivers: [
            { name: "Esteben Ocon", nationality: "French" },
            { name: "Pierre Gasly", nationality: "French" }
        ]
    },
    {
        id: 8,
        name: "Sauber F1 Team",
        logo: "image/saublogo.png",
        description: "Sauber F1 Team is a Swiss Formula One team that has been competing in the sport since 1993. The team has had several rebrandings, including Alfa Romeo Racing.",
        drivers: [
            { name: "Valterri Bottas", nationality: "Finnish" },
            { name: "Zhou Guanyu", nationality: "Chinese" }
        ]
    },
    {
        id: 9,
        name: "Williams Racing",
        logo: "image/willlogo.png",
        description: "Williams Racing F1 Team is a British Formula One team that has been competing in the sport since 1977. The team has a rich history, with 9 World Drivers' Championships and 9 World Constructors' Championships",
        drivers: [
            { name: "Alex Albon", nationality: "British" },
            { name: "Franco Colapinto", nationality: "Argentine" }
        ]
    },
    {
        id: 10,
        name: "Haas F1 Team",
        logo: "image/haaslogo.png",
        description: "Haas F1 Team is an American Formula One team that was established in 2014. The team has been competing in the sport since 2016.",
        drivers: [
            { name: "Kevin Magnussen", nationality: "Danish" },
            { name: "Nico Hülkenberg", nationality: "German" },
        ]
    }
];

function generateTeamCards() {
  const container = document.querySelector(".team-list");

  teams.forEach(team => {
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML = `
      <img src="${team.logo}" alt="${team.name} logo">
      <h2>${team.name}</h2>
    `;
    card.addEventListener("click", () => showModal(team));
    container.appendChild(card);
  });
}

function showModal(team) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img src="${team.logo}" alt="${team.name}">
      <h2>${team.name}</h2>
      <p>${team.description}</p>
      <h3>Drivers:</h3>
      <ul>
        ${team.drivers.map(d => `<li>${d.name} (${d.nationality})</li>`).join("")}
      </ul>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

generateTeamCards();
