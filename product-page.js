const catalog = {
  shampoingEquilibre: { title: "Shampoing Équilibre", desc: "Nettoie les racines sans les dessécher et aide à garder une sensation fraîche.", price: "14,90€", format: "Shampoing solide", ingredients: "Tous types de cheveux", usage: "2 à 3 fois par semaine", image: "assets/images/concept-products/shampoing-solide-cuir-chevelu-v2.png", video: "assets/videos/shampoingEquilibre.mp4" },
  shampoingPurete: { title: "Shampoing Pureté", desc: "Nettoie les racines qui regraissent vite et laisse le cuir chevelu léger.", price: "14,90€", format: "250 ml", ingredients: "Argile verte + zinc", usage: "2 fois par semaine", image: "assets/images/concept-products/shampoing-purete-v2.png", video: "assets/videos/shampoingPurete.mp4" },
  shampoingApaisement: { title: "Shampoing Apaisement", desc: "Nettoie en douceur les cuirs chevelus sujets aux tiraillements et inconforts.", price: "14,90€", format: "250 ml", ingredients: "Avoine + panthénol", usage: "À chaque lavage", image: "assets/images/concept-products/shampoing-apaisement-v2.png", video: "assets/videos/shampoingApaisement.mp4" },
  shampoingReparation: { title: "Shampoing Réparation", desc: "Nettoie les cheveux abîmés et prépare les longueurs au soin réparateur.", price: "15,90€", format: "250 ml", ingredients: "Protéines végétales + huile de coco", usage: "2 à 3 fois par semaine", image: "assets/images/concept-products/shampoing-reparation-v2.png", video: "assets/videos/shampoingReparation.mp4" },
  apresHydratant: { title: "Après-shampoing Hydratant léger", desc: "Démêle sans alourdir et apporte douceur aux longueurs et pointes.", price: "15,90€", format: "200 ml", ingredients: "Acide hyaluronique + aloe vera", usage: "Après chaque shampoing", image: "assets/images/concept-products/apres-shampoing-hydratant-leger-v2.png", video: "assets/videos/apresHydratant.mp4" },
  apresNourrissant: { title: "Après-shampoing Nourrissant-réparateur", desc: "Nourrit les longueurs sèches et aide à retrouver une fibre plus souple.", price: "16,90€", format: "200 ml", ingredients: "Beurre de karité + protéines végétales", usage: "Après chaque shampoing", image: "assets/images/concept-products/apres-shampoing-nourrissant-reparateur-v2.png", video: "assets/videos/apresNourrissant.mp4" },
  serumScalp: { title: "Sérum cuir chevelu apaisant", desc: "Soin ciblé sans rinçage pour calmer la sensation d'inconfort et hydrater les racines.", price: "22,90€", format: "30 ml", ingredients: "Niacinamide + panthénol", usage: "Quelques gouttes le soir, 3 fois par semaine", image: "assets/images/concept-products/serum-cuir-chevelu-apaisant-v2.png", video: "assets/videos/serumScalp.mp4" },
  exfoliantScalp: { title: "Exfoliant-purifiant cuir chevelu", desc: "Décolle les impuretés et résidus pour un cuir chevelu plus net.", price: "19,90€", format: "75 ml", ingredients: "Acide salicylique + argile verte", usage: "Une fois par semaine avant shampoing", image: "assets/images/concept-products/exfoliant-purifiant-cuir-chevelu-v2.png", video: "assets/videos/exfoliantScalp.mp4" },
  masqueRepair: { title: "Masque réparation intense", desc: "Enveloppe les longueurs abîmées et redonne toucher doux et souplesse.", price: "21,90€", format: "200 ml", ingredients: "Céramides + huile d'argan", usage: "Une fois par semaine, 5 à 10 minutes", image: "assets/images/concept-products/masque-reparation-intense-v2.png", video: "assets/videos/masqueRepair.mp4" },
  forceVitalite: { title: "Force & Vitalité", desc: "Cure quotidienne pensée pour accompagner la routine cheveux, peau et ongles.", price: "39,90€", format: "90 gélules", ingredients: "Collagène marin + zinc + vitamines B", usage: "1 gélule par jour pendant 3 mois", image: "assets/images/concept-products/force-vitalite-3-mois-v2.png", video: "assets/videos/forceVitalite.mp4" }
};

const requestedKey = new URLSearchParams(window.location.search).get("product");
const key = catalog[requestedKey] ? requestedKey : "shampoingEquilibre";
const product = catalog[key];
const detail = document.querySelector("#product-detail");

const lifestyleImages = {
  hydration: "assets/images/product-lifestyle/hydratation.png",
  scalp: "assets/images/product-lifestyle/cuir-chevelu.png",
  repair: "assets/images/product-lifestyle/reparation.png",
  vitality: "assets/images/product-lifestyle/force-vitalite.png"
};
const lifestyleKey = key === "forceVitalite" ? "vitality" : key.includes("Purete") || key.includes("Apaisement") || key.includes("Scalp") ? "scalp" : key.includes("Reparation") || key.includes("Repair") || key.includes("Nourrissant") ? "repair" : "hydration";

const benefitsMap = {
  shampoingEquilibre: ["Nettoie en douceur", "Hydrate", "Routine quotidienne"],
  shampoingPurete: ["Purifie", "Régule le sébum", "Racines légères"],
  shampoingApaisement: ["Apaise", "Anti-tiraillements", "Cuir chevelu confortable"],
  shampoingReparation: ["Répare", "Nourrit", "Prépare au soin"],
  apresHydratant: ["Démêle", "Hydrate", "Longueurs douces"],
  apresNourrissant: ["Nourrit", "Répare", "Fibre plus souple"],
  serumScalp: ["Apaise", "Hydrate", "Sans rinçage"],
  exfoliantScalp: ["Purifie", "Décolle les résidus", "Racines nettes"],
  masqueRepair: ["Répare", "Nourrit", "Toucher doux"],
  forceVitalite: ["Renforce", "Nourrit", "Cure 3 mois"]
};
const benefits = benefitsMap[key];

// Gallery: main product shot + lifestyle shot + (video slot, activated once assets/videos/<key>.mp4 exists)
detail.innerHTML = `
  <a class="back-link" href="index.html#produits">← Retour à la gamme</a>
  <section class="product-detail-grid">
    <div class="product-gallery">
      <div class="product-thumb-rail">
        <button class="is-selected" type="button" data-thumb="image"><img src="${product.image}" alt="Vue principale ${product.title}"></button>
        <button type="button" data-thumb="lifestyle"><img src="${lifestyleImages[lifestyleKey]}" alt="Univers ${product.title}"></button>
        <button type="button" data-thumb="video"><img src="${product.image}" alt="Vidéo ${product.title}"><span class="thumb-play">▶</span></button>
      </div>
      <div class="product-detail-image">
        <img data-main-image src="${product.image}" alt="${product.title}">
        <video data-main-video muted loop playsinline poster="${product.image}" hidden>
          <source src="${product.video}" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="product-detail-copy">
      <p class="eyebrow">Nouvelle gamme capillaire</p>
      <h1>${product.title}</h1>
      <p class="product-detail-subtitle">${product.ingredients}</p>
      <div class="product-benefits">${benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div>
      <button class="button button-dark product-cta" id="add-product" type="button">Ajouter au panier — ${product.price}</button>
      <div class="shipping-row"><strong>Livraison offerte</strong><span>à partir de 45€</span></div>
      <dl class="product-specs">
        <div><dt>Format</dt><dd>${product.format}</dd></div>
        <div><dt>Actifs</dt><dd>${product.ingredients}</dd></div>
        <div><dt>Utilisation</dt><dd>${product.usage}</dd></div>
      </dl>
      <p class="product-detail-note">Produit en pré-lancement. Formule et disponibilité à confirmer.</p>
    </div>
  </section>
  <section class="product-content-grid">
    <article><p class="eyebrow">Pour qui ?</p><h2>Un geste ciblé pour votre routine.</h2><p>${product.desc}</p></article>
    <article class="product-content-image"><img src="${lifestyleImages[lifestyleKey]}" alt="Univers visuel ${product.title}"></article>
    <article><p class="eyebrow">Conseils d'application</p><h2>Le bon geste, au bon moment.</h2><p>${product.usage}. Éviter le contact avec les yeux.</p></article>
  </section>
`;

const mainImage = detail.querySelector("[data-main-image]");
const videoEl = detail.querySelector("[data-main-video]");
const videoThumb = detail.querySelector('[data-thumb="video"]');

// Hide the video thumbnail entirely if the asset doesn't exist yet — avoids a broken/blank state
fetch(product.video, { method: "HEAD" })
  .then((response) => {
    if (!response.ok) videoThumb.hidden = true;
  })
  .catch(() => {
    videoThumb.hidden = true;
  });

detail.querySelectorAll(".product-thumb-rail button").forEach((button) => {
  button.addEventListener("click", () => {
    detail.querySelectorAll(".product-thumb-rail button").forEach((item) => item.classList.toggle("is-selected", item === button));
    const type = button.dataset.thumb;
    if (type === "video") {
      videoEl.hidden = false;
      videoEl.load();
      videoEl
        .play()
        .then(() => {
          mainImage.hidden = true;
        })
        .catch(() => {
          videoEl.hidden = true;
        });
    } else {
      videoEl.pause();
      videoEl.hidden = true;
      mainImage.hidden = false;
      mainImage.src = type === "lifestyle" ? lifestyleImages[lifestyleKey] : product.image;
    }
  });
});

function cart() {
  try {
    return JSON.parse(localStorage.getItem("respireCart") || "[]");
  } catch {
    return [];
  }
}

function updateCount() {
  document.querySelector("#product-cart-count").textContent = cart().reduce((sum, item) => sum + item.quantity, 0);
}

document.querySelector("#add-product").addEventListener("click", () => {
  const items = cart();
  const existing = items.find((item) => item.productKey === key);
  if (existing) existing.quantity += 1;
  else items.push({ productKey: key, quantity: 1 });
  localStorage.setItem("respireCart", JSON.stringify(items));
  updateCount();
  document.querySelector("#add-product").textContent = "Ajouté au panier";
});

updateCount();
