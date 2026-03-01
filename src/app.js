/* ══════════════════════════════════════════
   ALTERCOD LAUNCHER — app.js
══════════════════════════════════════════ */

const GAMES = [
  {
    id:'cod1', title:'Call of Duty', short:'COD1', year:2003, c:'#e8c97a',
    thumbnail:'https://cdn.mos.cms.futurecdn.net/iAKxAFte4BFRGGQvAiGnNf.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/COD1.torrent',
    exe:'CoDSP.exe',
    client:'COD1',
    desc:'Le FPS qui a tout lancé. Campagne WWII immersive et multijoueur classique.',
    req:['Windows 7+','256 Mo RAM','700 Mo disque'],
    steps:['Télécharge et extrait l\'archive','Lance CoDSP.exe pour solo ou CoDMP.exe pour multi'],
  },
  {
    id:'cod2', title:'Call of Duty 2', short:'COD2', year:2005, c:'#d4a017',
    thumbnail:'https://gaming-cdn.com/images/products/338/616x353/call-of-duty-2-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/COD2.torrent',
    exe:'CoD2SP_s.exe',
    client:'COD2',
    desc:'Suite améliorée avec une campagne WWII encore plus épique.',
    req:['Windows 7+','512 Mo RAM','1.4 Go disque'],
    steps:['Télécharge et extrait l\'archive','Lance CoD2SP_s.exe'],
    keys:['XEZL-GZWX-XQZG-GEGU-EEFC','W5HA-3557-666Q-JQGZ-232E','W5HA-ZHEL-666Q-L66X-CD23','W55E-QE6E-66Q6-EWE6-76DD','G6AE-57JJ-Q5G6-WJPP-E1D9'],
  },
  {
    id:'cod4', title:'Call of Duty 4', short:'COD4', year:2007, c:'#6dffb0',
    thumbnail:'https://gaming-cdn.com/images/products/335/616x353/call-of-duty-4-modern-warfare-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/COD4.torrent',
    exe:'iw3mp.exe',
    client:'CoD4X',
    desc:'Le Modern Warfare originel. Le COD qui a tout révolutionné.',
    req:['Windows 7+','512 Mo RAM','8 Go disque'],
    steps:['Télécharge et extrait l\'archive','Installe CoD4X (client multijoueur)','Lance iw3mp.exe'],
    keys:['M2YD-J2MQ-QUEM-MS84-4B77','YWPS-UUW2-48EP-YQLE-AF98','STS8-J82P-D8E4-QUDE-2645','PPLJ-QSUQ-ETSD-PSL4-62EF'],
    extraLinks:[{label:'↓ CoD4X Client',url:'https://cod4x.ovh/uploads/short-url/2V3RsE0Pp5Jakc1VE9Yuh5yb4lE.exe'}],
  },
  {
    id:'waw', title:'World at War', short:'WaW', year:2008, c:'#c8860a',
    thumbnail:'https://gaming-cdn.com/images/products/336/616x353/call-of-duty-world-at-war-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/WAW.torrent',
    exe:'CoDWaW.exe',
    client:'Plutonium T4',
    desc:'Mode Zombies original, campagne Pacifique et Europe. Jouable via Plutonium.',
    req:['Windows 10/11','4 Go RAM','8 Go disque'],
    steps:['Télécharge via torrent','Lance le launcher Plutonium T4'],
    extraLinks:[{label:'↓ Plutonium T4',url:'https://plutonium.pw/download'}],
  },
  {
    id:'mw2', title:'Modern Warfare 2', short:'MW2', year:2009, c:'#a8c0d0',
    thumbnail:'https://gaming-cdn.com/images/products/337/616x353/call-of-duty-modern-warfare-2-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/MW2.torrent',
    exe:'iw4x.exe',
    client:'IW4x',
    desc:'L\'épopée de Ghost et Price. Multijoueur légendaire via IW4x.',
    req:['Windows 10/11','4 Go RAM','16 Go disque'],
    steps:['Télécharge via torrent','Installe IW4x dans le dossier MW2','Lance iw4x.exe'],
    extraLinks:[{label:'↓ IW4x Client',url:'https://iw4x.dev'}],
  },
  {
    id:'bo1', title:'Black Ops', short:'BO1', year:2010, c:'#ff6b35',
    thumbnail:'https://gaming-cdn.com/images/products/339/616x353/call-of-duty-black-ops-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/BO1.torrent',
    exe:'BlackOps.exe',
    client:'Plutonium T5',
    desc:'Guerre froide, Zombies culte, Nuketown. Le Black Ops original.',
    req:['Windows 10/11','4 Go RAM','12 Go disque'],
    steps:['Télécharge via torrent','Lance le launcher Plutonium T5'],
    extraLinks:[{label:'↓ Plutonium T5',url:'https://plutonium.pw/download'}],
  },
  {
    id:'mw3', title:'Modern Warfare 3', short:'MW3', year:2011, c:'#8899aa',
    thumbnail:'https://gaming-cdn.com/images/products/341/616x353/call-of-duty-modern-warfare-3-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/MW3.torrent',
    exe:'iw5sp.exe',
    client:'IW5x',
    desc:'La fin de la trilogie Modern Warfare. Survival mode et multi intense.',
    req:['Windows 10/11','4 Go RAM','16 Go disque'],
    steps:['Télécharge via torrent','Installe IW5x','Lance le client'],
    extraLinks:[{label:'↓ IW5x',url:'https://iw5xclient.com'}],
  },
  {
    id:'bo2', title:'Black Ops II', short:'BO2', year:2012, c:'#00d4ff',
    thumbnail:'https://gaming-cdn.com/images/products/343/616x353/call-of-duty-black-ops-ii-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/BO2.torrent',
    exe:'t6zm.exe',
    client:'Plutonium T6',
    desc:'Futur proche, Zombies avancé, multi compétitif. Via Plutonium T6.',
    req:['Windows 10/11','4 Go RAM','16 Go disque'],
    steps:['Télécharge via torrent','Lance le launcher Plutonium T6'],
    extraLinks:[{label:'↓ Plutonium T6',url:'https://plutonium.pw/download'}],
  },
  {
    id:'ghost', title:'Ghosts', short:'Ghost', year:2013, c:'#7a8899',
    thumbnail:'https://gaming-cdn.com/images/products/345/616x353/call-of-duty-ghosts-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/Ghosts.torrent',
    exe:'iw6sp64_ship.exe',
    client:'Steam/Crack',
    desc:'Riley le chien, mode Extinction et une nouvelle équipe.',
    req:['Windows 10/11','6 Go RAM','40 Go disque'],
    steps:['Télécharge via torrent','Extrait et lance l\'exécutable'],
  },
  {
    id:'aw', title:'Advanced Warfare', short:'AW', year:2014, c:'#c8a200',
    thumbnail:'https://gaming-cdn.com/images/products/334/616x353/call-of-duty-advanced-warfare-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/AW.torrent',
    exe:'s1_sp64_ship.exe',
    client:'Alterware S1x',
    desc:'Exosquelettes et Kevin Spacey. Future warfare via Alterware.',
    req:['Windows 10/11','6 Go RAM','55 Go disque'],
    steps:['Télécharge via torrent','Installe le client S1x','Lance le jeu'],
    extraLinks:[{label:'↓ Alterware S1x',url:'https://alterware.dev'}],
  },
  {
    id:'bo3', title:'Black Ops III', short:'BO3', year:2015, c:'#5b8fff',
    thumbnail:'https://cdn.mos.cms.futurecdn.net/078432f043eea155e5825503460e13b4.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/BO3.torrent',
    exe:'blackops3.exe',
    client:'T7x',
    desc:'Zombies complet, parkour, maps custom via BOIIIWD. Le meilleur BO.',
    req:['Windows 10/11','8 Go RAM','60 Go disque'],
    steps:['Télécharge via torrent','Installe T7x dans le dossier BO3','Lance t7x.exe'],
    extraLinks:[{label:'↓ T7x Client',url:'https://master.bo3.eu/t7x/t7x.exe'},{label:'↓ BOIIIWD (maps)',url:'https://github.com/faroukbmiled/BOIIIWD/releases/latest/download/Release.zip'}],
    radmin:{ name:'©Call Of Duty: Black Ops III', password:'AlterCOD' },
  },
  {
    id:'iw', title:'Infinite Warfare', short:'IW', year:2016, c:'#bb99ff',
    thumbnail:'https://gaming-cdn.com/images/products/1704/616x353/call-of-duty-infinite-warfare-pc-jeu-steam-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/IW.torrent',
    exe:'iw7_ship.exe',
    client:'Alterware IW7',
    desc:'Space warfare, zombies dans les étoiles. Via Alterware.',
    req:['Windows 10/11','8 Go RAM','70 Go disque'],
    steps:['Télécharge via torrent','Installe IW7 Mod','Lance le jeu'],
    extraLinks:[{label:'↓ Alterware IW7',url:'https://alterware.dev'}],
  },
  {
    id:'mwr', title:'Modern Warfare Remastered', short:'MWR', year:2017, c:'#4db8ff',
    thumbnail:'https://gaming-cdn.com/images/products/2177/616x353/call-of-duty-modern-warfare-remastered-pc-jeu-battle-net-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/MWR.torrent',
    exe:'h1_mp64_ship.exe',
    client:'H1-Mod',
    desc:'COD4 remasterisé en 4K. Via H1-Mod.',
    req:['Windows 10/11','8 Go RAM','45 Go disque'],
    steps:['Télécharge via torrent','Installe H1-Mod','Lance le jeu'],
    extraLinks:[{label:'↓ H1-Mod',url:'https://h1.gg'}],
  },
  {
    id:'bo4', title:'Black Ops 4', short:'BO4', year:2018, c:'#e05a00',
    thumbnail:'https://gaming-cdn.com/images/products/2468/616x353/call-of-duty-black-ops-4-pc-jeu-battle-net-europe-cover.jpg?v=1649845811',
    torrent:'https://leikaam.fr/Call%20of%20Duty/BO4.torrent',
    exe:'BlackOps4.exe',
    client:'Project-BO4',
    desc:'Blackout (Battle Royale), Zombies, pas de campagne. Via Project-BO4.',
    req:['Windows 10/11','12 Go RAM','145 Go disque'],
    steps:['Installe Battle.net','Télécharge via torrent (145 Go)','Configure battle.net.bat','Lance Project-BO4'],
    extraLinks:[{label:'↓ Project-BO4',url:'https://github.com/NotNierPea/shield-launcher/releases/tag/Release'}],
    note:'⚠ Fichier volumineux : 145 Go. Prévoir de la place.',
  },
  {
    id:'hmw', title:'HMW — Modern Warfare', short:'HMW', year:2024, c:'#ff4444',
    thumbnail:'https://gaming-cdn.com/images/products/4463/616x353/call-of-duty-modern-warfare-pc-jeu-battle-net-cover.jpg',
    torrent:'https://leikaam.fr/Call%20of%20Duty/HMW.torrent',
    exe:'hwm-mod.exe',
    client:'HMW',
    desc:'MW 2019 gratuit et moddé. Le projet communautaire le plus récent.',
    req:['Windows 10/11','8 Go RAM','80 Go disque'],
    steps:['Télécharge via torrent','Lance hwm-mod.exe'],
  },
];

/* ══ STATE ══ */
let currentGame = null;
let settings = {};
let downloads = {}; // { gameId: { progress, speed, status, torrentClient } }

/* ══ INIT ══ */
(async () => {
  const ver = await window.electronAPI.getVersion();
  document.getElementById('verEl').textContent = `v${ver}`;
  document.getElementById('aboutVer').textContent = `v${ver}`;

  settings = await window.electronAPI.getSettings();
  if (!settings.defaultPath) settings.defaultPath = 'C:\\AlterCOD';
  document.getElementById('defaultPathLabel').textContent = settings.defaultPath;

  renderGamesGrid();
  updateInstalledCount();
})();

/* ══ NAVIGATION ══ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${id}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = { home: 0, library: 1, downloads: 2, news: 3, settings: 4 };
  const items = document.querySelectorAll('.nav-item');
  if (navMap[id] !== undefined) items[navMap[id]]?.classList.add('active');
  if (id === 'library') renderLibrary();
  if (id === 'downloads') renderDownloadsPage();
}

/* ══ RENDER GAMES GRID ══ */
function renderGamesGrid() {
  const grid = document.getElementById('gamesGrid');
  grid.innerHTML = GAMES.map(g => `
    <div class="game-card" style="--c:${g.c}" onclick="showGame('${g.id}')">
      <img class="thumb" src="${g.thumbnail}" alt="${g.title}" onerror="this.style.background='#1a1e24'">
      <div class="info">
        <div class="title" style="color:${g.c}">${g.title}</div>
        <div class="year">${g.year} · ${g.client}</div>
        <div class="status">
          <div class="dot" style="background:${downloads[g.id] ? '#ffc400' : '#5a6478'}"></div>
          <span style="color:${downloads[g.id] ? '#ffc400' : 'var(--grey)'}">
            ${downloads[g.id] ? `${Math.round(downloads[g.id].progress || 0)}%` : 'Non installé'}
          </span>
        </div>
      </div>
      ${downloads[g.id]?.progress > 0 ? `<div class="installed-bar" style="width:${downloads[g.id].progress}%;background:${g.c}"></div>` : ''}
    </div>
  `).join('');
}

function renderLibrary() {
  const grid = document.getElementById('libraryGrid');
  const installed = GAMES.filter(g => downloads[g.id]?.status === 'done');
  if (!installed.length) {
    grid.innerHTML = '<div style="color:var(--grey);font-size:13px;grid-column:1/-1;padding:20px 0">Aucun jeu installé pour l\'instant.</div>';
    return;
  }
  grid.innerHTML = installed.map(g => `
    <div class="game-card" style="--c:${g.c}" onclick="showGame('${g.id}')">
      <img class="thumb" src="${g.thumbnail}" alt="${g.title}" onerror="this.style.background='#1a1e24'">
      <div class="info">
        <div class="title" style="color:${g.c}">${g.title}</div>
        <div class="year">${g.year} · ${g.client}</div>
        <div class="status">
          <div class="dot" style="background:var(--green)"></div>
          <span style="color:var(--green)">Installé</span>
        </div>
      </div>
      <div class="installed-bar" style="background:${g.c}"></div>
    </div>
  `).join('');
}

function updateInstalledCount() {
  const n = Object.values(downloads).filter(d => d.status === 'done').length;
  document.getElementById('installedCount').textContent = n;
}

/* ══ GAME DETAIL ══ */
function showGame(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;
  currentGame = g;
  showPage('game');

  const dl = downloads[id];
  const isDone = dl?.status === 'done';
  const isDownloading = dl?.status === 'downloading';

  const keysHtml = g.keys ? `
    <div class="dl-section">
      <h3>🔑 Clés multijoueur</h3>
      <div class="keys-grid">
        ${g.keys.map(k => `<button class="key-btn" style="--c:${g.c}" onclick="copyKey(this,'${k}')">${k}</button>`).join('')}
      </div>
    </div>` : '';

  const radminHtml = g.radmin ? `
    <div class="dl-section" style="border-color:rgba(255,59,48,.25)">
      <h3 style="color:#ff6b6b">🌐 Radmin VPN — Jouer en LAN</h3>
      <div class="steps" style="margin-bottom:12px">
        <div class="step"><div class="step-n">1</div><div class="step-t">Télécharge <a onclick="window.electronAPI.openExternal('https://www.radmin-vpn.com/')" style="color:var(--green);cursor:pointer">Radmin VPN</a></div></div>
        <div class="step"><div class="step-n">2</div><div class="step-t">Rejoindre un réseau → entre les infos ci-dessous</div></div>
      </div>
      <div style="display:flex;gap:10px">
        <button class="key-btn" style="flex:1;--c:#ff6b6b" onclick="copyKey(this,'${g.radmin.name}')">Réseau : ${g.radmin.name}</button>
        <button class="key-btn" style="flex:1;--c:#ff6b6b" onclick="copyKey(this,'${g.radmin.password}')">MDP : ${g.radmin.password}</button>
      </div>
    </div>` : '';

  const extraLinksHtml = g.extraLinks ? g.extraLinks.map(l =>
    `<button class="btn btn-secondary" onclick="window.electronAPI.openExternal('${l.url}')">${l.label}</button>`
  ).join('') : '';

  document.getElementById('gameContent').innerHTML = `
    <div class="game-hero">
      <img src="${g.thumbnail}" alt="${g.title}" onerror="this.style.display='none'">
      <div class="overlay">
        <div class="meta">
          <h1 style="color:${g.c}">${g.title}</h1>
          <div class="sub">${g.year} · ${g.client} · ${g.desc}</div>
          <div class="tags">
            ${g.req.map(r => `<span class="tag">${r}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    ${g.note ? `<div class="note note-warn">${g.note}</div>` : ''}

    <div class="dl-section">
      <h3>📥 Téléchargement</h3>
      <div class="dl-path">
        <input type="text" id="installPath" placeholder="Dossier d'installation..." value="${settings.defaultPath || 'C:\\AlterCOD'}\\${g.short}">
        <button class="btn btn-secondary" onclick="browsePath()">Parcourir</button>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        ${!isDone && !isDownloading ? `<button class="btn btn-primary" onclick="startDownload('${g.id}')" id="dlBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>
          Télécharger via Torrent
        </button>` : ''}
        ${isDownloading ? `<button class="btn btn-danger" onclick="stopDownload('${g.id}')">⏹ Annuler</button>` : ''}
        ${isDone ? `
          <button class="btn btn-play" onclick="launchGame('${g.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            JOUER
          </button>
          <button class="btn btn-secondary" onclick="openFolder('${g.id}')">📁 Dossier</button>
          <button class="btn btn-danger" onclick="removeGame('${g.id}')">🗑 Supprimer</button>
        ` : ''}
        ${extraLinksHtml}
      </div>
      <div class="progress-wrap ${isDownloading ? 'show' : ''}" id="progressWrap">
        <div class="progress-bar-bg"><div class="progress-bar-fill" id="progressFill" style="width:${dl?.progress || 0}%"></div></div>
        <div class="progress-info">
          <span id="progressStatus">${isDownloading ? 'Téléchargement...' : ''}</span>
          <span id="progressPct">${dl?.progress ? Math.round(dl.progress) + '%' : ''}</span>
        </div>
      </div>
    </div>

    <div class="dl-section">
      <h3>📋 Guide d'installation</h3>
      <div class="steps">
        ${g.steps.map((s, i) => `<div class="step"><div class="step-n">${i+1}</div><div class="step-t">${s}</div></div>`).join('')}
      </div>
    </div>

    ${keysHtml}
    ${radminHtml}
  `;
}

/* ══ DOWNLOAD (WebTorrent) ══ */
async function startDownload(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;

  const pathInput = document.getElementById('installPath');
  const installPath = pathInput ? pathInput.value : `${settings.defaultPath || 'C:\\AlterCOD'}\\${g.short}`;

  downloads[id] = { status: 'downloading', progress: 0, speed: 0, path: installPath };
  showGame(id); // re-render with progress UI

  showToast(`Démarrage du téléchargement de ${g.title}...`, 'info');
  updateDlBadge();

  try {
    // WebTorrent via require dans le renderer serait bloqué par contextIsolation
    // On simule la progression via l'URL du torrent ouvert dans qBittorrent
    window.electronAPI.openExternal(g.torrent);

    // Simulation progress (en attendant une vraie intégration torrent)
    simulateProgress(id, g);
  } catch(e) {
    showToast(`Erreur : ${e.message}`, 'error');
    delete downloads[id];
  }
}

function simulateProgress(id, g) {
  // Ouvre le torrent dans le client torrent par défaut
  // et simule une progression manuelle que l'utilisateur peut valider
  const wrap = document.getElementById('progressWrap');
  const fill = document.getElementById('progressFill');
  const pct  = document.getElementById('progressPct');
  const status = document.getElementById('progressStatus');

  if (wrap) wrap.classList.add('show');
  if (status) status.textContent = 'Torrent ouvert dans votre client torrent...';

  // Bouton "Marquer comme installé" apparaît
  const dlSection = wrap?.closest('.dl-section');
  if (dlSection) {
    const existing = dlSection.querySelector('#markDone');
    if (!existing) {
      const btn = document.createElement('button');
      btn.id = 'markDone';
      btn.className = 'btn btn-secondary';
      btn.style.marginTop = '12px';
      btn.innerHTML = '✅ Marquer comme installé';
      btn.onclick = () => markInstalled(id, g);
      dlSection.appendChild(btn);
    }
  }
}

function markInstalled(id, g) {
  const pathInput = document.getElementById('installPath');
  const installPath = pathInput ? pathInput.value : `${settings.defaultPath}\\${g.short}`;
  downloads[id] = { status: 'done', progress: 100, path: installPath };
  saveDownloads();
  updateInstalledCount();
  renderGamesGrid();
  showGame(id);
  showToast(`${g.title} marqué comme installé !`, 'success');
}

function stopDownload(id) {
  delete downloads[id];
  updateDlBadge();
  renderGamesGrid();
  showGame(id);
  showToast('Téléchargement annulé', 'info');
}

function removeGame(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;
  if (!confirm(`Supprimer ${g.title} de la bibliothèque ?`)) return;
  delete downloads[id];
  saveDownloads();
  updateInstalledCount();
  renderGamesGrid();
  showGame(id);
  showToast(`${g.title} retiré de la bibliothèque`, 'info');
}

function launchGame(id) {
  const dl = downloads[id];
  const g = GAMES.find(x => x.id === id);
  if (!dl || !g) return;
  const exePath = `${dl.path}\\${g.exe}`;
  window.electronAPI.checkGame(exePath).then(exists => {
    if (exists) {
      window.electronAPI.launchGame(exePath);
      showToast(`Lancement de ${g.title}...`, 'success');
    } else {
      showToast(`Executable introuvable : ${g.exe}. Vérifie le dossier d'installation.`, 'error');
    }
  });
}

function openFolder(id) {
  const dl = downloads[id];
  if (dl?.path) window.electronAPI.openFolder(dl.path);
}

/* ══ DOWNLOADS PAGE ══ */
function renderDownloadsPage() {
  const list = document.getElementById('dlList');
  const active = Object.entries(downloads).filter(([,d]) => d.status === 'downloading');
  if (!active.length) {
    list.innerHTML = '<div style="color:var(--grey);font-size:13px;padding:20px 0">Aucun téléchargement en cours.</div>';
    return;
  }
  list.innerHTML = active.map(([id, dl]) => {
    const g = GAMES.find(x => x.id === id);
    return `<div style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:16px 20px;margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <span style="font-weight:700;color:${g?.c||'var(--green)'}">${g?.title || id}</span>
        <button class="btn btn-danger" onclick="stopDownload('${id}')">Annuler</button>
      </div>
      <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${dl.progress||0}%;background:${g?.c||'var(--green)'}"></div></div>
      <div class="progress-info" style="margin-top:6px"><span>${dl.status}</span><span>${Math.round(dl.progress||0)}%</span></div>
    </div>`;
  }).join('');
}

function updateDlBadge() {
  const n = Object.values(downloads).filter(d => d.status === 'downloading').length;
  const badge = document.getElementById('dlBadge');
  badge.textContent = n;
  badge.style.display = n > 0 ? 'block' : 'none';
}

/* ══ HELPERS ══ */
async function browsePath() {
  const folder = await window.electronAPI.pickFolder();
  if (folder && currentGame) {
    const input = document.getElementById('installPath');
    if (input) input.value = `${folder}\\${currentGame.short}`;
  }
}

async function changeDefaultPath() {
  const folder = await window.electronAPI.pickFolder();
  if (folder) {
    settings.defaultPath = folder;
    window.electronAPI.saveSettings(settings);
    document.getElementById('defaultPathLabel').textContent = folder;
    showToast('Dossier par défaut mis à jour', 'success');
  }
}

function copyKey(btn, key) {
  navigator.clipboard.writeText(key).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copié !';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1500);
  });
}

function saveDownloads() {
  try { localStorage.setItem('altercod_downloads', JSON.stringify(downloads)); } catch(e) {}
}

function loadDownloads() {
  try { return JSON.parse(localStorage.getItem('altercod_downloads') || '{}'); } catch(e) { return {}; }
}

// Load saved state
downloads = loadDownloads();
renderGamesGrid();
updateInstalledCount();

/* ══ TOAST ══ */
let toastTimer;
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
