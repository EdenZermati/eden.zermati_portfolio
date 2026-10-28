
const P = [
  {
    id: "ecg", t: "Détection d’arythmies ECG", c: ["ml", "sante"],
    ty: "Personnel", y: "2026", f: 1, k: "0,87",
    img: "images/couvertures/ecg.svg",
    p: "Repérer les battements ECG anormaux chez des patients.",
    m: "J’ai préparé 101 015 battements puis comparé une régression logistique et un Random Forest à un CNN 1D. L’évaluation sépare les patients de l’entraînement et du test.",
    r: "La meilleure ROC-AUC atteint 0,87 sur 15 patients de test. J’ai aussi étudié les anomalies manquées et les fausses alertes.",
    tl: ["Python", "scikit-learn", "PyTorch"], lk: "projets/ecg.html"
  },
  {
    id: "pfas", t: "Analyse nationale des rejets de PFAS", c: ["stats", "sante"],
    ty: "Stage", y: "2025", f: 1, k: "13", confidential: true,
    img: "images/couvertures/pfas.svg",
    p: "Centraliser les données publiques sur les rejets industriels de PFAS pour les analyser à l’échelle nationale.",
    m: "J’ai regroupé les données de 13 bases publiques avec Python et VBA puis réalisé les analyses statistiques et les visualisations avec Power BI et QGIS.",
    r: "Pour des raisons de confidentialité je ne peux pas partager les résultats obtenus pendant ce stage. La page présente mon rôle et la méthode suivie.",
    tl: ["Python", "VBA", "QGIS", "Power BI"], lk: "projets/pfas.html"
  },
  {
    id: "pbi", t: "Analyse des ventes avec Power BI", c: ["bi"],
    ty: "Personnel", y: "2026", f: 1, k: "8 pages",
    img: "images/couvertures/dashboard-01-vue-ensemble.png",
    p: "Analyser les ventes et les habitudes d’achat d’un réseau de 35 magasins de mode dans 7 pays.",
    m: "J’ai préparé 6,4 millions de lignes avec Python puis construit huit pages Power BI et plus de vingt mesures DAX pour explorer les ventes et les clients.",
    r: "Les clients très fidèles représentent environ 21 % des clients et 48,4 % du chiffre d’affaires net. L’analyse repose sur des données synthétiques.",
    tl: ["Power BI", "DAX", "Python", "pandas"], lk: "projets/dashboard.html"
  },
  {
    id: "meta", t: "Méta-analyse phtalates et asthme", c: ["stats", "sante"],
    ty: "Stage", y: "2024", k: "30", confidential: true,
    img: "images/couvertures/meta.svg",
    p: "Étudier le lien entre l’exposition aux phtalates et l’asthme chez l’enfant à partir de 30 études publiées.",
    m: "Après une phase de sélection en binôme j’ai évalué la faisabilité puis réalisé la méta-analyse en autonomie sous R avec metafor.",
    r: "Pour des raisons de confidentialité je ne peux pas partager les résultats obtenus pendant ce stage. La page présente mon rôle et la méthode suivie.",
    tl: ["R", "metafor", "PRISMA", "Méta-analyse"], lk: "projets/meta-analyse.html"
  },
  {
    id: "mode", t: "Sealka et l’essayage virtuel", c: ["app"],
    ty: "Personnel", y: "2026", f: 1, k: "IA",
    img: "images/couvertures/sealka-logo.jpg",
    p: "Organiser son dressing et essayer un vêtement sur sa photo avant de demander l’avis d’un proche.",
    m: "J’ai conçu le concept et les écrans puis réalisé le prototype avec l’assistance de Codex pour le développement. L’essayage utilise l’API FASHN et les données sont gérées avec Supabase.",
    r: "Le parcours a été testé sur Android du choix d’un vêtement à l’essayage et au partage du résultat. Je n’ai pas entraîné de modèle d’IA.",
    tl: ["React Native", "TypeScript", "Supabase", "IA"], lk: "projets/sealka.html"
  },
  {
    id: "emg", t: "Mini-prothèse commandée par EMG", c: ["ml", "sante"],
    ty: "Académique", y: "2024", k: "EMG",
    img: "images/couvertures/prothese-03-mini-prothese.png",
    p: "Commander un doigt robotique à partir des contractions musculaires de l’avant-bras.",
    m: "J’ai participé à ce projet en équipe de trois. Nous avons relié l’acquisition EMG et la classification sous MATLAB à la commande du doigt avec Arduino.",
    r: "Les 12 images de validation ont été bien classées. La démonstration a fonctionné avec quelques erreurs et un délai de quelques secondes.",
    tl: ["EMG", "MATLAB", "Arduino", "Transfer learning"], lk: "projets/prothese.html"
  },
  {
    id: "tele", t: "Web service de santé sécurisé", c: ["sante"],
    ty: "Académique", y: "2025", k: "API",
    img: "images/couvertures/tele.svg",
    p: "Gérer des résultats d’examens biologiques avec des droits différents pour les patients et les professionnels de santé.",
    m: "J’ai adapté une API Python et les contrôles d’accès avec une base MySQL et le chiffrement Fernet. Le modèle de données a été conçu avec deux camarades.",
    r: "Les quatre méthodes HTTP ont été testées manuellement avec le profil laboratoire. Les données d’essai sont fictives.",
    tl: ["Python", "MySQL", "API REST", "Chiffrement"], lk: "projets/telemedecine.html"
  }
];

const F = [["all", "Tous"], ["ml", "Machine Learning"], ["bi", "BI"], ["stats", "Statistiques"], ["sante", "Santé"], ["app", "Applications"]];
let cur = "all";
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));

function cover(project) {
  const base = "images/couvertures/";
  if (project.id === "pbi") {
    return `<span class="project-cover project-cover--pbi" aria-hidden="true">
      <span class="project-bi-header">
        <span class="project-bi-brand"><svg viewBox="0 0 30 30" width="26" height="26" focusable="false"><rect x="2" y="15" width="7" height="13" rx="2" fill="#e8b500"/><rect x="11" y="9" width="7" height="19" rx="2" fill="#f2c811"/><rect x="20" y="2" width="7" height="26" rx="2" fill="#ffd94a"/></svg><span>Power BI</span></span>
        <span class="project-bi-pages">Extrait du rapport</span>
      </span>
      <span class="project-bi-window"><svg class="project-bi-chart" viewBox="0 276 1100 432" focusable="false"><image href="${base}dashboard-01-vue-ensemble.png" x="0" y="0" width="1944" height="1008" preserveAspectRatio="xMidYMid meet"/></svg></span>
    </span>`;
  }
  if (project.id === "mode") {
    return `<span class="project-cover project-cover--app" aria-hidden="true"><img class="project-logo" src="${base}sealka-logo.jpg" alt="" loading="lazy"><span class="project-phone"><img src="${base}sealka-01-explorer.jpg" alt="" loading="lazy"></span></span>`;
  }
  const files = { ecg: "ecg.svg", pfas: "pfas.svg", meta: "meta.svg", emg: "prothese-03-mini-prothese.png", tele: "tele.svg" };
  return `<span class="project-cover project-cover--${project.id}" aria-hidden="true"><img src="${base}${files[project.id]}" alt="" loading="lazy" decoding="async"></span>`;
}

function card(project) {
  const category = F.find(filter => filter[0] === project.c[0]);
  const metadata = [category ? category[1] : "", project.ty, project.y].filter(Boolean).join(" · ");
  return `<button type="button" class="c rv" data-id="${project.id}" aria-label="En savoir plus sur ${escapeHTML(project.t)}">${cover(project)}<span class="cb"><span class="m">${escapeHTML(metadata)}</span><span class="project-title">${escapeHTML(project.t)}</span><span class="project-description">${escapeHTML(project.p)}</span><span class="tg">${project.tl.slice(0, 4).map(tool => `<span>${escapeHTML(tool)}</span>`).join("")}</span><span class="project-card-footer"><span class="project-card-action">Voir le projet <span aria-hidden="true">↗</span></span></span></span></button>`;
}

function draw() {
  const visible = P.filter(project => cur === "all" || project.c.includes(cur));
  const featured = visible.filter(project => project.f);
  const others = visible.filter(project => !project.f);
  $("gf").innerHTML = featured.map(card).join("");
  $("go").innerHTML = others.map(card).join("");
  $("s1").style.display = featured.length ? "" : "none";
  $("s2").style.display = others.length ? "" : "none";
  document.querySelectorAll(".c").forEach(element => {
    io.observe(element);
    element.onclick = () => openProject(element.dataset.id);
  });
  $("flt").innerHTML = F.map(filter => `<button type="button" class="${filter[0] === cur ? "on" : ""}" data-f="${filter[0]}" aria-pressed="${filter[0] === cur}">${escapeHTML(filter[1])}</button>`).join("");
  document.querySelectorAll("#flt button").forEach(button => {
    button.onclick = () => { cur = button.dataset.f; draw(); };
  });
}

function openProject(id) {
  const project = P.find(item => item.id === id);
  if (!project) return;
  const dialog = $("dg");
  if (!$("project-dialog-kicker")) {
    const kicker = document.createElement("p");
    kicker.id = "project-dialog-kicker";
    kicker.className = "project-dialog-kicker";
    kicker.textContent = "Le projet en bref";
    $("dm").before(kicker);
  }
  $("dm").textContent = [project.ty, project.y].filter(Boolean).join(" · ");
  $("dt").textContent = project.t;
  $("dp").textContent = project.p;
  $("dme").textContent = project.m;
  $("dr").textContent = project.r;
  const labels = [["dp", "Objectif"], ["dme", "Ce que j’ai fait"], ["dr", project.confidential ? "Confidentialité" : "À retenir"]];
  labels.forEach(([paragraphId, title]) => {
    const heading = $(paragraphId).previousElementSibling;
    if (heading && heading.tagName === "H4") heading.textContent = title;
  });
  $("dr").classList.toggle("project-confidential", Boolean(project.confidential));
  $("dtg").innerHTML = project.tl.map(tool => `<span>${escapeHTML(tool)}</span>`).join("");
  $("dlk").innerHTML = `<a class="btn f" href="${escapeHTML(project.lk)}">Voir le projet en détail <span aria-hidden="true">→</span></a>`;
  dialog.setAttribute("aria-labelledby", "dt");
  dialog.showModal();
  dialog.scrollTop = 0;
}

$("cl").onclick = () => $("dg").close();
$("dg").onclick = event => {
  const dialog = $("dg");
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
};

const io = typeof IntersectionObserver === "function" ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: .12 }) : { observe(element) { element.classList.add("in"); } };

draw();
document.querySelectorAll(".rv").forEach(element => io.observe(element));
const dashboardHighlight = document.querySelector('.hs a[href="projets/dashboard.html"] small');
if (dashboardHighlight) dashboardHighlight.textContent = "6,4 M de lignes · 8 pages";
