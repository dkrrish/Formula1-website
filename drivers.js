const drivers = [
    {
        id: 1,
        name: "Lewis Hamilton",
        nationality: "British",
        photo: "image/lewis-hamilton.jpg",
        bio: "Lewis Hamilton is a British Formula 1 driver who has Seven World Drivers' Championships.",
        teams: [
            { name: "Ferrari", years: "2025-present" },
            { name: "Mercedes", years: "2013-2024" },
            { name: "McLaren", years: "2007-2012" }
        ]
    },
    {
        id: 2,
        name: "Max Verstappen",
        nationality: "Dutch",
        photo: "image/max-verstappen.jpg",
        bio: "Max Verstappen is a Dutch Formula 1 driver who has won Four World Drivers' Championships.",
        teams: [
            { name: "Red Bull Racing", years: "2016-present" },
            { name: "Toro Rosso", years: "2015-2016" }
        ]
    },
    {
        id: 3,
        name: "Charles Leclerc",
        nationality: "Monégasque",
        photo: "image/charles-leclerc.jpg",
        bio: "Charles Leclerc is a Monégasque Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Ferrari", years: "2019-present" },
            { name: "Sauber", years: "2018" }
        ]
    },
    {
        id: 4,
        name: "Oscar Piastri",
        nationality: "Australian",
        photo: "image/op.jpeg",
        bio: "Oscar Piastri is an Australian Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Mclaren", years: "2022-present" }
        ]
    },
    {
        id: 5,
        name: "Fernando Alonso",
        nationality: "Spanish",
        photo: "image/fernando-alonso.jpg",
        bio: "Fernando Alonso is a Spanish Formula 1 driver who has won Two World Drivers' Championships.",
        teams: [
            { name: "Aston Martin", years: "2022-present" },
            { name: "Alpine", years: "2021-2022" },
            { name: "McLaren", years: "2015-2018" },
            { name: "Ferrari", years: "2010-2014" }
        ]
    },
    {
        id: 6,
        name: "Daniel Ricciardo",
        nationality: "Australian",
        photo: "image/daniel-ricciardo.jpg",
        bio: "Daniel Ricciardo is an Australian Formula 1 driver who has won multiple races.",
        teams: [
            { name: "RB F1 Team", years: "2023-2024" },
            { name: "McLaren", years: "2021-2022" },
            { name: "Renault", years: "2019-2020" },
            { name: "Red Bull Racing", years: "2014-2018" }
        ]
    },
    {
        id: 7,
        name: "Pierre Gasly",
        nationality: "French",
        photo: "image/pierre-gasly.jpg",
        bio: "Pierre Gasly is a French Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Alpine", years: "2023-present" },
            { name: "AlphaTauri", years: "2020-2022" },
            { name: "Toro Rosso", years: "2017-2019" }
        ]
    },
    {
        id: 8,
        name: "Carlos Sainz Jr.",
        nationality: "Spanish",
        photo: "image/carlos-sainz.jpg",
        bio: "Carlos Sainz Jr. is a Spanish Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Williams", years: "2025-present" },
            { name: "Ferrari", years: "2021-2024" },
            { name: "McLaren", years: "2019-2020" },
            { name: "Renault", years: "2017-2018" }
        ]
    },
    {
        id: 9,
        name: "Lando Norris",
        nationality: "British",
        photo: "image/lando-norris.jpg",
        bio: "Lando Norris is a British Formula 1 driver who has won multiple races.",
        teams: [
            { name: "McLaren", years: "2019-present" }
        ]
    },
    {
        id: 10,
        name: "George Russell",
        nationality: "British",
        photo: "image/george-russell.jpg",
        bio: "George Russell is a British Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Mercedes", years: "2022-present" },
            { name: "Williams", years: "2019-2021" }
        ]
    },
    {
        id: 11,
        name: "Esteban Ocon",
        nationality: "French",
        photo: "image/esteban-ocon.jpg",
        bio: "Esteban Ocon is a French Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Haas F1 Team", years: "2025-present" },
            { name: "Alpine", years: "2021-2024" },
            { name: "Renault", years: "2020" },
            { name: "Racing Point", years: "2017-2018" }
        ]
    },
    {
        id: 12,
        name: "Valtteri Bottas",
        nationality: "Finnish",
        photo: "image/valtteri-bottas.jpg",
        bio: "Valtteri Bottas is a Finnish Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Mercedes", years: "2025-present" },
            { name: "Sauber", years: "2022-2024" },
            { name: "Mercedes", years: "2017-2021" },
            { name: "Williams", years: "2013-2016" }
        ]
    },
    {
        id: 13,
        name: "Sergio Pérez",
        nationality: "Mexican",
        photo: "image/sergio-perez.jpg",
        bio: "Sergio Pérez is a Mexican Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Red Bull Racing", years: "2021-2025" },
            { name: "Racing Point", years: "2014-2020" },
            { name: "McLaren", years: "2013" }
        ]
    },
    {
        id: 14,
        name: "Alex Albon",
        nationality: "Thai",
        photo: "image/alex-albon.jpg",
        bio: "Alex Albon is a Thai Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Williams Racing", years: "2022-present" },
            { name: "Red Bull Racing", years: "2019-2020" },
            { name: "Toro Rosso", years: "2019" }
        ]
    },
    {
        id: 15,
        name: "Yuki Tsunoda",
        nationality: "Japanese",
        photo: "image/yuki-tsunoda.jpg",
        bio: "Yuki Tsunoda is a Japanese Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Red Bull Racing", years: "2025-present" },
            { name: "AlphaTauri", years: "2021-2024" }
        ]
    },
    {
        id: 16,
        name: "Nico Hülkenberg",
        nationality: "German",
        photo: "image/nico.jpeg",
        bio: "Nico Hülkenberg is a German Formula 1 driver who recently won his First race at the 2025 British Grand Prix.",
        teams: [
            { name: "Haas F1 Team", years: "2023-present" },
            { name: "Aston Martin", years: "2020-2022" },
            { name: "Renault", years: "2017-2019" }
        ]
    },
];

function generateDriverCards() {
  const driverList = document.querySelector(".driver-list");
  drivers.forEach((driver) => {
    const card = document.createElement("div");
    card.classList.add("driver-card");
    card.innerHTML = `
      <img src="${driver.photo}" alt="${driver.name}">
      <h2>${driver.name}</h2>
      <p>${driver.nationality}</p>
    `;
    card.addEventListener("click", () => showModal(driver));
    driverList.appendChild(card);
  });
}

function showModal(driver) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img src="${driver.photo}" alt="${driver.name}">
      <h2>${driver.name}</h2>
      <p><strong>Nationality:</strong> ${driver.nationality}</p>
      <p>${driver.bio}</p>
      <h3>Teams:</h3>
      <ul>
        ${driver.teams.map(team => `<li>${team.name} (${team.years})</li>`).join('')}
      </ul>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

generateDriverCards();
