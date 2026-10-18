<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Cup Standing 2026 | Enterprise Tournament Analytics & Live Intelligence</title>
    <meta name="description" content="MNC-grade World Cup Standings, advanced xG metrics, predictive simulations, knockout brackets, and head-to-head analytics for 48 nations.">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Live Ticker Tape -->
<div class="ticker-wrap">
    <div class="ticker-inner" id="ticker-content">
        <!-- Injected via JavaScript -->
    </div>
</div>

<!-- MNC Enterprise Header -->
<header class="header-main">
    <div class="container">
        <div class="nav-content">
            <div class="brand-group">
                <div class="brand-logo-icon">
                    <i class="fa-solid fa-trophy"></i>
                </div>
                <div>
                    <div class="brand-title">
                        GLOBAL CUP STATS
                        <span class="brand-badge">ENTERPRISE HQ</span>
                    </div>
                    <div style="font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.3px;">
                        OFFICIAL TOURNAMENT STANDINGS & LIVE DATA FEED
                    </div>
                </div>
            </div>

            <div class="nav-actions">
                <div class="search-box">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" id="search-input" placeholder="Search team, group, stadium...">
                </div>

                <div class="edition-select-wrap">
                    <select id="edition-selector">
                        <option value="2026">FIFA World Cup 2026 (48 Teams)</option>
                        <option value="2022">FIFA World Cup 2022 (Qatar)</option>
                        <option value="icc2023">ICC Cricket World Cup</option>
                        <option value="rugby2023">Rugby World Cup</option>
                    </select>
                </div>

                <div class="live-indicator-pill">
                    <span class="pulse-green"></span>
                    <span>LIVE SYNC</span>
                </div>
            </div>
        </div>
    </div>
</header>

<main class="container">
    <!-- Hero & KPI Section -->
    <section class="hero-section">
        <div class="hero-header">
            <div>
                <div class="hero-tag">
                    <i class="fa-solid fa-globe"></i> FIFA WORLD CUP 2026 TOURNAMENT HUB
                </div>
                <h1 class="hero-title">
                    World Cup <span>Standings</span> & Analytics
                </h1>
                <p class="hero-subtitle">
                    Comprehensive multi-stage enterprise intelligence: 48 national squads, 12 groups, xG performance metrics, interactive knockout bracket, and AI tournament simulation.
                </p>
            </div>
            <div>
                <button class="action-btn-gold" id="run-sim-btn">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Run AI Simulation Engine
                </button>
            </div>
        </div>

        <!-- 4 Enterprise KPI Cards -->
        <div class="hero-stats-row">
            <div class="kpi-card" style="--card-accent: var(--accent-blue);">
                <div class="kpi-label">Matches Completed</div>
                <div class="kpi-value">72 <span style="font-size: 1rem; color: var(--text-muted);">/ 104</span></div>
                <div class="kpi-sub"><i class="fa-solid fa-chart-pie"></i> 69.2% Tournament Progress</div>
            </div>
            <div class="kpi-card" style="--card-accent: var(--gold);">
                <div class="kpi-label">Total Tournament Goals</div>
                <div class="kpi-value">218</div>
                <div class="kpi-sub"><i class="fa-solid fa-bolt"></i> 3.03 Goals Per Game Avg</div>
            </div>
            <div class="kpi-card" style="--card-accent: var(--accent-green);">
                <div class="kpi-label">Expected Win Prob Leader</div>
                <div class="kpi-value">France <span style="font-size: 1.1rem; color: var(--accent-green);">99%</span></div>
                <div class="kpi-sub"><i class="fa-solid fa-arrow-trend-up"></i> Followed by Argentina (98%)</div>
            </div>
            <div class="kpi-card" style="--card-accent: var(--accent-purple);">
                <div class="kpi-label">Golden Boot Frontrunner</div>
                <div class="kpi-value">K. Mbappé <span style="font-size: 1.1rem; color: var(--gold);">7 ⚽</span></div>
                <div class="kpi-sub"><i class="fa-solid fa-fire"></i> xG Rating: 6.4 (3 Assists)</div>
            </div>
        </div>

        <!-- Tab Navigation -->
        <div class="tabs-container">
            <button class="tab-btn active" data-tab="tab-standings">
                <i class="fa-solid fa-table-list"></i> Standings & Groups <span class="badge-pill">12 Groups</span>
            </button>
            <button class="tab-btn" data-tab="tab-bracket">
                <i class="fa-solid fa-sitemap"></i> Knockout Bracket <span class="badge-pill">Playoffs</span>
            </button>
            <button class="tab-btn" data-tab="tab-goldenboot">
                <i class="fa-solid fa-medal"></i> Top Scorers & Glove <span class="badge-pill">Stats</span>
            </button>
            <button class="tab-btn" data-tab="tab-h2h">
                <i class="fa-solid fa-scale-balanced"></i> Head-to-Head Matrix <span class="badge-pill">Dual Compare</span>
            </button>
            <button class="tab-btn" data-tab="tab-stadiums">
                <i class="fa-solid fa-building-flag"></i> Host Stadiums <span class="badge-pill">16 Venues</span>
            </button>
        </div>

        <!-- TAB 1: STANDINGS -->
        <div class="tab-pane" id="tab-standings">
            <div class="standings-filter-bar">
                <div class="group-pills" id="group-pills-container">
                    <!-- Injected dynamically -->
                </div>
                <div class="view-switchers">
                    <select id="standings-sort" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); color: #fff; padding: 7px 12px; border-radius: 8px; font-size: 0.82rem;">
                        <option value="pts">Sort By: Points (PTS)</option>
                        <option value="gd">Sort By: Goal Diff (GD)</option>
                        <option value="xg">Sort By: Expected Goals (xG)</option>
                        <option value="gf">Sort By: Goals Scored (GF)</option>
                    </select>
                </div>
            </div>

            <!-- Groups Grid -->
            <div class="groups-grid" id="groups-grid-container">
                <!-- Injected via JavaScript -->
            </div>
        </div>

        <!-- TAB 2: KNOCKOUT BRACKET -->
        <div class="tab-pane" id="tab-bracket" style="display: none;">
            <div class="simulator-banner">
                <div>
                    <div class="sim-title">Path to the FIFA World Cup Trophy</div>
                    <div class="sim-desc">
                        Simulated progression matrix: Tracking single-elimination dynamics, calculated win probability, and bracket progression down to the Grand Final.
                    </div>
                </div>
                <span class="brand-badge" style="font-size: 0.8rem; padding: 6px 14px;">KNOCKOUT TREE v2.4</span>
            </div>
            <div class="bracket-wrapper">
                <div class="bracket-tree" id="bracket-tree">
                    <!-- Injected via JavaScript -->
                </div>
            </div>
        </div>

        <!-- TAB 3: GOLDEN BOOT & GLOVE -->
        <div class="tab-pane" id="tab-goldenboot" style="display: none;">
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 20px;">
                <i class="fa-solid fa-trophy" style="color: var(--gold);"></i> Golden Boot Leaderboard (Top Scorers)
            </h3>
            <div class="leaders-grid" id="golden-boot-container">
                <!-- Injected via JavaScript -->
            </div>
        </div>

        <!-- TAB 4: HEAD-TO-HEAD MATRIX -->
        <div class="tab-pane" id="tab-h2h" style="display: none;">
            <div class="h2h-container">
                <div class="h2h-team-selector">
                    <label style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 700; margin-bottom: 8px; display: block;">Select Team Alpha:</label>
                    <select id="h2h-select-a" style="width: 100%; background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); color: #fff; padding: 10px; border-radius: 8px; font-size: 1rem; margin-bottom: 24px;"></select>

                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <img id="h2h-flag-a" src="" alt="Team A" style="width: 48px; height: 32px; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                        <div>
                            <h2 id="h2h-name-a" style="font-size: 1.5rem; font-weight: 900;"></h2>
                            <span style="font-size: 0.8rem; color: var(--accent-blue); font-weight: 700;">TEAM ALPHA</span>
                        </div>
                    </div>
                </div>

                <div class="h2h-team-selector">
                    <label style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 700; margin-bottom: 8px; display: block;">Select Team Beta:</label>
                    <select id="h2h-select-b" style="width: 100%; background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); color: #fff; padding: 10px; border-radius: 8px; font-size: 1rem; margin-bottom: 24px;"></select>

                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <img id="h2h-flag-b" src="" alt="Team B" style="width: 48px; height: 32px; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                        <div>
                            <h2 id="h2h-name-b" style="font-size: 1.5rem; font-weight: 900;"></h2>
                            <span style="font-size: 0.8rem; color: var(--gold); font-weight: 700;">TEAM BETA</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Comparison Metrics -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 30px;">
                <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 24px;">Comparative Statistical Model</h3>

                <div class="h2h-stat-bar-row">
                    <div class="h2h-stat-labels">
                        <span id="val-win-a" style="color: var(--accent-blue);"></span>
                        <span>Tournament Win Probability %</span>
                        <span id="val-win-b" style="color: var(--gold);"></span>
                    </div>
                    <div class="h2h-bar-track">
                        <div class="bar-team-a" id="bar-win-a"></div>
                        <div class="bar-team-b" id="bar-win-b"></div>
                    </div>
                </div>

                <div class="h2h-stat-bar-row">
                    <div class="h2h-stat-labels">
                        <span id="val-xg-a" style="color: var(--accent-blue);"></span>
                        <span>Expected Goals (xG)</span>
                        <span id="val-xg-b" style="color: var(--gold);"></span>
                    </div>
                    <div class="h2h-bar-track">
                        <div class="bar-team-a" id="bar-xg-a"></div>
                        <div class="bar-team-b" id="bar-xg-b"></div>
                    </div>
                </div>

                <div class="h2h-stat-bar-row">
                    <div class="h2h-stat-labels">
                        <span id="val-gf-a" style="color: var(--accent-blue);"></span>
                        <span>Goals Scored (GF)</span>
                        <span id="val-gf-b" style="color: var(--gold);"></span>
                    </div>
                    <div class="h2h-bar-track">
                        <div class="bar-team-a" id="bar-gf-a"></div>
                        <div class="bar-team-b" id="bar-gf-b"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TAB 5: HOST STADIUMS -->
        <div class="tab-pane" id="tab-stadiums" style="display: none;">
            <div class="stadiums-grid" id="stadiums-container">
                <!-- Injected via JavaScript -->
            </div>
        </div>
    </section>
</main>

<!-- MNC Enterprise Footer -->
<footer class="footer-main">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <div class="brand-title" style="margin-bottom: 12px;">
                    GLOBAL CUP STATS
                </div>
                <p style="color: var(--text-secondary); font-size: 0.88rem; max-width: 320px; margin-bottom: 16px;">
                    Enterprise sports data platform delivering live standing computations, mathematical models, expected goal ratings, and simulation feeds for international sports tournaments.
                </p>
                <div style="display: flex; gap: 14px; font-size: 1.1rem; color: var(--text-muted);">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>

            <div class="footer-col">
                <h4>Tournaments</h4>
                <ul>
                    <li><a href="#">FIFA World Cup 2026</a></li>
                    <li><a href="#">FIFA World Cup 2022</a></li>
                    <li><a href="#">UEFA Champions League</a></li>
                    <li><a href="#">ICC Cricket World Cup</a></li>
                    <li><a href="#">Rugby World Cup</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Analytics API</h4>
                <ul>
                    <li><a href="#">Real-time Feed</a></li>
                    <li><a href="#">xG Statistical Models</a></li>
                    <li><a href="#">Knockout Bracket API</a></li>
                    <li><a href="#">Head-to-Head Engine</a></li>
                    <li><a href="#">Webhook Subscriptions</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Platform & Legal</h4>
                <ul>
                    <li><a href="#">Enterprise SLA</a></li>
                    <li><a href="#">Data Integrity Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Protocol</a></li>
                    <li><a href="#">Support Desk</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div>
                © 2026 Global Cup Stats Enterprise Platform. Engineered with high-performance telemetry.
            </div>
            <div>
                Powered by WordPress & PHP 8.3 Enterprise Architecture
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
