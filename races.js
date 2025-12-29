document.addEventListener("DOMContentLoaded", () => {
    const racesList = document.getElementById("races-list");

    if (!racesList) {
        console.error("Races list element not found!");
        return;
    }

    racesList.innerHTML = "<p>Loading races...</p>";

    const renderRaces = (races) => {
        if (!Array.isArray(races) || races.length === 0) {
            racesList.innerHTML = "<p>No race data available.</p>";
            return;
        }

        racesList.innerHTML = races.map(race => `
            <div class="race-card">
                <h3>Round ${race.round}: ${race.raceName}</h3>
                <p><strong>Date:</strong> ${race.date}</p>
                <p><strong>Circuit:</strong> ${race.circuit}</p>
                <p><strong>Location:</strong> ${race.country}</p>
                <p><strong>Sprint Weekend:</strong> ${race.isSprint ? "Yes" : "No"}</p>

                <div class="results">
                    <p class="winner"><strong>Winner:</strong> ${race.results.winner.driver} 
                        (${race.results.winner.team}) — ${race.results.winner.time}</p>
                    <p class="second"><strong>2nd:</strong> ${race.results.second.driver} 
                        (${race.results.second.team}) — ${race.results.second.time}</p>
                    <p class="third"><strong>3rd:</strong> ${race.results.third.driver} 
                        (${race.results.third.team}) — ${race.results.third.time}</p>
                </div>
            </div>
        `).join('');
    };

    const loadRaces = () => {
        fetch("races.json")
            .then(response => {
                if (!response.ok) throw new Error("Failed to load races.json");
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data)) {
                    throw new Error("Invalid JSON format: expected an array");
                }

                // Map to ensure defaults exist
                const filteredRaces = data.map((race, index) => ({
                    round: race.round || index + 1,
                    raceName: race.raceName || "Grand Prix",
                    date: race.date || "TBD",
                    circuit: race.circuit || "Unknown Circuit",
                    country: race.country || "Unknown Country",
                    isSprint: race.isSprint || false,
                    results: {
                        winner: {
                            driver: race.results?.winner?.driver || "TBD",
                            team: race.results?.winner?.team || "TBD",
                            time: race.results?.winner?.time || "TBD"
                        },
                        second: {
                            driver: race.results?.second?.driver || "TBD",
                            team: race.results?.second?.team || "TBD",
                            time: race.results?.second?.time || "TBD"
                        },
                        third: {
                            driver: race.results?.third?.driver || "TBD",
                            team: race.results?.third?.team || "TBD",
                            time: race.results?.third?.time || "TBD"
                        }
                    }
                }));

                renderRaces(filteredRaces);
            })
            .catch(error => {
                console.error("Error loading races:", error);
                racesList.innerHTML = `<p>Failed to load race data: ${error.message}</p>`;
            });
    };

    loadRaces();
});