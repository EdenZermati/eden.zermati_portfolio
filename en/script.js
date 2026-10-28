
const P = [
  {
    "id": "ecg",
    "t": "ECG arrhythmia detection",
    "c": [
      "ml",
      "sante"
    ],
    "ty": "Personal project",
    "y": "2026",
    "f": 1,
    "k": "0.87",
    "img": "../images/couvertures/ecg.svg",
    "p": "Detect abnormal ECG beats in patients.",
    "m": "I prepared 101,015 heartbeats and compared logistic regression, a Random Forest and a 1D CNN. Patients were kept separate between training and testing.",
    "r": "The best ROC-AUC reached 0.87 on 15 test patients. I also examined missed abnormalities and false alarms.",
    "tl": [
      "Python",
      "scikit-learn",
      "PyTorch"
    ],
    "lk": "projets/ecg.html"
  },
  {
    "id": "pfas",
    "t": "National analysis of industrial PFAS discharges",
    "c": [
      "stats",
      "sante"
    ],
    "ty": "Internship",
    "y": "2025",
    "f": 1,
    "k": "13",
    "confidential": true,
    "img": "../images/couvertures/pfas.svg",
    "p": "Bring public data on industrial PFAS discharges together for analysis at national level.",
    "m": "I combined data from 13 public sources using Python and VBA, then carried out statistical analyses and created visualisations with Power BI and QGIS.",
    "r": "For confidentiality reasons I cannot share the results obtained during this internship. The project page describes my contribution and the methods used.",
    "tl": [
      "Python",
      "VBA",
      "QGIS",
      "Power BI"
    ],
    "lk": "projets/pfas.html"
  },
  {
    "id": "pbi",
    "t": "Retail sales analysis with Power BI",
    "c": [
      "bi"
    ],
    "ty": "Personal project",
    "y": "2026",
    "f": 1,
    "k": "8 pages",
    "img": "../images/couvertures/dashboard-01-vue-ensemble.png",
    "p": "Explore sales and purchasing habits across a fashion retail network of 35 stores in seven countries.",
    "m": "I prepared 6.4 million rows with Python and built eight Power BI pages with more than twenty DAX measures.",
    "r": "Very loyal customers account for about 21% of customers and 48.4% of net sales. The dataset is synthetic.",
    "tl": [
      "Power BI",
      "DAX",
      "Python",
      "pandas"
    ],
    "lk": "projets/dashboard.html"
  },
  {
    "id": "meta",
    "t": "Phthalates and childhood asthma meta-analysis",
    "c": [
      "stats",
      "sante"
    ],
    "ty": "Internship",
    "y": "2024",
    "k": "30",
    "confidential": true,
    "img": "../images/couvertures/meta.svg",
    "p": "Study the relationship between phthalate exposure and childhood asthma using 30 published studies.",
    "m": "After working in a pair on the preliminary selection, I assessed feasibility and carried out the meta-analysis independently in R with metafor.",
    "r": "For confidentiality reasons I cannot share the results obtained during this internship. The project page describes my contribution and the methods used.",
    "tl": [
      "R",
      "metafor",
      "PRISMA",
      "Meta-analysis"
    ],
    "lk": "projets/meta-analyse.html"
  },
  {
    "id": "mode",
    "t": "Sealka — Digital wardrobe and virtual try-on",
    "c": [
      "app"
    ],
    "ty": "Personal project",
    "y": "2026",
    "f": 1,
    "k": "AI",
    "img": "../images/couvertures/sealka-logo.jpg",
    "p": "Organise a digital wardrobe, try clothes on a photo and share the result with someone close.",
    "m": "I designed the concept and screens and built the prototype with coding assistance from Codex. Virtual try-on uses the FASHN API and the data is managed with Supabase.",
    "r": "The flow was tested on Android, from selecting a garment to trying it on and sharing the result. I did not train an AI model.",
    "tl": [
      "React Native",
      "TypeScript",
      "Supabase",
      "AI"
    ],
    "lk": "projets/sealka.html"
  },
  {
    "id": "emg",
    "t": "EMG-controlled mini prosthesis",
    "c": [
      "ml",
      "sante"
    ],
    "ty": "Academic project",
    "y": "2024",
    "k": "EMG",
    "img": "../images/couvertures/prothese-03-mini-prothese.png",
    "p": "Control a robotic finger using muscle contractions in the forearm.",
    "m": "I worked in a team of three. We connected EMG acquisition and classification in MATLAB to the finger control system using Arduino.",
    "r": "All 12 validation images were classified correctly. The demonstration worked with some classification errors and a delay of a few seconds.",
    "tl": [
      "EMG",
      "MATLAB",
      "Arduino",
      "Transfer learning"
    ],
    "lk": "projets/prothese.html"
  },
  {
    "id": "tele",
    "t": "Secure health web service",
    "c": [
      "sante"
    ],
    "ty": "Academic project",
    "y": "2025",
    "k": "API",
    "img": "../images/couvertures/tele.svg",
    "p": "Manage laboratory test results with different access rights for patients and healthcare professionals.",
    "m": "I adapted a Python API and its access controls using MySQL and Fernet encryption. The data model was designed with two other students.",
    "r": "All four HTTP methods were tested manually with the laboratory role. All test data is fictional.",
    "tl": [
      "Python",
      "MySQL",
      "REST API",
      "Encryption"
    ],
    "lk": "projets/telemedecine.html"
  }
];

const F = [["all", "All"], ["ml", "Machine Learning"], ["bi", "BI"], ["stats", "Statistics"], ["sante", "Health"], ["app", "Applications"]];
let cur = "all";
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));

function cover(project) {
  const base = "../images/couvertures/";
  if (project.id === "pbi") {
    return `<span class="project-cover project-cover--pbi" aria-hidden="true">
      <span class="project-bi-header">
        <span class="project-bi-brand"><svg viewBox="0 0 30 30" width="26" height="26" focusable="false"><rect x="2" y="15" width="7" height="13" rx="2" fill="#e8b500"/><rect x="11" y="9" width="7" height="19" rx="2" fill="#f2c811"/><rect x="20" y="2" width="7" height="26" rx="2" fill="#ffd94a"/></svg><span>Power BI</span></span>
        <span class="project-bi-pages">Report preview</span>
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
  return `<button type="button" class="c rv" data-id="${project.id}" aria-label="Read about ${escapeHTML(project.t)}">${cover(project)}<span class="cb"><span class="m">${escapeHTML(metadata)}</span><span class="project-title">${escapeHTML(project.t)}</span><span class="project-description">${escapeHTML(project.p)}</span><span class="tg">${project.tl.slice(0, 4).map(tool => `<span>${escapeHTML(tool)}</span>`).join("")}</span><span class="project-card-footer"><span class="project-card-action">View project <span aria-hidden="true">↗</span></span></span></span></button>`;
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
    kicker.textContent = "Project at a glance";
    $("dm").before(kicker);
  }
  $("dm").textContent = [project.ty, project.y].filter(Boolean).join(" · ");
  $("dt").textContent = project.t;
  $("dp").textContent = project.p;
  $("dme").textContent = project.m;
  $("dr").textContent = project.r;
  const labels = [["dp", "Goal"], ["dme", "What I did"], ["dr", project.confidential ? "Confidentiality" : "Key takeaway"]];
  labels.forEach(([paragraphId, title]) => {
    const heading = $(paragraphId).previousElementSibling;
    if (heading && heading.tagName === "H4") heading.textContent = title;
  });
  $("dr").classList.toggle("project-confidential", Boolean(project.confidential));
  $("dtg").innerHTML = project.tl.map(tool => `<span>${escapeHTML(tool)}</span>`).join("");
  $("dlk").innerHTML = `<a class="btn f" href="${escapeHTML(project.lk)}">View project details <span aria-hidden="true">→</span></a>`;
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
if (dashboardHighlight) dashboardHighlight.textContent = "6.4M rows · 8 pages";
