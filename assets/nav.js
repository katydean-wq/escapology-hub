// Shared sidebar + topbar injector
(function(){
  const navHTML = `
  <aside class="sidebar">
    <div class="brand">
      <a href="index.html">
        <img class="logo-img" src="assets/img/escapology-logo.png" alt="Escapology" onerror="this.style.display='none'; document.getElementById('logo-fallback').style.display='flex';">
        <div id="logo-fallback" class="logo-text" style="display:none;">
          ESCAPOL<span class="cog"></span>GY
        </div>
      </a>
      <div class="tag">The Hub</div>
    </div>

    <div class="nav-section">
      <a class="nav-item" href="index.html" data-nav="home">
        <span class="ico">⌂</span> Home
      </a>

      <div class="nav-heading">Quick Actions</div>
      <a class="nav-item" href="marketing.html#request">
        <span class="ico">✎</span> Submit a Request
      </a>
      <a class="nav-item" href="documents.html">
        <span class="ico">⌕</span> Find a Document
      </a>
      <a class="nav-item" href="news.html" data-nav="news">
        <span class="ico">◉</span> Latest News
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
        <span class="ico">⚙</span> Operations
      </button>
      <div class="nav-sub" id="sub-ops">
        <a href="operations.html">Overview</a>
        <a href="operations.html#support">Support Resources</a>
        <a href="operations.html#systems">Systems &amp; Assets</a>
        <a href="operations.html#group-sales">Group Sales</a>
        <a href="operations.html#resova">Resova (Booking)</a>
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

      <button class="nav-item nav-toggle" data-toggle="sub-training">
        <span class="ico">▦</span> Training
      </button>
      <div class="nav-sub" id="sub-training">
        <a href="training.html">Overview</a>
        <a href="training.html#lms">University LMS</a>
        <a href="training.html#master-plan">Master Training Plan</a>
        <a href="training.html#sop">SOP Documents</a>
        <a href="training.html#onboarding">Onboarding</a>
        <a href="training.html#gm-cert">GM Certification</a>
      </div>

      <button class="nav-item nav-toggle" data-toggle="sub-venue">
        <span class="ico">▲</span> Venue Development
      </button>
      <div class="nav-sub" id="sub-venue">
        <a href="https://escapology.com" target="_blank">Venue Development Site ↗</a>
        <a href="https://escapology.com" target="_blank">Franchising Site ↗</a>
      </div>

      <a class="nav-item" href="news.html">
        <span class="ico">⎘</span> News &amp; Updates
      </a>
    </div>

    <div class="sidebar-footer">
      Franchise Portal<br>
      <a href="mailto:support@escapology.com">Contact HQ</a>
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
      'training.html': 'sub-training'
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
