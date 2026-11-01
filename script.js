// DATA TIM DAN PEMBALAP MUSIM 2026
const teams = [{ "name": "McLaren", "country": "United Kingdom", "engine": "Mercedes", "drivers": "Lando Norris · Oscar Piastri", "image": "mclaren" }, { "name": "Mercedes", "country": "Germany", "engine": "Mercedes", "drivers": "George Russell · Kimi Antonelli", "image": "mercedes" }, { "name": "Red Bull Racing", "country": "Austria", "engine": "Red Bull Ford", "drivers": "Max Verstappen · Isack Hadjar", "image": "red-bull" }, { "name": "Ferrari", "country": "Italy", "engine": "Ferrari", "drivers": "Charles Leclerc · Lewis Hamilton", "image": "ferrari" }, { "name": "Williams", "country": "United Kingdom", "engine": "Mercedes", "drivers": "Alexander Albon · Carlos Sainz", "image": "williams" }, { "name": "Racing Bulls", "country": "Italy", "engine": "Red Bull Ford", "drivers": "Liam Lawson · Arvid Lindblad", "image": "racing-bulls" }, { "name": "Aston Martin", "country": "United Kingdom", "engine": "Honda", "drivers": "Fernando Alonso · Lance Stroll", "image": "aston-martin" }, { "name": "Haas", "country": "United States", "engine": "Ferrari", "drivers": "Esteban Ocon · Oliver Bearman", "image": "haas" }, { "name": "Audi", "country": "Germany", "engine": "Audi", "drivers": "Nico Hülkenberg · Gabriel Bortoleto", "image": "audi" }, { "name": "Alpine", "country": "France", "engine": "Mercedes", "drivers": "Pierre Gasly · Franco Colapinto", "image": "alpine" }, { "name": "Cadillac", "country": "United States", "engine": "Ferrari", "drivers": "Sergio Pérez · Valtteri Bottas", "image": "cadillac" }];
const drivers = [{ "name": "Lando Norris", "number": "1", "team": "McLaren", "country": "United Kingdom", "image": "lando-norris" }, { "name": "Oscar Piastri", "number": "81", "team": "McLaren", "country": "Australia", "image": "oscar-piastri" }, { "name": "George Russell", "number": "63", "team": "Mercedes", "country": "United Kingdom", "image": "george-russell" }, { "name": "Kimi Antonelli", "number": "12", "team": "Mercedes", "country": "Italy", "image": "kimi-antonelli" }, { "name": "Max Verstappen", "number": "3", "team": "Red Bull Racing", "country": "Netherlands", "image": "max-verstappen" }, { "name": "Isack Hadjar", "number": "6", "team": "Red Bull Racing", "country": "France", "image": "isack-hadjar" }, { "name": "Charles Leclerc", "number": "16", "team": "Ferrari", "country": "Monaco", "image": "charles-leclerc" }, { "name": "Lewis Hamilton", "number": "44", "team": "Ferrari", "country": "United Kingdom", "image": "lewis-hamilton" }, { "name": "Alexander Albon", "number": "23", "team": "Williams", "country": "Thailand", "image": "alexander-albon" }, { "name": "Carlos Sainz", "number": "55", "team": "Williams", "country": "Spain", "image": "carlos-sainz" }, { "name": "Liam Lawson", "number": "30", "team": "Racing Bulls", "country": "New Zealand", "image": "liam-lawson" }, { "name": "Arvid Lindblad", "number": "41", "team": "Racing Bulls", "country": "United Kingdom", "image": "arvid-lindblad" }, { "name": "Fernando Alonso", "number": "14", "team": "Aston Martin", "country": "Spain", "image": "fernando-alonso" }, { "name": "Lance Stroll", "number": "18", "team": "Aston Martin", "country": "Canada", "image": "lance-stroll" }, { "name": "Esteban Ocon", "number": "31", "team": "Haas", "country": "France", "image": "esteban-ocon" }, { "name": "Oliver Bearman", "number": "87", "team": "Haas", "country": "United Kingdom", "image": "oliver-bearman" }, { "name": "Nico Hülkenberg", "number": "27", "team": "Audi", "country": "Germany", "image": "nico-hulkenberg" }, { "name": "Gabriel Bortoleto", "number": "5", "team": "Audi", "country": "Brazil", "image": "gabriel-bortoleto" }, { "name": "Pierre Gasly", "number": "10", "team": "Alpine", "country": "France", "image": "pierre-gasly" }, { "name": "Franco Colapinto", "number": "43", "team": "Alpine", "country": "Argentina", "image": "franco-colapinto" }, { "name": "Sergio Pérez", "number": "11", "team": "Cadillac", "country": "Mexico", "image": "sergio-perez" }, { "name": "Valtteri Bottas", "number": "77", "team": "Cadillac", "country": "Finland", "image": "valtteri-bottas"}];

// MENAMPILKAN KARTU TIM
const teamsList = document.getElementById("teams-list");
if (teamsList) {
    teams.forEach(function(team) {
        teamsList.innerHTML += `<article class="team-card"><div class="team-photo"><img src="images/team-${team.image}.png" alt="${team.name}" onerror="this.style.display='none'"><span class="photo-placeholder"></span><div class="card-info"><p class="card-kicker">${team.country} / 2026</p><h2>${team.name}</h2><p><b>Drivers:</b> ${team.drivers}</p><p><b>Power unit:</b> ${team.engine}</p></div></article>`;
    })
}

// MENAMPILKAN KARTU PEMBALAP + FITUR PENCARIAN
const driverList = document.getElementById("driver-list");
function showDrivers(keyword = "") {
    if (!driverList) return;
    driverList.innerHTML = "";
    drivers.filter(function(driver) {
        return (driver.name + "" + driver.team)
        .toLowerCase()
        .includes(keyword.toLowerCase());
    }).forEach(function(driver) {
        driverList.innerHTML += `<article class="driver-card"><div class="driver-photo"><img src="images/${driver.image}.png" alt="${driver.name}" onerror="this.style.display='none'"><span class="photo-placeholder"></span><strong class="driver-number">#${driver.number}</strong></div><div class="card-info"><p class="card-kicker">${driver.team}</p><h2>${driver.name}</h2><p>${driver.country}</p></div></article>`;
    });
}
showDrivers();
const searchInput = document.getElementById("driverSearch");
if (searchInput) searchInput.addEventListener("input", function() { showDrivers(searchInput.value); });

// MINI QUIZ
function checkQuiz(correct) {
    const result = document.getElementById("quiz-result");
    result.textContent = correct ? "correct! DNF means Did Not Finish. 🏁" : "Not quite! Try again.";
    result.className = correct ? "correct" : "wrong";
}