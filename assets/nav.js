// Shared sidebar + topbar injector
(function(){
  /* SVG cog mark — matches the Escapology brand cog */
  const cogSVG = `<svg class="brand-cog" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cogG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D9902C"/><stop offset="50%" stop-color="#B77729"/><stop offset="100%" stop-color="#7A4E1C"/></linearGradient></defs><path fill="url(#cogG)" fill-rule="evenodd" d="M55.2 4.5L57.3 0h5.4l2.1 4.5 3.5.7L73 1l4.5 2.5-1.9 4.7 2.8 2.3 5-2 3.5 3.8-3.5 4 1.8 3 5.2-.5 2 4.8-4.8 2.3.6 3.4 5.2 1.3.3 5.1-5.2.9v3.5l5.2.9-.3 5.1-5.2 1.3-.6 3.4 4.8 2.3-2 4.8-5.2-.5-1.8 3 3.5 4-3.5 3.8-5-2-2.8 2.3 1.9 4.7L73 119l-4.7-4.3-3.5.7L62.7 120h-5.4l-2.1-4.5-3.5-.7L47 119l-4.5-2.5 1.9-4.7-2.8-2.3-5 2-3.5-3.8 3.5-4-1.8-3-5.2.5-2-4.8 4.8-2.3-.6-3.4-5.2-1.3-.3-5.1 5.2-.9v-3.5l-5.2-.9.3-5.1 5.2-1.3.6-3.4-4.8-2.3 2-4.8 5.2.5 1.8-3-3.5-4 3.5-3.8 5 2 2.8-2.3-1.9-4.7L47 1l4.7 4.3 3.5-.7ZM60 36a24 24 0 100 48 24 24 0 000-48Zm0 8a16 16 0 110 32 16 16 0 010-32Z"/></svg>`;

  const navHTML = `
  <aside class="sidebar">
    <div class="brand">
      <a href="index.html">
        <div class="logo-text">
          ESCAPOL<span class="cog-wrap">${cogSVG}</span>GY
        </div>
      </a>
      <div class="tag">The Hub</div>
    </div>

    <div class="nav-section">
      <a class="nav-item" href="index.html" data-nav="home">
        <span class="ico">⌂</span> Home
      </a>

      <div class="nav-heading">Quick Actions</div>
      <a class="nav-item" href="team.html" data-nav="team">
        <span class="ico">☷</span> Team Directory
      </a>
      <a class="nav-item" href="dashboard.html" data-nav="dashboard">
        <span class="ico">▥</span> Dev Dashboard
      </a>
      <a class="nav-item" href="metrics.html" data-nav="metrics">
        <span class="ico">◎</span> League Reports
      </a>
      <a class="nav-item" href="marketing.html#request">
        <span class="ico">✎</span> Submit a Request
      </a>
      <a class="nav-item" href="documents.html">
        <span class="ico">⌕</span> Find a Document
      </a>

      <div class="nav-heading">Sections</div>
      <button class="nav-item nav-toggle" data-toggle="sub-marketing">
        <span class="ico">▤</span> Marketing
      </button>
      <div class="nav-sub" id="sub-marketing">
        <a href="marketing.html">Overview</a>
        <a href="marketing.html#request">Submit a Request</a>
        <a href="marketing.html#evergreen">Evergreen Campaigns</a>
        <a href="marketing.html#grand-opening">Grand Opening Kit</a>
        <a href="marketing.html#game-assets">Game Marketing Assets</a>
        <a href="marketing.html#brand">Brand Guidelines</a>
      </div>

      <button class="nav-item nav-toggle" data-toggle="sub-ops">
        <span class="ico">⚙</span> Operations &amp; Training
      </button>
      <div class="nav-sub" id="sub-ops">
        <a href="operations.html"><strong>The Six Pillars</strong></a>
        <a href="operations.html#hiring">01 · Hiring</a>
        <a href="operations.html#kpis">02 · Know Your Numbers</a>
        <a href="operations.html#guest-experience">03 · Guest Experience</a>
        <a href="operations.html#reviews">04 · Reviews = Revenue</a>
        <a href="operations.html#hours">05 · Hours &amp; Calendar</a>
        <a href="operations.html#pricing">06 · Price for Profit</a>
      </div>

      <button class="nav-item nav-toggle" data-toggle="sub-games">
        <span class="ico">◇</span> Games
      </button>
      <div class="nav-sub" id="sub-games">
        <a href="games.html"><strong>Game Support</strong></a>
        <a href="games.html#batman">Batman</a>
        <a href="games.html#scooby-doo">Scooby Doo</a>
        <a href="games.html#pirates-curse">Pirates Curse</a>
        <a href="games.html#star-trek">Star Trek</a>
        <a href="games.html#mansion-murder">Mansion Murder</a>
        <a href="games.html#7-deadly-sins">7 Deadly Sins</a>
        <a href="games.html#motoe">MOTOE</a>
        <a href="games.html#lost-city">Lost City</a>
        <a href="games.html#who-stole-mona">Who Stole Mona</a>
        <a href="games.html#under-pressure">Under Pressure</a>
        <a href="games.html#antidote">Antidote 2.0</a>
        <a href="games.html#narco">Narco</a>
        <a href="games.html#haunted-house">Haunted House</a>
        <a href="games.html#the-code">The Code 2.0</a>
        <a href="games.html#arizona">Arizona 2.0</a>
      </div>

      <button class="nav-item nav-toggle" data-toggle="sub-metrics">
        <span class="ico">◎</span> Metrics &amp; Reports
      </button>
      <div class="nav-sub" id="sub-metrics">
        <a href="metrics.html"><strong>Metrics Overview</strong></a>
        <a href="league-report.html">April League Report</a>
      </div>

      <button class="nav-item nav-toggle" data-toggle="sub-venue">
        <span class="ico">▲</span> Venue Development
      </button>
      <div class="nav-sub" id="sub-venue">
        <a href="dashboard.html"><strong>CS Dev Dashboard</strong></a>
        <a href="https://escapology.com" target="_blank">Venue Development Site ↗</a>
        <a href="https://escapology.com" target="_blank">Franchising Site ↗</a>
      </div>

      <a class="nav-item" href="community.html" data-nav="community">
        <span class="ico">💬</span> Community
      </a>
      <a class="nav-item" href="news.html" data-nav="news">
        <span class="ico">⎘</span> News &amp; Updates
      </a>
      <a class="nav-item" href="support.html" data-nav="support">
        <span class="ico">⚑</span> Help &amp; Support
      </a>
    </div>

    <div class="sidebar-footer">
      Franchise Portal<br>
      <a href="support.html">Get Help</a> · <a href="mailto:support@escapology.com">Contact HQ</a>
    </div>
  </aside>`;

  const topbarHTML = `
    <div class="topbar">
      <div class="search">
        <span class="ico">⌕</span>
        <input type="text" placeholder="Search documents, SOPs, assets, games, news…" />
      </div>
      <div class="topbar-right">
        <span>Orlando, FL</span>
        <div class="avatar">KD</div>
      </div>
    </div>`;

  const mockupBadge = `
    <div class="mockup-note">
      <strong>Prototype</strong>
      <span>Design preview. Placeholder content.</span>
    </div>`;

  document.addEventListener('DOMContentLoaded', () => {
    const sideSlot = document.querySelector('[data-slot="sidebar"]');
    const topSlot = document.querySelector('[data-slot="topbar"]');
    const badgeSlot = document.querySelector('[data-slot="badge"]');
    if (sideSlot) sideSlot.outerHTML = navHTML;
    if (topSlot) topSlot.outerHTML = topbarHTML;
    if (badgeSlot) badgeSlot.outerHTML = mockupBadge;

    const path = location.pathname.split('/').pop() || 'index.html';
    const map = {
      'marketing.html': 'sub-marketing',
      'operations.html': 'sub-ops',
      'games.html': 'sub-games',
      'training.html': 'sub-training',
      'metrics.html': 'sub-metrics',
      'league-report.html': 'sub-metrics'
    };
    const openId = map[path];
    if (openId) {
      const el = document.getElementById(openId);
      if (el) el.classList.add('open');
    }

    document.querySelectorAll('.nav-item').forEach(a => {
      if (a.getAttribute && a.getAttribute('href') === path) a.classList.add('active');
      if (path === 'index.html' && a.dataset.nav === 'home') a.classList.add('active');
    });

    document.querySelectorAll('.nav-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = document.getElementById(btn.dataset.toggle);
        if (sub) sub.classList.toggle('open');
      });
    });
  });
})();
