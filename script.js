const gate = document.querySelector("#profile-gate");
const gateClose = document.querySelector("#gate-close");
const form = document.querySelector("#profile-form");
const coupon = document.querySelector("#coupon");
const personalNodes = document.querySelectorAll("[data-personal]");
const needCards = document.querySelectorAll("[data-need-card]");
const resetProfile = document.querySelector("#reset-profile");
const toast = document.querySelector("#toast");
const segmentImages = document.querySelectorAll("[data-segment-image]");
const selectedReco = document.querySelector("#selected-reco");
const addRoutineButton = document.querySelector("#add-routine");
const productCards = [...document.querySelectorAll("[data-product-card]")];
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterStatus = document.querySelector("#newsletter-status");
const catalogLinks = document.querySelector("#catalog-links");
const cartPanel = document.querySelector("#panier");
const cartLink = document.querySelector(".cart-link");
const cartClose = document.querySelector("#cart-close");
const cartBackdrop = document.querySelector(".cart-backdrop");
const diagnosticModal = document.querySelector("#diagnostic-modal");
const diagnosticClose = document.querySelector("#diagnostic-close");
const diagnosticBackdrop = document.querySelector(".diagnostic-backdrop");

let toastTimer;
let currentRecommendationKeys = [];

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
  fresh: "Fraîcheur racines",
  strong: "Force & densité",
  soft: "Douceur barbe"
};

const products = {
  shampoingEquilibre: { badge: "Équilibre", title: "Shampoing Équilibre", desc: "Nettoie les racines sans les dessécher et aide à garder une sensation fraîche.", price: "14,90€", format: "Shampoing solide", ingredients: "Tous types de cheveux", usage: "2 à 3 fois par semaine", image: "assets/images/concept-products/shampoing-solide-cuir-chevelu.png", alt: "Shampoing solide Respire Équilibre" },
  shampoingPurete: { badge: "Purifiant", title: "Shampoing Pureté", desc: "Nettoie les racines qui regraissent vite et laisse le cuir chevelu léger.", price: "14,90€", format: "250 ml", ingredients: "Argile verte + zinc", usage: "2 fois par semaine", image: "assets/images/concept-products/shampoing-purete.png", alt: "Shampoing Respire Pureté vert" },
  shampoingApaisement: { badge: "Cuir chevelu", title: "Shampoing Apaisement", desc: "Nettoie en douceur les cuirs chevelus sujets aux tiraillements et inconforts.", price: "14,90€", format: "250 ml", ingredients: "Avoine + panthénol", usage: "À chaque lavage", image: "assets/images/concept-products/shampoing-apaisement.png", alt: "Shampoing Respire Apaisement vert" },
  shampoingReparation: { badge: "Souplesse", title: "Shampoing Réparation", desc: "Nettoie les cheveux abîmés et prépare les longueurs au soin réparateur.", price: "15,90€", format: "250 ml", ingredients: "Protéines végétales + huile de coco", usage: "2 à 3 fois par semaine", image: "assets/images/concept-products/shampoing-reparation.png", alt: "Shampoing Respire Réparation rouge" },
  apresHydratant: { badge: "Hydratation", title: "Après-shampoing Hydratant léger", desc: "Démêle sans alourdir et apporte douceur aux longueurs et pointes.", price: "15,90€", format: "200 ml", ingredients: "Acide hyaluronique + aloe vera", usage: "Après chaque shampoing", image: "assets/images/concept-products/apres-shampoing-hydratant-leger.png", alt: "Après-shampoing Respire Hydratant léger bleu" },
  apresNourrissant: { badge: "Réparation", title: "Après-shampoing Nourrissant-réparateur", desc: "Nourrit les longueurs sèches et aide à retrouver une fibre plus souple.", price: "16,90€", format: "200 ml", ingredients: "Beurre de karité + protéines végétales", usage: "Après chaque shampoing", image: "assets/images/concept-products/apres-shampoing-nourrissant-reparateur.png", alt: "Après-shampoing Respire Nourrissant-réparateur rouge" },
  serumScalp: { badge: "Apaisement", title: "Sérum cuir chevelu apaisant", desc: "Soin ciblé sans rinçage pour calmer la sensation d'inconfort et hydrater les racines.", price: "22,90€", format: "30 ml", ingredients: "Niacinamide + panthénol", usage: "Quelques gouttes le soir, 3 fois par semaine", image: "assets/images/concept-products/serum-cuir-chevelu-apaisant.png", alt: "Sérum Respire cuir chevelu apaisant vert" },
  exfoliantScalp: { badge: "Purifiant", title: "Exfoliant-purifiant cuir chevelu", desc: "Décolle les impuretés et résidus pour un cuir chevelu plus net.", price: "19,90€", format: "75 ml", ingredients: "Acide salicylique + argile verte", usage: "Une fois par semaine avant shampoing", image: "assets/images/concept-products/exfoliant-purifiant-cuir-chevelu.png", alt: "Exfoliant Respire cuir chevelu vert" },
  masqueRepair: { badge: "Intense", title: "Masque réparation intense", desc: "Enveloppe les longueurs abîmées et redonne toucher doux et souplesse.", price: "21,90€", format: "200 ml", ingredients: "Céramides + huile d'argan", usage: "Une fois par semaine, 5 à 10 minutes", image: "assets/images/concept-products/masque-reparation-intense.png", alt: "Masque Respire réparation intense rouge" },
  forceVitalite: { badge: "Cure 3 mois", title: "Force & Vitalité", desc: "Cure quotidienne pensée pour accompagner la routine cheveux, peau et ongles.", price: "39,90€", format: "90 gélules", ingredients: "Collagène marin + zinc + vitamines B", usage: "1 gélule par jour pendant 3 mois", image: "assets/images/concept-products/force-vitalite-3-mois.png", alt: "Complément Respire Force & Vitalité rouge" }
};

const segments = {
  "femme|18-24": {
    gender: "femme",
    age: "18-24",
    need: "fresh",
    image: "assets/images/segments-final/femme-18-24-v2.jpg",
    alt: "Visuel Respire femme 18-24",
    heroTitle: "Racines fraîches, cheveux légers, routine rapide.",
    heroA: "Routine cuir chevelu anti-odeurs, pensée pour sport, transports, soirées et cheveux vite lourds.",
    heroB: "Racines propres plus longtemps : gestes simples pour garder des cheveux frais entre deux lavages.",
    diagnosticTitle: "Fraîcheur et rythme intense.",
    diagnosticText: "Routine recommandée : Pureté, Apaisement, Hydratant léger et Exfoliant-purifiant cuir chevelu.",
    title: "Fraîcheur, racines grasses, routine rapide",
    why: "18-24 : besoin fréquent de fraîcheur immédiate, format nomade, prix accessible, usage post-sport/transport.",
    items: ["shampoingPurete", "shampoingApaisement", "apresHydratant", "exfoliantScalp"]
  },
  "femme|25-34": {
    gender: "femme",
    age: "25-34",
    need: "strong",
    image: "assets/images/segments-final/femme-25-34-v2.jpg",
    alt: "Visuel Respire femme 25-34",
    heroTitle: "Cuir chevelu équilibré, longueurs lumineuses.",
    heroA: "Routine beauté complète qui combine cuir chevelu sain, longueurs nourries et éclat.",
    heroB: "Une routine cheveux plus régulière, plus sensorielle, pour garder équilibre et brillance au quotidien.",
    diagnosticTitle: "Équilibre et éclat.",
    diagnosticText: "Routine recommandée : Équilibre, Hydratant léger, Sérum cuir chevelu apaisant et Masque réparation intense.",
    title: "Équilibre cuir chevelu, longueurs, éclat",
    why: "25-34 : routine beauté plus installée, attente de résultats visibles, intérêt pour cure et protection.",
    items: ["shampoingEquilibre", "apresHydratant", "serumScalp", "masqueRepair"]
  },
  "femme|35-44": {
    gender: "femme",
    age: "35-44",
    need: "strong",
    image: "assets/images/segments-final/femme-35-44-v2.jpg",
    alt: "Visuel Respire femme 35-44",
    heroTitle: "Densité perçue, racines tonifiées, cheveux protégés.",
    heroA: "Routine densité qui cible cuir chevelu, nutrition et protection quotidienne.",
    heroB: "Soin racines + cure 3 mois : approche préventive pour cheveux fatigués par stress, chaleur et pollution.",
    diagnosticTitle: "Densité et prévention.",
    diagnosticText: "Routine recommandée : Réparation, Nourrissant-réparateur, Sérum cuir chevelu apaisant et Force & Vitalité.",
    title: "Densité, nutrition, protection quotidienne",
    why: "35-44 : attention plus forte à densité perçue, fatigue capillaire, nutrition et prévention.",
    items: ["shampoingReparation", "apresNourrissant", "serumScalp", "forceVitalite"]
  },
  "femme|45+": {
    gender: "femme",
    age: "45+",
    need: "strong",
    image: "assets/images/segments-final/femme-45-plus-v2.jpg",
    alt: "Visuel Respire femme 45 ans et plus",
    heroTitle: "Confort racines, douceur longueurs, routine douce.",
    heroA: "Routine douce pour cuir chevelu sensible, cheveux plus secs et entretien régulier.",
    heroB: "Des gestes naturels, doux et constants pour prendre soin du cuir chevelu et nourrir les longueurs.",
    diagnosticTitle: "Confort et nutrition.",
    diagnosticText: "Routine recommandée : Apaisement, Nourrissant-réparateur, Sérum cuir chevelu apaisant et Force & Vitalité.",
    title: "Confort cuir chevelu, nutrition, routine douce",
    why: "45+ : besoin de douceur, cuir chevelu plus sensible, cheveux plus secs, routine rassurante.",
    items: ["shampoingApaisement", "apresNourrissant", "serumScalp", "forceVitalite"]
  },
  "homme|18-24": {
    gender: "homme",
    age: "18-24",
    need: "fresh",
    image: "assets/images/segments-final/homme-18-24-v2.jpg",
    alt: "Visuel Respire homme 18-24",
    heroTitle: "Cheveux frais, racines nettes, zéro prise de tête.",
    heroA: "Routine anti-odeurs et racines nettes, adaptée au sport, à la casquette, aux transports et aux sorties.",
    heroB: "Moins d'odeurs, plus de propre : routine courte pour cheveux vite lourds et debut de barbe.",
    diagnosticTitle: "Fraîcheur et usage rapide.",
    diagnosticText: "Routine recommandée : Pureté, Équilibre, Hydratant léger et Exfoliant-purifiant cuir chevelu.",
    title: "Fraîcheur, odeurs, racines nettes",
    why: "18-24 : besoin pratique, prix accessible, odeurs post-sport/transport, routine courte.",
    items: ["shampoingPurete", "shampoingEquilibre", "apresHydratant", "exfoliantScalp"]
  },
  "homme|25-34": {
    gender: "homme",
    age: "25-34",
    need: "soft",
    image: "assets/images/segments-final/homme-25-34-v2.jpg",
    alt: "Visuel Respire homme 25-34",
    heroTitle: "Barbe propre, cuir chevelu sain, routine bureau.",
    heroA: "Routine nette et non grasse pour barbe, cuir chevelu et cheveux exposés au quotidien.",
    heroB: "Une barbe plus douce et des racines plus propres, avec gestes rapides avant travail ou sortie.",
    diagnosticTitle: "Barbe et cuir chevelu.",
    diagnosticText: "Routine recommandée : Équilibre, Nourrissant-réparateur, Sérum cuir chevelu apaisant et Masque réparation intense.",
    title: "Barbe propre, cuir chevelu sain, usage bureau",
    why: "25-34 : barbe plus installée, attente de routine efficace, propre, discrète et rapide.",
    items: ["shampoingEquilibre", "apresNourrissant", "serumScalp", "masqueRepair"]
  },
  "homme|35-44": {
    gender: "homme",
    age: "35-44",
    need: "strong",
    image: "assets/images/segments-final/homme-35-44-v2.jpg",
    alt: "Visuel Respire homme 35-44",
    heroTitle: "Racines tonifiées, barbe nourrie, routine force.",
    heroA: "Routine densité perçue, cure 3 mois et soin barbe sans fini gras.",
    heroB: "Cuir chevelu tonifié, barbe plus souple, cheveux entretenus : routine préventive simple.",
    diagnosticTitle: "Densité et barbe.",
    diagnosticText: "Routine recommandée : Réparation, Nourrissant-réparateur, Sérum cuir chevelu apaisant et Force & Vitalité.",
    title: "Densité racines, barbe douce, cure 3 mois",
    why: "35-44 : besoin de prévention, densité perçue, barbe plus dense, entretien régulier.",
    items: ["shampoingReparation", "apresNourrissant", "serumScalp", "forceVitalite"]
  },
  "homme|45+": {
    gender: "homme",
    age: "45+",
    need: "soft",
    image: "assets/images/segments-final/homme-45-plus-v2.jpg",
    alt: "Visuel Respire homme 45 ans et plus",
    heroTitle: "Cuir chevelu confortable, barbe nourrie, geste simple.",
    heroA: "Routine douce pour cuir chevelu sensible, barbe sèche et cheveux plus exigeants.",
    heroB: "Moins d'inconfort, plus de douceur : soin racines, barbe et longueurs avec gestes essentiels.",
    diagnosticTitle: "Confort et entretien.",
    diagnosticText: "Routine recommandée : Apaisement, Nourrissant-réparateur, Sérum cuir chevelu apaisant et Force & Vitalité.",
    title: "Cuir chevelu confortable, barbe nourrie, entretien simple",
    why: "45+ : besoin de confort, peau sous barbe, cheveux plus secs, routine courte et rassurante.",
    items: ["shampoingApaisement", "apresNourrissant", "serumScalp", "forceVitalite"]
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
  updateSegmentImages(segment, profile);
  updateRecommendations(segment, profile);
}

function updateSegmentImages(segment, profile) {
  segmentImages.forEach((image) => {
    image.src = segment.image;
    image.alt = segment.alt;
  });
}

function updateRecommendations(segment, profile) {
  currentRecommendationKeys = segment.items.filter((productKey) => products[productKey]);
  addRoutineButton.disabled = currentRecommendationKeys.length === 0;
  selectedReco.querySelector("strong").textContent = segment.title;
  selectedReco.querySelector("p").textContent = segment.why;

  segment.items.forEach((productKey, index) => {
    const product = products[productKey];
    const card = productCards[index];
    if (!product || !card) return;
    card.querySelector("[data-product-image]").src = product.image;
    card.querySelector("[data-product-image]").alt = product.alt;
    card.querySelector("[data-product-hover-image]").src = lifestyleImageFor(productKey);
    card.querySelector("[data-product-badge]").textContent = product.badge;
    card.querySelector("[data-product-title]").textContent = product.title;
    card.querySelector("[data-product-meta]").textContent = product.ingredients;
    card.querySelector("[data-product-price]").textContent = product.price;
    card.querySelectorAll("[data-track='add']").forEach((button) => {
      button.textContent = "Ajouter";
      button.dataset.productKey = productKey;
    });
    card.querySelector("[data-product-link]").href = `product.html?product=${productKey}`;
  });
}

function lifestyleImageFor(productKey) {
  if (productKey.includes("Purete") || productKey.includes("Apaisement") || productKey.includes("Scalp")) {
    return "assets/images/product-lifestyle/cuir-chevelu.png";
  }
  if (productKey.includes("Reparation") || productKey.includes("Repair") || productKey.includes("Nourrissant")) {
    return "assets/images/product-lifestyle/reparation.png";
  }
  if (productKey === "forceVitalite") {
    return "assets/images/product-lifestyle/force-vitalite.png";
  }
  return "assets/images/product-lifestyle/hydratation.png";
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem("respireCart") || "[]");
  } catch {
    return [];
  }
}

function renderCart() {
  const cart = readCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + (Number(products[item.productKey]?.price.replace(",", ".").replace("€", "")) || 0) * item.quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#header-cart-count").textContent = count;
  document.querySelector("#cart-total").textContent = `${total.toFixed(2).replace(".", ",")}€`;
  const items = document.querySelector("#cart-items");
  items.innerHTML = cart.length ? cart.map((item) => `<div class="cart-item"><span>${products[item.productKey].title}</span><strong>${item.quantity} × ${products[item.productKey].price}</strong></div>`).join("") : "<p>Votre panier est vide.</p>";
}

function addToCart(productKey) {
  const cart = readCart();
  const existing = cart.find((item) => item.productKey === productKey);
  if (existing) existing.quantity += 1;
  else cart.push({ productKey, quantity: 1 });
  localStorage.setItem("respireCart", JSON.stringify(cart));
  renderCart();
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("is-open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("cart-open", isOpen);
}

function setDiagnosticOpen(isOpen) {
  diagnosticModal.classList.toggle("is-open", isOpen);
  diagnosticModal.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("diagnostic-open", isOpen);
}

document.querySelectorAll("[data-open-diagnostic]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    setDiagnosticOpen(true);
  });
});

diagnosticClose.addEventListener("click", () => setDiagnosticOpen(false));
diagnosticBackdrop.addEventListener("click", () => setDiagnosticOpen(false));

cartLink.addEventListener("click", (event) => {
  event.preventDefault();
  setCartOpen(true);
});

cartClose.addEventListener("click", () => setCartOpen(false));
cartBackdrop.addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setCartOpen(false);
});

function renderCatalogLinks() {
  catalogLinks.innerHTML = Object.entries(products)
    .map(([key, product]) => `<a href="product.html?product=${key}">${product.title}<span>Voir la fiche →</span></a>`)
    .join("");
}

addRoutineButton.addEventListener("click", () => {
  currentRecommendationKeys.forEach((productKey) => addToCart(productKey));
  setCartOpen(true);
  showToast("Routine ajoutée au panier");
});

function unlock(profile) {
  localStorage.setItem("respireProfile", JSON.stringify(profile));
  localStorage.setItem("respireCoupon", "RESPIRE10");
  applyPersonalization(profile);
  coupon.hidden = false;
  coupon.querySelector("strong").textContent = "RESPIRE10";
  const submitButton = form.querySelector(".gate-submit");
  submitButton.type = "button";
  submitButton.textContent = "CONTINUER VERS LA GAMME";
  submitButton.dataset.unlocked = "true";
  submitButton.setAttribute("aria-label", "Fermer le diagnostic et voir la gamme");
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
    age: data.get("age"),
    email: data.get("email")
  };
}

document.body.classList.add("is-locked");
renderCatalogLinks();

function closeGate() {
  gate.classList.add("is-hidden");
  document.body.classList.remove("is-locked");
}

gate.addEventListener("click", (event) => {
  if (event.target.closest?.(".gate-panel")) return;
  closeGate();
});

gateClose.addEventListener("click", closeGate);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !gate.classList.contains("is-hidden")) closeGate();
});

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
  if (!profile.gender || !profile.age || !profile.email) return;
  track("profile_submitted", profile);
  unlock(profile);
  showToast("Code RESPIRE10 active");
});

form.querySelector(".gate-submit").addEventListener("click", (event) => {
  if (event.currentTarget.dataset.unlocked !== "true") return;
  gate.classList.add("is-hidden");
  document.body.classList.remove("is-locked");
  document.querySelector("#produits").scrollIntoView({ behavior: "smooth" });
});

form.addEventListener("change", () => {
  const profile = currentFormProfile();
  if (profile.gender && profile.age) {
    track("profile_previewed", profile);
  }
});

resetProfile.addEventListener("click", () => {
  localStorage.removeItem("respireProfile");
  localStorage.removeItem("respireABVariant");
  localStorage.removeItem("respireCoupon");
  form.reset();
  form.querySelector(".gate-submit").disabled = false;
  form.querySelector(".gate-submit").type = "submit";
  form.querySelector(".gate-submit").textContent = "RÉCUPÉRER MA RÉDUCTION";
  delete form.querySelector(".gate-submit").dataset.unlocked;
  form.querySelector(".gate-submit").removeAttribute("aria-label");
  coupon.hidden = true;
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
      addToCart(element.dataset.productKey);
      showToast("Produit ajouté à votre routine - code RESPIRE10 disponible");
    }
  });
});

renderCart();

const addParam = new URLSearchParams(window.location.search).get("add");
const addProductKeys = (addParam || "")
  .split(",")
  .map((key) => key.trim())
  .filter((key) => products[key]);

if (addProductKeys.length) {
  addProductKeys.forEach((productKey) => addToCart(productKey));
  setCartOpen(true);
  window.history.replaceState({}, "", `${window.location.pathname}#panier`);
} else if (window.location.hash === "#panier") {
  setCartOpen(true);
}

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(newsletterForm).get("email");
  localStorage.setItem("respireNewsletterEmail", email);
  newsletterStatus.textContent = "Inscription confirmée.";
  newsletterForm.reset();
  track("newsletter_submitted");
});
