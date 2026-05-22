const STORAGE_KEYS = {
  masterData: "smart-resume.master-data.v1",
  versions: "smart-resume.versions.v1",
  theme: "smart-resume.theme.v1",
  visitors: "smart-resume.visitors.v1",
  providers: "smart-resume.ai-providers.v1",
  routes: "smart-resume.ai-routes.v1",
  ambientFx: "smart-resume.ambient-fx.v1"
};

const defaultMasterData = {
  schemaVersion: "1.0.0",
  profile: {
    name: "张三",
    headline: "前端实习候选人",
    intro: "用结构化经历库管理成长轨迹，用 JD 匹配生成更贴合岗位的简历版本。",
    email: "zhangsan@example.com",
    phone: "138-0000-0000",
    location: "中国",
    links: [
      { label: "GitHub", url: "https://github.com/example" },
      { label: "Portfolio", url: "https://example.com" }
    ],
    avatarAlias: "Tkun",
    accountName: "未登录",
    accountEmail: "",
    accountAvatarDataUrl: "",
    photoDataUrl: ""
  },
  education: [
    {
      school: "xx大学",
      major: "计算机科学与技术",
      degree: "本科",
      startDate: "2022-09",
      endDate: "2026-06"
    }
  ],
  skills: [
    { name: "React", category: "frontend", level: 82, tags: ["前端", "组件化"] },
    { name: "TypeScript", category: "frontend", level: 76, tags: ["类型系统", "工程化"] },
    { name: "接口联调", category: "engineering", level: 78, tags: ["协作", "前后端联调"] },
    { name: "性能优化", category: "engineering", level: 68, tags: ["体验", "加载性能"] },
    { name: "数据可视化", category: "frontend", level: 64, tags: ["ECharts", "图表"] },
    { name: "小程序", category: "frontend", level: 58, tags: ["移动端", "页面开发"] }
  ],
  experienceBlocks: [
    {
      id: "project-campus-market",
      type: "project",
      title: "校园二手交易平台",
      role: "前端开发",
      organization: "课程 / 团队项目",
      startDate: "2025-01",
      endDate: "2025-04",
      tags: ["React", "TypeScript", "接口联调", "工程化", "性能优化"],
      keywords: ["商品发布", "搜索筛选", "组件化", "加载状态"],
      priority: 9,
      visibility: "public",
      bullets: [
        {
          text: "负责商品发布、搜索筛选、消息通知等核心模块开发。",
          impact: "覆盖主要交易流程",
          metrics: []
        },
        {
          text: "使用 React Hooks 和组件拆分提升复用率，减少重复代码。",
          impact: "提升页面开发效率",
          metrics: ["减少重复代码"]
        },
        {
          text: "接入后端接口并处理空状态、错误状态与加载状态。",
          impact: "提升页面稳定性",
          metrics: []
        }
      ]
    },
    {
      id: "project-visualization",
      type: "project",
      title: "数据可视化课程项目",
      role: "前端 / 数据展示",
      organization: "课程项目",
      startDate: "2024-10",
      endDate: "2024-12",
      tags: ["React", "ECharts", "数据可视化", "交互设计"],
      keywords: ["指标展示", "筛选联动", "趋势分析"],
      priority: 8,
      visibility: "public",
      bullets: [
        {
          text: "实现图表概览、筛选联动和趋势展示页面。",
          impact: "提升数据阅读效率",
          metrics: []
        },
        {
          text: "根据业务场景调整图表布局与交互反馈。",
          impact: "降低图表理解成本",
          metrics: []
        }
      ]
    },
    {
      id: "project-mini-program",
      type: "project",
      title: "小程序校园服务助手",
      role: "前端协作开发",
      organization: "团队项目",
      startDate: "2024-06",
      endDate: "2024-09",
      tags: ["小程序", "页面开发", "组件化", "协作"],
      keywords: ["预约", "查询", "表单提交", "移动端适配"],
      priority: 7,
      visibility: "public",
      bullets: [
        {
          text: "参与预约、查询、表单提交等模块开发。",
          impact: "补齐核心服务流程",
          metrics: []
        },
        {
          text: "协作处理页面适配与基础交互问题。",
          impact: "改善移动端使用体验",
          metrics: []
        }
      ]
    },
    {
      id: "project-blog",
      type: "project",
      title: "个人博客系统",
      role: "独立开发",
      organization: "个人项目",
      startDate: "2024-03",
      endDate: "2024-05",
      tags: ["Next.js", "Markdown", "SEO", "部署"],
      keywords: ["文章发布", "分类归档", "静态部署"],
      priority: 6,
      visibility: "public",
      bullets: [
        {
          text: "搭建文章发布、分类归档和详情页面。",
          impact: "沉淀个人学习内容",
          metrics: []
        },
        {
          text: "完成静态部署与基础 SEO 设置。",
          impact: "提升站点可访问性",
          metrics: []
        }
      ]
    }
  ],
  preferences: {
    publicPrivacyMode: true,
    pdfTemplate: "clean",
    defaultPageLimit: 1,
    resumeTemplate: "minimal",
    theme: "dopamine",
    homePanel: {
      editMode: false,
      radar: [86, 82, 76, 91, 88, 72],
      radarLabels: ["技术深度", "工程化", "沟通力", "自驱力", "逻辑性", "业务感"],
      skillLoadoutColumns: [
        {
          id: "core",
          title: "核心技术",
          subtitle: "Weapons",
          tone: "tech",
          items: [
            { label: "React", meta: "+82次", power: 82 },
            { label: "TypeScript", meta: "+76次", power: 76 },
            { label: "Three.js", meta: "+64次", power: 64 }
          ]
        },
        {
          id: "gear",
          title: "工程工具",
          subtitle: "Gear",
          tone: "gear",
          items: [
            { label: "Git", meta: "Ready", power: 88 },
            { label: "Vite", meta: "Active", power: 78 },
            { label: "Cursor", meta: "Boost", power: 72 }
          ]
        },
        {
          id: "buffs",
          title: "个人特质",
          subtitle: "Buffs",
          tone: "buff",
          items: [
            { label: "逻辑拆解", meta: "Lv.5", power: 90 },
            { label: "快速自驱", meta: "Buff+", power: 86 },
            { label: "像素级还原", meta: "SSR", power: 80 }
          ]
        }
      ],
      focusTags: ["WebAssembly", "LLM Agent", "Three.js", "RAG"],
      badges: ["闭环", "百题", "冲刺", "工程"],
      basicInfoItems: ["籍贯：广东", "性别：男", "年龄：22", "政治面貌：共青团员", "联系方式：138-0000-0000"],
      identityTags: ["寻找实习中", "坐标深圳", "双一流", "前端方向"],
      educationItems: ["xx大学 · 计算机科学与技术 · 本科"],
      projectSpotlights: [
        { icon: "▣", name: "校园二手交易平台", result: "完成发布、搜索、筛选与消息模块闭环" },
        { icon: "⌁", name: "数据可视化课程项目", result: "搭建指标概览与趋势分析面板" }
      ],
      activityItems: [
        { time: "5 分钟前", text: "优化了 React 项目简历" },
        { time: "1 小时前", text: "配置了 AI Provider" },
        { time: "昨天", text: "整理了 Master Data 经历库" }
      ],
      personalityStats: [
        { label: "内耗值", value: 20 },
        { label: "代码热情", value: 100 }
      ],
      fontSizes: {
        identity: 2,
        radar: 2,
        badges: 2,
        inspiration: 2,
        skills: 2,
        project: 2,
        focus: 2,
        activity: 2,
        personality: 2,
        orbitDetail: 2
      },
      titles: {
        digitalTwinEyebrow: "Digital Twin",
        skillLoadoutEyebrow: "Skill Loadout",
        streamTitle: "技能槽 · 当前主线能力",
        basicInfoTitle: "基本信息",
        identityEducationTitle: "教育经历",
        radarTitle: "能力雷达",
        badgesTitle: "徽章墙",
        inspirationTitle: "最近灵感",
        skillsTitle: "已装备技能",
        projectTitle: "项目里程碑",
        focusTitle: "最近关注",
        activityTitle: "成长日志",
        personalityTitle: "性格底牌",
        orbitTitle: "技能槽"
      },
      copy: {
        homeIntro: "前端开发实习生 | 2026届",
        statusPrimary: "寻找实习中",
        statusSecondary: "坐标：上海",
        inspirationText: "正在折腾：Three.js 角色面板、粒子交互和简历数据结构。",
        educationText: "",
        personalityText: "底层性格：ISTP / 逻辑严密的实干家",
        activity0: "优化了 React 项目简历",
        activity1: "配置了 AI Provider",
        activity2: "整理了 Master Data 经历库"
      }
    }
  }
};

const keywordBank = [
  "React",
  "Vue",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "ECharts",
  "前端",
  "全栈",
  "工程化",
  "性能优化",
  "接口联调",
  "数据可视化",
  "小程序",
  "组件化",
  "协作",
  "沟通协作",
  "业务理解",
  "SEO",
  "部署",
  "表单",
  "搜索",
  "图表"
];

let masterData = loadMasterData();
let versions = loadVersions();
let lastGenerated = null;
let activeVersionId = "";
let currentTheme = localStorage.getItem(STORAGE_KEYS.theme) || masterData.preferences?.theme || "dopamine";
let aiProviders = loadProviders();
let aiRoutes = loadRoutes();
let threeState = {
  model: null,
  renderer: null,
  scene: null,
  camera: null,
  mixer: null,
  controls: null,
  activeAction: null,
  actions: []
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadMasterData() {
  const saved = localStorage.getItem(STORAGE_KEYS.masterData);
  if (!saved) return clone(defaultMasterData);

  try {
    return normalizeMasterData(JSON.parse(saved));
  } catch {
    return clone(defaultMasterData);
  }
}

function normalizeMasterData(data) {
  const normalized = {
    ...clone(defaultMasterData),
    ...data,
    profile: {
      ...clone(defaultMasterData.profile),
      ...(data.profile || {})
    },
    preferences: {
      ...clone(defaultMasterData.preferences),
      ...(data.preferences || {}),
      homePanel: {
        ...clone(defaultMasterData.preferences.homePanel),
        ...((data.preferences || {}).homePanel || {}),
        fontSizes: {
          ...clone(defaultMasterData.preferences.homePanel.fontSizes),
          ...(((data.preferences || {}).homePanel || {}).fontSizes || {})
        },
        titles: {
          ...clone(defaultMasterData.preferences.homePanel.titles),
          ...(((data.preferences || {}).homePanel || {}).titles || {})
        },
        copy: {
          ...clone(defaultMasterData.preferences.homePanel.copy),
          ...(((data.preferences || {}).homePanel || {}).copy || {})
        }
      }
    }
  };

  normalized.education = Array.isArray(data.education) ? data.education : clone(defaultMasterData.education);
  normalized.skills = Array.isArray(data.skills) ? data.skills : clone(defaultMasterData.skills);
  normalized.experienceBlocks = Array.isArray(data.experienceBlocks)
    ? data.experienceBlocks
    : clone(defaultMasterData.experienceBlocks);

  return normalized;
}

function loadVersions() {
  const saved = localStorage.getItem(STORAGE_KEYS.versions) || localStorage.getItem("resume_history");
  if (!saved) return [];

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

function loadProviders() {
  const saved = localStorage.getItem(STORAGE_KEYS.providers);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }

  return [
    {
      id: "deepseek-default",
      name: "DeepSeek",
      model: "deepseek-chat",
      endpoint: "https://api.deepseek.com",
      keyHint: "local"
    },
    {
      id: "openai-default",
      name: "OpenAI",
      model: "gpt-4o",
      endpoint: "https://api.openai.com/v1",
      keyHint: "local"
    }
  ];
}

function loadRoutes() {
  const saved = localStorage.getItem(STORAGE_KEYS.routes);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return {};
    }
  }

  return {
    jd: "deepseek-default",
    match: "deepseek-default",
    polish: "openai-default",
    ats: "deepseek-default",
    twin: "openai-default"
  };
}

function saveMasterData() {
  localStorage.setItem(STORAGE_KEYS.masterData, JSON.stringify(masterData, null, 2));
}

function saveVersions() {
  localStorage.setItem(STORAGE_KEYS.versions, JSON.stringify(versions, null, 2));
  localStorage.setItem("resume_history", JSON.stringify(versions, null, 2));
}

function saveProviders() {
  localStorage.setItem(STORAGE_KEYS.providers, JSON.stringify(aiProviders, null, 2));
}

function saveRoutes() {
  localStorage.setItem(STORAGE_KEYS.routes, JSON.stringify(aiRoutes, null, 2));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

function getHomePanel() {
  masterData.preferences.homePanel ||= clone(defaultMasterData.preferences.homePanel);
  masterData.preferences.homePanel.copy ||= clone(defaultMasterData.preferences.homePanel.copy);
  if (!Array.isArray(masterData.preferences.homePanel.radar) || masterData.preferences.homePanel.radar.length !== 6) {
    masterData.preferences.homePanel.radar = clone(defaultMasterData.preferences.homePanel.radar);
  }
  if (!Array.isArray(masterData.preferences.homePanel.focusTags)) {
    masterData.preferences.homePanel.focusTags = clone(defaultMasterData.preferences.homePanel.focusTags);
  }
  if (!Array.isArray(masterData.preferences.homePanel.skillLoadoutColumns)) {
    masterData.preferences.homePanel.skillLoadoutColumns = clone(defaultMasterData.preferences.homePanel.skillLoadoutColumns);
  }
  masterData.preferences.homePanel.skillLoadoutColumns = clone(defaultMasterData.preferences.homePanel.skillLoadoutColumns)
    .map((column, index) => ({
      ...column,
      ...(masterData.preferences.homePanel.skillLoadoutColumns[index] || {}),
      items: Array.isArray(masterData.preferences.homePanel.skillLoadoutColumns[index]?.items)
        ? masterData.preferences.homePanel.skillLoadoutColumns[index].items
        : column.items
    }));
  if (!Array.isArray(masterData.preferences.homePanel.badges)) {
    masterData.preferences.homePanel.badges = clone(defaultMasterData.preferences.homePanel.badges);
  }
  if (!Array.isArray(masterData.preferences.homePanel.basicInfoItems)) {
    masterData.preferences.homePanel.basicInfoItems = clone(defaultMasterData.preferences.homePanel.basicInfoItems);
  }
  if (!Array.isArray(masterData.preferences.homePanel.identityTags)) {
    masterData.preferences.homePanel.identityTags = clone(defaultMasterData.preferences.homePanel.identityTags);
  }
  if (!Array.isArray(masterData.preferences.homePanel.educationItems)) {
    const education = masterData.education[0] || defaultMasterData.education[0];
    masterData.preferences.homePanel.educationItems = [masterData.preferences.homePanel.copy.educationText || `${education.school} · ${education.major} · ${education.degree}`];
  }
  if (!Array.isArray(masterData.preferences.homePanel.projectSpotlights)) {
    masterData.preferences.homePanel.projectSpotlights = clone(defaultMasterData.preferences.homePanel.projectSpotlights);
  }
  if (!Array.isArray(masterData.preferences.homePanel.activityItems)) {
    masterData.preferences.homePanel.activityItems = clone(defaultMasterData.preferences.homePanel.activityItems);
  }
  if (!Array.isArray(masterData.preferences.homePanel.personalityStats)) {
    masterData.preferences.homePanel.personalityStats = clone(defaultMasterData.preferences.homePanel.personalityStats);
  }
  masterData.preferences.homePanel.fontSizes = {
    ...clone(defaultMasterData.preferences.homePanel.fontSizes),
    ...(masterData.preferences.homePanel.fontSizes || {})
  };
  masterData.preferences.homePanel.titles = {
    ...clone(defaultMasterData.preferences.homePanel.titles),
    ...(masterData.preferences.homePanel.titles || {})
  };
  if (!Array.isArray(masterData.preferences.homePanel.radarLabels)) {
    masterData.preferences.homePanel.radarLabels = clone(defaultMasterData.preferences.homePanel.radarLabels);
  }
  masterData.preferences.homePanel.radarLabels = masterData.preferences.homePanel.radarLabels
    .slice(0, 6)
    .concat(defaultMasterData.preferences.homePanel.radarLabels)
    .slice(0, 6);
  return masterData.preferences.homePanel;
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function formatMonth(value) {
  if (!value) return "至今";
  return value.replace("-", ".");
}

function extractKeywords(jdText) {
  const normalized = normalize(jdText);
  const matched = keywordBank.filter((word) => normalized.includes(normalize(word)));
  return matched.length ? matched : ["前端", "React", "TypeScript"];
}

function blockSearchText(block) {
  return normalize([
    block.title,
    block.role,
    block.organization,
    block.tags.join(" "),
    block.keywords.join(" "),
    block.bullets.map((bullet) => bullet.text).join(" ")
  ].join(" "));
}

function scoreBlock(block, keywords) {
  const haystack = blockSearchText(block);
  let score = block.priority || 0;

  keywords.forEach((keyword) => {
    if (haystack.includes(normalize(keyword))) score += 18;
  });

  score += Math.min(block.tags.length * 2, 10);
  return Math.min(score, 100);
}

function rankBlocks(keywords) {
  return masterData.experienceBlocks
    .filter((block) => block.visibility !== "private")
    .map((block) => ({
      ...block,
      score: scoreBlock(block, keywords)
    }))
    .sort((a, b) => b.score - a.score);
}

function getSelectedBlocks() {
  return [...document.querySelectorAll("[data-candidate-id]:checked")]
    .map((input) => input.dataset.candidateId)
    .map((id) => lastGenerated.ranked.find((block) => block.id === id))
    .filter(Boolean);
}

function renderNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.jump));
  });
}

function showView(viewName) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `view-${viewName}`);
  });
}

function applyTheme(themeName) {
  currentTheme = themeName;
  document.body.dataset.theme = themeName;
  localStorage.setItem(STORAGE_KEYS.theme, themeName);
  masterData.preferences.theme = themeName;
  saveMasterData();

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeChoice === themeName);
  });
}

function bindThemeActions() {
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
  });
  applyTheme(currentTheme);
}

function updateClock() {
  const now = new Date();
  document.querySelector("#clockTime").textContent = now.toLocaleTimeString("zh-CN", {
    hour12: false
  });
  document.querySelector("#clockDate").textContent = now.toLocaleDateString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });
}

function updateVisitorCount() {
  const count = Number(localStorage.getItem(STORAGE_KEYS.visitors) || "0") + 1;
  localStorage.setItem(STORAGE_KEYS.visitors, String(count));
  document.querySelector("#visitorCount").textContent = String(count);
}

function spawnFxBurst(x, y, count = 8) {
  const layer = document.querySelector("#fxLayer");
  if (!layer) return;

  for (let index = 0; index < count; index += 1) {
    const dot = document.createElement("span");
    const angle = (Math.PI * 2 * index) / count;
    const distance = 42 + Math.random() * 78;
    dot.className = "fx-dot";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.setProperty("--fx-x", `${Math.cos(angle) * distance}px`);
    dot.style.setProperty("--fx-y", `${Math.sin(angle) * distance}px`);
    layer.appendChild(dot);
    dot.addEventListener("animationend", () => dot.remove());
  }
}

function bindBackgroundFx() {
  let lastMoveAt = 0;

  document.addEventListener("pointermove", (event) => {
    const now = Date.now();
    if (now - lastMoveAt < 280) return;
    lastMoveAt = now;

    const target = event.target;
    const isInteractive = target.closest?.("button, input, textarea, select, label, .resume-sheet, .panel");
    if (!isInteractive) {
      spawnFxBurst(event.clientX, event.clientY, 3);
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    const isInteractive = target.closest?.("button, input, textarea, select, label, [contenteditable='true'], .resume-sheet");
    if (!isInteractive) {
      spawnFxBurst(event.clientX, event.clientY, 10);
    }
  });
}

function bindHomeInteractions() {
  document.querySelectorAll("[data-orbit]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-orbit]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderOrbitDetail(button.dataset.orbit);
      triggerHeroAction(button.dataset.orbit);
    });
  });

  document.querySelector("#avatarSpinRange").addEventListener("input", (event) => {
    const value = Number(event.target.value);
    if (threeState.model) {
      threeState.model.rotation.y = value;
    } else {
      document.querySelector(".avatar-figure").style.transform =
        `perspective(900px) rotateY(${value * 18}deg) rotateX(2deg)`;
    }
  });

  document.querySelector("#intensityRange").addEventListener("input", (event) => {
    const value = Number(event.target.value);
    document.documentElement.style.setProperty("--fx-scale", String(value / 4));
  });

  localStorage.setItem(STORAGE_KEYS.ambientFx, "on");

  const editModeToggles = document.querySelectorAll("#editModeToggle, #sidebarEditModeToggle");
  editModeToggles.forEach((toggle) => {
    toggle.checked = Boolean(getHomePanel().editMode);
    toggle.addEventListener("change", () => {
      getHomePanel().editMode = toggle.checked;
      editModeToggles.forEach((item) => {
        item.checked = toggle.checked;
      });
      saveMasterData();
      renderHome();
    });
  });

  bindRadarInteractions();
  bindChipInteractions();
  bindHomeCrudInteractions();
  bindFontControls();
  bindDirectEditing();
  bindDashboardScale();
}

function bindRadarInteractions() {
  const svg = document.querySelector("#abilityRadar");
  const range = document.querySelector("#radarEditRange");
  let activeIndex = null;

  svg.addEventListener("pointerdown", (event) => {
    const handle = event.target.closest(".radar-handle");
    if (!handle) return;
    activeIndex = Number(handle.dataset.radarIndex);
    showRadarEditor(activeIndex);
    svg.setPointerCapture(event.pointerId);
    updateRadarValue(activeIndex, radarValueFromPointer(event, activeIndex));
  });

  svg.addEventListener("pointermove", (event) => {
    if (activeIndex === null) return;
    updateRadarValue(activeIndex, radarValueFromPointer(event, activeIndex));
  });

  svg.addEventListener("pointerup", (event) => {
    if (activeIndex !== null) svg.releasePointerCapture(event.pointerId);
    activeIndex = null;
  });

  svg.addEventListener("click", (event) => {
    const handle = event.target.closest(".radar-handle");
    if (handle) showRadarEditor(Number(handle.dataset.radarIndex));
  });

  svg.addEventListener("dblclick", (event) => {
    const label = event.target.closest(".radar-label-edit");
    if (!label) return;
    const index = Number(label.dataset.radarLabelIndex);
    const next = prompt("修改雷达维度名称", getRadarLabels()[index]);
    if (next === null) return;
    getHomePanel().radarLabels[index] = next.trim() || defaultMasterData.preferences.homePanel.radarLabels[index];
    saveMasterData();
    renderRadar();
    renderMasterEditor();
    syncEditableMode();
  });

  range.addEventListener("input", (event) => {
    const index = Number(event.target.dataset.radarIndex || document.querySelector("#radarEditor").dataset.radarIndex || 0);
    updateRadarValue(index, event.target.value);
  });

  svg.addEventListener("focusout", (event) => {
    const label = event.target.closest(".radar-label-edit");
    if (!label) return;
    const index = Number(label.dataset.radarLabelIndex);
    getHomePanel().radarLabels[index] = label.textContent.trim() || defaultMasterData.preferences.homePanel.radarLabels[index];
    saveMasterData();
    renderRadar();
    renderMasterEditor();
  });
}

function bindChipInteractions() {
  const skillPanel = document.querySelector("#heroSkillTags");
  const focusPanel = document.querySelector("#focusTagsPanel");
  const badgePanel = document.querySelector("#badgeWall");
  const basicInfoPanel = document.querySelector("#basicInfoList");
  const identityTagPanel = document.querySelector("#identityTagList");
  const projectPanel = document.querySelector("#projectSpotlightList");

  skillPanel.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-skill-column]");
    if (addButton) {
      const column = getHomePanel().skillLoadoutColumns[Number(addButton.dataset.addSkillColumn)];
      const defaultMeta = column.id === "gear" ? "Ready" : column.id === "buffs" ? "Lv.1" : "+1次";
      column.items.push({ label: "新标签", meta: defaultMeta, power: 60 });
      saveMasterData();
      renderSkillTags();
      syncEditableMode();
      focusLastSkillChip(Number(addButton.dataset.addSkillColumn));
      renderMasterEditor();
      return;
    }

    const remove = event.target.closest(".chip-remove");
    if (remove) {
      const chip = remove.closest("[data-skill-column][data-skill-index]");
      const column = getHomePanel().skillLoadoutColumns[Number(chip.dataset.skillColumn)];
      column.items.splice(Number(chip.dataset.skillIndex), 1);
      saveMasterData();
      renderSkillTags();
      renderMasterEditor();
      syncEditableMode();
    }
  });

  skillPanel.addEventListener("focusout", (event) => {
    const columnHeader = event.target.closest("[data-skill-column-title], [data-skill-column-subtitle]");
    if (columnHeader) {
      const column = getHomePanel().skillLoadoutColumns[Number(columnHeader.dataset.skillColumnIndex)];
      if (columnHeader.dataset.skillColumnTitle !== undefined) {
        column.title = columnHeader.textContent.trim() || "未命名栏目";
      } else {
        column.subtitle = columnHeader.textContent.trim() || "Loadout";
      }
      saveMasterData();
      renderMasterEditor();
      return;
    }

    const field = event.target.closest("[data-skill-field]");
    if (!field) return;
    const chip = field.closest("[data-skill-column][data-skill-index]");
    const column = getHomePanel().skillLoadoutColumns[Number(chip.dataset.skillColumn)];
    const item = column.items[Number(chip.dataset.skillIndex)];
    if (field.dataset.skillField === "label") {
      item.label = field.textContent.trim() || "未命名";
    } else {
      item.meta = field.textContent.trim() || "Ready";
    }
    saveMasterData();
    renderMasterEditor();
  });

  focusPanel.addEventListener("click", (event) => {
    if (event.target.closest("#addFocusChip")) {
      getHomePanel().focusTags.push("新关注");
      saveMasterData();
      renderFocusTags();
      syncEditableMode();
      focusLastChip(focusPanel);
      renderMasterEditor();
      return;
    }

    const remove = event.target.closest(".chip-remove");
    if (remove) {
      const chip = remove.closest("[data-focus-index]");
      getHomePanel().focusTags.splice(Number(chip.dataset.focusIndex), 1);
      saveMasterData();
      renderFocusTags();
      renderMasterEditor();
      syncEditableMode();
    }
  });

  focusPanel.addEventListener("focusout", (event) => {
    const text = event.target.closest(".chip-text");
    if (!text) return;
    const chip = text.closest("[data-focus-index]");
    const index = Number(chip.dataset.focusIndex);
    getHomePanel().focusTags[index] = text.textContent.trim() || "新关注";
    saveMasterData();
    renderMasterEditor();
  });

  badgePanel.addEventListener("click", (event) => {
    if (event.target.closest("#addBadgeButton")) {
      getHomePanel().badges.push("新徽章");
      saveMasterData();
      renderBadges();
      syncEditableMode();
      focusLastChip(badgePanel);
      renderMasterEditor();
      return;
    }

    const remove = event.target.closest(".chip-remove");
    if (remove) {
      const chip = remove.closest("[data-badge-index]");
      getHomePanel().badges.splice(Number(chip.dataset.badgeIndex), 1);
      saveMasterData();
      renderBadges();
      renderMasterEditor();
      syncEditableMode();
    }
  });

  badgePanel.addEventListener("focusout", (event) => {
    const text = event.target.closest(".chip-text");
    if (!text) return;
    const chip = text.closest("[data-badge-index]");
    getHomePanel().badges[Number(chip.dataset.badgeIndex)] = text.textContent.trim() || "新徽章";
    saveMasterData();
    renderMasterEditor();
  });

  basicInfoPanel.addEventListener("click", (event) => {
    if (event.target.closest("#addBasicInfoButton")) {
      getHomePanel().basicInfoItems.push("新信息：待填写");
      saveMasterData();
      renderBasicInfo();
      syncEditableMode();
      focusLastChip(basicInfoPanel);
      renderMasterEditor();
      return;
    }
    const remove = event.target.closest(".chip-remove");
    if (remove) {
      const chip = remove.closest("[data-basic-info-index]");
      getHomePanel().basicInfoItems.splice(Number(chip.dataset.basicInfoIndex), 1);
      saveMasterData();
      renderBasicInfo();
      renderMasterEditor();
      syncEditableMode();
    }
  });

  basicInfoPanel.addEventListener("focusout", (event) => {
    const text = event.target.closest(".chip-text");
    if (!text) return;
    const chip = text.closest("[data-basic-info-index]");
    getHomePanel().basicInfoItems[Number(chip.dataset.basicInfoIndex)] = text.textContent.trim() || "新信息：待填写";
    saveMasterData();
    renderMasterEditor();
  });

  identityTagPanel.addEventListener("click", (event) => {
    const remove = event.target.closest(".chip-remove");
    if (remove) {
      const chip = remove.closest("[data-identity-tag-index]");
      getHomePanel().identityTags.splice(Number(chip.dataset.identityTagIndex), 1);
      saveMasterData();
      renderIdentityTags();
      renderMasterEditor();
      syncEditableMode();
    }
  });

  document.querySelector("#addIdentityTagButton").addEventListener("click", () => {
    getHomePanel().identityTags.push("新标签");
    saveMasterData();
    renderIdentityTags();
    syncEditableMode();
    focusLastChip(identityTagPanel);
    renderMasterEditor();
  });

  identityTagPanel.addEventListener("focusout", (event) => {
    const text = event.target.closest(".chip-text");
    if (!text) return;
    const chip = text.closest("[data-identity-tag-index]");
    getHomePanel().identityTags[Number(chip.dataset.identityTagIndex)] = text.textContent.trim() || "新标签";
    saveMasterData();
    renderMasterEditor();
  });

  projectPanel.addEventListener("click", (event) => {
    const remove = event.target.closest(".chip-remove");
    if (!remove) return;
    const row = remove.closest("[data-project-index]");
    getHomePanel().projectSpotlights.splice(Number(row.dataset.projectIndex), 1);
    saveMasterData();
    renderProjectSpotlights();
    renderMasterEditor();
    syncEditableMode();
  });

  projectPanel.addEventListener("focusout", (event) => {
    const row = event.target.closest("[data-project-index]");
    if (!row) return;
    const index = Number(row.dataset.projectIndex);
    getHomePanel().projectSpotlights[index] = {
      icon: row.querySelector("[data-project-field='icon']")?.textContent.trim() || "▣",
      name: row.querySelector("[data-project-field='name']")?.textContent.trim() || "新项目",
      result: row.querySelector("[data-project-field='result']")?.textContent.trim() || "补充核心成果"
    };
    saveMasterData();
    renderMasterEditor();
  });

  projectPanel.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    event.target.blur();
  });
}

function focusLastChip(panel) {
  requestAnimationFrame(() => {
    const chips = panel.querySelectorAll(".skill-chip-edit .chip-text, .editable-chip .chip-text, .badge-edit .chip-text, .inline-crud-chip .chip-text");
    const editable = chips[chips.length - 1];
    if (!editable) return;
    editable.focus();
    document.getSelection()?.selectAllChildren(editable);
  });
}

function focusLastSkillChip(columnIndex) {
  requestAnimationFrame(() => {
    const chips = document.querySelectorAll(`[data-skill-column="${columnIndex}"] .chip-text`);
    const editable = chips[chips.length - 1];
    if (!editable) return;
    editable.focus();
    document.getSelection()?.selectAllChildren(editable);
  });
}

function bindDirectEditing() {
  document.querySelectorAll("[data-editable='plain']").forEach((element) => {
    enableEditableElement(element);
  });
  document.querySelectorAll("[data-editable-title]").forEach((element) => {
    enableEditableTitle(element);
  });
}

function enableEditableElement(element) {
  if (!element || element.dataset.editBound === "true") return;
  element.dataset.editBound = "true";
  element.setAttribute("contenteditable", getHomePanel().editMode ? "true" : "false");
  element.setAttribute("spellcheck", "false");
  element.addEventListener("focus", () => element.classList.add("editing"));
  element.addEventListener("blur", () => {
    element.classList.remove("editing");
    const key = element.dataset.editKey;
    if (key) {
      getHomePanel().copy[key] = element.textContent.trim();
      saveMasterData();
      renderMasterEditor();
    }
  });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      element.blur();
    }
  });
}

function enableEditableTitle(element) {
  if (!element || element.dataset.titleBound === "true") return;
  element.dataset.titleBound = "true";
  element.setAttribute("contenteditable", getHomePanel().editMode ? "true" : "false");
  element.setAttribute("spellcheck", "false");
  element.addEventListener("focus", () => element.classList.add("editing"));
  element.addEventListener("blur", () => {
    element.classList.remove("editing");
    const key = element.dataset.titleKey;
    if (key) {
      getHomePanel().titles[key] = element.textContent.trim() || defaultMasterData.preferences.homePanel.titles[key] || "未命名";
      saveMasterData();
      renderMasterEditor();
    }
  });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      element.blur();
    }
  });
}

function bindHomeCrudInteractions() {
  document.addEventListener("click", (event) => {
    const row = event.target.closest("[data-education-index]");
    if (!row) return;
    const index = Number(row.dataset.educationIndex);
    if (event.target.closest("[data-delete-row]")) {
      if (getHomePanel().educationItems.length <= 1) return;
      getHomePanel().educationItems.splice(index, 1);
      saveMasterData();
      renderEducationList();
      renderMasterEditor();
      return;
    }
    if (event.target.closest("[data-focus-row]")) {
      row.querySelector(".crud-text")?.focus();
    }
  });

  document.addEventListener("focusout", (event) => {
    const text = event.target.closest(".crud-text");
    if (!text || !text.closest("[data-education-index]")) return;
    const row = text.closest("[data-education-index]");
    getHomePanel().educationItems[Number(row.dataset.educationIndex)] = text.textContent.trim() || "新教育经历";
    saveMasterData();
    renderMasterEditor();
  });

  document.querySelector("#activityList").addEventListener("click", (event) => {
    const row = event.target.closest("[data-activity-index]");
    if (!row) return;
    const index = Number(row.dataset.activityIndex);
    if (event.target.closest("[data-delete-row]")) {
      getHomePanel().activityItems.splice(index, 1);
      saveMasterData();
      renderActivityList();
      renderMasterEditor();
      return;
    }
    if (event.target.closest("[data-focus-row]")) {
      row.querySelector(".crud-text")?.focus();
    }
  });

  document.querySelector("#activityList").addEventListener("focusout", (event) => {
    const row = event.target.closest("[data-activity-index]");
    if (!row) return;
    const index = Number(row.dataset.activityIndex);
    getHomePanel().activityItems[index] = {
      time: row.querySelector(".crud-time")?.textContent.trim() || "刚刚",
      text: row.querySelector(".crud-text")?.textContent.trim() || "新增成长记录"
    };
    saveMasterData();
    renderMasterEditor();
  });

  document.querySelector("[data-add-list='identityEducation']").addEventListener("click", () => {
    getHomePanel().educationItems.push("新教育经历");
    saveMasterData();
    renderEducationList();
    syncEditableMode();
    focusLastCrud("#identityEducationList", ".crud-text");
    renderMasterEditor();
  });

  document.querySelector("[data-add-list='project']").addEventListener("click", () => {
    getHomePanel().projectSpotlights.push({ icon: "▣", name: "新项目", result: "补充核心成果" });
    saveMasterData();
    renderProjectSpotlights();
    syncEditableMode();
    focusLastCrud("#projectSpotlightList", "[data-project-field='name']");
    renderMasterEditor();
  });

  document.querySelector("[data-add-list='activity']").addEventListener("click", () => {
    getHomePanel().activityItems.push({ time: "刚刚", text: "新增成长记录" });
    saveMasterData();
    renderActivityList();
    focusLastCrud("#activityList", ".crud-text");
    renderMasterEditor();
  });

  const stats = document.querySelector("#personalityStats");
  stats.addEventListener("input", (event) => {
    const range = event.target.closest(".stat-range");
    if (!range) return;
    const row = range.closest("[data-stat-index]");
    const index = Number(row.dataset.statIndex);
    getHomePanel().personalityStats[index].value = clamp(range.value, 0, 100);
    row.querySelector("strong").textContent = `${getHomePanel().personalityStats[index].value}%`;
    saveMasterData();
    syncRadarFromPersonality(getHomePanel().personalityStats[index]);
    renderMasterEditor();
  });

  stats.addEventListener("click", (event) => {
    const remove = event.target.closest(".stat-remove");
    if (!remove) return;
    const row = remove.closest("[data-stat-index]");
    getHomePanel().personalityStats.splice(Number(row.dataset.statIndex), 1);
    saveMasterData();
    renderPersonalityStats();
    renderMasterEditor();
  });

  stats.addEventListener("focusout", (event) => {
    const label = event.target.closest(".stat-label");
    if (!label) return;
    const row = label.closest("[data-stat-index]");
    getHomePanel().personalityStats[Number(row.dataset.statIndex)].label = label.textContent.trim() || "新维度";
    saveMasterData();
    renderMasterEditor();
  });

  document.querySelector("[data-add-personality]").addEventListener("click", () => {
    getHomePanel().personalityStats.push({ label: "抗压值", value: 80 });
    saveMasterData();
    renderPersonalityStats();
    renderMasterEditor();
  });
}

function focusLastCrud(containerSelector, itemSelector) {
  requestAnimationFrame(() => {
    const items = document.querySelectorAll(`${containerSelector} ${itemSelector}`);
    const item = items[items.length - 1];
    item?.focus();
    if (item) document.getSelection()?.selectAllChildren(item);
  });
}

function syncRadarFromPersonality(stat) {
  const radarMap = {
    自驱力: 3,
    逻辑性: 4,
    业务感: 5,
    沟通力: 2
  };
  const key = Object.keys(radarMap).find((item) => stat.label.includes(item));
  if (!key) return;
  getHomePanel().radar[radarMap[key]] = clamp(stat.value, 0, 100);
  renderRadar();
}

function bindFontControls() {
  document.querySelectorAll("[data-font-range]").forEach((range) => {
    if (range.dataset.fontBound === "true") return;
    range.dataset.fontBound = "true";
    range.addEventListener("input", () => {
      const id = range.dataset.fontRange;
      getHomePanel().fontSizes[id] = Number(range.value);
      saveMasterData();
      applyFontSizes();
      renderMasterEditor();
    });
  });

  bindFontPopover();
}

function bindFontPopover() {
  const popover = document.querySelector("#fontPopover");
  const popoverRange = document.querySelector("#fontPopoverRange");
  const popoverOutput = document.querySelector("#fontPopoverOutput");
  if (!popover || popover.dataset.bound === "true") return;

  let activeCard = null;
  let hideTimer = null;

  const showForCard = (card) => {
    if (!getHomePanel().editMode) return;
    activeCard = card;
    const id = card.dataset.cardId;
    const level = Math.min(5, Math.max(1, Number(getHomePanel().fontSizes[id] || 2)));
    const rect = card.getBoundingClientRect();
    popoverRange.dataset.fontRange = id;
    popoverRange.value = String(level);
    popoverOutput.textContent = String(level);
    popover.style.left = `${Math.max(92, rect.left + rect.width / 2 - 68)}px`;
    popover.style.top = `${Math.max(12, rect.top - 18)}px`;
    popover.hidden = false;
  };

  const scheduleHide = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      popover.hidden = true;
      activeCard = null;
    }, 160);
  };

  document.addEventListener("pointerover", (event) => {
    const card = event.target.closest?.(".font-card[data-card-id]");
    if (!card) return;
    clearTimeout(hideTimer);
    showForCard(card);
  });

  document.addEventListener("pointerout", (event) => {
    const card = event.target.closest?.(".font-card[data-card-id]");
    if (!card || card.contains(event.relatedTarget) || popover.contains(event.relatedTarget)) return;
    scheduleHide();
  });

  popover.addEventListener("pointerover", () => clearTimeout(hideTimer));
  popover.addEventListener("pointerout", (event) => {
    if (activeCard?.contains(event.relatedTarget)) return;
    scheduleHide();
  });

  popoverRange.addEventListener("input", () => {
    const id = popoverRange.dataset.fontRange;
    if (!id) return;
    getHomePanel().fontSizes[id] = Number(popoverRange.value);
    popoverOutput.textContent = popoverRange.value;
    saveMasterData();
    applyFontSizes();
    renderMasterEditor();
  });

  popover.dataset.bound = "true";
}

function bindDashboardScale() {
  const shell = document.querySelector("#dashboardScaleShell");
  const dashboard = document.querySelector("#homeDashboard");
  if (!shell || !dashboard) return;

  const fit = () => {
    if (window.innerWidth < 1180) {
      shell.style.height = "";
      dashboard.style.transform = "";
      dashboard.style.width = "";
      return;
    }
    dashboard.style.transform = "";
    dashboard.style.width = "";
    shell.style.height = "";
    const available = window.innerHeight - shell.getBoundingClientRect().top - 18;
    const naturalHeight = dashboard.scrollHeight;
    const scale = Math.min(1, Math.max(0.82, available / Math.max(naturalHeight, 1)));
    dashboard.style.transformOrigin = "top left";
    dashboard.style.transform = `scale(${scale})`;
    dashboard.style.width = `${100 / scale}%`;
    shell.style.height = `${naturalHeight * scale}px`;
  };

  window.addEventListener("resize", fit);
  requestAnimationFrame(fit);
  setTimeout(fit, 300);
}

function triggerHeroAction(kind) {
  const card = document.querySelector(".avatar-card");
  card.classList.remove("hero-pulse");
  void card.offsetWidth;
  card.classList.add("hero-pulse");

  if (!threeState.model) return;
  if (threeState.actions.length > 1) {
    const index = kind === "badges" ? Math.min(1, threeState.actions.length - 1) : 0;
    const next = threeState.actions[index];
    if (threeState.activeAction !== next) {
      threeState.activeAction?.fadeOut(0.2);
      next.reset().fadeIn(0.2).play();
      threeState.activeAction = next;
    } else {
      next.reset().play();
    }
  } else {
    threeState.model.scale.multiplyScalar(1.04);
    setTimeout(() => {
      if (threeState.model) threeState.model.scale.multiplyScalar(1 / 1.04);
    }, 220);
  }
}

function renderHome() {
  const panel = getHomePanel();
  document.querySelector("#homeName").textContent = masterData.profile.avatarAlias || "Tkun";
  document.querySelector("#streamTitle").textContent = panel.titles.streamTitle || "技能槽 · 当前主线能力";
  document.querySelector("#avatarAlias").textContent = masterData.profile.avatarAlias || "Tkun";
  document.querySelector("#inspirationText").textContent = panel.copy.inspirationText || defaultMasterData.preferences.homePanel.copy.inspirationText;
  document.querySelector("#personalityText").textContent = panel.copy.personalityText || defaultMasterData.preferences.homePanel.copy.personalityText;

  document.body.classList.toggle("is-edit-mode", Boolean(panel.editMode));
  document.querySelectorAll("#editModeToggle, #sidebarEditModeToggle").forEach((toggle) => {
    toggle.checked = Boolean(panel.editMode);
  });
  renderEditableTitles();
  applyFontSizes();
  renderSkillTags();
  renderFocusTags();
  renderBadges();
  renderBasicInfo();
  renderIdentityTags();
  renderEducationList();
  renderProjectSpotlights();
  renderActivityList();
  renderPersonalityStats();
  renderRadar();

  renderOrbitDetail("skills");
  renderAccountSummary();
  syncEditableMode();
}

function syncEditableMode() {
  const editable = getHomePanel().editMode ? "true" : "false";
  document.querySelectorAll("[data-editable='plain'], [data-editable-title], .chip-text, .crud-time, .crud-text, .stat-label, .project-field, .radar-label-edit, [data-skill-column-title], [data-skill-column-subtitle], [data-skill-field]").forEach((element) => {
    element.setAttribute("contenteditable", editable);
  });
}

function renderEditableTitles() {
  const panel = getHomePanel();
  document.querySelectorAll("[data-editable-title]").forEach((element) => {
    const key = element.dataset.titleKey;
    element.textContent = panel.titles[key] || element.textContent.trim();
    enableEditableTitle(element);
  });
}

function applyFontSizes() {
  const sizes = getHomePanel().fontSizes;
  const sizeMap = {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20
  };
  document.querySelectorAll("[data-card-id]").forEach((card) => {
    const id = card.dataset.cardId;
    const level = Math.min(5, Math.max(1, Number(sizes[id] || 2)));
    card.style.setProperty("--card-font-size", `${sizeMap[level]}px`);
    card.querySelectorAll(`[data-font-range="${id}"]`).forEach((range) => {
      range.value = String(level);
      if (range.nextElementSibling?.tagName === "OUTPUT") {
        range.nextElementSibling.textContent = String(level);
      }
    });
  });
}

function renderSkillTags() {
  const panel = getHomePanel();
  document.querySelector("#heroSkillTags").innerHTML = panel.skillLoadoutColumns.map((column, columnIndex) => `
    <section class="skill-loadout-column skill-tone-${escapeHtml(column.tone || column.id)}">
      <div class="skill-column-head">
        <strong data-skill-column-title data-skill-column-index="${columnIndex}" contenteditable="true" spellcheck="false">${escapeHtml(column.title)}</strong>
        <span data-skill-column-subtitle data-skill-column-index="${columnIndex}" contenteditable="true" spellcheck="false">${escapeHtml(column.subtitle)}</span>
      </div>
      <div class="skill-column-items">
        ${column.items.map((item, index) => `
          <span class="editable-chip skill-chip-edit" data-skill-column="${columnIndex}" data-skill-index="${index}">
            <span class="chip-main">
              <span class="chip-text" data-skill-field="label" contenteditable="true" spellcheck="false">${escapeHtml(item.label)}</span>
              <small class="chip-meta" data-skill-field="meta" contenteditable="true" spellcheck="false">${escapeHtml(item.meta)}</small>
            </span>
            <span class="chip-meter"><span style="width:${Math.max(8, Math.min(100, item.power || 60))}%"></span></span>
            <button class="chip-remove" type="button" aria-label="删除 ${escapeHtml(item.label)}">×</button>
          </span>
        `).join("")}
        <button class="add-chip skill-add-chip" data-add-skill-column="${columnIndex}" type="button" aria-label="新增${escapeHtml(column.title)}">+</button>
      </div>
    </section>
  `).join("");
}

function renderFocusTags() {
  const panel = getHomePanel();
  document.querySelector("#focusTagsPanel").innerHTML = `
    ${panel.focusTags.map((tag, index) => `
      <span class="editable-chip focus-chip-edit" data-focus-index="${index}">
        <span class="chip-main">
          <span class="chip-text" contenteditable="true" spellcheck="false">${escapeHtml(tag)}</span>
          <small class="chip-meta">${focusStateLabel(tag)}</small>
        </span>
        <span class="chip-ticker"></span>
        <button class="chip-remove" type="button" aria-label="删除 ${escapeHtml(tag)}">×</button>
      </span>
    `).join("")}
    <button class="add-chip" id="addFocusChip" type="button" aria-label="新增关注">+</button>
  `;
}

function focusStateLabel(tag) {
  const value = String(tag || "").toLowerCase();
  if (value.includes("llm") || value.includes("agent")) return "Research";
  if (value.includes("three")) return "Build";
  if (value.includes("wasm")) return "Learning";
  return "Watching";
}

function renderBadges() {
  const panel = getHomePanel();
  document.querySelector("#badgeWall").innerHTML = `
    ${panel.badges.map((badge, index) => `
      <span class="badge-edit" data-badge-index="${index}">
        <span class="chip-text" contenteditable="true" spellcheck="false">${escapeHtml(badge)}</span>
        <button class="chip-remove" type="button" aria-label="删除 ${escapeHtml(badge)}">×</button>
      </span>
    `).join("")}
    <button class="add-badge" id="addBadgeButton" type="button" aria-label="新增徽章">+</button>
  `;
}

function renderBasicInfo() {
  const panel = getHomePanel();
  document.querySelector("#basicInfoList").innerHTML = `
    ${panel.basicInfoItems.map((item, index) => `
      <span class="inline-crud-chip" data-basic-info-index="${index}">
        <span class="chip-text" contenteditable="true" spellcheck="false">${escapeHtml(item)}</span>
        <button class="chip-remove" type="button" aria-label="删除 ${escapeHtml(item)}">×</button>
      </span>
    `).join("")}
    <button class="add-chip" id="addBasicInfoButton" type="button" aria-label="新增基本信息">+</button>
  `;
}

function renderIdentityTags() {
  const panel = getHomePanel();
  document.querySelector("#identityTagList").innerHTML = panel.identityTags.map((item, index) => `
    <span class="editable-chip identity-tag-chip" data-identity-tag-index="${index}">
      <span class="chip-text" contenteditable="true" spellcheck="false">${escapeHtml(item)}</span>
      <button class="chip-remove" type="button" aria-label="删除 ${escapeHtml(item)}">×</button>
    </span>
  `).join("");
}

function renderEducationList() {
  const panel = getHomePanel();
  if (!panel.educationItems.length) {
    panel.educationItems.push("新教育经历");
  }
  const markup = panel.educationItems.map((item, index) => `
    <div class="crud-row" data-education-index="${index}">
      <span class="crud-text" contenteditable="true" spellcheck="false">${escapeHtml(item)}</span>
      <span class="crud-actions">
        <button type="button" data-focus-row aria-label="编辑教育背景">✎</button>
        <button type="button" data-delete-row aria-label="删除教育背景" ${panel.educationItems.length <= 1 ? "disabled" : ""}>×</button>
      </span>
    </div>
  `).join("");
  document.querySelector("#identityEducationList").innerHTML = markup;
}

function renderProjectSpotlights() {
  const panel = getHomePanel();
  document.querySelector("#projectSpotlightList").innerHTML = panel.projectSpotlights.map((item, index) => `
    <div class="project-spotlight editable-chip" data-project-index="${index}">
      <span class="project-icon project-field" data-project-field="icon" contenteditable="true" spellcheck="false">${escapeHtml(item.icon || "▣")}</span>
      <div class="project-copy">
        <strong class="project-field" data-project-field="name" contenteditable="true" spellcheck="false">${escapeHtml(item.name || "新项目")}</strong>
        <p class="project-field" data-project-field="result" contenteditable="true" spellcheck="false">${escapeHtml(item.result || "补充核心成果")}</p>
      </div>
      <button class="chip-remove" type="button" aria-label="删除 ${escapeHtml(item.name || "项目")}">×</button>
    </div>
  `).join("");
}

function renderActivityList() {
  const panel = getHomePanel();
  document.querySelector("#activityList").innerHTML = panel.activityItems.map((item, index) => `
    <li class="crud-row" data-activity-index="${index}">
      <span class="crud-time" contenteditable="true" spellcheck="false">${escapeHtml(item.time)}</span>
      <em class="crud-text" contenteditable="true" spellcheck="false">${escapeHtml(item.text)}</em>
      <span class="crud-actions">
        <button type="button" data-focus-row aria-label="编辑成长日志">✎</button>
        <button type="button" data-delete-row aria-label="删除成长日志">×</button>
      </span>
    </li>
  `).join("");
}

function renderPersonalityStats() {
  const panel = getHomePanel();
  document.querySelector("#personalityStats").innerHTML = panel.personalityStats.map((stat, index) => `
    <div class="stat-line editable-stat" data-stat-index="${index}">
      <span class="stat-label" contenteditable="true" spellcheck="false">${escapeHtml(stat.label)}</span>
      <input class="stat-range" type="range" min="0" max="100" value="${clamp(stat.value, 0, 100)}" />
      <strong>${clamp(stat.value, 0, 100)}%</strong>
      <button class="chip-remove stat-remove" type="button" aria-label="删除 ${escapeHtml(stat.label)}">×</button>
    </div>
  `).join("");
}

function getRadarLabels() {
  const panel = getHomePanel();
  if (!Array.isArray(panel.radarLabels) || panel.radarLabels.length !== 6) {
    panel.radarLabels = clone(defaultMasterData.preferences.homePanel.radarLabels);
  }
  return panel.radarLabels;
}

const radarCenter = { x: 75, y: 75 };
const radarRadius = 52;

function radarPoint(index, value = 100) {
  const angle = -Math.PI / 2 + index * (Math.PI * 2 / getRadarLabels().length);
  const radius = radarRadius * clamp(value, 0, 100) / 100;
  return {
    x: radarCenter.x + Math.cos(angle) * radius,
    y: radarCenter.y + Math.sin(angle) * radius
  };
}

function radarOuterPoint(index, radius = radarRadius) {
  const angle = -Math.PI / 2 + index * (Math.PI * 2 / getRadarLabels().length);
  return {
    x: radarCenter.x + Math.cos(angle) * radius,
    y: radarCenter.y + Math.sin(angle) * radius
  };
}

function formatPoints(points) {
  return points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

function renderRadar() {
  const panel = getHomePanel();
  const radarLabels = getRadarLabels();
  const svg = document.querySelector("#abilityRadar");
  if (!svg) return;

  const outerPoints = radarLabels.map((_, index) => radarOuterPoint(index));
  const innerPoints = radarLabels.map((_, index) => radarOuterPoint(index, 30));
  const valuePoints = panel.radar.map((value, index) => radarPoint(index, value));
  svg.querySelector(".radar-grid").setAttribute("points", formatPoints(outerPoints));
  svg.querySelector(".radar-grid.inner").setAttribute("points", formatPoints(innerPoints));
  svg.querySelector("#radarShape").setAttribute("points", formatPoints(valuePoints));
  svg.querySelector("#radarAxes").innerHTML = outerPoints
    .map((point) => `<line class="radar-axis" x1="${radarCenter.x}" y1="${radarCenter.y}" x2="${point.x.toFixed(1)}" y2="${point.y.toFixed(1)}" />`)
    .join("");
  svg.querySelector("#radarHandles").innerHTML = valuePoints
    .map((point, index) => `<circle class="radar-handle" data-radar-index="${index}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4.2" tabindex="0" />`)
    .join("");
  svg.querySelector("#radarLabels").innerHTML = radarLabels
    .map((label, index) => {
      const point = radarOuterPoint(index, 66);
      return `<text class="radar-label radar-label-edit" data-radar-label-index="${index}" contenteditable="${panel.editMode ? "true" : "false"}" x="${point.x.toFixed(1)}" y="${point.y.toFixed(1)}">${escapeHtml(label)}</text>`;
    })
    .join("");
}

function updateRadarValue(index, value) {
  const panel = getHomePanel();
  const radarLabels = getRadarLabels();
  panel.radar[index] = clamp(value, 0, 100);
  saveMasterData();
  renderRadar();
  const range = document.querySelector("#radarEditRange");
  const label = document.querySelector("#radarEditLabel");
  if (range && label) {
    range.value = String(panel.radar[index]);
    range.dataset.radarIndex = String(index);
    label.textContent = `${radarLabels[index]} ${panel.radar[index]}`;
  }
}

function showRadarEditor(index) {
  const radarLabels = getRadarLabels();
  const editor = document.querySelector("#radarEditor");
  const range = document.querySelector("#radarEditRange");
  const label = document.querySelector("#radarEditLabel");
  const value = getHomePanel().radar[index];
  editor.hidden = false;
  editor.dataset.radarIndex = String(index);
  range.dataset.radarIndex = String(index);
  range.value = String(value);
  label.textContent = `${radarLabels[index]} ${value}`;
  range.focus();
}

function radarValueFromPointer(event, index) {
  const svg = document.querySelector("#abilityRadar");
  const rect = svg.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width * 150;
  const y = (event.clientY - rect.top) / rect.height * 150;
  const outer = radarOuterPoint(index);
  const axisX = outer.x - radarCenter.x;
  const axisY = outer.y - radarCenter.y;
  const pointerX = x - radarCenter.x;
  const pointerY = y - radarCenter.y;
  const projection = (pointerX * axisX + pointerY * axisY) / (axisX * axisX + axisY * axisY);
  return Math.round(clamp(projection, 0, 1) * 100);
}

function initialsFrom(value) {
  const source = String(value || masterData.profile.avatarAlias || masterData.profile.name || "TK").trim();
  if (!source) return "TK";
  return source.slice(0, 2).toUpperCase();
}

function renderAccountSummary() {
  const avatarMarkup = masterData.profile.accountAvatarDataUrl
    ? `<img src="${masterData.profile.accountAvatarDataUrl}" alt="account avatar" />`
    : initialsFrom(masterData.profile.avatarAlias);
  document.querySelector("#sidebarAccountAvatar").innerHTML = avatarMarkup;
  document.querySelector("#modalAccountAvatar").innerHTML = avatarMarkup;
  document.querySelector("#sidebarAccountName").textContent = masterData.profile.accountName || "未登录";
  document.querySelector("#modalAccountName").textContent = masterData.profile.accountName || "未登录用户";
  document.querySelector("#accountEmail").value = masterData.profile.accountEmail || "";
}

function renderOrbitDetail(key) {
  const detailMap = {
    skills: {
      icon: "✺",
      title: "技能槽",
      eyebrow: "Skill Loadout",
      headline: "技能槽 · 当前主线能力",
      intro: "React、TypeScript、接口联调、性能优化和数据可视化是当前主线能力。",
      text: "这里展示的是能直接服务实习投递的能力组合：页面开发、组件抽象、接口联调和体验优化。"
    },
    persona: {
      icon: "◇",
      title: "人格",
      eyebrow: "Persona",
      headline: "人格 · 问题拆解型",
      intro: "偏好先把复杂需求拆成清晰步骤，再用小闭环快速验证。",
      text: "适合做需要沟通、梳理、推进和落地的工作，不喜欢空转，倾向于把想法变成可以检查的产物。"
    },
    badges: {
      icon: "★",
      title: "徽章",
      eyebrow: "Achievements",
      headline: "成就徽章 · 项目闭环中",
      intro: "项目闭环、页面优化、内容结构化，是当前最有代表性的能力徽章。",
      text: "这些徽章后续可以从 Master Data 自动生成，比如完成项目、比赛获奖、证书、投递里程碑等。"
    },
    life: {
      icon: "☼",
      title: "生活",
      eyebrow: "Life Buff",
      headline: "生活 Buff · 保持松弛",
      intro: "跑步、阅读、羽毛球和折腾小 Demo，维持一点生活弹性。",
      text: "这块不是简历正文，而是让访问者看到一个更真实的人：有节奏、有兴趣，也愿意持续探索。"
    }
  };

  const detail = detailMap[key] || detailMap.skills;
  const panel = getHomePanel();
  const introKey = `orbitIntro_${key}`;
  const textKey = `orbitText_${key}`;
  document.querySelector("#orbitStreamEyebrow").textContent = key === "skills"
    ? (panel.titles.skillLoadoutEyebrow || detail.eyebrow)
    : detail.eyebrow;
  document.querySelector("#streamTitle").textContent = key === "skills"
    ? (panel.titles.streamTitle || detail.headline)
    : detail.headline;
  const streamIntro = document.querySelector("#streamIntro");
  streamIntro.textContent = panel.copy[introKey] || detail.intro;
  streamIntro.dataset.editKey = introKey;
  const orbitDetail = document.querySelector("#orbitDetail");
  const orbitLevel = Math.min(5, Math.max(1, Number(panel.fontSizes.orbitDetail || 2)));
  orbitDetail.innerHTML = `
    <div class="font-tool"><button class="font-tool-button" type="button" aria-label="调节字号">A</button><input type="range" min="1" max="5" step="1" value="${orbitLevel}" data-font-range="orbitDetail" /><output>${orbitLevel}</output></div>
    <span class="glass-icon">${detail.icon}</span>
    <div>
      <h3 data-title-key="orbitTitle" data-editable-title>${escapeHtml(panel.titles.orbitTitle || detail.title)}</h3>
      <p data-editable="plain" data-edit-key="${textKey}">${escapeHtml(panel.copy[textKey] || detail.text)}</p>
    </div>
  `;
  bindFontControls();
  enableEditableTitle(orbitDetail.querySelector("[data-editable-title]"));
  enableEditableElement(orbitDetail.querySelector("[data-editable='plain']"));
  applyFontSizes();
}

function renderMasterEditor() {
  document.querySelector("#masterJsonEditor").value = JSON.stringify(masterData, null, 2);
  document.querySelector("#jsonStatus").textContent = "已加载";
  document.querySelector("#templateSelect").value = masterData.preferences.resumeTemplate || "minimal";
  document.querySelector("#photoVisibleToggle").checked = masterData.preferences.resumeTemplate === "photo";
  document.querySelector("#photoSwitchLabel").textContent =
    masterData.profile.photoDataUrl && masterData.preferences.resumeTemplate === "photo" ? "照片：已就绪" : "照片：未就绪";
  renderDataSummary();
}

function renderDataSummary() {
  document.querySelector("#dataSummary").innerHTML = `
    <div class="summary-item"><strong>${masterData.skills.length}</strong><span>技能项</span></div>
    <div class="summary-item"><strong>${masterData.experienceBlocks.length}</strong><span>经历块</span></div>
    <div class="summary-item"><strong>${masterData.education.length}</strong><span>教育经历</span></div>
    <div class="summary-item"><strong>${versions.length}</strong><span>生成版本</span></div>
  `;
}

function renderCandidates(blocks, selectedIds) {
  const list = document.querySelector("#candidateList");
  list.innerHTML = blocks.map((block, index) => `
    <article class="candidate-card">
      <label>
        <input type="checkbox" data-candidate-id="${block.id}" ${selectedIds.includes(block.id) ? "checked" : ""} />
        <span>
          <span class="candidate-head">
            <strong>${block.title}</strong>
            <span class="match-value">匹配度 ${block.score}</span>
          </span>
          <p>${block.role} · ${block.organization} · ${formatMonth(block.startDate)} - ${formatMonth(block.endDate)}</p>
        </span>
      </label>
      <div class="tag-row">
        ${block.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");

  document.querySelector("#candidateCount").textContent = `${blocks.length} 条`;

  document.querySelectorAll("[data-candidate-id]").forEach((input) => {
    input.addEventListener("change", () => renderResume(getSelectedBlocks(), lastGenerated.keywords));
  });
}

function renderResume(blocks, keywords) {
  const profile = masterData.profile;
  const education = masterData.education[0];
  const template = document.querySelector("#templateSelect").value || masterData.preferences.resumeTemplate || "minimal";
  const photoDataUrl = profile.photoDataUrl || "";
  const shouldShowPhoto = document.querySelector("#photoVisibleToggle").checked && photoDataUrl;
  const photoMarkup = shouldShowPhoto ? `<img class="resume-photo" src="${photoDataUrl}" alt="resume photo" />` : "";
  const skillNames = masterData.skills
    .map((skill) => skill.name)
    .sort((a, b) => {
      const aHit = keywords.some((keyword) => normalize(a).includes(normalize(keyword)));
      const bHit = keywords.some((keyword) => normalize(b).includes(normalize(keyword)));
      return Number(bHit) - Number(aHit);
    })
    .slice(0, 8);

  const resumePreview = document.querySelector("#resumePreview");
  resumePreview.className = `resume-sheet template-${template}`;
  resumePreview.innerHTML = `
    <header class="resume-top">
      <div>
        <h1>${profile.name}</h1>
        <div class="resume-meta">
          <span>${profile.headline}</span>
          <span>${education.school} · ${education.major}</span>
          <span>${profile.email}</span>
          <span>${profile.phone}</span>
          <span>${profile.links.map((link) => link.label).join(" / ")}</span>
        </div>
      </div>
      ${photoMarkup}
    </header>
    <section class="resume-summary">
      我希望应聘${document.querySelector("#roleInput").value}，具备 ${keywords.slice(0, 5).join("、")} 等相关经验，能够结合业务需求完成开发、联调和持续优化。
    </section>
    <section class="resume-section">
      <h2>技能栈</h2>
      <div class="skill-chips">
        ${skillNames.map((skill) => `<span class="skill-chip">${skill}</span>`).join("")}
      </div>
    </section>
    <section class="resume-section">
      <h2>项目经历</h2>
      ${blocks.map((block) => `
        <div class="resume-item">
          <div class="item-title">
            <strong>${block.title}</strong>
            <span>${formatMonth(block.startDate)} - ${formatMonth(block.endDate)}</span>
          </div>
          <p>${block.role} · ${block.organization}</p>
          <ul>
            ${block.bullets.map((bullet) => `<li>${bullet.text}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </section>
    <section class="resume-section">
      <h2>教育经历</h2>
      <div class="resume-item">
        <div class="item-title">
          <strong>${education.school} · ${education.major}</strong>
          <span>${formatMonth(education.startDate)} - ${formatMonth(education.endDate)}</span>
        </div>
        <p>${education.degree}</p>
      </div>
    </section>
  `;
}

function generateResume() {
  const jdText = document.querySelector("#jdInput").value;
  const keywords = extractKeywords(jdText);
  const ranked = rankBlocks(keywords);
  const limit = document.querySelector("#pageLimit").value === "1" ? 3 : 4;
  const selected = ranked.slice(0, limit);
  const score = Math.min(72 + keywords.length * 4, 96);
  const template = document.querySelector("#templateSelect").value;
  const coveredKeywordCount = keywords.filter((keyword) => {
    return selected.some((block) => blockSearchText(block).includes(normalize(keyword)));
  }).length;
  const coverage = keywords.length ? Math.round((coveredKeywordCount / keywords.length) * 100) : 0;

  masterData.preferences.resumeTemplate = template;
  saveMasterData();

  lastGenerated = {
    company: document.querySelector("#companyInput").value,
    role: document.querySelector("#roleInput").value,
    jdText,
    keywords,
    ranked,
    template,
    generatedAt: new Date().toISOString()
  };

  renderCandidates(ranked, selected.map((block) => block.id));
  renderResume(selected, keywords);
  document.querySelector("#keywordStatus").textContent = `关键词：${keywords.join(" / ")}`;
  document.querySelector("#scoreStatus").textContent = `匹配度：${score}`;
  document.querySelector("#coverageStatus").textContent = `覆盖：${coverage}%`;
}

function saveCurrentVersion() {
  if (!lastGenerated) generateResume();

  const selected = getSelectedBlocks();
  const company = document.querySelector("#companyInput").value.trim();
  const role = document.querySelector("#roleInput").value.trim();
  const jdText = document.querySelector("#jdInput").value;
  const keywords = lastGenerated?.jdText === jdText ? lastGenerated.keywords : extractKeywords(jdText);
  const template = document.querySelector("#templateSelect").value;
  const record = {
    id: String(Date.now()),
    company: company || "未命名版本",
    role: role || "未命名岗位",
    keywords,
    template,
    selectedBlockIds: selected.map((block) => block.id),
    title: company && role ? `${company}-${role}` : company || role || "未命名版本",
    jdText,
    resumeHtml: document.querySelector("#resumePreview").innerHTML,
    pinned: false,
    savedAt: new Date().toISOString()
  };

  versions.unshift(record);
  versions = versions.slice(0, 12);
  activeVersionId = record.id;
  saveVersions();
  renderVersionList();
  renderDataSummary();
  document.querySelector("#coverageStatus").textContent = "状态：已保存到历史";
}

function renderVersionList() {
  const list = document.querySelector("#versionList");
  if (!versions.length) {
    list.innerHTML = `<p class="history-empty">暂无历史版本</p>`;
    return;
  }

  list.innerHTML = versions.map((version) => `
    <article class="version-card ${version.id === activeVersionId ? "active" : ""}" data-version-id="${version.id}" title="${escapeHtml(version.title || `${version.company} · ${version.role}`)}">
      <button class="version-load-button" type="button" data-load-version="${version.id}">
        <span class="version-doc-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M7.25 4.75H14.1L18.75 9.4V19.25H7.25Z" />
            <path d="M14.05 4.85V9.45H18.65" />
            <path d="M9.7 13.05H16.1" />
            <path d="M9.7 16.05H14.35" />
          </svg>
        </span>
        <span class="version-copy">
          <strong class="version-title">${escapeHtml(version.title || `${version.company}-${version.role}`)}</strong>
          <small>${formatVersionTime(version.savedAt)}</small>
        </span>
      </button>
      <button class="version-more-button" type="button" data-open-version-menu="${version.id}" aria-label="更多操作">...</button>
      <div class="version-action-menu" data-version-menu="${version.id}" hidden>
        <button type="button" data-pin-version="${version.id}">${version.pinned ? "取消置顶" : "置顶"}</button>
        <button type="button" data-rename-version="${version.id}">重命名</button>
        <button type="button" data-delete-version="${version.id}">删除</button>
      </div>
    </article>
  `).join("");
}

function formatVersionTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "未知时间";
  return date.toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" });
}

function loadVersion(versionId) {
  const version = versions.find((item) => item.id === versionId);
  if (!version) return;
  activeVersionId = version.id;
  document.querySelector("#companyInput").value = version.company || "";
  document.querySelector("#roleInput").value = version.role || "";
  document.querySelector("#jdInput").value = version.jdText || "";
  document.querySelector("#templateSelect").value = version.template || "minimal";
  masterData.preferences.resumeTemplate = version.template || "minimal";
  saveMasterData();
  const keywords = version.keywords?.length ? version.keywords : extractKeywords(version.jdText);
  const ranked = rankBlocks(keywords);
  lastGenerated = {
    company: version.company,
    role: version.role,
    jdText: version.jdText,
    keywords,
    ranked,
    template: version.template || "minimal",
    generatedAt: version.savedAt
  };
  const selectedIds = version.selectedBlockIds?.length ? version.selectedBlockIds : ranked.slice(0, 3).map((block) => block.id);
  const selected = ranked.filter((block) => selectedIds.includes(block.id));
  renderCandidates(ranked, selectedIds);
  if (version.resumeHtml) {
    document.querySelector("#resumePreview").innerHTML = version.resumeHtml;
  } else {
    renderResume(selected.length ? selected : ranked.slice(0, 3), keywords);
  }
  document.querySelector("#keywordStatus").textContent = `关键词：${keywords.join(" / ")}`;
  document.querySelector("#scoreStatus").textContent = "匹配度：已加载";
  document.querySelector("#coverageStatus").textContent = "覆盖：已加载";
  renderVersionList();
  showView("generator");
}

function togglePinVersion(versionId) {
  const version = versions.find((item) => item.id === versionId);
  if (!version) return;
  version.pinned = !version.pinned;
  versions = versions
    .map((item) => item.id === versionId ? version : item)
    .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) || new Date(b.savedAt) - new Date(a.savedAt));
  saveVersions();
  renderVersionList();
}

function renameVersion(versionId) {
  const version = versions.find((item) => item.id === versionId);
  if (!version) return;
  document.querySelectorAll("[data-version-menu]").forEach((menu) => {
    menu.hidden = true;
  });
  const title = document.querySelector(`[data-version-id="${versionId}"] .version-title`);
  if (!title) return;
  title.setAttribute("contenteditable", "true");
  title.setAttribute("spellcheck", "false");
  title.classList.add("renaming");
  title.focus();
  document.getSelection()?.selectAllChildren(title);

  const finish = () => {
    title.removeEventListener("blur", finish);
    title.removeEventListener("keydown", onKeydown);
    version.title = title.textContent.trim() || version.title || "未命名版本";
    title.removeAttribute("contenteditable");
    title.classList.remove("renaming");
    saveVersions();
    renderVersionList();
  };

  const onKeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      title.blur();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      renderVersionList();
    }
  };

  title.addEventListener("blur", finish);
  title.addEventListener("keydown", onKeydown);
}

function resetGeneratorDraft() {
  activeVersionId = "";
  document.querySelector("#companyInput").value = "目标公司";
  document.querySelector("#roleInput").value = "前端实习生";
  document.querySelector("#jdInput").value = "";
  document.querySelector("#templateSelect").value = masterData.preferences.resumeTemplate || "minimal";
  lastGenerated = null;
  generateResume();
  renderVersionList();
  showView("generator");
}

function bindMasterActions() {
  document.querySelector("#saveDataButton").addEventListener("click", () => {
    try {
      masterData = normalizeMasterData(JSON.parse(document.querySelector("#masterJsonEditor").value));
      saveMasterData();
      document.querySelector("#jsonStatus").textContent = "已保存";
      renderHome();
      renderDataSummary();
      generateResume();
    } catch (error) {
      document.querySelector("#jsonStatus").textContent = `JSON 错误：${error.message}`;
    }
  });

  document.querySelector("#resetDataButton").addEventListener("click", () => {
    masterData = clone(defaultMasterData);
    saveMasterData();
    applyTheme(masterData.preferences.theme);
    renderMasterEditor();
    renderHome();
    generateResume();
  });

  document.querySelector("#exportDataButton").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(masterData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "master-resume.json";
    link.click();
    URL.revokeObjectURL(url);
  });

  document.querySelector("#importDataInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        masterData = normalizeMasterData(JSON.parse(reader.result));
        saveMasterData();
        renderMasterEditor();
        renderHome();
        generateResume();
      } catch (error) {
        document.querySelector("#jsonStatus").textContent = `导入失败：${error.message}`;
      }
    };
    reader.readAsText(file);
  });

  document.querySelector("#pdfResumeInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    simulatePdfImport(file);
  });
}

function simulatePdfImport(file) {
  const status = document.querySelector("#importStatus");
  const preview = document.querySelector("#importPreview");

  status.textContent = `已接收：${file.name}，正在模拟解析...`;
  preview.innerHTML = "";

  setTimeout(() => {
    const importedBlock = {
      id: `imported-${Date.now()}`,
      type: "project",
      title: "PDF 导入经历示例",
      role: "待确认角色",
      organization: "从通用简历解析",
      startDate: "2025-01",
      endDate: "2025-06",
      tags: ["待校验", "PDF导入", "结构化"],
      keywords: ["简历解析", "经历抽取", "信息归档"],
      priority: 5,
      visibility: "private",
      bullets: [
        {
          text: "这是从 PDF 导入流程生成的占位经历，后续会由 PDF 文本解析和 AI 结构化填充真实内容。",
          impact: "验证导入链路",
          metrics: []
        }
      ]
    };

    masterData.experienceBlocks.unshift(importedBlock);
    saveMasterData();
    renderMasterEditor();
    renderHome();
    generateResume();

    status.textContent = "模拟解析完成：已写入 1 条待校验经历块";
    preview.innerHTML = `
      <article>
        <strong>解析结果预览</strong>
        <p>Profile：保持现有信息</p>
        <p>Experience Blocks：新增 1 条待校验经历</p>
        <p>下一阶段接入 PDF 文本抽取和 AI 字段映射。</p>
      </article>
    `;
  }, 850);
}

function bindGeneratorActions() {
  document.querySelector("#generateButton").addEventListener("click", generateResume);
  document.querySelector("#saveVersionButton").addEventListener("click", saveCurrentVersion);
  document.querySelector("#templateSelect").addEventListener("change", () => {
    masterData.preferences.resumeTemplate = document.querySelector("#templateSelect").value;
    document.querySelector("#photoVisibleToggle").checked = document.querySelector("#templateSelect").value === "photo";
    saveMasterData();
    if (lastGenerated) {
      renderResume(getSelectedBlocks(), lastGenerated.keywords);
    } else {
      generateResume();
    }
  });
  document.querySelector("#photoInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      masterData.profile.photoDataUrl = reader.result;
      masterData.preferences.resumeTemplate = "photo";
      document.querySelector("#templateSelect").value = "photo";
      document.querySelector("#photoVisibleToggle").checked = true;
      document.querySelector("#photoSwitchLabel").textContent = "照片：已就绪";
      saveMasterData();
      renderMasterEditor();
      generateResume();
    };
    reader.readAsDataURL(file);
  });
  document.querySelector("#photoVisibleToggle").addEventListener("change", () => {
    const visible = document.querySelector("#photoVisibleToggle").checked;
    if (visible && !masterData.profile.photoDataUrl) {
      document.querySelector("#photoVisibleToggle").checked = false;
      document.querySelector("#photoInput").click();
      return;
    }
    masterData.preferences.resumeTemplate = visible ? "photo" : "minimal";
    document.querySelector("#templateSelect").value = masterData.preferences.resumeTemplate;
    document.querySelector("#photoSwitchLabel").textContent = visible ? "照片：已就绪" : "照片：未就绪";
    saveMasterData();
    generateResume();
  });
  document.querySelector("#clearPhotoButton").addEventListener("click", () => {
    masterData.profile.photoDataUrl = "";
    document.querySelector("#photoVisibleToggle").checked = false;
    document.querySelector("#photoSwitchLabel").textContent = "照片：未就绪";
    saveMasterData();
    renderMasterEditor();
    generateResume();
  });
  document.querySelector("#printResumeButton").addEventListener("click", () => {
    showView("generator");
    window.print();
  });
  document.querySelector("#versionList").addEventListener("click", (event) => {
    const moreButton = event.target.closest("[data-open-version-menu]");
    if (moreButton) {
      const menuId = moreButton.dataset.openVersionMenu;
      const targetMenu = document.querySelector(`[data-version-menu="${menuId}"]`);
      const shouldOpen = targetMenu?.hidden ?? true;
      document.querySelectorAll("[data-version-menu]").forEach((menu) => {
        menu.hidden = true;
      });
      if (targetMenu) targetMenu.hidden = !shouldOpen;
      return;
    }

    const pinButton = event.target.closest("[data-pin-version]");
    if (pinButton) {
      togglePinVersion(pinButton.dataset.pinVersion);
      return;
    }

    const renameButton = event.target.closest("[data-rename-version]");
    if (renameButton) {
      renameVersion(renameButton.dataset.renameVersion);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-version]");
    if (deleteButton) {
      if (!confirm("确定删除这个历史版本吗？")) return;
      const id = deleteButton.dataset.deleteVersion;
      versions = versions.filter((version) => version.id !== id);
      if (activeVersionId === id) activeVersionId = "";
      saveVersions();
      renderVersionList();
      renderDataSummary();
      return;
    }

    const loadButton = event.target.closest("[data-load-version]");
    if (loadButton) {
      loadVersion(loadButton.dataset.loadVersion);
    }
  });
  document.querySelector("#newVersionButton").addEventListener("click", resetGeneratorDraft);
  document.querySelector("#clearVersionsButton").addEventListener("click", () => {
    if (!confirm("确定清空全部历史版本吗？")) return;
    versions = [];
    activeVersionId = "";
    saveVersions();
    renderVersionList();
    renderDataSummary();
  });
}

function providerLabel(providerId) {
  const provider = aiProviders.find((item) => item.id === providerId);
  return provider ? `${provider.name} · ${provider.model}` : "未配置";
}

function renderProviderList() {
  const list = document.querySelector("#providerList");
  list.innerHTML = aiProviders.map((provider) => `
    <article class="provider-card">
      <strong>${provider.name} · ${provider.model}</strong>
      <span>${provider.endpoint}</span>
      <span>Key：${provider.keyHint || "local"}</span>
    </article>
  `).join("");
  renderRouteSelects();
}

function renderRouteSelects() {
  const routeMap = [
    ["#routeJd", "jd"],
    ["#routeMatch", "match"],
    ["#routePolish", "polish"],
    ["#routeAts", "ats"],
    ["#routeTwin", "twin"]
  ];

  routeMap.forEach(([selector, key]) => {
    const select = document.querySelector(selector);
    select.innerHTML = aiProviders.map((provider) => `
      <option value="${provider.id}">${providerLabel(provider.id)}</option>
    `).join("");
    select.value = aiRoutes[key] || aiProviders[0]?.id || "";
    select.addEventListener("change", () => {
      aiRoutes[key] = select.value;
      saveRoutes();
    });
  });
}

function bindAiLabActions() {
  document.querySelector("#saveProviderButton").addEventListener("click", () => {
    const name = document.querySelector("#providerName").value.trim() || "Custom";
    const model = document.querySelector("#providerModel").value.trim() || "model";
    const endpoint = document.querySelector("#providerEndpoint").value.trim() || "https://api.example.com";
    const key = document.querySelector("#providerKey").value.trim();
    const provider = {
      id: `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      name,
      model,
      endpoint,
      keyHint: key ? `${key.slice(0, 4)}...${key.slice(-4)}` : "local"
    };

    aiProviders.unshift(provider);
    saveProviders();
    renderProviderList();
    document.querySelector("#providerKey").value = "";
  });

  document.querySelector("#addProviderButton").addEventListener("click", () => {
    document.querySelector("#providerName").focus();
  });

  document.querySelector("#hallucinationGuard").addEventListener("input", (event) => {
    document.querySelector("#guardValue").textContent = event.target.value;
  });
}

function bindAccountActions() {
  const status = document.querySelector("#accountStatus");
  const email = document.querySelector("#accountEmail");
  const password = document.querySelector("#accountPassword");
  const code = document.querySelector("#accountCode");
  const sendCode = document.querySelector("#sendCodeButton");
  const modal = document.querySelector("#accountModal");

  document.querySelector("#accountEntryButton").addEventListener("click", () => {
    modal.hidden = false;
    renderAccountSummary();
  });

  document.querySelector("#closeAccountModal").addEventListener("click", () => {
    modal.hidden = true;
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.hidden = true;
  });

  document.querySelectorAll("[data-account-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-account-tab]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      status.textContent = {
        login: "登录需要后端认证服务；当前为本地模拟。",
        register: "注册需要数据库、邮件验证码服务和密码加密；当前为本地模拟。",
        reset: "找回密码需要邮件验证码校验和重置接口；当前为本地模拟。"
      }[button.dataset.accountTab];
    });
  });

  document.querySelector("#accountAvatarInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      masterData.profile.accountAvatarDataUrl = reader.result;
      saveMasterData();
      renderAccountSummary();
      renderMasterEditor();
      status.textContent = "头像已保存到本地资料库。";
    };
    reader.readAsDataURL(file);
  });

  document.querySelector("#loginButton").addEventListener("click", () => {
    if (!email.value || !password.value) {
      status.textContent = "请输入邮件账号和密码。";
      return;
    }
    masterData.profile.accountEmail = email.value;
    masterData.profile.accountName = email.value.split("@")[0] || "已登录用户";
    saveMasterData();
    renderAccountSummary();
    renderMasterEditor();
    status.textContent = `已模拟登录：${email.value}`;
    modal.hidden = true;
  });

  document.querySelector("#registerButton").addEventListener("click", () => {
    if (!email.value || password.value.length < 8) {
      status.textContent = "注册需要有效邮箱和至少 8 位密码。";
      return;
    }
    masterData.profile.accountEmail = email.value;
    masterData.profile.accountName = email.value.split("@")[0] || "新用户";
    saveMasterData();
    renderAccountSummary();
    renderMasterEditor();
    status.textContent = `已模拟注册：${email.value}`;
    modal.hidden = true;
  });

  document.querySelector("#forgotPasswordButton").addEventListener("click", () => {
    status.textContent = "已进入模拟找回密码流程，请先发送验证码。";
    code.focus();
  });

  document.querySelector("#logoutButton").addEventListener("click", () => {
    masterData.profile.accountName = "未登录";
    masterData.profile.accountEmail = "";
    masterData.profile.accountAvatarDataUrl = "";
    saveMasterData();
    renderAccountSummary();
    renderMasterEditor();
    status.textContent = "已切换为游客状态。";
    modal.hidden = true;
  });

  sendCode.addEventListener("click", () => {
    if (!email.value) {
      status.textContent = "请先填写邮件账号。";
      return;
    }

    let remaining = 30;
    sendCode.disabled = true;
    status.textContent = `验证码已模拟发送到：${email.value}`;
    sendCode.textContent = `${remaining}s`;

    const timer = setInterval(() => {
      remaining -= 1;
      sendCode.textContent = `${remaining}s`;
      if (remaining <= 0) {
        clearInterval(timer);
        sendCode.disabled = false;
        sendCode.textContent = "发送验证码";
      }
    }, 1000);
  });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if ([...document.scripts].some((script) => script.src === src)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initThreeHero() {
  const stage = document.querySelector("#threeStage");
  const note = document.querySelector("#threeFallbackNote");
  if (!stage) return;

  try {
    const modelUrl = "./public/models/spiderman.glb";
    if (note) note.textContent = "";
    const probe = await fetch(modelUrl, { method: "HEAD" });
    if (!probe.ok) throw new Error("model missing");

    const THREE = await import("https://esm.sh/three@0.160.0");
    const { GLTFLoader } = await import("https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js");
    const { OrbitControls } = await import("https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, stage.clientWidth / stage.clientHeight, 0.1, 100);
    camera.position.set(0, 1.35, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    stage.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.target.set(0, 0.6, 0);
    controls.update();

    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(3, 5, 4);
    scene.add(key);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x6b5cff, 1.3));

    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxAxis = Math.max(size.x, size.y, size.z) || 1;
      model.scale.setScalar(2.4 / maxAxis);
      model.position.sub(center.multiplyScalar(model.scale.x));
      model.position.y -= 0.9;
      scene.add(model);
      threeState.model = model;
      threeState.scene = scene;
      threeState.camera = camera;
      threeState.renderer = renderer;
      threeState.controls = controls;
      document.querySelector(".avatar-card").classList.add("has-three-model");
      if (note) note.textContent = "";

      if (gltf.animations?.length) {
        threeState.mixer = new THREE.AnimationMixer(model);
        threeState.actions = gltf.animations.map((clip) => threeState.mixer.clipAction(clip));
        threeState.activeAction = threeState.actions[0];
        threeState.activeAction.reset().fadeIn(0.4).play();
      }
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (threeState.mixer) threeState.mixer.update(clock.getDelta());
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      if (!stage.clientWidth || !stage.clientHeight) return;
      camera.aspect = stage.clientWidth / stage.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(stage.clientWidth, stage.clientHeight);
    });
  } catch {
    if (note) note.textContent = "";
  }
}

function init() {
  document.querySelector("#accountModal").hidden = true;
  renderNavigation();
  bindThemeActions();
  bindMasterActions();
  bindGeneratorActions();
  bindHomeInteractions();
  bindAiLabActions();
  bindAccountActions();
  bindBackgroundFx();
  updateVisitorCount();
  updateClock();
  setInterval(updateClock, 1000);
  renderHome();
  renderMasterEditor();
  renderVersionList();
  renderProviderList();
  generateResume();
  initThreeHero();
}

init();
