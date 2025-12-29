document.addEventListener("DOMContentLoaded", () => {
    console.log("Leaderboard page loaded");

    const tableBody = document.querySelector("#standings-table tbody");

    if (!tableBody) {
        console.error("Table body not found!");
        return;
    }

    tableBody.innerHTML = "<tr><td colspan='5'>Loading...</td></tr>";

    const withTimeout = (url, ms) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), ms);
        return fetch(url, { signal: controller.signal })
            .finally(() => clearTimeout(timeoutId));
    };

    const renderTable = (data) => {
        const standings = data?.drivers_championship;

        if (!Array.isArray(standings) || standings.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>No standings data available</td></tr>";
            return;
        }

        tableBody.innerHTML = "";

        standings.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.position}</td>
                <td>${entry.driver.name} ${entry.driver.surname}</td>
                <td>${entry.driver.nationality}</td>
                <td>${entry.team?.teamName || "-"}</td>
                <td>${entry.points}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    const loadStandings = () => {
        const apiUrl = "https://f1api.dev/api/2025/drivers-championship?limit=20&offset=0";

        withTimeout(apiUrl, 5000)
            .then(response => {
                if (!response.ok) throw new Error(`API error: ${response.status}`);
                return response.json();
            })
            .then(data => {
                console.log("API data loaded successfully");
                renderTable(data);
            })
            .catch(apiError => {
                console.warn("API failed, loading from local file...", apiError);

                fetch("standings.json")
                    .then(response => {
                        if (!response.ok) throw new Error("Local file not found");
                        return response.json();
                    })
                    .then(localData => {
                        console.log("Loaded data from standings.json");
                        renderTable(localData);
                    })
                    .catch(localError => {
                        console.error("Both API and local JSON failed", localError);
                        tableBody.innerHTML = "<tr><td colspan='5'>Failed to load data</td></tr>";
                    });
            });
    };

    loadStandings();
});
