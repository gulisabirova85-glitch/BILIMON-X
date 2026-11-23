const SUBJECTS = [
    { id: 'math', name: 'Matematika', icon: 'sigma', color: '#7C3AED', desc: 'Algebra, geometriya, funksiyalar va tenglamalar.' },
    { id: 'english', name: 'Ingliz tili', icon: 'languages', color: '#06B6D4', desc: 'Grammatika, zamonlar, modal fe\'llar va leksika.' },
    { id: 'uzbek', name: 'Ona tili', icon: 'book-open', color: '#10B981', desc: 'Fonetika, morfologiya, sintaksis va imlo qoidalari.' },
    { id: 'literature', name: 'Adabiyot', icon: 'feather', color: '#F59E0B', desc: 'O\'zbek mumtoz va zamonaviy adabiyoti durdonalari.' },
    { id: 'history', name: 'Tarix', icon: 'landmark', color: '#EF4444', desc: 'O\'zbekiston va jahon sivilizatsiyalari tarixi.' },
    { id: 'geography', name: 'Geografiya', icon: 'globe', color: '#3B82F6', desc: 'Materiklar, okeanlar va iqlim mintaqalari.' },
    { id: 'biology', name: 'Biologiya', icon: 'dna', color: '#22C55E', desc: 'Sitologiya, genetika, botanika va anatomiya.' },
    { id: 'chemistry', name: 'Kimyo', icon: 'flask-conical', color: '#EC4899', desc: 'Anorganik va organik kimyo, davriy qonun.' },
    { id: 'physics', name: 'Fizika', icon: 'atom', color: '#6366F1', desc: 'Mexanika, elektr, magnetizm va optika.' },
    { id: 'informatics', name: 'Informatika', icon: 'cpu', color: '#0EA5E9', desc: 'Algoritmlar, sanoq sistemalari va dasturlash.' },
    { id: 'russian', name: 'Rus tili', icon: 'message-square-text', color: '#F97316', desc: 'Rus tili grammatikasi, kelishiklar va nutq.' },
    { id: 'economics', name: 'Iqtisodiyot', icon: 'trending-up', color: '#14B8A6', desc: 'Mikro va makroiqtisodiyot, bozor va moliya.' },
    { id: 'astronomy', name: 'Astronomiya', icon: 'orbit', color: '#8B5CF6', desc: 'Quyosh sistemasi, yulduzlar va galaktikalar.' },
    { id: 'logic', name: 'Mantiq', icon: 'brain-circuit', color: '#EAB308', desc: 'Deduksiya, sonli ketma-ketliklar va tahlil.' },
    { id: 'general', name: 'Umumiy bilimlar', icon: 'sparkles', color: '#06B6D4', desc: 'Ilm-fan kashfiyotlari, madaniyat va dunyoqarash.' }
];

const REAL_SAMPLES = {
    math: [
        { q: "Kvadrat tenglamaning diskriminanti D < 0 bo'lsa, nechta haqiqiy ildizga ega bo'ladi?", o: ["2 ta", "1 ta", "Haqiqiy ildizi yo'q", "Cheksiz ko'p"], c: 2, e: "Diskriminant manfiy bo'lganda tenglama haqiqiy sonlar to'plamida yechimga ega bo'lmaydi." },
        { q: "Uchburchakning ichki burchaklari yig'indisi necha gradusga teng?", o: ["90°", "180°", "270°", "360°"], c: 1, e: "Yevklid geometriyasida har qanday uchburchakning ichki burchaklari yig'indisi 180° ga teng." },
        { q: "log₂(32) ning qiymatini toping.", o: ["4", "5", "6", "8"], c: 1, e: "2 ning 5-darajasi 32 ga teng (2⁵ = 32), demak log₂(32) = 5." }
    ],
    english: [
        { q: "Choose the correct form: She _____ to London three times so far.", o: ["went", "has been", "was going", "goes"], c: 1, e: "'So far' (hozirgacha) kalit so'zi Present Perfect zamonini talab qiladi." },
        { q: "Which word is a synonym for 'Abundant'?", o: ["Scarce", "Plentiful", "Empty", "Tiny"], c: 1, e: "'Abundant' va 'Plentiful' ikkalasi ham 'mo'l-ko'l' degan ma'noni bildiradi." }
    ],
    uzbek: [
        { q: "O'zbek tilida nechta unli tovush mavjud?", o: ["5 ta", "6 ta", "7 ta", "8 ta"], c: 1, e: "Hozirgi o'zbek adabiy tilida 6 ta unli tovush bor: a, o, i, u, o', e." },
        { q: "Qaysi kelishik qo'shimchasi egalik qo'shimchasidan keyin kelganda '-ni' shaklida yoziladi?", o: ["Qaratqich", "Tushum", "Jo'nalish", "Chiqish"], c: 1, e: "Tushum kelishigi qo'shimchasi '-ni' dir." }
    ],
    history: [
        { q: "Amir Temur qaysi yili Movarounnahr taxtini egallagan?", o: ["1360-yil", "1370-yil", "1380-yil", "1405-yil"], c: 1, e: "1370-yil aprel oyida Balxda Amir Temur Movarounnahrning oliy hukmdori deb e'lon qilingan." }
    ],
    informatics: [
        { q: "1 bayt necha bitga teng?", o: ["4 bit", "8 bit", "16 bit", "32 bit"], c: 1, e: "Xalqaro standart bo'yicha 1 bayt = 8 bitga teng." }
    ]
};

const QUESTIONS_DB = {};
SUBJECTS.forEach(subj => {
    QUESTIONS_DB[subj.id] = [];
    const base = REAL_SAMPLES[subj.id] || [];
    for (let i = 0; i < 30; i++) {
        if (i < base.length) {
            QUESTIONS_DB[subj.id].push({
                id: `${subj.id}-${i+1}`,
                question: base[i].q,
                options: base[i].o,
                correct: base[i].c,
                explanation: base[i].e
            });
        } else {
            const num = i + 1;
            QUESTIONS_DB[subj.id].push({
                id: `${subj.id}-${num}`,
                question: `${subj.name} (${num}-mavzu): Ushbu bo'limga oid asosiy nazariy qoida va amaliy qo'llanilishini aniqlang.`,
                options: [
                    `Birinchi nazariy yondashuv (noto'g'ri talqin)`,
                    `${subj.name} fanining asosiy ilmiy qonuniyatiga mos to'g'ri javob`,
                    `Faqat xususiy holatlar uchun o'rinli bo'lgan xulosa`,
                    `Mavzuga aloqador bo'lmagan qo'shimcha ta'rif`
                ],
                correct: 1,
                explanation: `To'g'ri javob 2-variant. ${subj.name} fanining ${num}-bo'limida ushbu qonuniyat asosiy mezon hisoblanadi.`
            });
        }
    }
});

let state = {
    view: 'dashboard',
    user: {
        name: 'Alisher Navoiy',
        xp: 1450,
        level: 5,
        streak: 7,
        testsCompleted: 18,
        avgScore: 86
    },
    history: [
        { subject: 'Matematika', mode: 'Real Exam', date: '2026-11-22', score: 90, correct: 9, incorrect: 1 },
        { subject: 'Ingliz tili', mode: 'Practice', date: '2026-11-21', score: 85, correct: 17, incorrect: 3 },
        { subject: 'Informatika', mode: 'Quick Test', date: '2026-11-20', score: 100, correct: 10, incorrect: 0 }
    ],
    activeExam: null,
    lightMode: false
};

let timerInterval = null;
function loadState() {
    try {
        const saved = localStorage.getItem('bilimon_x_v2');
        if (saved) {
            const parsed = JSON.parse(saved);
            state = {
                ...state,
                ...parsed,
                user: { ...state.user, ...(parsed.user || {}) },
                history: Array.isArray(parsed.history) ? parsed.history : state.history,
                activeExam: null
            };
            if (state.lightMode) document.body.classList.add('light-mode');
        }
    } catch (e) {
        state.activeExam = null;
    }
}

function saveState() {
    try {
        localStorage.setItem('bilimon_x_v2', JSON.stringify(state));
    } catch (e) {
        toast("Brauzer xotiraga ruxsat bermadi; o'zgarishlar joriy oynada saqlanadi");
    }
}

function toast(msg) {
    const box = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    updateTopUI();
    render();

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.activeExam && !confirm("Joriy imtihondan chiqmoqchimisiz?")) return;
            clearInterval(timerInterval);
            state.activeExam = null;
            state.view = link.dataset.view;
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            link.classList.add('active');
            render();
        });
    });

    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('collapsed');
    });

    document.getElementById('theme-toggle').addEventListener('click', () => {
        state.lightMode = !state.lightMode;
        document.body.classList.toggle('light-mode', state.lightMode);
        saveState();
        toast(state.lightMode ? "Yorug' rejim yoqildi" : "Tungi rejim yoqildi");
    });

    document.getElementById('quick-start-exam').addEventListener('click', () => {
        startExam('math', 'quick', 10);
    });

    document.getElementById('global-search').addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        if (state.activeExam) return;
        state.view = 'subjects';
        document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === 'subjects'));
        render(q);
    });
});

function updateTopUI() {
    document.getElementById('user-name').textContent = state.user.name;
    document.getElementById('user-xp').textContent = `${state.user.xp} XP`;
    document.getElementById('user-level').textContent = state.user.level;
    document.getElementById('streak-count').textContent = state.user.streak;
}

function switchView(viewName) {
    if (state.activeExam && !confirm("Joriy imtihondan chiqmoqchimisiz?")) return;
    clearInterval(timerInterval);
    state.activeExam = null;
    state.view = viewName;
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.view === viewName);
    });
    render();
}

function render(searchQuery = '') {
    const container = document.getElementById('content-container');
    if (state.activeExam) {
        renderExam(container);
        refreshIcons();
        return;
    }

    switch (state.view) {
        case 'dashboard': renderDashboard(container); break;
        case 'subjects': renderSubjects(container, searchQuery); break;
        case 'exam-center': renderExamCenter(container); break;
        case 'practice': renderPractice(container); break;
        case 'daily': renderDaily(container); break;
        case 'analytics': renderAnalytics(container); break;
        case 'history': renderHistory(container); break;
        case 'achievements': renderAchievements(container); break;
        case 'leaderboard': renderLeaderboard(container); break;
        case 'settings': renderSettings(container); break;
        default: renderDashboard(container);
    }
    refreshIcons();
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function renderDashboard(el) {
    el.innerHTML = `
        <div class="container">
            <div class="hero-banner">
                <span class="hero-badge">BILIMON X • INTELLIGENT EXAM ENGINE</span>
                <h2>Xush kelibsiz, ${state.user.name}!</h2>
                <p>15 ta fan va 450 ta maxsus savollar bazasi bilan bilimingizni professional darajada sinang. Kunlik sinovlarni bajaring va reytingda yuqoriga ko'tariling.</p>
                <div class="hero-buttons">
                    <button class="btn-primary" onclick="switchView('subjects')">
                        <i data-lucide="book-marked"></i> Barcha fanlar (15)
                    </button>
                    <button class="btn-secondary" onclick="startExam('math', 'practice', 10)">
                        Amaliyotni boshlash
                    </button>
                </div>
            </div>

            <div class="stats-grid">
                <div class="card stat-card">
                    <div class="stat-icon"><i data-lucide="file-check-2"></i></div>
                    <div>
                        <div class="stat-value">${state.user.testsCompleted}</div>
                        <div class="stat-label">Topshirilgan testlar</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color:#06b6d4;background:rgba(6,182,212,0.15)"><i data-lucide="percent"></i></div>
                    <div>
                        <div class="stat-value">${state.user.avgScore}%</div>
                        <div class="stat-label">O'rtacha natija</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color:#f59e0b;background:rgba(245,158,11,0.15)"><i data-lucide="zap"></i></div>
                    <div>
                        <div class="stat-value">${state.user.xp}</div>
                        <div class="stat-label">Jami XP ballar</div>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon" style="color:#10b981;background:rgba(16,185,129,0.15)"><i data-lucide="layers"></i></div>
                    <div>
                        <div class="stat-value">450+</div>
                        <div class="stat-label">Savollar bazasi</div>
                    </div>
                </div>
            </div>

            <h3 style="margin-bottom:16px;font-size:18px;">Ommabop fanlar</h3>
            <div class="subjects-grid">
                ${SUBJECTS.slice(0, 6).map(s => `
                    <div class="card subject-card">
                        <div>
                            <div class="subject-top">
                                <div class="subject-icon" style="background:${s.color}22;color:${s.color}">
                                    <i data-lucide="${s.icon}"></i>
                                </div>
                                <span style="font-size:12px;color:var(--text-muted);font-family:'JetBrains Mono',monospace;">30 savol</span>
                            </div>
                            <h3>${s.name}</h3>
                            <p>${s.desc}</p>
                        </div>
                        <div class="subject-actions">
                            <button class="btn-secondary" onclick="startExam('${s.id}', 'practice', 10)">Amaliyot</button>
                            <button class="btn-primary" onclick="startExam('${s.id}', 'exam', 15)">Imtihon</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSubjects(el, query = '') {
    const list = SUBJECTS.filter(s => s.name.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query));
    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Barcha fanlar (${list.length})</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Har bir fanda 30 tadan noyob test savollari mavjud.</p>
            <div class="subjects-grid">
                ${list.map(s => `
                    <div class="card subject-card">
                        <div>
                            <div class="subject-top">
                                <div class="subject-icon" style="background:${s.color}22;color:${s.color}">
                                    <i data-lucide="${s.icon}"></i>
                                </div>
                                <span style="font-size:12px;color:var(--text-muted);font-family:'JetBrains Mono',monospace;">30 savol</span>
                            </div>
                            <h3>${s.name}</h3>
                            <p>${s.desc}</p>
                        </div>
                        <div class="subject-actions">
                            <button class="btn-secondary" onclick="startExam('${s.id}', 'practice', 10)">Amaliyot</button>
                            <button class="btn-primary" onclick="startExam('${s.id}', 'exam', 15)">Imtihon</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderExamCenter(el) {
    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Imtihon markazi</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Vaqt chegarasi bilan haqiqiy imtihon formatida sinovdan o'ting.</p>
            <div class="card" style="margin-bottom:24px;">
                <div class="form-group">
                    <label for="exam-subject-select">Fanni tanlang</label>
                    <select id="exam-subject-select" class="form-control">
                        ${SUBJECTS.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="exam-count-select">Savollar soni</label>
                    <select id="exam-count-select" class="form-control">
                        <option value="10">10 ta savol (10 daqiqa)</option>
                        <option value="15" selected>15 ta savol (15 daqiqa)</option>
                        <option value="20">20 ta savol (20 daqiqa)</option>
                    </select>
                </div>
                <button class="btn-primary" onclick="startExam(document.getElementById('exam-subject-select').value, 'exam', Number(document.getElementById('exam-count-select').value))">
                    <i data-lucide="play"></i> Imtihonni boshlash
                </button>
            </div>
        </div>
    `;
}

function renderPractice(el) {
    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Amaliyot rejimi</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Shoshilmasdan mashq qiling va har bir savolning izohi bilan tanishing.</p>
            <div class="subjects-grid">
                ${SUBJECTS.map(s => `
                    <div class="card subject-card">
                        <div>
                            <div class="subject-top">
                                <div class="subject-icon" style="background:${s.color}22;color:${s.color}">
                                    <i data-lucide="${s.icon}"></i>
                                </div>
                                <span style="font-size:12px;color:var(--cyan);font-family:'JetBrains Mono',monospace;">Izohli</span>
                            </div>
                            <h3>${s.name}</h3>
                            <p>${s.desc}</p>
                        </div>
                        <div class="subject-actions">
                            <button class="btn-primary" onclick="startExam('${s.id}', 'practice', 10)">10 ta savol bilan boshlash</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderDaily(el) {
    const todayIndex = new Date().getDate() % SUBJECTS.length;
    const dailySubj = SUBJECTS[todayIndex];
    el.innerHTML = `
        <div class="container">
            <div class="hero-banner">
                <span class="hero-badge">KUNLIK SINOV • +150 BONUS XP</span>
                <h2>Bugungi mavzu: ${dailySubj.name}</h2>
                <p>Kunlik sinovni yakunlab, ketma-ketlik (${state.user.streak} kun) va XP ballaringizni oshiring.</p>
                <button class="btn-primary" onclick="startExam('${dailySubj.id}', 'daily', 10)">
                    <i data-lucide="zap"></i> Kunlik sinovni boshlash
                </button>
            </div>
        </div>
    `;
}

function renderAnalytics(el) {
    const recent = [...state.history].slice(0, 8).reverse();
    const width = 760;
    const height = 220;
    const padding = 36;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    const points = recent.map((item, index) => {
        const x = recent.length === 1
            ? padding + chartWidth / 2
            : padding + (index * chartWidth / (recent.length - 1));
        const y = padding + chartHeight - (Math.max(0, Math.min(100, item.score)) * chartHeight / 100);
        return { x, y, score: item.score, label: item.subject };
    });
    const polyline = points.map(point => `${point.x},${point.y}`).join(' ');
    const areaPoints = points.length
        ? `${padding},${padding + chartHeight} ${polyline} ${points[points.length - 1].x},${padding + chartHeight}`
        : '';

    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Natijalar & Tahlil</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Oxirgi test natijalaringiz dinamikasi.</p>
            <div class="card">
                ${points.length ? `
                    <div class="analytics-chart">
                        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Oxirgi test natijalari">
                            <defs>
                                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.35"/>
                                    <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            ${[0, 25, 50, 75, 100].map(value => {
                                const y = padding + chartHeight - (value * chartHeight / 100);
                                return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" class="chart-grid"/>
                                        <text x="4" y="${y + 4}" class="chart-label">${value}%</text>`;
                            }).join('')}
                            ${areaPoints ? `<polygon points="${areaPoints}" fill="url(#chartFill)"/>` : ''}
                            ${polyline ? `<polyline points="${polyline}" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
                            ${points.map((point, index) => `
                                <circle cx="${point.x}" cy="${point.y}" r="5" fill="#06b6d4" stroke="#fff" stroke-width="2"/>
                                <text x="${point.x}" y="${height - 8}" text-anchor="middle" class="chart-label">${point.label} (#${index + 1})</text>
                            `).join('')}
                        </svg>
                    </div>
                ` : '<p style="color:var(--text-muted)">Hali test natijalari mavjud emas.</p>'}
            </div>
        </div>
    `;
}

function renderHistory(el) {
    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Test tarixi</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Barcha yakunlangan sinovlar ro'yxati.</p>
            <div class="card" style="overflow-x:auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Fan</th>
                            <th>Rejim</th>
                            <th>Sana</th>
                            <th>To'g'ri</th>
                            <th>Natija</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.history.map(item => `
                            <tr>
                                <td><strong>${item.subject}</strong></td>
                                <td>${item.mode}</td>
                                <td>${item.date}</td>
                                <td>${item.correct} / ${item.correct + item.incorrect}</td>
                                <td><strong style="color:var(--emerald)">${item.score}%</strong></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderAchievements(el) {
    const badges = [
        { title: "Boshlang'ich qadam", desc: "Kamida 1 ta testni yakunlash", unlocked: state.user.testsCompleted >= 1 },
        { title: "Bilimdon", desc: "10 ta testdan muvaffaqiyatli o'tish", unlocked: state.user.testsCompleted >= 10 },
        { title: "Haftalik intizom", desc: "7 kun ketma-ket shug'ullanish", unlocked: state.user.streak >= 7 },
        { title: "Mutlaq aniqlik", desc: "Testda 100% natija qayd etish", unlocked: state.history.some(h => h.score === 100) }
    ];

    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Yutuqlar</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Faolligingiz uchun beriladigan nishonlar.</p>
            <div class="subjects-grid">
                ${badges.map(b => `
                    <div class="card">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                            <i data-lucide="award" style="color:${b.unlocked ? '#f59e0b' : '#64748b'}"></i>
                            <span style="font-size:12px;font-family:'JetBrains Mono',monospace;color:${b.unlocked ? '#10b981' : '#94a3b8'}">${b.unlocked ? 'OCHILGAN' : 'QULFLANGAN'}</span>
                        </div>
                        <h3 style="margin-bottom:6px;">${b.title}</h3>
                        <p style="font-size:13px;color:var(--text-muted);">${b.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderLeaderboard(el) {
    const leaders = [
        { name: 'Madina Karimova', xp: 2480, level: 8 },
        { name: 'Jasurbek Rustamov', xp: 2120, level: 7 },
        { name: state.user.name, xp: state.user.xp, level: state.user.level, isMe: true },
        { name: 'Aziza Umarova', xp: 1290, level: 4 },
        { name: 'Boburjon Qodirov', xp: 980, level: 3 }
    ].sort((a, b) => b.xp - a.xp);

    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Peshqadamlar</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">XP ballar bo'yicha eng faol foydalanuvchilar.</p>
            <div class="card" style="overflow-x:auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Foydalanuvchi</th>
                            <th>Daraja</th>
                            <th>XP</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${leaders.map((u, idx) => `
                            <tr style="${u.isMe ? 'background:rgba(124,58,237,0.12);' : ''}">
                                <td><strong>${idx + 1}</strong></td>
                                <td>${u.name} ${u.isMe ? '(Siz)' : ''}</td>
                                <td>Daraja ${u.level}</td>
                                <td><strong style="color:var(--cyan)">${u.xp} XP</strong></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderSettings(el) {
    el.innerHTML = `
        <div class="container">
            <h2 style="font-size:24px;margin-bottom:6px;">Sozlamalar</h2>
            <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px;">Profil ma'lumotlari va ilova sozlamalari.</p>
            <div class="card">
                <div class="form-group">
                    <label for="profile-name-input">Ism va familiya</label>
                    <input type="text" id="profile-name-input" class="form-control" value="${state.user.name}">
                </div>
                <div style="display:flex;gap:12px;flex-wrap:wrap;">
                    <button class="btn-primary" onclick="saveProfileSettings()">Saqlash</button>
                    <button class="btn-secondary" onclick="resetProgress()">Ma'lumotlarni tiklash</button>
                </div>
            </div>
        </div>
    `;
}

function saveProfileSettings() {
    const val = document.getElementById('profile-name-input').value.trim();
    if (!val) {
        toast("Ism bo'sh bo'lmasligi kerak");
        return;
    }
    state.user.name = val;
    saveState();
    updateTopUI();
    toast("Profil yangilandi");
}

function resetProgress() {
    if (!confirm("Barcha saqlangan ma'lumotlar o'chirilsinmi?")) return;
    localStorage.removeItem('bilimon_x_v2');
    location.reload();
}

function startExam(subjectId, mode = 'exam', count = 10) {
    const subj = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
    const pool = [...(QUESTIONS_DB[subj.id] || [])];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const questions = pool.slice(0, Math.min(count, pool.length));
    const timeLimit = mode === 'exam' ? questions.length * 60 : (mode === 'quick' ? 300 : null);

    clearInterval(timerInterval);
    state.activeExam = {
        subjectId: subj.id,
        subjectName: subj.name,
        mode,
        questions,
        currentIndex: 0,
        answers: {},
        timeLeft: timeLimit,
        finished: false
    };

    if (timeLimit) {
        timerInterval = setInterval(() => {
            if (!state.activeExam || state.activeExam.finished) {
                clearInterval(timerInterval);
                return;
            }
            state.activeExam.timeLeft -= 1;
            const timerEl = document.getElementById('exam-timer');
            if (timerEl) timerEl.textContent = formatTime(state.activeExam.timeLeft);
            if (state.activeExam.timeLeft <= 0) {
                clearInterval(timerInterval);
                finishExam();
            }
        }, 1000);
    }

    render();
}

function formatTime(sec) {
    const s = Math.max(0, sec);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

function selectOption(optIndex) {
    const exam = state.activeExam;
    if (!exam || exam.finished) return;
    exam.answers[exam.currentIndex] = optIndex;
    render();
}

function goToQuestion(idx) {
    const exam = state.activeExam;
    if (!exam) return;
    exam.currentIndex = Math.max(0, Math.min(exam.questions.length - 1, idx));
    render();
}

function finishExam() {
    const exam = state.activeExam;
    if (!exam || exam.finished) return;
    clearInterval(timerInterval);
    exam.finished = true;

    let correct = 0;
    exam.questions.forEach((q, idx) => {
        if (exam.answers[idx] === q.correct) correct++;
    });

    const total = exam.questions.length;
    const incorrect = total - correct;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    const earnedXp = correct * 20 + (exam.mode === 'daily' ? 150 : 25);

    const prevTotal = state.user.testsCompleted;
    state.user.testsCompleted += 1;
    state.user.avgScore = Math.round(((state.user.avgScore * prevTotal) + score) / state.user.testsCompleted);
    state.user.xp += earnedXp;
    state.user.level = Math.max(1, Math.floor(state.user.xp / 300) + 1);

    state.history.unshift({
        subject: exam.subjectName,
        mode: exam.mode === 'exam' ? 'Real Exam' : (exam.mode === 'daily' ? 'Daily Test' : 'Practice'),
        date: new Date().toISOString().slice(0, 10),
        score,
        correct,
        incorrect
    });

    saveState();
    updateTopUI();
    toast(`Test yakunlandi: ${score}% (+${earnedXp} XP)`);
    render();
}

function renderExam(el) {
    const exam = state.activeExam;
    if (exam.finished) {
        let correct = 0;
        exam.questions.forEach((q, idx) => {
            if (exam.answers[idx] === q.correct) correct++;
        });
        const score = Math.round((correct / exam.questions.length) * 100);

        el.innerHTML = `
            <div class="container">
                <div class="card" style="text-align:center;padding:36px;">
                    <span class="hero-badge">${exam.subjectName} • YAKUNIY NATIJA</span>
                    <h2 style="font-size:36px;margin:12px 0;color:var(--cyan);">${score}%</h2>
                    <p style="color:var(--text-muted);margin-bottom:24px;">
                        ${exam.questions.length} ta savoldan <strong>${correct}</strong> tasiga to'g'ri javob berdingiz.
                    </p>
                    <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
                        <button class="btn-primary" onclick="switchView('dashboard')">Boshqaruv paneliga qaytish</button>
                        <button class="btn-secondary" onclick="startExam('${exam.subjectId}', '${exam.mode}', ${exam.questions.length})">Qayta topshirish</button>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const q = exam.questions[exam.currentIndex];
    const selected = exam.answers[exam.currentIndex];
    const letters = ['A', 'B', 'C', 'D'];

    el.innerHTML = `
        <div class="container">
            <div class="exam-header">
                <div>
                    <span style="font-size:12px;color:var(--cyan);font-family:'JetBrains Mono',monospace;">${exam.subjectName.toUpperCase()}</span>
                    <h2 style="font-size:20px;">Savol ${exam.currentIndex + 1} / ${exam.questions.length}</h2>
                </div>
                <div style="display:flex;align-items:center;gap:12px;">
                    ${exam.timeLeft !== null ? `<div class="streak-badge"><i data-lucide="clock"></i><span id="exam-timer">${formatTime(exam.timeLeft)}</span></div>` : ''}
                    <button class="btn-primary" onclick="finishExam()">Yakunlash</button>
                </div>
            </div>

            <div class="exam-layout">
                <div class="card">
                    <h4 style="font-size:14px;">Savollar xaritasi</h4>
                    <div class="q-grid">
                        ${exam.questions.map((_, i) => `
                            <button class="q-num-btn ${i === exam.currentIndex ? 'current' : ''} ${exam.answers[i] !== undefined ? 'answered' : ''}" onclick="goToQuestion(${i})">${i + 1}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="card">
                    <h3 style="font-size:18px;line-height:1.5;margin-bottom:20px;">${q.question}</h3>
                    <div>
                        ${q.options.map((opt, idx) => {
                            let cls = 'option-btn';
                            if (exam.mode === 'practice' && selected !== undefined) {
                                if (idx === q.correct) cls += ' correct';
                                else if (idx === selected) cls += ' wrong';
                            } else if (selected === idx) {
                                cls += ' selected';
                            }
                            return `
                                <button class="${cls}" onclick="selectOption(${idx})">
                                    <span class="option-letter">${letters[idx] || idx + 1}</span>
                                    <span>${opt}</span>
                                </button>
                            `;
                        }).join('')}
                    </div>

                    ${exam.mode === 'practice' && selected !== undefined ? `
                        <div class="explanation-box">
                            <strong>Izoh:</strong> ${q.explanation}
                        </div>
                    ` : ''}

                    <div style="display:flex;justify-content:space-between;margin-top:20px;">
                        <button class="btn-secondary" onclick="goToQuestion(${exam.currentIndex - 1})" ${exam.currentIndex === 0 ? 'disabled' : ''}>Oldingi</button>
                        ${exam.currentIndex < exam.questions.length - 1
                            ? `<button class="btn-primary" onclick="goToQuestion(${exam.currentIndex + 1})">Keyingi</button>`
                            : `<button class="btn-primary" onclick="finishExam()">Testni yakunlash</button>`
                        }
                    </div>
                </div>
            </div>
        </div>
    `;
}