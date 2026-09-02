const gate = document.querySelector("#profile-gate");
const form = document.querySelector("#profile-form");
const coupon = document.querySelector("#coupon");
const personalNodes = document.querySelectorAll("[data-personal]");
const needCards = document.querySelectorAll("[data-need-card]");
const livePreview = document.querySelector("#live-preview");
const profileChip = document.querySelector("#profile-chip");
const resetProfile = document.querySelector("#reset-profile");
const variantNote = document.querySelector("#variant-note");
const toast = document.querySelector("#toast");
const segmentImages = document.querySelectorAll("[data-segment-image]");
const imageSegment = document.querySelector("#image-segment");
const selectedReco = document.querySelector("#selected-reco");
const matrixBody = document.querySelector("#matrix-body");
const productCards = [...document.querySelectorAll("[data-product-card]")];

let toastTimer;

const ageLabels = {
  "18-24": "18-24 ans",
  "25-34": "25-34 ans",
  "35-44": "35-44 ans",
  "45+": "45 ans et plus"
};

const genderLabels = {
  femme: "Femme",
  homme: "Homme"
};

const needLabels = {
  fresh: "Fraicheur racines",
  strong: "Force & densite",
  soft: "Douceur barbe"
};

const products = {
  deodorantStick: {
    badge: "Iconique",
    title: "Déodorant stick Fleur de Coton",
    desc: "Format stick Respire, usage quotidien, frais et pratique pour profils actifs.",
    price: "11.90€",
    image: "assets/images/real-products/deodorant-stick.jpg",
    alt: "Déodorant Stick Respire Fleur de Coton"
  },
  brumeSolaire: {
    badge: "Nomade",
    title: "Brume Solaire Protection Urbaine",
    desc: "Protection facile à réappliquer, adaptée ville, sorties et routine rapide.",
    price: "16.90€",
    image: "assets/images/real-products/brume-solaire-spf50.jpg",
    alt: "Brume Solaire Protection Urbaine SPF50 Respire"
  },
  routineImperfections: {
    badge: "Routine",
    title: "Routine SOS Imperfections",
    desc: "Routine complète pour peau nette, utile quand rythme, sport et stress marquent le visage.",
    price: "56.60€",
    image: "assets/images/real-products/routine-sos-imperfections.jpg",
    alt: "Routine SOS Imperfections Respire"
  },
  serumGlow: {
    badge: "Éclat",
    title: "Sérum Glow & Protect",
    desc: "Sérum vitamine C SPF30 pour éclat, protection et bonne mine quotidienne.",
    price: "27.90€",
    image: "assets/images/real-products/serum-glow-protect.jpg",
    alt: "Sérum Glow & Protect Respire"
  },
  huileDemaquillante: {
    badge: "Doux",
    title: "Huile Lactée Démaquillante",
    desc: "Nettoyage doux, peau nette et confortable, bon socle routine visage.",
    price: "17.90€",
    image: "assets/images/real-products/huile-lactee-demaquillante.jpg",
    alt: "Huile Lactée Démaquillante Respire"
  },
  soinLevres: {
    badge: "Collagène",
    title: "Soin Lèvres Collagène Booster",
    desc: "Soin lèvres SPF aux peptides, logique collagène déjà crédible dans univers Respire.",
    price: "19.90€",
    image: "assets/images/real-products/soin-levres-collagene-booster.jpg",
    alt: "Soin Lèvres Collagène Booster Respire"
  },
  duoBonneMine: {
    badge: "Bundle",
    title: "Duo SOS Bonne Mine",
    desc: "Sérum glow + stick regard : réponse fatigue, teint terne et routine visible.",
    price: "42.95€",
    image: "assets/images/real-products/duo-sos-bonne-mine.jpg",
    alt: "Duo SOS Bonne Mine Respire"
  },
  stickSolaire: {
    badge: "SPF50+",
    title: "Stick Solaire Matifiant SPF50+",
    desc: "Protection solaire invisible et matifiante, utile en ville et au quotidien.",
    price: "13.90€",
    image: "assets/images/real-products/stick-solaire-spf50.jpg",
    alt: "Stick Solaire Matifiant SPF50+ Respire"
  },
  duoHydratation: {
    badge: "Hydratation",
    title: "Duo Protection & Hydratation Quotidienne",
    desc: "Duo soin + protection pour peau plus exigeante, confort et prévention.",
    price: "39.70€",
    image: "assets/images/real-products/duo-protection-hydratation.jpg",
    alt: "Duo Protection & Hydratation Quotidienne Respire"
  },
  nettoyantStick: {
    badge: "Nettoyant",
    title: "Soin Nettoyant Visage stick",
    desc: "Stick nettoyant doux et pratique, cohérent avec routine barbe/visage rapide.",
    price: "13.90€",
    image: "assets/images/real-products/soin-nettoyant-visage-stick.jpg",
    alt: "Soin Nettoyant Visage stick Respire"
  },
  duoJourneeEte: {
    badge: "Outdoor",
    title: "Duo Journée d’Été",
    desc: "Déodorant + protection solaire, logique chaleur, transpiration et cheveux exposés.",
    price: "34.80€",
    image: "assets/images/real-products/duo-journee-ete.jpg",
    alt: "Duo Journée d’Été Respire"
  },
  stickRegard: {
    badge: "Fraîcheur",
    title: "Stick Fraîcheur Regard",
    desc: "Geste frais à la vitamine C pour profils qui cherchent effet défatiguant rapide.",
    price: "19.90€",
    image: "assets/images/real-products/stick-fraicheur-regard.jpg",
    alt: "Stick Fraîcheur Regard Respire"
  }
};

const segments = {
  "femme|18-24": {
    gender: "femme",
    age: "18-24",
    need: "fresh",
    image: "assets/images/segments-final/femme-18-24.jpg",
    alt: "Visuel Respire femme 18-24",
    heroTitle: "Racines fraiches, cheveux legers, routine rapide.",
    heroA: "Pour 18-24 ans : routine cuir chevelu anti-odeurs, pensee pour sport, transports, soirees et cheveux vite lourds.",
    heroB: "Racines propres plus longtemps : gestes simples pour garder cheveux frais entre deux lavages.",
    diagnosticTitle: "Segment femme 18-24 : fraicheur et rythme intense.",
    diagnosticText: "Recommandation : Déodorant stick, Brume Solaire Protection Urbaine, Routine SOS Imperfections et Stick Fraîcheur Regard.",
    title: "Fraicheur, racines grasses, routine rapide",
    why: "18-24 : besoin frequent de fraicheur immediate, format nomade, prix accessible, usage post-sport/transport.",
    items: ["deodorantStick", "brumeSolaire", "routineImperfections", "stickRegard"]
  },
  "femme|25-34": {
    gender: "femme",
    age: "25-34",
    need: "strong",
    image: "assets/images/segments-final/femme-25-34.jpg",
    alt: "Visuel Respire femme 25-34",
    heroTitle: "Cuir chevelu equilibre, longueurs lumineuses.",
    heroA: "Pour 25-34 ans : routine beaute complete qui combine cuir chevelu sain, longueurs nourries et eclat.",
    heroB: "Une routine cheveux plus reguliere, plus sensorielle, pour garder equilibre et brillance au quotidien.",
    diagnosticTitle: "Segment femme 25-34 : equilibre et eclat.",
    diagnosticText: "Recommandation : Sérum Glow & Protect, Huile Lactée Démaquillante, Soin Lèvres Collagène Booster et Stick Solaire.",
    title: "Equilibre cuir chevelu, longueurs, eclat",
    why: "25-34 : routine beaute plus installee, attente de resultats visibles, interet pour cure et protection.",
    items: ["serumGlow", "huileDemaquillante", "soinLevres", "stickSolaire"]
  },
  "femme|35-44": {
    gender: "femme",
    age: "35-44",
    need: "strong",
    image: "assets/images/segments-final/femme-35-44.jpg",
    alt: "Visuel Respire femme 35-44",
    heroTitle: "Densite percue, racines tonifiees, cheveux proteges.",
    heroA: "Pour 35-44 ans : routine densite qui cible cuir chevelu, nutrition et protection quotidienne.",
    heroB: "Soin racines + cure 30 jours : approche preventive pour cheveux fatigues par stress, chaleur et pollution.",
    diagnosticTitle: "Segment femme 35-44 : densite et prevention.",
    diagnosticText: "Recommandation : Duo SOS Bonne Mine, Sérum Glow & Protect, Stick Solaire Matifiant et Soin Lèvres Collagène Booster.",
    title: "Densite, nutrition, protection quotidienne",
    why: "35-44 : attention plus forte a densite percue, fatigue capillaire, nutrition et prevention.",
    items: ["duoBonneMine", "serumGlow", "stickSolaire", "soinLevres"]
  },
  "femme|45+": {
    gender: "femme",
    age: "45+",
    need: "strong",
    image: "assets/images/segments-final/femme-45-plus.jpg",
    alt: "Visuel Respire femme 45 ans et plus",
    heroTitle: "Confort racines, douceur longueurs, routine douce.",
    heroA: "Pour 45 ans et plus : routine douce pour cuir chevelu sensible, cheveux plus secs et entretien regulier.",
    heroB: "Des gestes naturels, doux et constants pour prendre soin du cuir chevelu et nourrir les longueurs.",
    diagnosticTitle: "Segment femme 45+ : confort et nutrition.",
    diagnosticText: "Recommandation : Duo Protection & Hydratation, Huile Lactée Démaquillante, Soin Lèvres Collagène Booster et Stick Solaire.",
    title: "Confort cuir chevelu, nutrition, routine douce",
    why: "45+ : besoin de douceur, cuir chevelu plus sensible, cheveux plus secs, routine rassurante.",
    items: ["duoHydratation", "huileDemaquillante", "soinLevres", "stickSolaire"]
  },
  "homme|18-24": {
    gender: "homme",
    age: "18-24",
    need: "fresh",
    image: "assets/images/segments-final/homme-18-24.jpg",
    alt: "Visuel Respire homme 18-24",
    heroTitle: "Cheveux frais, racines nettes, zero prise de tete.",
    heroA: "Pour 18-24 ans : routine anti-odeurs et racines nettes, adaptee sport, casquette, transports et sorties.",
    heroB: "Moins d'odeurs, plus de propre : routine courte pour cheveux vite lourds et debut de barbe.",
    diagnosticTitle: "Segment homme 18-24 : fraicheur et usage rapide.",
    diagnosticText: "Recommandation : Déodorant stick, Soin Nettoyant Visage stick, Brume Solaire Protection Urbaine et Routine SOS Imperfections.",
    title: "Fraicheur, odeurs, racines nettes",
    why: "18-24 : besoin pratique, prix accessible, odeurs post-sport/transport, routine courte.",
    items: ["deodorantStick", "nettoyantStick", "brumeSolaire", "routineImperfections"]
  },
  "homme|25-34": {
    gender: "homme",
    age: "25-34",
    need: "soft",
    image: "assets/images/segments-final/homme-25-34.jpg",
    alt: "Visuel Respire homme 25-34",
    heroTitle: "Barbe propre, cuir chevelu sain, routine bureau.",
    heroA: "Pour 25-34 ans : routine nette et non grasse pour barbe, cuir chevelu et cheveux exposes au quotidien.",
    heroB: "Une barbe plus douce et des racines plus propres, avec gestes rapides avant travail ou sortie.",
    diagnosticTitle: "Segment homme 25-34 : barbe et cuir chevelu.",
    diagnosticText: "Recommandation : Déodorant stick, Soin Nettoyant Visage stick, Sérum Glow & Protect et Stick Solaire Matifiant.",
    title: "Barbe propre, cuir chevelu sain, usage bureau",
    why: "25-34 : barbe plus installee, attente de routine efficace, propre, discrete et rapide.",
    items: ["deodorantStick", "nettoyantStick", "serumGlow", "stickSolaire"]
  },
  "homme|35-44": {
    gender: "homme",
    age: "35-44",
    need: "strong",
    image: "assets/images/segments-final/homme-35-44.jpg",
    alt: "Visuel Respire homme 35-44",
    heroTitle: "Racines tonifiees, barbe nourrie, routine force.",
    heroA: "Pour 35-44 ans : routine densite percue, cure 30 jours et soin barbe sans fini gras.",
    heroB: "Cuir chevelu tonifie, barbe plus souple, cheveux entretenus : routine preventive simple.",
    diagnosticTitle: "Segment homme 35-44 : densite et barbe.",
    diagnosticText: "Recommandation : Duo Journée d’Été, Sérum Glow & Protect, Stick Solaire Matifiant et Soin Lèvres Collagène Booster.",
    title: "Densite racines, barbe douce, cure 30 jours",
    why: "35-44 : besoin de prevention, densite percue, barbe plus dense, entretien regulier.",
    items: ["duoJourneeEte", "serumGlow", "stickSolaire", "soinLevres"]
  },
  "homme|45+": {
    gender: "homme",
    age: "45+",
    need: "soft",
    image: "assets/images/segments-final/homme-45-plus.jpg",
    alt: "Visuel Respire homme 45 ans et plus",
    heroTitle: "Cuir chevelu confortable, barbe nourrie, geste simple.",
    heroA: "Pour 45 ans et plus : routine douce pour cuir chevelu sensible, barbe seche et cheveux plus exigeants.",
    heroB: "Moins d'inconfort, plus de douceur : soin racines, barbe et longueurs avec gestes essentiels.",
    diagnosticTitle: "Segment homme 45+ : confort et entretien.",
    diagnosticText: "Recommandation : Duo Protection & Hydratation, Huile Lactée Démaquillante, Stick Solaire Matifiant et Soin Lèvres Collagène Booster.",
    title: "Cuir chevelu confortable, barbe nourrie, entretien simple",
    why: "45+ : besoin de confort, peau sous barbe, cheveux plus secs, routine courte et rassurante.",
    items: ["duoHydratation", "huileDemaquillante", "stickSolaire", "soinLevres"]
  }
};

function segmentKey(profile) {
  return `${profile.gender}|${profile.age}`;
}

function getSegment(profile) {
  return segments[segmentKey(profile)] || segments["femme|25-34"];
}

function getVariant(profile) {
  const params = new URLSearchParams(window.location.search);
  const forced = params.get("ab");
  if (forced === "A" || forced === "B") return forced;
  const stored = localStorage.getItem("respireABVariant");
  if (stored === "A" || stored === "B") return stored;
  const seed = segmentKey(profile).split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const variant = seed % 2 === 0 ? "A" : "B";
  localStorage.setItem("respireABVariant", variant);
  return variant;
}

function applyPersonalization(profile) {
  const segment = getSegment(profile);
  const variant = getVariant(profile);
  const selectedHero = variant === "A" ? segment.heroA : segment.heroB;

  personalNodes.forEach((node) => {
    const key = node.dataset.personal;
    if (key === "heroTitle") node.textContent = segment.heroTitle;
    if (key === "heroText") node.textContent = selectedHero;
    if (key === "diagnosticTitle") node.textContent = segment.diagnosticTitle;
    if (key === "diagnosticText") node.textContent = segment.diagnosticText;
  });

  needCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.needCard === segment.need);
  });

  document.documentElement.dataset.ab = variant;
  document.documentElement.dataset.need = segment.need;
  document.documentElement.dataset.gender = profile.gender;
  document.documentElement.dataset.age = profile.age;
  variantNote.textContent = `Variante ${variant} - ${genderLabels[profile.gender]} ${ageLabels[profile.age]}`;
  profileChip.hidden = false;
  profileChip.textContent = `${genderLabels[profile.gender]} ${profile.age}`;
  updateSegmentImages(segment, profile);
  updateRecommendations(segment, profile);
}

function updateSegmentImages(segment, profile) {
  segmentImages.forEach((image) => {
    image.src = segment.image;
    image.alt = segment.alt;
  });
  imageSegment.textContent = `${genderLabels[profile.gender]} - ${ageLabels[profile.age]} - visuel adapte`;
}

function updateRecommendations(segment, profile) {
  selectedReco.querySelector("strong").textContent = `${genderLabels[profile.gender]} ${ageLabels[profile.age]} - ${segment.title}`;
  selectedReco.querySelector("p").textContent = segment.why;

  segment.items.forEach((productKey, index) => {
    const product = products[productKey];
    const card = productCards[index];
    if (!product || !card) return;
    card.querySelector("[data-product-image]").src = product.image;
    card.querySelector("[data-product-image]").alt = product.alt;
    card.querySelector("[data-product-badge]").textContent = product.badge;
    card.querySelector("[data-product-title]").textContent = product.title;
    card.querySelector("[data-product-desc]").textContent = product.desc;
    card.querySelector("[data-product-price]").textContent = product.price;
  });
}

function renderMatrix() {
  matrixBody.innerHTML = Object.keys(genderLabels)
    .map((gender) => {
      const cells = Object.keys(ageLabels)
        .map((age) => {
          const segment = segments[`${gender}|${age}`];
          const titles = segment.items.map((key) => products[key].title).join(" + ");
          return `<td><strong>${segment.title}</strong><span>${titles}</span></td>`;
        })
        .join("");
      return `<tr><td>${genderLabels[gender]}</td>${cells}</tr>`;
    })
    .join("");
}

function unlock(profile) {
  localStorage.setItem("respireProfile", JSON.stringify(profile));
  localStorage.setItem("respireCoupon", "RESPIRE10");
  applyPersonalization(profile);
  coupon.hidden = false;
  setTimeout(() => {
    gate.classList.add("is-hidden");
    document.body.classList.remove("is-locked");
  }, 950);
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

function readStoredProfile() {
  try {
    return JSON.parse(localStorage.getItem("respireProfile"));
  } catch {
    return null;
  }
}

function track(eventName, detail = {}) {
  const events = JSON.parse(localStorage.getItem("respireEvents") || "[]");
  events.push({
    eventName,
    detail,
    segment: detail.gender && detail.age ? segmentKey(detail) : null,
    variant: document.documentElement.dataset.ab,
    at: new Date().toISOString()
  });
  localStorage.setItem("respireEvents", JSON.stringify(events.slice(-50)));
}

function currentFormProfile() {
  const data = new FormData(form);
  return {
    gender: data.get("gender"),
    age: data.get("age")
  };
}

function updateLivePreview() {
  const profile = currentFormProfile();
  const missing = !profile.gender || !profile.age;
  if (missing) {
    livePreview.querySelector("strong").textContent = "Completez votre profil";
    livePreview.querySelector("p").textContent = "Votre page changera selon votre sexe et votre tranche d'age.";
    return;
  }
  localStorage.removeItem("respireABVariant");
  const segment = getSegment(profile);
  const variant = getVariant(profile);
  const selectedHero = variant === "A" ? segment.heroA : segment.heroB;
  livePreview.querySelector("strong").textContent = `${genderLabels[profile.gender]} ${ageLabels[profile.age]} - variante ${variant}`;
  livePreview.querySelector("p").textContent = selectedHero;
  applyPersonalization(profile);
}

document.body.classList.add("is-locked");
renderMatrix();

const storedProfile = readStoredProfile();
if (storedProfile?.gender && storedProfile?.age) {
  applyPersonalization(storedProfile);
  gate.classList.add("is-hidden");
  document.body.classList.remove("is-locked");
} else {
  gate.classList.remove("is-hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = currentFormProfile();
  if (!profile.gender || !profile.age) return;
  track("profile_submitted", profile);
  unlock(profile);
  showToast("Code RESPIRE10 active");
});

form.addEventListener("change", () => {
  const profile = currentFormProfile();
  updateLivePreview();
  if (profile.gender && profile.age) {
    track("profile_previewed", profile);
  }
});

profileChip.addEventListener("click", () => {
  gate.classList.remove("is-hidden");
  document.body.classList.add("is-locked");
  showToast("Diagnostic rouvert");
});

resetProfile.addEventListener("click", () => {
  localStorage.removeItem("respireProfile");
  localStorage.removeItem("respireABVariant");
  localStorage.removeItem("respireCoupon");
  form.reset();
  updateLivePreview();
  gate.classList.remove("is-hidden");
  document.body.classList.add("is-locked");
  track("profile_reset");
});

document.querySelectorAll("a[href^='#'], [data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    track(element.dataset.track || "cta_click", {
      label: element.textContent.trim(),
      href: element.getAttribute("href") || null
    });
    if (element.dataset.track === "add") {
      showToast("Produit ajoute - code RESPIRE10 disponible");
    }
  });
});
