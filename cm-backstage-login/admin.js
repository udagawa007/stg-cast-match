// Admin Dashboard Logic

let dbData = [
  {
    id: 1,
    isNew: true, // 1: 🔴
    date: '2026/06/25', // 2: 受信日
    client: '株式会社ビューティーコスメ', // 3: クライアント名
    genre: '広告・CM', // 4: 案件ジャンル
    content: '春の新作コスメ ブランドイメージ広告', // 5: 案件内容
    conditions: '女性 / 20〜28歳 / 身長163cm以上', // 6: 条件
    schedule: '2026年7月15日〜16日', // 7: 日程
    location: '東京都港区 撮影スタジオ', // 8: 場所
    media: '雑誌・WEBサイト・交通広告', // 9: 媒体
    price: '¥150,000 /日', // 10: 単価
    deadline: '6月30日', // 11: 締切日
    status: '', // 12: ステータス (未展開)
    textOriginal: '【ビューティーコスメ案件のご案内】\n日程: 7/15-16\n応募はこちら: (フォーム生成時に自動挿入されます)\nよろしくお願いします。', // 13: 展開文章
    formUrl: '', // 14: 展開用フォーム
    sheetUrl: '', // 15: エントリーシート
    isPublished: false // 16: フロント公開設定
  },
  {
    id: 2,
    isNew: true,
    date: '2026/06/24',
    client: 'テレビ東京',
    genre: '映像・メディア',
    content: 'ドラマ「夜の海岸線」エキストラ募集',
    conditions: '男女不問 / 18歳以上 / 水着着用OK',
    schedule: '2026年7月3日〜5日',
    location: '神奈川県湘南エリア',
    media: 'テレビ東京 系列ドラマ',
    price: '¥25,000 /日',
    deadline: '6月25日',
    status: '',
    textOriginal: '【テレ東ドラマ エキストラ】\n海辺での撮影です。\n(フォーム生成時に自動挿入されます)',
    formUrl: '',
    sheetUrl: '',
    isPublished: false
  },
  {
    id: 3,
    isNew: false,
    date: '2026/06/20',
    client: 'ソフトバンク株式会社',
    genre: '広告・CM',
    content: 'スマートフォン新機種 テレビCM出演',
    conditions: '男女不問 / 25〜40歳',
    schedule: '2026年7月22日〜24日',
    location: '東京都品川区',
    media: 'テレビCM',
    price: '¥300,000 /本',
    deadline: '7月1日',
    status: '展開済み',
    textOriginal: '【ソフトバンクCM】\n応募はこちら: https://forms.gle/demo1234',
    formUrl: 'https://forms.gle/demo1234',
    sheetUrl: 'https://docs.google.com/spreadsheets/d/demo1234',
    isPublished: true
  }
];

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('login-screen').classList.remove('active');
      document.getElementById('app-screen').classList.add('active');
      renderTable();
      renderModelsManage();
      initNotifications();
    });
  }
});

function logout() {
  document.getElementById('app-screen').classList.remove('active');
  document.getElementById('login-screen').classList.add('active');
}

// ---- NAVIGATION ----
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
  
  if(window.innerWidth <= 900) toggleMenu();
}

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
  document.querySelector('.sidebar-overlay').classList.toggle('active');
}

// ---- TABLE RENDER ----
function renderTable() {
  const tbody = document.getElementById('db-table-body');
  if (!tbody) return;

  tbody.innerHTML = dbData.map((row, index) => `
    <tr id="row-${row.id}">
      <td>
        <input type="radio" name="selected_row" value="${row.id}" class="row-select">
      </td>
      <td class="col-red-dot">${row.isNew ? '🔴' : ''}</td>
      <td>${row.date}</td>
      <td>${row.client}</td>
      <td>${row.genre}</td>
      <td><div class="content-cell" title="${row.content}">${row.content}</div></td>
      <td><div class="content-cell" title="${row.conditions}">${row.conditions}</div></td>
      <td>${row.schedule}</td>
      <td><div class="content-cell" title="${row.location}">${row.location}</div></td>
      <td>${row.media}</td>
      <td>${row.price}</td>
      <td>${row.deadline}</td>
      <td>
        <select onchange="updateStatus(${row.id}, this.value)" style="padding:4px; border-radius:4px; border:1px solid #e5e7eb;">
          <option value="" ${row.status === '' ? 'selected' : ''}>未展開</option>
          <option value="展開済み" ${row.status === '展開済み' ? 'selected' : ''}>展開済み</option>
          <option value="終了" ${row.status === '終了' ? 'selected' : ''}>終了</option>
        </select>
      </td>
      <td>
        <div class="content-cell" style="max-width:150px; font-size:11px; white-space:pre-wrap;" id="text-${row.id}">${row.textOriginal}</div>
        <button class="btn-copy" onclick="copyText(${row.id})">コピー</button>
      </td>
      <td>
        <a href="${row.formUrl}" target="_blank" style="color:#3b82f6; font-size:11px;">${row.formUrl ? '開く' : '-'}</a>
      </td>
      <td>
        <a href="${row.sheetUrl}" target="_blank" style="color:#10b981; font-size:11px;">${row.sheetUrl ? '開く' : '-'}</a>
      </td>
      <td>
        <label class="toggle-switch">
          <input type="checkbox" onchange="togglePublish(${row.id}, this.checked)" ${row.isPublished ? 'checked' : ''}>
          <span class="toggle-slider"></span>
          <span class="toggle-label" id="pub-label-${row.id}">${row.isPublished ? '公開中' : '非表示'}</span>
        </label>
      </td>
    </tr>
  `).join('');
}

// ---- LOGIC ----
function updateStatus(id, newStatus) {
  const row = dbData.find(r => r.id === id);
  if (!row) return;
  row.status = newStatus;
  
  // 手動でステータス変更時、🔴を消去
  if (newStatus !== '') {
    row.isNew = false;
  }
  
  renderTable();
  showToast('ステータスを更新しました');
}

function togglePublish(id, isChecked) {
  const row = dbData.find(r => r.id === id);
  if (!row) return;
  row.isPublished = isChecked;
  document.getElementById(`pub-label-${id}`).innerText = isChecked ? '公開中' : '非表示';
  showToast(isChecked ? 'フロント画面へ公開しました' : '非表示にしました');
}

function copyText(id) {
  const row = dbData.find(r => r.id === id);
  if (!row) return;
  navigator.clipboard.writeText(row.textOriginal).then(() => {
    showToast('文章をコピーしました');
  });
}

function runMacro() {
  const selectedRadio = document.querySelector('input[name="selected_row"]:checked');
  if (!selectedRadio) {
    alert('対象の行を選択してください。');
    return;
  }

  const id = parseInt(selectedRadio.value);
  const row = dbData.find(r => r.id === id);
  if (!row) return;

  if (row.status === '展開済み') {
    if (!confirm('すでに展開済みの案件です。再度フォームを生成しますか？')) return;
  }

  showToast('自動生成マクロを実行中...');

  // モック: 1.5秒後に生成完了
  setTimeout(() => {
    const generatedFormUrl = `https://forms.gle/auto${id}${Date.now().toString().slice(-4)}`;
    const generatedSheetUrl = `https://docs.google.com/spreadsheets/d/auto${id}${Date.now().toString().slice(-4)}`;

    // 14, 15 に書き戻す
    row.formUrl = generatedFormUrl;
    row.sheetUrl = generatedSheetUrl;

    // 13 展開文章の置換
    row.textOriginal = row.textOriginal.replace('(フォーム生成時に自動挿入されます)', generatedFormUrl);

    // 12 ステータスを「展開済み」へ、1🔴消去、16公開中へ
    row.status = '展開済み';
    row.isNew = false;
    row.isPublished = true;

    renderTable();
    showToast('応募フォーム・シートの自動生成と公開設定が完了しました');
  }, 1500);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ---- NOTIFICATIONS SYSTEM ----
let notifications = [];

function initNotifications() {
  // ローカルストレージからロード
  loadNotifications();
  
  // 外部オリジン（別タブ）からの通知をリアルタイム検知するためのリスナー
  window.addEventListener('storage', (e) => {
    if (e.key === 'admin_notifications') {
      loadNotifications();
    }
  });

  // 通知ベル以外の部分をクリックした際にドロップダウンを閉じる
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.notification-container')) {
      document.querySelectorAll('.stripe-dropdown').forEach(el => el.style.display = 'none');
    }
  });
}

function loadNotifications() {
  notifications = JSON.parse(localStorage.getItem('admin_notifications') || '[]');
  renderNotifications();
  updateNotificationBadge();
}

function toggleNotifications(e) {
  e.stopPropagation();
  const dropdowns = document.querySelectorAll('.stripe-dropdown');
  const isCurrentlyOpen = dropdowns[0] && dropdowns[0].style.display === 'block';
  
  dropdowns.forEach(el => el.style.display = isCurrentlyOpen ? 'none' : 'block');
  
  // 開いた時、未読の通知をすべて既読にする
  if (!isCurrentlyOpen && notifications.some(n => !n.read)) {
    notifications.forEach(n => n.read = true);
    localStorage.setItem('admin_notifications', JSON.stringify(notifications));
    updateNotificationBadge();
    renderNotifications();
  }
}

function clearNotifications(e) {
  if(e) e.stopPropagation();
  if (!confirm('すべての通知履歴を削除しますか？')) return;
  notifications = [];
  localStorage.setItem('admin_notifications', JSON.stringify(notifications));
  updateNotificationBadge();
  renderNotifications();
}

function renderNotifications() {
  const listBoxes = document.querySelectorAll('.notification-list-box');
  listBoxes.forEach(listBox => {
    if (notifications.length === 0) {
      listBox.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-sub); font-size: 11px;">新しい通知はありません</div>`;
      return;
    }
    
    listBox.innerHTML = notifications.map(n => `
      <div class="notification-item ${n.read ? '' : 'unread'}">
        <span class="message">${n.message}</span>
        <span class="time">${n.time}</span>
      </div>
    `).join('');
  });
}

// ユーザー側の submitEntry() に連動したリアルタイム更新
setInterval(() => {
  // storage監視とは別に、定期的（1秒ごと）にlocalStorageを簡易同期し、タブ移動や同一画面デモの操作に備える
  const current = JSON.parse(localStorage.getItem('admin_notifications') || '[]');
  if (current.length !== notifications.length) {
    loadNotifications();
  }
}, 1000);

function updateNotificationBadge() {
  const unreadCount = notifications.filter(n => !n.read).length;
  const badges = document.querySelectorAll('.stripe-badge');
  
  badges.forEach(badge => {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  });
}

// ---- MODELS MANAGEMENT ----
let adminModels = [
  { id: 1, name: '佐藤 美咲', agency: 'Nexus Talent', age: 24, height: 168, skills: '英語会話、クラシックバレエ。透明感のある肌と上品な雰囲気が強み。CM実績多数。', isPublished: true, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80' },
  { id: 2, name: '高橋 健太', agency: 'Nexus Talent', age: 27, height: 182, skills: 'バスケットボール、アクション撮影対応可能。爽やかな笑顔とスタイルの良さでメンズ誌で活躍。', isPublished: true, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80' },
  { id: 3, name: '渡辺 陽子', agency: 'Nexus Talent', age: 21, height: 165, skills: 'ピアノ、水泳歴8年。健康的でアクティブなイメージ。Web広告やSNSプロモーションに強み。', isPublished: true, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80' }
];

function renderModelsManage() {
  const tbody = document.getElementById('models-manage-table-body');
  if (!tbody) return;
  
  const query = document.getElementById('model-search') ? document.getElementById('model-search').value.toLowerCase().trim() : '';
  
  const filtered = adminModels.filter(m => {
    return m.name.toLowerCase().includes(query) || m.agency.toLowerCase().includes(query);
  });
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:var(--text-sub);">該当するモデルが見つかりません</td></tr>`;
    return;
  }
  
  tbody.innerHTML = filtered.map(m => `
    <tr>
      <td>
        <img class="model-manage-avatar" src="${m.img}" alt="${m.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2244%22 height=%2244%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23ccc%22 stroke-width=%221.5%22><circle cx=%2212%22 cy=%228%22 r=%224%22/><path d=%22M6 20c0-3 3-5 6-5s6 2 6 5%22/></svg>'">
      </td>
      <td style="font-weight:600;">${m.name}</td>
      <td>${m.agency}</td>
      <td>${m.age}歳</td>
      <td>${m.height}cm</td>
      <td style="font-size:12px; color:var(--text-sub); max-width: 300px; white-space: normal; line-height: 1.5;">${m.skills}</td>
      <td>
        <label class="toggle-switch">
          <input type="checkbox" onchange="toggleModelPublish(${m.id}, this.checked)" ${m.isPublished ? 'checked' : ''}>
          <span class="toggle-slider"></span>
          <span class="toggle-label" id="model-pub-label-${m.id}">${m.isPublished ? '公開中' : '非表示'}</span>
        </label>
      </td>
      <td>
        <button class="btn-delete" onclick="deleteModel(${m.id})">削除</button>
      </td>
    </tr>
  `).join('');
}

function toggleModelPublish(id, isChecked) {
  const model = adminModels.find(m => m.id === id);
  if (!model) return;
  model.isPublished = isChecked;
  document.getElementById(`model-pub-label-${id}`).innerText = isChecked ? '公開中' : '非表示';
  showToast(isChecked ? 'モデルの公開設定をONにしました' : 'モデルを非表示にしました');
}

function deleteModel(id) {
  if (!confirm('本当にこのモデルを完全に削除しますか？\n（この操作は元に戻せません）')) return;
  adminModels = adminModels.filter(m => m.id !== id);
  renderModelsManage();
  showToast('モデルをデータベースから完全に削除しました');
}

function filterModelsManage() {
  renderModelsManage();
}

// ---- ADMIN PASSWORD RESET ----
function openAdminResetModal(e) {
  if (e) e.preventDefault();
  document.getElementById('admin-reset-modal-overlay').style.display = 'flex';
}

function closeAdminResetModal(e) {
  if (e && e.target !== document.getElementById('admin-reset-modal-overlay')) return;
  document.getElementById('admin-reset-modal-overlay').style.display = 'none';
}

function sendAdminResetEmail() {
  const email = document.getElementById('admin-reset-email').value.trim();
  if (!email) {
    showToast('メールアドレスを入力してください');
    return;
  }
  
  closeAdminResetModal();
  showToast('再設定リンクを送信しました');
  
  // パスワード再設定用一時URLの自動送信シミュレーション
  const resetToken = Math.random().toString(36).substring(2, 15);
  const resetUrl = `${window.location.origin}${window.location.pathname}?admin_reset_token=${resetToken}`;
  console.log(`[Admin Password Reset Simulation]\nTo: ${email}\nLink: ${resetUrl}`);
}
