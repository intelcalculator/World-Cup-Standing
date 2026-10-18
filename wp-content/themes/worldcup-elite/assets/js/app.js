/**
 * World Cup Elite - Enterprise MNC Tournament Analytics Platform
 */

const TOURNAMENT_DATA = {
  edition: "FIFA World Cup 2026 (USA / MEX / CAN)",
  kpis: {
    totalMatches: 104,
    playedMatches: 72,
    totalGoals: 218,
    goalsPerGame: "3.03",
    highestXGTeam: "France (14.2)",
    goldenBootLeader: "K. Mbappé (7 Goals)",
    cleanSheetsLeader: "Argentina (4 CS)"
  },
  groups: [
    {
      id: "A",
      name: "Group A",
      teams: [
        { code: "us", name: "United States", p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 2, gd: 4, pts: 7, xg: 5.8, cs: 1, form: ['W','D','W'], prob: 92, next: "vs Colombia" },
        { code: "co", name: "Colombia", p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 6, xg: 4.9, cs: 1, form: ['W','W','L'], prob: 84, next: "vs USA" },
        { code: "ua", name: "Ukraine", p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 5, gd: -2, pts: 3, xg: 3.1, cs: 0, form: ['L','W','L'], prob: 45, next: "vs Mali" },
        { code: "ml", name: "Mali", p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 5, gd: -4, pts: 1, xg: 2.0, cs: 0, form: ['L','D','L'], prob: 12, next: "vs Ukraine" }
      ]
    },
    {
      id: "B",
      name: "Group B",
      teams: [
        { code: "mx", name: "Mexico", p: 3, w: 2, d: 1, l: 0, gf: 5, ga: 2, gd: 3, pts: 7, xg: 5.2, cs: 2, form: ['W','W','D'], prob: 88, next: "vs Italy" },
        { code: "it", name: "Italy", p: 3, w: 2, d: 0, l: 1, gf: 6, ga: 3, gd: 3, pts: 6, xg: 6.1, cs: 1, form: ['W','L','W'], prob: 85, next: "vs Mexico" },
        { code: "ng", name: "Nigeria", p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 4, gd: 0, pts: 4, xg: 4.4, cs: 0, form: ['D','W','L'], prob: 60, next: "vs Australia" },
        { code: "au", name: "Australia", p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 7, gd: -6, pts: 0, xg: 1.8, cs: 0, form: ['L','L','L'], prob: 5, next: "vs Nigeria" }
      ]
    },
    {
      id: "C",
      name: "Group C",
      teams: [
        { code: "ca", name: "Canada", p: 3, w: 2, d: 0, l: 1, gf: 4, ga: 3, gd: 1, pts: 6, xg: 4.2, cs: 1, form: ['W','L','W'], prob: 80, next: "vs Portugal" },
        { code: "pt", name: "Portugal", p: 3, w: 2, d: 1, l: 0, gf: 7, ga: 2, gd: 5, pts: 7, xg: 7.4, cs: 2, form: ['W','W','D'], prob: 94, next: "vs Canada" },
        { code: "kr", name: "South Korea", p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 4, gd: 0, pts: 4, xg: 3.9, cs: 1, form: ['D','W','L'], prob: 58, next: "vs Chile" },
        { code: "cl", name: "Chile", p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 7, gd: -6, pts: 0, xg: 2.1, cs: 0, form: ['L','L','L'], prob: 6, next: "vs South Korea" }
      ]
    },
    {
      id: "D",
      name: "Group D",
      teams: [
        { code: "ar", name: "Argentina", p: 3, w: 3, d: 0, l: 0, gf: 8, ga: 1, gd: 7, pts: 9, xg: 8.9, cs: 2, form: ['W','W','W'], prob: 98, next: "vs Denmark" },
        { code: "dk", name: "Denmark", p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3, gd: 0, pts: 4, xg: 3.8, cs: 1, form: ['W','D','L'], prob: 65, next: "vs Argentina" },
        { code: "dz", name: "Algeria", p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 5, gd: -2, pts: 3, xg: 3.2, cs: 0, form: ['L','W','L'], prob: 40, next: "vs Saudi Arabia" },
        { code: "sa", name: "Saudi Arabia", p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 7, gd: -5, pts: 1, xg: 2.4, cs: 0, form: ['L','L','D'], prob: 10, next: "vs Algeria" }
      ]
    },
    {
      id: "E",
      name: "Group E",
      teams: [
        { code: "fr", name: "France", p: 3, w: 3, d: 0, l: 0, gf: 9, ga: 2, gd: 7, pts: 9, xg: 9.8, cs: 2, form: ['W','W','W'], prob: 99, next: "vs Japan" },
        { code: "jp", name: "Japan", p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 4, gd: 1, pts: 6, xg: 4.8, cs: 1, form: ['W','W','L'], prob: 82, next: "vs France" },
        { code: "no", name: "Norway", p: 3, w: 1, d: 0, l: 2, gf: 4, ga: 6, gd: -2, pts: 3, xg: 4.1, cs: 0, form: ['L','W','L'], prob: 48, next: "vs Ecuador" },
        { code: "ec", name: "Ecuador", p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 7, gd: -6, pts: 0, xg: 2.2, cs: 0, form: ['L','L','L'], prob: 8, next: "vs Norway" }
      ]
    },
    {
      id: "F",
      name: "Group F",
      teams: [
        { code: "br", name: "Brazil", p: 3, w: 2, d: 1, l: 0, gf: 7, ga: 2, gd: 5, pts: 7, xg: 7.9, cs: 2, form: ['W','W','D'], prob: 96, next: "vs Switzerland" },
        { code: "ch", name: "Switzerland", p: 3, w: 1, d: 2, l: 0, gf: 4, ga: 3, gd: 1, pts: 5, xg: 3.9, cs: 1, form: ['W','D','D'], prob: 75, next: "vs Brazil" },
        { code: "sn", name: "Senegal", p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3, gd: 0, pts: 4, xg: 3.7, cs: 1, form: ['D','L','W'], prob: 62, next: "vs Peru" },
        { code: "pe", name: "Peru", p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 7, gd: -6, pts: 0, xg: 1.9, cs: 0, form: ['L','L','L'], prob: 5, next: "vs Senegal" }
      ]
    },
    {
      id: "G",
      name: "Group G",
      teams: [
        { code: "es", name: "Spain", p: 3, w: 2, d: 1, l: 0, gf: 8, ga: 2, gd: 6, pts: 7, xg: 8.2, cs: 2, form: ['W','W','D'], prob: 95, next: "vs Morocco" },
        { code: "ma", name: "Morocco", p: 3, w: 2, d: 0, l: 1, gf: 4, ga: 3, gd: 1, pts: 6, xg: 4.1, cs: 1, form: ['W','W','L'], prob: 82, next: "vs Spain" },
        { code: "tr", name: "Turkey", p: 3, w: 1, d: 0, l: 2, gf: 4, ga: 6, gd: -2, pts: 3, xg: 3.6, cs: 0, form: ['L','W','L'], prob: 44, next: "vs Jamaica" },
        { code: "jm", name: "Jamaica", p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 7, gd: -5, pts: 1, xg: 1.8, cs: 0, form: ['L','L','D'], prob: 12, next: "vs Turkey" }
      ]
    },
    {
      id: "H",
      name: "Group H",
      teams: [
        { code: "gb-eng", name: "England", p: 3, w: 3, d: 0, l: 0, gf: 8, ga: 1, gd: 7, pts: 9, xg: 8.4, cs: 2, form: ['W','W','W'], prob: 97, next: "vs Croatia" },
        { code: "hr", name: "Croatia", p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 4, gd: 0, pts: 4, xg: 4.2, cs: 1, form: ['W','D','L'], prob: 68, next: "vs England" },
        { code: "eg", name: "Egypt", p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 4, gd: -1, pts: 4, xg: 3.5, cs: 1, form: ['L','W','D'], prob: 59, next: "vs Costa Rica" },
        { code: "cr", name: "Costa Rica", p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 7, gd: -6, pts: 0, xg: 1.6, cs: 0, form: ['L','L','L'], prob: 4, next: "vs Egypt" }
      ]
    },
    {
      id: "I",
      name: "Group I",
      teams: [
        { code: "de", name: "Germany", p: 3, w: 2, d: 1, l: 0, gf: 7, ga: 3, gd: 4, pts: 7, xg: 7.7, cs: 1, form: ['W','W','D'], prob: 93, next: "vs Uruguay" },
        { code: "uy", name: "Uruguay", p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 6, xg: 5.3, cs: 1, form: ['W','L','W'], prob: 84, next: "vs Germany" },
        { code: "ci", name: "Ivory Coast", p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 5, gd: -1, pts: 4, xg: 3.8, cs: 0, form: ['D','W','L'], prob: 56, next: "vs Uzbekistan" },
        { code: "uz", name: "Uzbekistan", p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 6, gd: -5, pts: 0, xg: 1.7, cs: 0, form: ['L','L','L'], prob: 8, next: "vs Ivory Coast" }
      ]
    },
    {
      id: "J",
      name: "Group J",
      teams: [
        { code: "nl", name: "Netherlands", p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 2, gd: 4, pts: 7, xg: 6.9, cs: 1, form: ['W','D','W'], prob: 91, next: "vs Belgium" },
        { code: "be", name: "Belgium", p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 6, xg: 5.4, cs: 1, form: ['W','W','L'], prob: 83, next: "vs Netherlands" },
        { code: "ir", name: "Iran", p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 5, gd: -2, pts: 3, xg: 2.8, cs: 1, form: ['L','W','L'], prob: 38, next: "vs Panama" },
        { code: "pa", name: "Panama", p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 6, gd: -4, pts: 1, xg: 2.1, cs: 0, form: ['L','L','D'], prob: 9, next: "vs Iran" }
      ]
    },
    {
      id: "K",
      name: "Group K",
      teams: [
        { code: "at", name: "Austria", p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 6, xg: 5.1, cs: 1, form: ['W','L','W'], prob: 81, next: "vs Ghana" },
        { code: "gh", name: "Ghana", p: 3, w: 1, d: 2, l: 0, gf: 4, ga: 3, gd: 1, pts: 5, xg: 3.9, cs: 1, form: ['D','W','D'], prob: 73, next: "vs Austria" },
        { code: "pl", name: "Poland", p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 4, gd: 0, pts: 4, xg: 4.0, cs: 0, form: ['W','D','L'], prob: 61, next: "vs Paraguay" },
        { code: "py", name: "Paraguay", p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 5, gd: -3, pts: 1, xg: 2.3, cs: 0, form: ['L','D','L'], prob: 11, next: "vs Poland" }
      ]
    },
    {
      id: "L",
      name: "Group L",
      teams: [
        { code: "se", name: "Sweden", p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 2, gd: 4, pts: 7, xg: 6.2, cs: 1, form: ['W','W','D'], prob: 89, next: "vs South Africa" },
        { code: "za", name: "South Africa", p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 4, gd: 0, pts: 4, xg: 3.8, cs: 1, form: ['W','L','D'], prob: 63, next: "vs Sweden" },
        { code: "nz", name: "New Zealand", p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 4, gd: -1, pts: 4, xg: 3.1, cs: 0, form: ['D','W','L'], prob: 55, next: "vs Qatar" },
        { code: "qa", name: "Qatar", p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 5, gd: -3, pts: 1, xg: 2.2, cs: 0, form: ['L','L','D'], prob: 14, next: "vs New Zealand" }
      ]
    }
  ],
  goldenBoot: [
    { rank: 1, name: "Kylian Mbappé", country: "France", code: "fr", goals: 7, assists: 3, xg: "6.4", mins: 270, shots: 19 },
    { rank: 2, name: "Erling Haaland", country: "Norway", code: "no", goals: 6, assists: 1, xg: "5.8", mins: 270, shots: 16 },
    { rank: 3, name: "Vinicius Júnior", country: "Brazil", code: "br", goals: 5, assists: 4, xg: "4.7", mins: 255, shots: 14 },
    { rank: 4, name: "Harry Kane", country: "England", code: "gb-eng", goals: 5, assists: 2, xg: "4.9", mins: 260, shots: 13 },
    { rank: 5, name: "Lionel Messi", country: "Argentina", code: "ar", goals: 4, assists: 5, xg: "3.9", mins: 270, shots: 12 },
    { rank: 6, name: "Jude Bellingham", country: "England", code: "gb-eng", goals: 4, assists: 3, xg: "3.8", mins: 265, shots: 11 },
    { rank: 7, name: "Jamal Musiala", country: "Germany", code: "de", goals: 4, assists: 2, xg: "3.6", mins: 250, shots: 15 },
    { rank: 8, name: "Lamine Yamal", country: "Spain", code: "es", goals: 3, assists: 6, xg: "3.2", mins: 258, shots: 13 }
  ],
  goldenGlove: [
    { rank: 1, name: "Emiliano Martínez", country: "Argentina", code: "ar", cs: 3, saves: 14, savePct: "93.3%", goalsConceded: 1 },
    { rank: 2, name: "Mike Maignan", country: "France", code: "fr", cs: 2, saves: 16, savePct: "88.9%", goalsConceded: 2 },
    { rank: 3, name: "Jordan Pickford", country: "England", code: "gb-eng", cs: 2, saves: 12, savePct: "92.3%", goalsConceded: 1 },
    { rank: 4, name: "Alisson Becker", country: "Brazil", code: "br", cs: 2, saves: 11, savePct: "84.6%", goalsConceded: 2 }
  ],
  knockoutMatches: [
    { stage: "Round of 16", m1: { team1: "France", c1: "fr", score1: 3, team2: "Uruguay", c2: "uy", score2: 1, win: 1 }, m2: { team1: "Brazil", c1: "br", score1: 2, team2: "Croatia", c2: "hr", score2: 0, win: 1 } },
    { stage: "Quarter-Finals", m1: { team1: "France", c1: "fr", score1: 2, team2: "Brazil", c2: "br", score2: 1, win: 1 }, m2: { team1: "Argentina", c1: "ar", score1: 3, team2: "Spain", c2: "es", score2: 2, win: 1 } },
    { stage: "Semi-Finals", m1: { team1: "France", c1: "fr", score1: 1, team2: "England", c2: "gb-eng", score2: 2, win: 2 }, m2: { team1: "Argentina", c1: "ar", score1: 2, team2: "Portugal", c2: "pt", score2: 0, win: 1 } },
    { stage: "Grand Final", m1: { team1: "Argentina", c1: "ar", score1: 3, team2: "England", c2: "gb-eng", score2: 2, win: 1, champion: true } }
  ],
  stadiums: [
    { name: "MetLife Stadium", city: "New York / New Jersey, USA", capacity: "82,500", matches: "8 (Host of Grand Final)", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80" },
    { name: "Estadio Azteca", city: "Mexico City, Mexico", capacity: "87,523", matches: "Opening Match & 5 Group Games", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" },
    { name: "SoFi Stadium", city: "Los Angeles, USA", capacity: "70,240", matches: "Quarter-Finals & Group Games", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80" },
    { name: "AT&T Stadium", city: "Dallas / Arlington, USA", capacity: "80,000", matches: "Semi-Final & Round of 16", img: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80" },
    { name: "BC Place", city: "Vancouver, Canada", capacity: "54,500", matches: "Round of 32 & Group Games", img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=600&q=80" },
    { name: "Mercedes-Benz Stadium", city: "Atlanta, USA", capacity: "71,000", matches: "Semi-Final & Group Games", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80" }
  ],
  liveTicker: [
    { match: "USA 2 - 1 COL", min: "78'", event: "Pulisic Goal ⚽" },
    { match: "FRA 3 - 0 JPN", min: "62'", event: "Mbappé Hat-trick ⚽" },
    { match: "ARG 2 - 0 DEN", min: "FT", event: "Messi 2 Assists 🎯" },
    { match: "ENG 3 - 1 CRO", min: "85'", event: "Kane Penalty ⚽" },
    { match: "BRA 1 - 0 SUI", min: "54'", event: "Vinicius Jr Goal ⚽" },
    { match: "ESP 2 - 2 MAR", min: "89'", event: "Late Equalizer! 🔥" },
    { match: "GER 2 - 1 URU", min: "71'", event: "Musiala Solo Run ⚽" }
  ]
};

// Application Logic
document.addEventListener("DOMContentLoaded", () => {
  initLiveTicker();
  renderStandings("all");
  renderPills();
  renderKnockoutBracket();
  renderGoldenBoot();
  renderStadiums();
  setupEventListeners();
  initHeadToHead();
});

// Ticker
function initLiveTicker() {
  const container = document.getElementById("ticker-content");
  if (!container) return;
  const items = [...TOURNAMENT_DATA.liveTicker, ...TOURNAMENT_DATA.liveTicker];
  container.innerHTML = items.map(item => `
    <div class="ticker-item">
      <span class="live-badge"><span class="pulse-dot"></span>${item.min}</span>
      <strong>${item.match}</strong>
      <span style="color: var(--text-muted); font-size: 0.75rem;">• ${item.event}</span>
    </div>
  `).join("");
}

// Render Standings
function renderStandings(filterGroupId = "all", sortBy = "pts") {
  const grid = document.getElementById("groups-grid-container");
  if (!grid) return;

  let groupsToRender = TOURNAMENT_DATA.groups;
  if (filterGroupId !== "all") {
    groupsToRender = groupsToRender.filter(g => g.id === filterGroupId);
  }

  grid.innerHTML = groupsToRender.map(group => {
    // Sort teams
    const teams = [...group.teams].sort((a, b) => {
      if (sortBy === "pts") return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf;
      if (sortBy === "gd") return b.gd - a.gd;
      if (sortBy === "xg") return b.xg - a.xg;
      if (sortBy === "gf") return b.gf - a.gf;
      return 0;
    });

    return `
      <div class="group-card">
        <div class="group-card-header">
          <div class="group-name">
            <i class="fa-solid fa-trophy"></i>
            <span>${group.name}</span>
          </div>
          <span class="group-stage-tag">Group Stage</span>
        </div>
        <table class="standings-table">
          <thead>
            <tr>
              <th style="width: 38px;">#</th>
              <th>Team</th>
              <th class="text-center" title="Matches Played">MP</th>
              <th class="text-center" title="Won">W</th>
              <th class="text-center" title="Drawn">D</th>
              <th class="text-center" title="Lost">L</th>
              <th class="text-center" title="Goal Difference">GD</th>
              <th class="text-center" title="Expected Goals">xG</th>
              <th class="text-center" title="Points">PTS</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            ${teams.map((team, idx) => {
              const pos = idx + 1;
              const posClass = pos <= 2 ? 'pos-qualified' : (pos === 3 ? 'pos-playoff' : 'pos-eliminated');
              return `
                <tr>
                  <td><span class="team-pos ${posClass}">${pos}</span></td>
                  <td>
                    <div class="team-cell">
                      <img class="flag-img" src="https://flagcdn.com/w40/${team.code}.png" alt="${team.name}" onerror="this.src='https://flagcdn.com/w40/un.png'">
                      <span class="team-name-text">${team.name}</span>
                    </div>
                  </td>
                  <td class="text-center">${team.p}</td>
                  <td class="text-center">${team.w}</td>
                  <td class="text-center">${team.d}</td>
                  <td class="text-center">${team.l}</td>
                  <td class="text-center font-bold" style="color: ${team.gd > 0 ? 'var(--accent-green)' : (team.gd < 0 ? 'var(--accent-red)' : '#94a3b8')};">${team.gd > 0 ? '+' + team.gd : team.gd}</td>
                  <td class="text-center" style="color: var(--accent-cyan); font-weight: 600;">${team.xg}</td>
                  <td class="text-center"><span class="pts-badge">${team.pts}</span></td>
                  <td>
                    <div class="form-dots">
                      ${team.form.map(f => `<span class="form-dot form-${f.toLowerCase()}">${f}</span>`).join("")}
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }).join("");
}

// Render Pills
function renderPills() {
  const container = document.getElementById("group-pills-container");
  if (!container) return;

  const pills = [
    { id: "all", label: "All 12 Groups" },
    ...TOURNAMENT_DATA.groups.map(g => ({ id: g.id, label: g.name }))
  ];

  container.innerHTML = pills.map(p => `
    <button class="group-pill-btn ${p.id === 'all' ? 'active' : ''}" data-group="${p.id}">
      ${p.label}
    </button>
  `).join("");

  container.querySelectorAll(".group-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".group-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderStandings(btn.getAttribute("data-group"));
    });
  });
}

// Knockout Bracket
function renderKnockoutBracket() {
  const tree = document.getElementById("bracket-tree");
  if (!tree) return;

  tree.innerHTML = TOURNAMENT_DATA.knockoutMatches.map(stage => `
    <div class="bracket-round">
      <div class="round-heading">${stage.stage}</div>
      <div class="matchup-card">
        <div class="matchup-meta">
          <span>MATCHDAY 28</span>
          <span style="color: var(--gold);">FINAL STAGE</span>
        </div>
        <div class="match-team ${stage.m1.win === 1 ? 'winner' : ''}">
          <div class="team-cell">
            <img class="flag-img" src="https://flagcdn.com/w40/${stage.m1.c1}.png" alt="${stage.m1.team1}">
            <span>${stage.m1.team1}</span>
          </div>
          <span class="match-score">${stage.m1.score1}</span>
        </div>
        <div class="match-team ${stage.m1.win === 2 ? 'winner' : ''}">
          <div class="team-cell">
            <img class="flag-img" src="https://flagcdn.com/w40/${stage.m1.c2}.png" alt="${stage.m1.team2}">
            <span>${stage.m1.team2}</span>
          </div>
          <span class="match-score">${stage.m1.score2}</span>
        </div>
        ${stage.m1.champion ? '<div style="text-align: center; margin-top: 8px; color: var(--gold); font-weight: 900; font-size: 0.85rem;"><i class="fa-solid fa-crown"></i> WORLD CHAMPION</div>' : ''}
      </div>
      ${stage.m2 ? `
        <div class="matchup-card">
          <div class="matchup-meta">
            <span>MATCHDAY 27</span>
            <span>FIFA 2026</span>
          </div>
          <div class="match-team ${stage.m2.win === 1 ? 'winner' : ''}">
            <div class="team-cell">
              <img class="flag-img" src="https://flagcdn.com/w40/${stage.m2.c1}.png" alt="${stage.m2.team1}">
              <span>${stage.m2.team1}</span>
            </div>
            <span class="match-score">${stage.m2.score1}</span>
          </div>
          <div class="match-team ${stage.m2.win === 2 ? 'winner' : ''}">
            <div class="team-cell">
              <img class="flag-img" src="https://flagcdn.com/w40/${stage.m2.c2}.png" alt="${stage.m2.team2}">
              <span>${stage.m2.team2}</span>
            </div>
            <span class="match-score">${stage.m2.score2}</span>
          </div>
        </div>
      ` : ''}
    </div>
  `).join("");
}

// Golden Boot
function renderGoldenBoot() {
  const container = document.getElementById("golden-boot-container");
  if (!container) return;

  container.innerHTML = TOURNAMENT_DATA.goldenBoot.map(p => `
    <div class="player-card">
      <div class="player-rank rank-${p.rank}">${p.rank}</div>
      <div class="player-info">
        <div class="player-name">${p.name}</div>
        <div class="player-country">
          <img class="flag-img" src="https://flagcdn.com/w40/${p.code}.png" alt="${p.country}" style="width: 20px; height: 14px;">
          <span>${p.country}</span> • <span>xG ${p.xg}</span>
        </div>
      </div>
      <div class="player-goals-badge">
        <div class="goals-count">${p.goals}</div>
        <div class="goals-label">Goals</div>
      </div>
    </div>
  `).join("");
}

// Stadiums
function renderStadiums() {
  const container = document.getElementById("stadiums-container");
  if (!container) return;

  container.innerHTML = TOURNAMENT_DATA.stadiums.map(s => `
    <div class="stadium-card">
      <div class="stadium-img-box">
        <img class="stadium-img" src="${s.img}" alt="${s.name}">
        <span class="stadium-city-tag"><i class="fa-solid fa-location-dot"></i> ${s.city}</span>
      </div>
      <div class="stadium-info">
        <div class="stadium-name">${s.name}</div>
        <div class="stadium-meta">
          <span>Capacity: <strong>${s.capacity}</strong></span>
          <span>${s.matches}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Head-to-Head Comparison
function initHeadToHead() {
  const selA = document.getElementById("h2h-select-a");
  const selB = document.getElementById("h2h-select-b");
  if (!selA || !selB) return;

  const allTeams = [];
  TOURNAMENT_DATA.groups.forEach(g => {
    g.teams.forEach(t => allTeams.push(t));
  });

  const optionsHtml = allTeams.map(t => `<option value="${t.name}">${t.name}</option>`).join("");
  selA.innerHTML = optionsHtml;
  selB.innerHTML = optionsHtml;

  selA.value = "Argentina";
  selB.value = "France";

  const updateH2H = () => {
    const tA = allTeams.find(t => t.name === selA.value) || allTeams[0];
    const tB = allTeams.find(t => t.name === selB.value) || allTeams[1];

    document.getElementById("h2h-name-a").textContent = tA.name;
    document.getElementById("h2h-name-b").textContent = tB.name;
    document.getElementById("h2h-flag-a").src = `https://flagcdn.com/w40/${tA.code}.png`;
    document.getElementById("h2h-flag-b").src = `https://flagcdn.com/w40/${tB.code}.png`;

    const calcBar = (valA, valB) => {
      const total = (valA + valB) || 1;
      return Math.round((valA / total) * 100);
    };

    const winPctA = calcBar(tA.prob, tB.prob);
    document.getElementById("bar-win-a").style.width = `${winPctA}%`;
    document.getElementById("bar-win-b").style.width = `${100 - winPctA}%`;
    document.getElementById("val-win-a").textContent = `${tA.prob}%`;
    document.getElementById("val-win-b").textContent = `${tB.prob}%`;

    const xgPctA = calcBar(tA.xg, tB.xg);
    document.getElementById("bar-xg-a").style.width = `${xgPctA}%`;
    document.getElementById("bar-xg-b").style.width = `${100 - xgPctA}%`;
    document.getElementById("val-xg-a").textContent = tA.xg;
    document.getElementById("val-xg-b").textContent = tB.xg;

    const gfPctA = calcBar(tA.gf, tB.gf);
    document.getElementById("bar-gf-a").style.width = `${gfPctA}%`;
    document.getElementById("bar-gf-b").style.width = `${100 - gfPctA}%`;
    document.getElementById("val-gf-a").textContent = tA.gf;
    document.getElementById("val-gf-b").textContent = tB.gf;
  };

  selA.addEventListener("change", updateH2H);
  selB.addEventListener("change", updateH2H);
  updateH2H();
}

// Event Listeners
function setupEventListeners() {
  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.style.display = pane.id === target ? "block" : "none";
      });
    });
  });

  // Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll(".group-card");
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? "block" : "none";
      });
    });
  }

  // Standings Simulator Button
  const simBtn = document.getElementById("run-sim-btn");
  if (simBtn) {
    simBtn.addEventListener("click", () => {
      simBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Simulating 10,000 Matches...`;
      setTimeout(() => {
        TOURNAMENT_DATA.groups.forEach(g => {
          g.teams.forEach(t => {
            const deltaPts = Math.floor(Math.random() * 4);
            t.pts += deltaPts;
            t.gd += Math.floor(Math.random() * 3) - 1;
            t.xg = (parseFloat(t.xg) + (Math.random() * 1.5)).toFixed(1);
          });
        });
        const currentActiveGroup = document.querySelector(".group-pill-btn.active")?.getAttribute("data-group") || "all";
        renderStandings(currentActiveGroup);
        simBtn.innerHTML = `<i class="fa-solid fa-check"></i> Simulation Applied!`;
        setTimeout(() => {
          simBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Run AI Simulation Engine`;
        }, 2000);
      }, 700);
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("standings-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const currentActiveGroup = document.querySelector(".group-pill-btn.active")?.getAttribute("data-group") || "all";
      renderStandings(currentActiveGroup, e.target.value);
    });
  }
}
