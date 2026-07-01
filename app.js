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
    {
        id: 1,
        name: '佐藤 美咲',
        nameRoma: 'Misaki Sato',
        age: 24,
        height: 168,
        size: '84/60/88',
        skills: '英語、ダンス、ピアノ',
        img: 1,
        pref: '東京都',
        station: '恵比寿駅',
        videoSelf: 'https://youtube.com/watch?v=misaki_self',
        videoAct: 'https://youtube.com/watch?v=misaki_act',
        videoOther: 'https://youtube.com/watch?v=misaki_dance',
        allergy: 'なし',
        allergyDetail: '',
        instagramUrl: 'https://instagram.com/misaki_sato',
        instagramFollowers: 15000,
        tiktokUrl: 'https://tiktok.com/@misaki_sato',
        tiktokFollowers: 32000,
        xUrl: 'https://x.com/misaki_sato',
        xFollowers: 8500
    },
    {
        id: 2,
        name: '田中 葵',
        nameRoma: 'Aoi Tanaka',
        age: 22,
        height: 172,
        size: '82/59/86',
        skills: 'バレエ10年、水泳',
        img: 2,
        pref: '神奈川県',
        station: '横浜駅',
        videoSelf: 'https://youtube.com/watch?v=aoi_self',
        videoAct: 'https://youtube.com/watch?v=aoi_act',
        videoOther: '',
        allergy: 'あり',
        allergyDetail: 'そばアレルギー、犬・猫アレルギー（重度ではありませんが、接触時は注意が必要です）',
        instagramUrl: 'https://instagram.com/aoi_tanaka',
        instagramFollowers: 24000,
        tiktokUrl: '',
        tiktokFollowers: null,
        xUrl: 'https://x.com/aoi_tanaka',
        xFollowers: 12000
    },
    {
        id: 3,
        name: '鈴木 健太',
        nameRoma: 'Kenta Suzuki',
        age: 27,
        height: 182,
        size: '—',
        skills: '格闘技、バイク',
        img: 3,
        pref: '千葉県',
        station: '浦安駅',
        videoSelf: 'https://youtube.com/watch?v=kenta_self',
        videoAct: '',
        videoOther: 'https://youtube.com/watch?v=kenta_action',
        allergy: 'なし',
        allergyDetail: '',
        instagramUrl: '',
        instagramFollowers: null,
        tiktokUrl: 'https://tiktok.com/@kenta_action',
        tiktokFollowers: 8500,
        xUrl: 'https://x.com/kenta_suzuki',
        xFollowers: 4500
    },
    {
        id: 4,
        name: '林 えみ',
        nameRoma: 'Emi Hayashi',
        age: 21,
        height: 165,
        size: '80/59/85',
        skills: '中国語、茶道',
        img: 4,
        pref: '埼玉県',
        station: '大宮駅',
        videoSelf: '',
        videoAct: 'https://youtube.com/watch?v=emi_act',
        videoOther: '',
        allergy: 'なし',
        allergyDetail: '',
        instagramUrl: 'https://instagram.com/emi_hayashi',
        instagramFollowers: 9800,
        tiktokUrl: 'https://tiktok.com/@emi_hayashi',
        tiktokFollowers: 15000,
        xUrl: '',
        xFollowers: null
    },
    {
        id: 5,
        name: '木村 彩',
        nameRoma: 'Aya Kimura',
        age: 26,
        height: 170,
        size: '85/61/89',
        skills: 'ボイストレーニング、ヨガ',
        img: 5,
        pref: '東京都',
        station: '中目黒駅',
        videoSelf: 'https://youtube.com/watch?v=aya_self',
        videoAct: 'https://youtube.com/watch?v=aya_act',
        videoOther: 'https://youtube.com/watch?v=aya_yoga',
        allergy: 'あり',
        allergyDetail: '甲殻類アレルギー（エビ・カニは摂取NG、出汁程度なら可）',
        instagramUrl: 'https://instagram.com/aya_kimura',
        instagramFollowers: 42000,
        tiktokUrl: '',
        tiktokFollowers: null,
        xUrl: 'https://x.com/aya_kimura',
        xFollowers: 18000
    },
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

    // 新規登録フォームのアレルギーラジオボタン制御
    document.querySelectorAll('input[name="reg-allergy"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const container = document.getElementById('reg-allergy-detail-container');
            if (!container) return;
            if (this.value === 'あり') {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
    });
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
    <div class="model-card" onclick="openModelDetailModal(${m.id})" title="${m.name}の詳細を見る">
      <img class="model-photo" src="${MODEL_IMAGES[m.img] || ''}" alt="${m.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
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

// ---- MODEL REGISTRATION MODAL ----
function openModelModal() {
    const form = document.getElementById('model-form');
    form.reset();
    // アレルギー詳細を閉じる
    const ac = document.getElementById('reg-allergy-detail-container');
    if (ac) ac.classList.remove('active');
    document.querySelectorAll('.upload-zone').forEach(z => z.classList.remove('uploaded'));
    document.getElementById('model-modal-overlay').classList.add('open');
}

function closeModelModal(e) {
    if (e && e.target !== document.getElementById('model-modal-overlay')) return;
    document.getElementById('model-modal-overlay').classList.remove('open');
}

function submitModel() {
    const name = document.getElementById('reg-name') ? document.getElementById('reg-name').value : '';
    if (!name) { showToast('⚠️ 氏名を入力してください'); return; }

    const nameRoma = (document.getElementById('reg-name-roma') || {}).value || '';
    const age = parseInt((document.getElementById('reg-age') || {}).value || '0');
    const height = parseInt((document.getElementById('reg-height') || {}).value || '0');
    const size = (document.getElementById('reg-size') || {}).value || '—';
    const skills = (document.getElementById('reg-skills') || {}).value || '';
    const pref = (document.getElementById('reg-pref') || {}).value || '';
    const station = (document.getElementById('reg-station') || {}).value || '';
    const videoSelf = (document.getElementById('reg-video-self') || {}).value || '';
    const videoAct = (document.getElementById('reg-video-act') || {}).value || '';
    const videoOther = (document.getElementById('reg-video-other') || {}).value || '';
    const allergyRadio = document.querySelector('input[name="reg-allergy"]:checked');
    const allergy = allergyRadio ? allergyRadio.value : 'なし';
    const allergyDetail = (document.getElementById('reg-allergy-detail') || {}).value || '';
    const instagramUrl = (document.getElementById('reg-instagram-url') || {}).value || '';
    const instagramFollowers = parseInt((document.getElementById('reg-instagram-followers') || {}).value || '0') || null;
    const tiktokUrl = (document.getElementById('reg-tiktok-url') || {}).value || '';
    const tiktokFollowers = parseInt((document.getElementById('reg-tiktok-followers') || {}).value || '0') || null;
    const xUrl = (document.getElementById('reg-x-url') || {}).value || '';
    const xFollowers = parseInt((document.getElementById('reg-x-followers') || {}).value || '0') || null;

    const newId = models.length > 0 ? Math.max(...models.map(m => m.id)) + 1 : 1;
    const newModel = {
        id: newId,
        name, nameRoma, age: age || 0, height: height || 0, size: size || '—', skills,
        img: null, // 画像アップロードは別途対応
        pref, station,
        videoSelf, videoAct, videoOther,
        allergy, allergyDetail,
        instagramUrl, instagramFollowers,
        tiktokUrl, tiktokFollowers,
        xUrl, xFollowers
    };

    models.push(newModel);
    renderModels();
    document.getElementById('model-modal-overlay').classList.remove('open');
    showToast('✅ モデルコンポジを登録しました！', 'success');
    // サイドバーバッジ更新
    const badge = document.querySelector('.sidebar-item[data-page="models"] .sidebar-badge');
    if (badge) badge.textContent = models.length;
}

// ---- MODEL DETAIL MODAL ----
let currentDetailModelId = null;

function formatFollowers(n) {
    if (!n) return '—';
    if (n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, '') + '万';
    return n.toLocaleString();
}

function openModelDetailModal(id) {
    currentDetailModelId = id;
    const overlay = document.getElementById('model-detail-overlay');
    if (!overlay) return;
    overlay.classList.add('open');
    renderModelDetailView(id);
}

function closeModelDetailModal(e) {
    const overlay = document.getElementById('model-detail-overlay');
    if (e && e.target !== overlay) return;
    overlay.classList.remove('open');
}

function renderModelDetailView(id) {
    const m = models.find(x => x.id === id);
    if (!m) return;
    const container = document.getElementById('model-detail-content');

    const videoLinks = [
        { label: '自己紹介', url: m.videoSelf },
        { label: '演技', url: m.videoAct },
        { label: 'ダンス・その他', url: m.videoOther },
    ].filter(v => v.url);

    const snsItems = [
        { name: 'Instagram', url: m.instagramUrl, followers: m.instagramFollowers, color: '#e1306c' },
        { name: 'TikTok', url: m.tiktokUrl, followers: m.tiktokFollowers, color: '#000000' },
        { name: 'X', url: m.xUrl, followers: m.xFollowers, color: '#1da1f2' },
    ].filter(s => s.url || s.followers);

    container.innerHTML = `
    <div class="mdm-header">
      <div class="mdm-photo-wrap">
        <img class="mdm-photo" src="${MODEL_IMAGES[m.img] || ''}" alt="${m.name}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="mdm-photo-placeholder">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="22" r="11" stroke="#94a3b8" stroke-width="2"/><path d="M7 52C7 41 16.4 32 28 32C39.6 32 49 41 49 52" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>
      <div class="mdm-identity">
        <div class="mdm-name">${m.name}</div>
        <div class="mdm-name-roma">${m.nameRoma || ''}</div>
        ${m.pref || m.station ? `<div class="mdm-location">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1C4.015 1 2 3.015 2 5.5C2 8.985 6.5 12 6.5 12C6.5 12 11 8.985 11 5.5C11 3.015 8.985 1 6.5 1Z" stroke="currentColor" stroke-width="1.2"/><circle cx="6.5" cy="5.5" r="1.5" stroke="currentColor" stroke-width="1.2"/></svg>
          ${[m.pref, m.station].filter(Boolean).join(' / ')}
        </div>` : ''}
      </div>
      <button class="mdm-edit-btn" onclick="renderModelDetailEditForm(${m.id})">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M10.5 2.5L12.5 4.5L4.5 12.5H2.5V10.5L10.5 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        プロフィール編集
      </button>
    </div>

    <div class="mdm-body">
      <div class="mdm-section-title">基本プロフィール</div>
      <div class="mdm-info-grid">
        <div class="mdm-info-item"><div class="mdm-info-label">年齢</div><div class="mdm-info-value">${m.age || '—'}歳</div></div>
        <div class="mdm-info-item"><div class="mdm-info-label">身長</div><div class="mdm-info-value">${m.height || '—'}cm</div></div>
        <div class="mdm-info-item"><div class="mdm-info-label">スリーサイズ</div><div class="mdm-info-value">${m.size || '—'}</div></div>
        <div class="mdm-info-item"><div class="mdm-info-label">特技・スキル</div><div class="mdm-info-value">${m.skills || '—'}</div></div>
      </div>

      ${videoLinks.length > 0 ? `
      <div class="mdm-section-title" style="margin-top:24px">動画資料</div>
      <div class="mdm-video-list">
        ${videoLinks.map(v => `
          <a href="${v.url}" target="_blank" class="mdm-video-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polygon points="3,2 11,7 3,12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/></svg>
            ${v.label}動画を見る
          </a>
        `).join('')}
      </div>
      ` : ''}

      <div class="mdm-section-title" style="margin-top:24px">アレルギー情報</div>
      <div class="mdm-allergy-badge ${m.allergy === 'あり' ? 'allergy--yes' : 'allergy--none'}">
        ${m.allergy === 'あり' ? '⚠️ あり' : '✅ なし'}
      </div>
      ${m.allergy === 'あり' && m.allergyDetail ? `<p class="mdm-allergy-detail">${m.allergyDetail}</p>` : ''}

      ${snsItems.length > 0 ? `
      <div class="mdm-section-title" style="margin-top:24px">SNSアカウント</div>
      <div class="mdm-sns-list">
        ${snsItems.map(s => `
          <div class="mdm-sns-item">
            <span class="mdm-sns-name" style="color:${s.color}">${s.name}</span>
            <span class="mdm-sns-followers">${formatFollowers(s.followers)} フォロワー</span>
            ${s.url ? `<a href="${s.url}" target="_blank" class="mdm-sns-link">プロフィールを見る →</a>` : ''}
          </div>
        `).join('')}
      </div>
      ` : ''}
    </div>
  `;
}

function renderModelDetailEditForm(id) {
    const m = models.find(x => x.id === id);
    if (!m) return;
    const container = document.getElementById('model-detail-content');
    const prefOptions = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'];

    container.innerHTML = `
    <div class="mdm-edit-header">
      <div class="mdm-edit-title">プロフィール編集</div>
      <div style="display:flex;gap:10px;align-items:center;">
        <button class="btn btn--ghost" onclick="renderModelDetailView(${m.id})" style="font-size:13px;padding:8px 16px;">キャンセル</button>
        <button class="btn btn--primary" onclick="saveModelDetail(${m.id})" style="font-size:13px;padding:8px 16px;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          保存する
        </button>
      </div>
    </div>
    <div class="mdm-edit-body">
      <div class="mdm-form-section-title">基本情報</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">氏名 <span class="required">*</span></label><input id="edit-name" class="form-input" value="${m.name || ''}"></div>
        <div class="form-group"><label class="form-label">ローマ字</label><input id="edit-name-roma" class="form-input" value="${m.nameRoma || ''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">年齢</label><input id="edit-age" type="number" class="form-input" value="${m.age || ''}"></div>
        <div class="form-group"><label class="form-label">身長 (cm)</label><input id="edit-height" type="number" class="form-input" value="${m.height || ''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">スリーサイズ (B/W/H)</label><input id="edit-size" class="form-input" value="${m.size || ''}"></div>
      </div>
      <div class="form-group"><label class="form-label">特技・スキル</label><textarea id="edit-skills" class="form-textarea" rows="2">${m.skills || ''}</textarea></div>

      <div class="mdm-form-section-title" style="margin-top:20px">在住地・最寄り駅</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">在住都道府県</label>
          <select id="edit-pref" class="form-input">
            <option value="">選択してください</option>
            ${prefOptions.map(p => `<option value="${p}" ${m.pref === p ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label class="form-label">最寄り駅</label><input id="edit-station" class="form-input" value="${m.station || ''}"></div>
      </div>

      <div class="mdm-form-section-title" style="margin-top:20px">動画資料</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">自己紹介動画URL</label><input id="edit-video-self" type="url" class="form-input" value="${m.videoSelf || ''}"></div>
        <div class="form-group"><label class="form-label">演技動画URL</label><input id="edit-video-act" type="url" class="form-input" value="${m.videoAct || ''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">ダンス・その他動画URL</label><input id="edit-video-other" type="url" class="form-input" value="${m.videoOther || ''}"></div>
      </div>

      <div class="mdm-form-section-title" style="margin-top:20px">アレルギー情報</div>
      <div class="form-group">
        <label class="form-label">アレルギーの有無</label>
        <div style="display:flex;gap:24px;margin-top:6px;align-items:center;">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:var(--text-secondary);font-size:14px;">
            <input type="radio" name="edit-allergy" value="なし" ${m.allergy !== 'あり' ? 'checked' : ''} style="accent-color:var(--cyan-500);width:18px;height:18px;" onchange="toggleEditAllergy(this)"> なし
          </label>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;color:var(--text-secondary);font-size:14px;">
            <input type="radio" name="edit-allergy" value="あり" ${m.allergy === 'あり' ? 'checked' : ''} style="accent-color:var(--cyan-500);width:18px;height:18px;" onchange="toggleEditAllergy(this)"> あり
          </label>
        </div>
      </div>
      <div class="allergy-detail-container${m.allergy === 'あり' ? ' active' : ''}" id="edit-allergy-detail-container">
        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">アレルギー詳細</label>
          <textarea id="edit-allergy-detail" class="form-textarea" rows="2">${m.allergyDetail || ''}</textarea>
        </div>
      </div>

      <div class="mdm-form-section-title" style="margin-top:20px">SNSアカウント情報</div>
      <div class="sns-row">
        <div class="sns-group">
          <div style="font-size:13px;font-weight:600;color:#e1306c;margin-bottom:8px;">Instagram</div>
          <div class="sns-inputs">
            <input type="url" id="edit-instagram-url" class="form-input" placeholder="アカウントURL" value="${m.instagramUrl || ''}">
            <input type="number" id="edit-instagram-followers" class="form-input" placeholder="フォロワー数" min="0" value="${m.instagramFollowers || ''}">
          </div>
        </div>
        <div class="sns-group">
          <div style="font-size:13px;font-weight:600;color:#000;margin-bottom:8px;">TikTok</div>
          <div class="sns-inputs">
            <input type="url" id="edit-tiktok-url" class="form-input" placeholder="アカウントURL" value="${m.tiktokUrl || ''}">
            <input type="number" id="edit-tiktok-followers" class="form-input" placeholder="フォロワー数" min="0" value="${m.tiktokFollowers || ''}">
          </div>
        </div>
        <div class="sns-group">
          <div style="font-size:13px;font-weight:600;color:#1da1f2;margin-bottom:8px;">X (旧Twitter)</div>
          <div class="sns-inputs">
            <input type="url" id="edit-x-url" class="form-input" placeholder="アカウントURL" value="${m.xUrl || ''}">
            <input type="number" id="edit-x-followers" class="form-input" placeholder="フォロワー数" min="0" value="${m.xFollowers || ''}">
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleEditAllergy(radio) {
    const container = document.getElementById('edit-allergy-detail-container');
    if (!container) return;
    if (radio.value === 'あり') {
        container.classList.add('active');
    } else {
        container.classList.remove('active');
    }
}

function saveModelDetail(id) {
    const idx = models.findIndex(x => x.id === id);
    if (idx < 0) return;

    const get = (elId, fallback = '') => {
        const el = document.getElementById(elId);
        return el ? el.value : fallback;
    };

    const allergyRadio = document.querySelector('input[name="edit-allergy"]:checked');

    models[idx] = {
        ...models[idx],
        name: get('edit-name') || models[idx].name,
        nameRoma: get('edit-name-roma'),
        age: parseInt(get('edit-age')) || models[idx].age,
        height: parseInt(get('edit-height')) || models[idx].height,
        size: get('edit-size') || '—',
        skills: get('edit-skills'),
        pref: get('edit-pref'),
        station: get('edit-station'),
        videoSelf: get('edit-video-self'),
        videoAct: get('edit-video-act'),
        videoOther: get('edit-video-other'),
        allergy: allergyRadio ? allergyRadio.value : models[idx].allergy,
        allergyDetail: get('edit-allergy-detail'),
        instagramUrl: get('edit-instagram-url'),
        instagramFollowers: parseInt(get('edit-instagram-followers')) || null,
        tiktokUrl: get('edit-tiktok-url'),
        tiktokFollowers: parseInt(get('edit-tiktok-followers')) || null,
        xUrl: get('edit-x-url'),
        xFollowers: parseInt(get('edit-x-followers')) || null,
    };

    renderModels();
    renderModelDetailView(id);
    showToast('✅ プロフィールを更新しました！', 'success');
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

function openResetModal(e) {
    if (e) e.preventDefault();
    const overlay = document.getElementById('reset-modal-overlay');
    if (!overlay) return;
    overlay.classList.add('open');
}

function closeResetModal(e) {
    if (e && e.target !== document.getElementById('reset-modal-overlay')) return;
    const overlay = document.getElementById('reset-modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
}

function sendResetEmail() {
    const emailInput = document.getElementById('reset-email');
    const email = emailInput ? emailInput.value.trim() : '';
    if (!email) {
        showToast('⚠️ メールアドレスを入力してください');
        return;
    }

    closeResetModal();
    showToast('✉️ パスワード再設定メールを送信しました', 'success');

    const resetToken = Math.random().toString(36).substring(2, 15);
    const resetUrl = `${window.location.origin}${window.location.pathname}?reset_token=${resetToken}`;
    console.log(`[Password Reset Simulation]\nTo: ${email}\nLink: ${resetUrl}`);
}

// ---- TOAST ----
function showToast(msg, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = `toast${type ? ` toast--${type}` : ''} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}
