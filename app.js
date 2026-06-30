// ============================================================
// NEXUS TALENT - Agency Platform App Logic
// ============================================================

// ---- DATA ----
const MODEL_IMAGES = {
    1: 'model_01.png',
    2: 'model_02.png',
    3: 'model_03.png',
    4: 'model_04.png',
    5: 'model_05.png',
    6: 'model_06.png',
};

const models = [
    { id: 1, name: '佐藤 美咲', nameRoma: 'Misaki Sato', age: 24, height: 168, size: '84/60/88', skills: '英語、ダンス、ピアノ', img: 1 },
    { id: 2, name: '田中 葵', nameRoma: 'Aoi Tanaka', age: 22, height: 172, size: '82/59/86', skills: 'バレエ10年、水泳', img: 2 },
    { id: 3, name: '鈴木 健太', nameRoma: 'Kenta Suzuki', age: 27, height: 182, size: '—', skills: '格闘技、バイク', img: 3 },
    { id: 4, name: '林 えみ', nameRoma: 'Emi Hayashi', age: 21, height: 165, size: '80/59/85', skills: '中国語、茶道', img: 4 },
    { id: 5, name: '木村 彩', nameRoma: 'Aya Kimura', age: 26, height: 170, size: '85/61/89', skills: 'ボイストレーニング、ヨガ', img: 5 },
];

const projects = [
    {
        id: 1, isNew: true, urgent: false,
        client: '株式会社ビューティーコスメ',
        title: '春の新作コスメ ブランドイメージ広告',
        genre: '広告・CM',
        date: '2026年7月15日〜16日',
        location: '東京都港区 撮影スタジオ',
        price: '¥150,000', priceNote: '/日',
        deadline: '6月30日',
        isUrgent: false,
        detail: 'ブランドの春夏コレクション向けビジュアル撮影。ナチュラル系メイクで清潔感のある女性モデルを募集しています。',
        conditions: '女性 / 20〜28歳 / 身長163cm以上 / 経験者歓迎',
        media: '雑誌・WEBサイト・交通広告',
        img: 'project_01.png',
    },
    {
        id: 2, isNew: true, urgent: true,
        client: 'テレビ東京',
        title: 'ドラマ「夜の海岸線」エキストラ募集',
        genre: '映像・メディア',
        date: '2026年7月3日〜5日',
        location: '神奈川県湘南エリア',
        price: '¥25,000', priceNote: '/日',
        deadline: '6月25日',
        isUrgent: true,
        detail: '夏ドラマのビーチシーン、海水浴客役のエキストラを複数名募集。自然な演技ができる方歓迎。',
        conditions: '男女不問 / 18歳以上 / 水着着用OK / 日焼け問題ない方',
        media: 'テレビ東京 系列ドラマ',
        img: 'project_02.png',
    },
    {
        id: 3, isNew: false, urgent: false,
        client: 'ファッションブランド AZUL',
        title: '秋冬カタログ 全身スタイリング撮影',
        genre: 'ファッション',
        date: '2026年8月10日〜12日（3日間）',
        location: '東京都渋谷区 スタジオ',
        price: '¥80,000', priceNote: '/日',
        deadline: '7月20日',
        isUrgent: false,
        detail: 'ECサイトおよびカタログ向けの秋冬ウェア着用モデル。クリーンなスタイルが得意な方を希望。',
        conditions: '女性 / 21〜30歳 / 身長165〜172cm / サイズ38（M）',
        media: 'カタログ・ECサイト',
        img: 'project_03.png',
    },
    {
        id: 4, isNew: true, urgent: false,
        client: 'ソフトバンク株式会社',
        title: 'スマートフォン新機種 テレビCM出演',
        genre: '広告・CM',
        date: '2026年7月22日〜24日',
        location: '東京都品川区 撮影スタジオ',
        price: '¥300,000', priceNote: '/本',
        deadline: '7月1日',
        isUrgent: false,
        detail: '次世代スマートフォンのテレビCM出演者募集。家族感・親しみやすさを演出できる方。',
        conditions: '男女不問 / 25〜40歳 / 明るくフレンドリーな雰囲気',
        media: 'テレビCM（全国放映）',
        img: 'project_04.png',
    },
    {
        id: 5, isNew: false, urgent: false,
        client: 'イベント会社 GRAND',
        title: '東京モーターショー コンパニオンスタッフ',
        genre: '現場サポート',
        date: '2026年8月1日〜8月5日（5日間）',
        location: '東京ビッグサイト',
        price: '¥20,000', priceNote: '/日',
        deadline: '7月15日',
        isUrgent: false,
        detail: '大型モーターショーのブースコンパニオン。来場者へのブランドPRおよびノベルティ配布。',
        conditions: '女性 / 20〜30歳 / 身長165cm以上 / 接客経験あれば尚可',
        media: '自動車メーカーブース各社',
        img: 'project_05.png',
    },
    {
        id: 6, isNew: false, urgent: false,
        client: '食品メーカー ニチレイ',
        title: '夏限定アイスクリームWEB動画広告',
        genre: 'WEB',
        date: '2026年7月8日',
        location: '大阪市北区 撮影スタジオ',
        price: '¥60,000', priceNote: '/日',
        deadline: '7月2日',
        isUrgent: false,
        detail: 'SNS・YouTube向けのWEB限定動画広告。明るくカジュアルな雰囲気で商品を楽しむ演技。',
        conditions: '男女不問 / 18〜25歳 / 笑顔が自然な方',
        media: 'YouTube・Instagram・TikTok',
        img: 'project_06.png',
    },
];

const entries = {
    active: [
        { id: 1, projectTitle: '春の新作コスメ ブランドイメージ広告', client: '株式会社ビューティーコスメ', models: [1, 2], status: '書類選考中', statusKey: 'review', progress: 25, steps: [1, 0, 0, 0], date: '2026/06/20' },
        { id: 2, projectTitle: '秋冬カタログ 全身スタイリング撮影', client: 'ファッションブランド AZUL', models: [2], status: 'ショートリスト入り', statusKey: 'shortlist', progress: 50, steps: [1, 1, 0, 0], date: '2026/06/18' },
        { id: 3, projectTitle: 'スマートフォン新機種 テレビCM出演', client: 'ソフトバンク株式会社', models: [3, 6], status: '最終選考中', statusKey: 'final', progress: 75, steps: [1, 1, 1, 0], date: '2026/06/15' },
        { id: 4, projectTitle: '夏限定アイスクリームWEB動画広告', client: '食品メーカー ニチレイ', models: [4], status: '書類選考中', statusKey: 'review', progress: 25, steps: [1, 0, 0, 0], date: '2026/06/22' },
        { id: 5, projectTitle: 'ドラマ「夜の海岸線」エキストラ募集', client: 'テレビ東京', models: [1, 4, 5], status: 'ショートリスト入り', statusKey: 'shortlist', progress: 50, steps: [1, 1, 0, 0], date: '2026/06/21' },
    ],
    inProgress: [
        { id: 6, projectTitle: '東京モーターショー コンパニオンスタッフ', client: 'イベント会社 GRAND', models: [2, 5], status: '稼働中', statusKey: 'active', progress: 60, date: '2026/08/01〜08/05' },
        { id: 7, projectTitle: '春の美容クリニック体験広告', client: 'スキンケアセンター横浜', models: [1], status: '稼働中', statusKey: 'active', progress: 80, date: '2026/06/24〜06/30' },
        { id: 8, projectTitle: 'オンラインショッピング新春セール動画', client: 'Amazon Japan', models: [3], status: '稼働中', statusKey: 'active', progress: 40, date: '2026/06/20〜07/05' },
    ],
    completed: [
        { id: 9, projectTitle: '大手銀行ポスタービジュアル撮影', client: 'みずほ銀行', models: [5], status: '完了', statusKey: 'done', progress: 100, date: '2026/05/15' },
        { id: 10, projectTitle: 'スポーツブランド夏コレクション', client: 'ASICS', models: [3, 6], status: '完了', statusKey: 'done', progress: 100, date: '2026/05/10' },
        { id: 11, projectTitle: '映画「ブルーサマー」プロモーション', client: '東宝', models: [1, 2], status: '完了', statusKey: 'done', progress: 100, date: '2026/04/28' },
        { id: 12, projectTitle: '化粧品会社ブランドリニューアル', client: '資生堂', models: [5], status: '完了', statusKey: 'done', progress: 100, date: '2026/04/20' },
    ],
};

// ---- STATE ----
let activeFilter = 'all';
let openProjectId = null;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    renderProjects();
    renderModels();
    renderEntries();
});

// ---- LOGIN ----
function handleLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('login-btn');
    btn.innerHTML = '<span>ログイン中...</span>';
    btn.disabled = true;
    setTimeout(() => {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('app-screen').classList.add('active');
        showPage('projects');
    }, 800);
}

function logout() {
    document.getElementById('app-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
    const btn = document.getElementById('login-btn');
    btn.innerHTML = '<span>ログイン</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    btn.disabled = false;
}

// ---- NAVIGATION ----
function toggleMobileMenu() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('mobile-sidebar-overlay').classList.toggle('active');
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
    document.querySelector(`.sidebar-item[data-page="${page}"]`).classList.add('active');
    
    // モバイルの場合はドロワーを閉じる
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('mobile-sidebar-overlay').classList.remove('active');
}

// ---- PROJECT RENDER ----
function renderProjects(filter = {}) {
    const grid = document.getElementById('project-grid');
    const keyword = (filter.keyword || '').toLowerCase();
    const genre = filter.genre || 'all';
    const filtered = projects.filter(p => {
        if (genre !== 'all' && p.genre !== genre) return false;
        if (keyword && !p.title.toLowerCase().includes(keyword) && !p.client.toLowerCase().includes(keyword)) return false;
        return true;
    });

    grid.innerHTML = filtered.map(p => `
    <div class="project-card" onclick="openProjectModal(${p.id})" id="proj-card-${p.id}">
      ${p.img ? `
      <div class="card-image-wrap">
        <img class="card-image" src="${p.img}" alt="${p.title}" onerror="this.style.display='none'">
      </div>
      ` : ''}
      <div class="card-body">
        <div class="card-top">
          <div class="card-badges">
            ${p.isNew ? '<span class="badge badge--new">NEW</span>' : ''}
            ${p.isUrgent ? '<span class="badge badge--urgent">〆切間近</span>' : ''}
            <span class="badge badge--genre">${p.genre}</span>
          </div>
        </div>
        <div class="card-client">${p.client}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-meta">
          <div class="card-meta-row">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="2" width="11" height="10" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 1V3M9 1V3M1 5H12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            ${p.date}
          </div>
          <div class="card-meta-row">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1C4.015 1 2 3.015 2 5.5C2 8.985 6.5 12 6.5 12C6.5 12 11 8.985 11 5.5C11 3.015 8.985 1 6.5 1Z" stroke="currentColor" stroke-width="1.2"/><circle cx="6.5" cy="5.5" r="1.5" stroke="currentColor" stroke-width="1.2"/></svg>
            ${p.location}
          </div>
        </div>
        <div class="card-divider"></div>
        <div class="card-footer">
          <div class="card-price">${p.price}<span>${p.priceNote}</span></div>
          <div class="card-deadline ${p.isUrgent ? 'urgent' : ''}">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.2"/><path d="M5.5 3V5.5L7 7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            締切: ${p.deadline}
          </div>
        </div>
      </div>
    </div>
  `).join('');

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted); padding: 40px; text-align:center;">条件に一致する案件が見つかりませんでした。</p>';
    }
}

function filterProjects() {
    const keyword = document.getElementById('project-search').value;
    renderProjects({ keyword, genre: activeFilter });
}

function filterByTag(el, genre) {
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    activeFilter = genre;
    renderProjects({ keyword: document.getElementById('project-search').value, genre });
}

// ---- PROJECT MODAL ----
function openProjectModal(id) {
    openProjectId = id;
    const p = projects.find(x => x.id === id);
    if (!p) return;
    const content = document.getElementById('project-modal-content');
    content.innerHTML = `
    <div class="project-modal-genre"><span class="badge badge--genre">${p.genre}</span>${p.isNew ? ' <span class="badge badge--new">NEW</span>' : ''}</div>
    <div class="project-modal-title">${p.title}</div>
    <div class="project-modal-client">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="3" width="11" height="9" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 3V2C4 1.448 4.448 1 5 1H8C8.552 1 9 1.448 9 2V3" stroke="currentColor" stroke-width="1.2"/></svg>
      ${p.client}
    </div>
    <div class="project-modal-grid">
      <div class="project-modal-info-item">
        <div class="project-modal-info-label">撮影日程</div>
        <div class="project-modal-info-value">${p.date}</div>
      </div>
      <div class="project-modal-info-item">
        <div class="project-modal-info-label">場所</div>
        <div class="project-modal-info-value">${p.location}</div>
      </div>
      <div class="project-modal-info-item">
        <div class="project-modal-info-label">ギャラ/単価</div>
        <div class="project-modal-info-value" style="color:var(--cyan-500)">${p.price}<span style="font-size:11px; color:var(--text-muted)">${p.priceNote}</span></div>
      </div>
      <div class="project-modal-info-item">
        <div class="project-modal-info-label">エントリー締切</div>
        <div class="project-modal-info-value" style="${p.isUrgent ? 'color:#ff9060' : ''}">${p.deadline}</div>
      </div>
    </div>
    <div class="project-modal-section-title">案件詳細</div>
    <div class="project-modal-text">${p.detail}</div>
    <div class="project-modal-divider"></div>
    <div class="project-modal-section-title">募集条件</div>
    <div class="project-modal-text">${p.conditions}</div>
    <div class="project-modal-section-title">掲載媒体</div>
    <div class="project-modal-text">${p.media}</div>
    <button class="project-modal-entry-btn" onclick="openEntryFromProject(${p.id})">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9H15M10 4L15 9L10 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      この案件にエントリーする
    </button>
  `;
    document.getElementById('project-modal-overlay').classList.add('open');
}

function closeProjectModal(e) {
    if (e && e.target !== document.getElementById('project-modal-overlay')) return;
    document.getElementById('project-modal-overlay').classList.remove('open');
}

// ---- ENTRY FROM PROJECT ----
function openEntryFromProject(projectId) {
    closeProjectModal();
    setTimeout(() => {
        const p = projects.find(x => x.id === projectId);
        document.getElementById('entry-project-title').textContent = p ? p.title : '';
        renderModelSelectList();
        document.getElementById('entry-modal-overlay').classList.add('open');
    }, 200);
}

function closeEntryModal(e) {
    if (e && e.target !== document.getElementById('entry-modal-overlay')) return;
    document.getElementById('entry-modal-overlay').classList.remove('open');
}

function renderModelSelectList() {
    const list = document.getElementById('model-select-list');
    list.innerHTML = models.map(m => `
    <div class="model-select-item" onclick="toggleModelSelect(this)" id="model-sel-${m.id}">
      <input type="checkbox" onclick="event.stopPropagation()">
      <img class="model-select-avatar" src="${MODEL_IMAGES[m.img]}" onerror="this.style.background='var(--surface-3)'; this.src=''" alt="${m.name}">
      <div class="model-select-info">
        <div class="model-select-name">${m.name}</div>
        <div class="model-select-detail">${m.age}歳 / ${m.height}cm</div>
      </div>
    </div>
  `).join('');
}

function toggleModelSelect(el) {
    el.classList.toggle('selected');
    const cb = el.querySelector('input[type="checkbox"]');
    cb.checked = el.classList.contains('selected');
}

function submitEntry() {
    const selected = document.querySelectorAll('.model-select-item.selected');
    if (selected.length === 0) {
        showToast('⚠️ モデルを1名以上選択してください');
        return;
    }
    document.getElementById('entry-modal-overlay').classList.remove('open');
    showToast('✅ エントリーが完了しました！', 'success');
}

// ---- MODEL GRID ----
function renderModels() {
    const grid = document.getElementById('model-grid');
    grid.innerHTML = models.map(m => `
    <div class="model-card">
      <img class="model-photo" src="${MODEL_IMAGES[m.img]}" alt="${m.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div class="model-photo-placeholder" style="display:none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="16" r="8" stroke="#4a5a88" stroke-width="1.5"/><path d="M6 38C6 30 12.268 24 20 24C27.732 24 34 30 34 38" stroke="#4a5a88" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div class="model-info">
        <div class="model-name">${m.name}</div>
        <div class="model-stats">
          <div class="model-stat"><span class="model-stat-label">年齢</span> ${m.age}歳</div>
          <div class="model-stat"><span class="model-stat-label">身長</span> ${m.height}cm</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- MODEL MODAL ----
function openModelModal() {
    document.getElementById('model-form').reset();
    document.querySelectorAll('.upload-zone').forEach(z => z.classList.remove('uploaded'));
    document.getElementById('model-modal-overlay').classList.add('open');
}

function closeModelModal(e) {
    if (e && e.target !== document.getElementById('model-modal-overlay')) return;
    document.getElementById('model-modal-overlay').classList.remove('open');
}

function submitModel() {
    const name = document.querySelector('#model-form input[placeholder="山田 花子"]').value;
    if (!name) { showToast('⚠️ 氏名を入力してください'); return; }
    document.getElementById('model-modal-overlay').classList.remove('open');
    showToast('✅ モデルコンポジを登録しました！', 'success');
}

// ---- FILE UPLOAD UX ----
function triggerUpload(zone) {
    zone.querySelector('.upload-input').click();
}
function onDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}
function onDrop(e, zone) {
    e.preventDefault();
    zone.classList.remove('drag-over');
    if (e.dataTransfer.files.length) {
        zone.classList.add('uploaded');
        zone.querySelector('.upload-sub').textContent = e.dataTransfer.files[0].name;
    }
}
document.addEventListener('dragleave', e => {
    if (e.currentTarget.classList) e.currentTarget.classList.remove('drag-over');
});

// ---- ENTRIES ----
function renderEntries() {
    renderEntryList('entry-active-list', entries.active);
    renderEntryList('entry-progress-list', entries.inProgress);
    renderEntryList('entry-completed-list', entries.completed);
}

const statusLabels = {
    review: '書類選考中',
    shortlist: 'ショートリスト入り',
    final: '最終選考中',
    active: '稼働中',
    done: '完了',
};

function renderEntryList(containerId, list) {
    const el = document.getElementById(containerId);
    const stepLabels = ['エントリー', '書類選考', '最終選考', '確定'];
    el.innerHTML = list.map(e => {
        const entryModels = e.models.map(id => models.find(m => m.id === id)).filter(Boolean);
        const steps = e.steps || [1, 1, 1, 1].slice(0, 4).map((_, i) => e.progress >= (i + 1) * 25 ? 1 : 0);
        return `
      <div class="entry-card">
        <div class="entry-card-header">
          <div class="entry-card-main">
            <div class="entry-project-title">${e.projectTitle}</div>
            <div class="entry-client">${e.client}</div>
          </div>
          <span class="entry-status-badge status--${e.statusKey}">${statusLabels[e.statusKey] || e.status}</span>
        </div>
        <div class="entry-models">
          ${entryModels.map(m => `
            <div class="entry-model-chip">
              <div class="entry-model-avatar">${m.name.charAt(0)}</div>
              ${m.name}
            </div>
          `).join('')}
        </div>
        ${e.statusKey !== 'done' ? `
        <div class="entry-progress">
          <div class="progress-header">
            <span class="progress-label">選考進捗</span>
            <span class="progress-pct">${e.progress}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width:${e.progress}%"></div>
          </div>
          <div class="progress-steps">
            ${(e.steps || []).map((s, i) => `<div class="progress-step ${s === 1 ? (i === (e.steps.lastIndexOf(1)) ? 'current' : 'done') : ''}"></div>`).join('')}
          </div>
        </div>` : ''}
        <div class="entry-footer">
          <span>エントリー日: ${e.date}</span>
          ${e.statusKey === 'done' ? '<span style="color:#4ade80">✓ 正常終了</span>' : '<span>担当: 田中マネージャー</span>'}
        </div>
      </div>
    `;
    }).join('');
}

// ---- TAB SWITCH ----
function switchTab(el, panelId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById(panelId).classList.add('active');
}

// ---- TOAST ----
function showToast(msg, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = `toast${type ? ` toast--${type}` : ''} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}
