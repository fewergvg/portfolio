/* ===================== helpers ===================== */
const qs  = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = v => String(v ?? "").replace(/[&<>"']/g, c =>
  ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmt(d){
  if (!d) return "";
  const s = String(d).trim();
  if (s.toLowerCase() === "present") return "Present";
  const [y, m] = s.split("-");
  return m ? `${MONTHS[Number(m) - 1] || ""} ${y}`.trim() : y;
}
const period = i => (i.end ? `${fmt(i.date)} – ${fmt(i.end)}` : fmt(i.date));
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

const P    = SITE.profile;
const cats = SITE.categories || {};
const catName = k => cats[k] || k;

/* ===================== profile ===================== */
const initials = (P.name || "?").split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

qs("#brandName").textContent   = P.shortName || P.name;
qs("#heroEyebrow").textContent = P.eyebrow || "";
qs("#heroName").textContent    = P.name || "";
qs("#heroRole").textContent    = P.role || "";
qs("#heroBio").textContent     = P.bio || "";
qs("#heroLocation").textContent = P.location ? "📍 " + P.location : "";
qs("#heroBadges").innerHTML     = (P.badges || []).map(b => `<li>${esc(b)}</li>`).join("");
qs("#contactNote").textContent  = P.contactNote || "";
qs("#contactLinks").innerHTML   = (P.links || [])
  .map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
qs("#year").textContent     = new Date().getFullYear();
qs("#footName").textContent = P.name || "";
document.title = `${P.name} — Portfolio`;

// portrait with graceful fallback
const photo = qs("#heroPhoto"), fallback = qs("#heroFallback");
fallback.textContent = initials;
function useFallback(){ photo.remove(); fallback.hidden = false; }
if (P.photo) { photo.src = P.photo; photo.alt = P.name; photo.onerror = useFallback; }
else useFallback();

/* ===================== stats ===================== */
qs("#stats").innerHTML = (SITE.stats || []).map(s => {
  const raw = String(s.value);
  const v = raw.startsWith("auto:")
    ? SITE.items.filter(i => i.category === raw.split(":")[1]).length
    : s.value;
  return `<div class="stat reveal">
    <div class="stat-num" data-to="${esc(v)}">0</div>
    <div class="stat-label">${esc(s.label)}</div>
  </div>`;
}).join("");

/* ===================== filters ===================== */
let active = "all", query = "";
qs("#chips").innerHTML =
  `<button class="chip active" data-c="all">All</button>` +
  Object.keys(cats)
    .filter(k => SITE.items.some(i => i.category === k))
    .map(k => `<button class="chip" data-c="${esc(k)}">${esc(cats[k])}</button>`).join("");

qs("#chips").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  qsa(".chip").forEach(c => c.classList.remove("active"));
  b.classList.add("active");
  active = b.dataset.c;
  renderGrid();
});
qs("#search").addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  renderGrid();
});

/* ===================== grid ===================== */
const sorted = [...SITE.items].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

function match(i){
  const okCat = active === "all" || i.category === active;
  if (!okCat) return false;
  if (!query) return true;
  return [i.title, i.org, i.role, i.summary, ...(i.tags || [])]
    .join(" ").toLowerCase().includes(query);
}

function mediaHTML(i){
  const ph = esc(catName(i.category));
  if (!i.image) return `<div class="card-media is-ph" data-ph="${ph}"></div>`;
  return `<div class="card-media" data-ph="${ph}">
    <img src="${esc(i.image)}" alt="${esc(i.title)}" loading="lazy"
         onerror="this.parentElement.classList.add('is-ph');this.remove();">
  </div>`;
}

function renderGrid(){
  const list = sorted.filter(match);
  qs("#empty").hidden = list.length > 0;
  qs("#grid").innerHTML = list.map(i => `
    <article class="card reveal${i.featured ? " featured" : ""}" data-id="${esc(i.id)}"
             tabindex="0" role="button" aria-label="Open details for ${esc(i.title)}">
      ${mediaHTML(i)}
      <div class="card-body">
        <div class="card-top">
          <span class="card-cat">${esc(catName(i.category))}</span>
          <span class="card-date">${esc(period(i))}</span>
        </div>
        <h3 class="card-title">${esc(i.title)}</h3>
        <p class="card-meta">${esc([i.role, i.org].filter(Boolean).join(" · "))}</p>
        ${i.award ? `<span class="award">🏆 ${esc(i.award)}</span>` : ""}
        <p class="card-sum">${esc(i.summary || "")}</p>
        <div class="tags">${(i.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </article>`).join("");
  observeReveal();
}
renderGrid();

/* ===================== timeline ===================== */
qs("#timeline").innerHTML = sorted.map(i => `
  <li class="tl-item reveal">
    <div class="tl-date">${esc(period(i))}</div>
    <h3 class="tl-title">${esc(i.title)}</h3>
    <p class="tl-org">${esc(i.org || "")}${i.award ? " · 🏆 " + esc(i.award) : ""}</p>
  </li>`).join("");

/* ===================== skills ===================== */
qs("#skills-list").innerHTML = (SITE.skills || []).map(s => `
  <div class="skill reveal">
    <div class="skill-top"><b>${esc(s.name)}</b><span>${esc(s.level)}%</span></div>
    <div class="bar"><i data-w="${esc(s.level)}"></i></div>
  </div>`).join("");

/* ===================== modal ===================== */
const modal = qs("#modal");
let lastFocus = null;

function openModal(id){
  const i = SITE.items.find(x => x.id === id);
  if (!i) return;
  lastFocus = document.activeElement;
  qs("#modalBody").innerHTML = `
    ${i.image ? `<div class="modal-hero"><img src="${esc(i.image)}" alt="${esc(i.title)}"
        onerror="this.closest('.modal-hero').remove()"></div>` : ""}
    <div class="modal-inner">
      <span class="card-cat">${esc(catName(i.category))}</span>
      <h3 id="modalTitle">${esc(i.title)}</h3>
      <p class="card-meta">${esc([i.role, i.org].filter(Boolean).join(" · "))}</p>
      ${i.award ? `<span class="award">🏆 ${esc(i.award)}</span>` : ""}
      <ul>${(i.description || []).map(d => `<li>${esc(d)}</li>`).join("")}</ul>
      <div class="tags" style="margin-top:18px">
        ${(i.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}
      </div>
      <div class="kv">
        <div><span>Period</span><b>${esc(period(i)) || "—"}</b></div>
        <div><span>Location</span><b>${esc(i.location || "—")}</b></div>
        <div><span>Organization</span><b>${esc(i.org || "—")}</b></div>
      </div>
      <div class="links" style="justify-content:flex-start">
        ${(i.links || []).map(l =>
          `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}
      </div>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  qs("#modalClose").focus();
}

function closeModal(){
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  qs("#modalBody").innerHTML = "";
  lastFocus?.focus();
}

document.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) return closeModal();
  const card = e.target.closest(".card");
  if (card) openModal(card.dataset.id);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") return closeModal();
  if ((e.key === "Enter" || e.key === " ") && document.activeElement?.classList.contains("card")){
    e.preventDefault();
    openModal(document.activeElement.dataset.id);
  }
});

/* ===================== reveal / counters / bars ===================== */
function countUp(el){
  if (el._done) return; el._done = true;
  const to = Number(el.dataset.to) || 0;
  if (REDUCED) { el.textContent = to; return; }
  const t0 = performance.now(), dur = 1200;
  const step = t => {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function activate(el){
  el.classList.add("in");
  if (el.matches("[data-to]")) countUp(el);
  qsa("[data-to]", el).forEach(countUp);
  qsa(".bar i", el).forEach(b => { b.style.width = b.dataset.w + "%"; });
}

function getIO(){
  if (!("IntersectionObserver" in window)) return null;
  if (!getIO._io) {
    getIO._io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        activate(en.target);
        obs.unobserve(en.target);
      });
    }, { threshold: .15, rootMargin: "0px 0px -8% 0px" });
  }
  return getIO._io;
}

function observeReveal(){
  const els = qsa(".reveal:not(.in)");
  const obs = getIO();
  if (!obs) return els.forEach(activate);
  els.forEach(el => obs.observe(el));
}
observeReveal();

/* ===================== theme / menu / progress / scroll-spy ===================== */
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.dataset.theme = saved;

qs("#themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

const menuBtn = qs("#menuBtn"), navLinks = qs("#navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

const bar = qs("#progress");
addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
}, { passive: true });

if (hasIO) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      qsa(".nav-links a").forEach(a =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["work", "journey", "skills", "contact"].forEach(id => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
}