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
  scalpSerum: {
    badge: "Racines",
    title: "Serum cuir chevelu",
    desc: "Apaise inconfort, aide racines a rester nettes, fini non gras.",
    price: "24,90 euros",
    image: "assets/images/soin-flash-boutons.jpg",
    alt: "Serum cuir chevelu Respire"
  },
  freshMist: {
    badge: "Nomade",
    title: "Brume cheveux anti-odeurs",
    desc: "Rafraichit entre deux lavages apres sport, transport ou cuisine.",
    price: "18,90 euros",
    image: "assets/images/soin-flash-application.jpg",
    alt: "Brume cheveux Respire"
  },
  beardOil: {
    badge: "Barbe",
    title: "Huile barbe naturelle",
    desc: "Assouplit poil, nourrit peau sous barbe, parfum propre discret.",
    price: "21,90 euros",
    image: "assets/images/homme-barbe-soin.png",
    alt: "Huile barbe Respire"
  },
  beardCleanser: {
    badge: "Nettoyant",
    title: "Nettoyant barbe & visage",
    desc: "Nettoie barbe, peau et racines sans tirer ni alourdir.",
    price: "17,90 euros",
    image: "assets/images/homme-deodorant-application.png",
    alt: "Nettoyant barbe Respire"
  },
  collagenYeast: {
    badge: "Cure",
    title: "Collagene + levure de biere",
    desc: "Cure 30 jours pour accompagner cheveux, peau et ongles.",
    price: "29,90 euros",
    image: "assets/images/duo-stop-boutons-packshot.jpg",
    alt: "Cure collagene et levure de biere Respire"
  },
  repairMask: {
    badge: "Nutrition",
    title: "Masque longueurs reparateur",
    desc: "Nourrit longueurs seches, apporte douceur et facilite coiffage.",
    price: "22,90 euros",
    image: "assets/images/deodorant-fleur-coton-packshot.jpg",
    alt: "Masque cheveux Respire"
  },
  urbanShield: {
    badge: "Protect",
    title: "Spray anti-pollution cheveux",
    desc: "Protege cheveux exposes a ville, chaleur douce et friction.",
    price: "19,90 euros",
    image: "assets/images/deodorant-application.jpg",
    alt: "Spray protection cheveux Respire"
  },
  densitySerum: {
    badge: "Densite",
    title: "Serum racines densite",
    desc: "Massage racines pour cuir chevelu tonifie et routine densite.",
    price: "26,90 euros",
    image: "assets/images/serum-boost-application.jpg",
    alt: "Serum densite Respire"
  },
  soothingCleanser: {
    badge: "Doux",
    title: "Gel lavant cuir chevelu sensible",
    desc: "Nettoyage doux pour cuir chevelu reactif et sensation de tiraillement.",
    price: "16,90 euros",
    image: "assets/images/serum-glow-packshot.jpg",
    alt: "Gel lavant cuir chevelu Respire"
  },
  beardBalm: {
    badge: "Baume",
    title: "Baume barbe & peau seche",
    desc: "Nourrit barbe, limite inconfort sous barbe, fini souple.",
    price: "20,90 euros",
    image: "assets/images/homme-barbe-soin.png",
    alt: "Baume barbe Respire"
  },
  scalpScrub: {
    badge: "Detox",
    title: "Gommage cuir chevelu doux",
    desc: "Aide a decoller residus coiffants et exces de sebum sans agresser.",
    price: "19,90 euros",
    image: "assets/images/skin-house.jpg",
    alt: "Gommage cuir chevelu Respire"
  },
  nightSerum: {
    badge: "Nuit",
    title: "Serum nuit longueurs",
    desc: "Soin sans rincage pour longueurs fatiguees, toucher plus doux au reveil.",
    price: "25,90 euros",
    image: "assets/images/soin-flash-application.jpg",
    alt: "Serum nuit cheveux Respire"
  }
};

const segments = {
  "femme|18-24": {
    gender: "femme",
    age: "18-24",
    need: "fresh",
    image: "assets/images/skin-house.jpg",
    alt: "Visuel Respire femme 18-24",
    heroTitle: "Racines fraiches, cheveux legers, routine rapide.",
    heroA: "Pour 18-24 ans : routine cuir chevelu anti-odeurs, pensee pour sport, transports, soirees et cheveux vite lourds.",
    heroB: "Racines propres plus longtemps : gestes simples pour garder cheveux frais entre deux lavages.",
    diagnosticTitle: "Segment femme 18-24 : fraicheur et rythme intense.",
    diagnosticText: "Recommandation : brume anti-odeurs, serum racines, spray anti-pollution et cure courte pour routine rapide.",
    title: "Fraicheur, racines grasses, routine rapide",
    why: "18-24 : besoin frequent de fraicheur immediate, format nomade, prix accessible, usage post-sport/transport.",
    items: ["freshMist", "scalpSerum", "urbanShield", "collagenYeast"]
  },
  "femme|25-34": {
    gender: "femme",
    age: "25-34",
    need: "strong",
    image: "assets/images/soin-flash-application.jpg",
    alt: "Visuel Respire femme 25-34",
    heroTitle: "Cuir chevelu equilibre, longueurs lumineuses.",
    heroA: "Pour 25-34 ans : routine beaute complete qui combine cuir chevelu sain, longueurs nourries et eclat.",
    heroB: "Une routine cheveux plus reguliere, plus sensorielle, pour garder equilibre et brillance au quotidien.",
    diagnosticTitle: "Segment femme 25-34 : equilibre et eclat.",
    diagnosticText: "Recommandation : serum cuir chevelu, masque longueurs, cure collagene/levure et protection urbaine.",
    title: "Equilibre cuir chevelu, longueurs, eclat",
    why: "25-34 : routine beaute plus installee, attente de resultats visibles, interet pour cure et protection.",
    items: ["scalpSerum", "repairMask", "collagenYeast", "urbanShield"]
  },
  "femme|35-44": {
    gender: "femme",
    age: "35-44",
    need: "strong",
    image: "assets/images/serum-boost-application.jpg",
    alt: "Visuel Respire femme 35-44",
    heroTitle: "Densite percue, racines tonifiees, cheveux proteges.",
    heroA: "Pour 35-44 ans : routine densite qui cible cuir chevelu, nutrition et protection quotidienne.",
    heroB: "Soin racines + cure 30 jours : approche preventive pour cheveux fatigues par stress, chaleur et pollution.",
    diagnosticTitle: "Segment femme 35-44 : densite et prevention.",
    diagnosticText: "Recommandation : serum densite, collagene + levure de biere, masque nutrition et serum cuir chevelu.",
    title: "Densite, nutrition, protection quotidienne",
    why: "35-44 : attention plus forte a densite percue, fatigue capillaire, nutrition et prevention.",
    items: ["densitySerum", "collagenYeast", "repairMask", "scalpSerum"]
  },
  "femme|45+": {
    gender: "femme",
    age: "45+",
    need: "strong",
    image: "assets/images/serum-glow-packshot.jpg",
    alt: "Visuel Respire femme 45 ans et plus",
    heroTitle: "Confort racines, douceur longueurs, routine douce.",
    heroA: "Pour 45 ans et plus : routine douce pour cuir chevelu sensible, cheveux plus secs et entretien regulier.",
    heroB: "Des gestes naturels, doux et constants pour prendre soin du cuir chevelu et nourrir les longueurs.",
    diagnosticTitle: "Segment femme 45+ : confort et nutrition.",
    diagnosticText: "Recommandation : gel lavant doux, cure collagene/levure, masque reparateur et serum nuit.",
    title: "Confort cuir chevelu, nutrition, routine douce",
    why: "45+ : besoin de douceur, cuir chevelu plus sensible, cheveux plus secs, routine rassurante.",
    items: ["soothingCleanser", "collagenYeast", "repairMask", "nightSerum"]
  },
  "homme|18-24": {
    gender: "homme",
    age: "18-24",
    need: "fresh",
    image: "assets/images/homme-barbe-soin.png",
    alt: "Visuel Respire homme 18-24",
    heroTitle: "Cheveux frais, racines nettes, zero prise de tete.",
    heroA: "Pour 18-24 ans : routine anti-odeurs et racines nettes, adaptee sport, casquette, transports et sorties.",
    heroB: "Moins d'odeurs, plus de propre : routine courte pour cheveux vite lourds et debut de barbe.",
    diagnosticTitle: "Segment homme 18-24 : fraicheur et usage rapide.",
    diagnosticText: "Recommandation : brume cheveux, serum cuir chevelu, nettoyant barbe/visage et spray anti-pollution.",
    title: "Fraicheur, odeurs, racines nettes",
    why: "18-24 : besoin pratique, prix accessible, odeurs post-sport/transport, routine courte.",
    items: ["freshMist", "scalpSerum", "beardCleanser", "urbanShield"]
  },
  "homme|25-34": {
    gender: "homme",
    age: "25-34",
    need: "soft",
    image: "assets/images/homme-deodorant-application.png",
    alt: "Visuel Respire homme 25-34",
    heroTitle: "Barbe propre, cuir chevelu sain, routine bureau.",
    heroA: "Pour 25-34 ans : routine nette et non grasse pour barbe, cuir chevelu et cheveux exposes au quotidien.",
    heroB: "Une barbe plus douce et des racines plus propres, avec gestes rapides avant travail ou sortie.",
    diagnosticTitle: "Segment homme 25-34 : barbe et cuir chevelu.",
    diagnosticText: "Recommandation : huile barbe, nettoyant barbe/visage, serum cuir chevelu et brume cheveux.",
    title: "Barbe propre, cuir chevelu sain, usage bureau",
    why: "25-34 : barbe plus installee, attente de routine efficace, propre, discrete et rapide.",
    items: ["beardOil", "beardCleanser", "scalpSerum", "freshMist"]
  },
  "homme|35-44": {
    gender: "homme",
    age: "35-44",
    need: "strong",
    image: "assets/images/deodorant-application.jpg",
    alt: "Visuel Respire homme 35-44",
    heroTitle: "Racines tonifiees, barbe nourrie, routine force.",
    heroA: "Pour 35-44 ans : routine densite percue, cure 30 jours et soin barbe sans fini gras.",
    heroB: "Cuir chevelu tonifie, barbe plus souple, cheveux entretenus : routine preventive simple.",
    diagnosticTitle: "Segment homme 35-44 : densite et barbe.",
    diagnosticText: "Recommandation : serum densite, collagene + levure de biere, huile barbe et baume barbe.",
    title: "Densite racines, barbe douce, cure 30 jours",
    why: "35-44 : besoin de prevention, densite percue, barbe plus dense, entretien regulier.",
    items: ["densitySerum", "collagenYeast", "beardOil", "beardBalm"]
  },
  "homme|45+": {
    gender: "homme",
    age: "45+",
    need: "soft",
    image: "assets/images/duo-stop-boutons-packshot.jpg",
    alt: "Visuel Respire homme 45 ans et plus",
    heroTitle: "Cuir chevelu confortable, barbe nourrie, geste simple.",
    heroA: "Pour 45 ans et plus : routine douce pour cuir chevelu sensible, barbe seche et cheveux plus exigeants.",
    heroB: "Moins d'inconfort, plus de douceur : soin racines, barbe et longueurs avec gestes essentiels.",
    diagnosticTitle: "Segment homme 45+ : confort et entretien.",
    diagnosticText: "Recommandation : gel lavant doux, cure collagene/levure, baume barbe et masque reparateur.",
    title: "Cuir chevelu confortable, barbe nourrie, entretien simple",
    why: "45+ : besoin de confort, peau sous barbe, cheveux plus secs, routine courte et rassurante.",
    items: ["soothingCleanser", "collagenYeast", "beardBalm", "repairMask"]
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
