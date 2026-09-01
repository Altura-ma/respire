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

const copy = {
  fresh: {
    A: {
      heroText: "Votre cuir chevelu respire mieux avec une routine racines fraiches, pensee pour garder cheveux propres plus longtemps.",
      diagnosticTitle: "Routine fraicheur racines activee.",
      diagnosticText: "Votre selection met en avant brume anti-odeurs et serum cuir chevelu pour prolonger sensation propre entre deux lavages."
    },
    B: {
      heroText: "Moins d'odeurs, plus de legerete : une routine cuir chevelu pensee pour vies actives et environnements urbains.",
      diagnosticTitle: "Votre profil appelle une reponse anti-odeurs.",
      diagnosticText: "Le contenu privilegie fraicheur des racines, usage nomade et gestes rapides."
    }
  },
  strong: {
    A: {
      heroText: "Collagene, levure de biere et soin racines : routine dedans-dehors pour accompagner cuir chevelu, force et eclat.",
      diagnosticTitle: "Routine force & densite activee.",
      diagnosticText: "Votre selection combine soin local et cure 30 jours pour une routine capillaire complete."
    },
    B: {
      heroText: "Une routine quotidienne pour soutenir cheveux, peau et ongles, avec gestes simples et naturels.",
      diagnosticTitle: "Votre profil favorise approche beauty inside.",
      diagnosticText: "Le contenu met en avant cure, regularite et complementarite avec soins externes."
    }
  },
  soft: {
    A: {
      heroText: "Barbe douce, peau confortable, fini propre : routine naturelle pour entretenir sans alourdir.",
      diagnosticTitle: "Routine barbe douce activee.",
      diagnosticText: "Votre selection met en avant huile, baume et nettoyant doux pour confort quotidien."
    },
    B: {
      heroText: "Une barbe nette qui respire : poil assoupli, peau apaisee, parfum discret.",
      diagnosticTitle: "Votre profil privilegie confort barbe.",
      diagnosticText: "Le contenu insiste sur douceur, peau sous barbe et rituel rapide."
    }
  }
};

const needLabels = {
  fresh: "Fraicheur racines",
  strong: "Force & densite",
  soft: "Douceur barbe"
};

const ageLabels = {
  "18-24": "18-24 ans",
  "25-34": "25-34 ans",
  "35-44": "35-44 ans",
  "45+": "45 ans et plus"
};

const genderLabels = {
  femme: "Femme",
  homme: "Homme",
  "non-binaire": "Profil libre",
  "non-renseigne": "Profil neutre"
};

const visualSegments = {
  femme: {
    "18-24": {
      src: "assets/images/skin-house.jpg",
      alt: "Visuel Respire adapte au segment femme 18-24"
    },
    "25-34": {
      src: "assets/images/soin-flash-application.jpg",
      alt: "Application soin Respire adaptee au segment femme 25-34"
    },
    "35-44": {
      src: "assets/images/deodorant-application.jpg",
      alt: "Texture Respire adaptee au segment femme 35-44"
    },
    "45+": {
      src: "assets/images/duo-stop-boutons-packshot.jpg",
      alt: "Routine Respire adaptee au segment femme 45 ans et plus"
    }
  },
  homme: {
    "18-24": {
      src: "assets/images/homme-barbe-soin.png",
      alt: "Visuel barbe Respire adapte au segment homme 18-24"
    },
    "25-34": {
      src: "assets/images/homme-deodorant-application.png",
      alt: "Application produit Respire adaptee au segment homme 25-34"
    },
    "35-44": {
      src: "assets/images/homme-barbe-soin.png",
      alt: "Routine barbe Respire adaptee au segment homme 35-44"
    },
    "45+": {
      src: "assets/images/homme-deodorant-application.png",
      alt: "Routine Respire adaptee au segment homme 45 ans et plus"
    }
  },
  "non-binaire": {
    "18-24": {
      src: "assets/images/soin-flash-application.jpg",
      alt: "Visuel Respire adapte au segment 18-24"
    },
    "25-34": {
      src: "assets/images/skin-house.jpg",
      alt: "Visuel Respire adapte au segment 25-34"
    },
    "35-44": {
      src: "assets/images/duo-stop-boutons-packshot.jpg",
      alt: "Routine Respire adaptee au segment 35-44"
    },
    "45+": {
      src: "assets/images/deodorant-application.jpg",
      alt: "Texture Respire adaptee au segment 45 ans et plus"
    }
  },
  "non-renseigne": {
    "18-24": {
      src: "assets/images/soin-flash-application.jpg",
      alt: "Visuel Respire adapte au segment 18-24"
    },
    "25-34": {
      src: "assets/images/skin-house.jpg",
      alt: "Visuel Respire adapte au segment 25-34"
    },
    "35-44": {
      src: "assets/images/duo-stop-boutons-packshot.jpg",
      alt: "Routine Respire adaptee au segment 35-44"
    },
    "45+": {
      src: "assets/images/deodorant-application.jpg",
      alt: "Texture Respire adaptee au segment 45 ans et plus"
    }
  }
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
    desc: "Geste quotidien pour cheveux exposes a ville, chaleur douce, friction.",
    price: "19,90 euros",
    image: "assets/images/deodorant-application.jpg",
    alt: "Spray protection cheveux Respire"
  },
  densitySerum: {
    badge: "Densite",
    title: "Serum racines densite",
    desc: "Massage racines pour cuir chevelu tonifie et routine densite.",
    price: "26,90 euros",
    image: "assets/images/soin-flash-boutons.jpg",
    alt: "Serum densite Respire"
  }
};

const recommendationMatrix = {
  femme: {
    "18-24": {
      title: "Fraicheur, racines grasses, routine rapide",
      why: "Profil souvent sensible au sport, transports, rythme et lavages frequents.",
      items: ["freshMist", "scalpSerum", "urbanShield", "collagenYeast"]
    },
    "25-34": {
      title: "Equilibre cuir chevelu, longueurs, eclat",
      why: "Profil routine beaute plus installee, besoin de regularite et resultats visibles.",
      items: ["scalpSerum", "repairMask", "collagenYeast", "urbanShield"]
    },
    "35-44": {
      title: "Densite, nutrition, protection quotidienne",
      why: "Profil plus attentif a densite percue, fatigue capillaire, chaleur et pollution.",
      items: ["densitySerum", "collagenYeast", "repairMask", "urbanShield"]
    },
    "45+": {
      title: "Confort cuir chevelu, nutrition, routine douce",
      why: "Profil utile pour cuir chevelu plus sensible, cheveux plus secs, soin regulier.",
      items: ["scalpSerum", "collagenYeast", "repairMask", "densitySerum"]
    }
  },
  homme: {
    "18-24": {
      title: "Fraicheur, odeurs, racines nettes",
      why: "Profil oriente sport, sneakers/casquette, transports, cheveux vite lourds.",
      items: ["freshMist", "scalpSerum", "beardCleanser", "urbanShield"]
    },
    "25-34": {
      title: "Barbe propre, cuir chevelu sain, usage bureau",
      why: "Profil barbe plus installee, besoin soin rapide, net, non gras.",
      items: ["beardOil", "beardCleanser", "scalpSerum", "freshMist"]
    },
    "35-44": {
      title: "Densite racines, barbe douce, cure 30 jours",
      why: "Profil sensible a densite percue, barbe plus dense, routine preventive.",
      items: ["densitySerum", "collagenYeast", "beardOil", "freshMist"]
    },
    "45+": {
      title: "Cuir chevelu confortable, barbe nourrie, entretien simple",
      why: "Profil adapte a peau sous barbe, cheveux plus secs, cuir chevelu sensible.",
      items: ["scalpSerum", "collagenYeast", "beardOil", "repairMask"]
    }
  },
  "non-binaire": {
    "18-24": {
      title: "Fraicheur nomade, racines nettes",
      why: "Profil choisi sans genre : recommandation basee sur age et usages quotidiens.",
      items: ["freshMist", "scalpSerum", "urbanShield", "collagenYeast"]
    },
    "25-34": {
      title: "Routine cuir chevelu + longueurs",
      why: "Profil choisi sans genre : soin equilibre, naturel, adaptable.",
      items: ["scalpSerum", "repairMask", "freshMist", "urbanShield"]
    },
    "35-44": {
      title: "Densite, nutrition, protection",
      why: "Profil choisi sans genre : routine preventive et entretien durable.",
      items: ["densitySerum", "collagenYeast", "repairMask", "urbanShield"]
    },
    "45+": {
      title: "Confort, douceur, routine reguliere",
      why: "Profil choisi sans genre : soin cuir chevelu sensible et cheveux secs.",
      items: ["scalpSerum", "collagenYeast", "repairMask", "densitySerum"]
    }
  },
  "non-renseigne": {
    "18-24": {
      title: "Fraicheur nomade, racines nettes",
      why: "Profil neutre : recommandation basee sur age et usages quotidiens.",
      items: ["freshMist", "scalpSerum", "urbanShield", "collagenYeast"]
    },
    "25-34": {
      title: "Routine cuir chevelu + longueurs",
      why: "Profil neutre : soin equilibre, naturel, adaptable.",
      items: ["scalpSerum", "repairMask", "freshMist", "urbanShield"]
    },
    "35-44": {
      title: "Densite, nutrition, protection",
      why: "Profil neutre : routine preventive et entretien durable.",
      items: ["densitySerum", "collagenYeast", "repairMask", "urbanShield"]
    },
    "45+": {
      title: "Confort, douceur, routine reguliere",
      why: "Profil neutre : soin cuir chevelu sensible et cheveux secs.",
      items: ["scalpSerum", "collagenYeast", "repairMask", "densitySerum"]
    }
  }
};

function getVariant(profile) {
  const params = new URLSearchParams(window.location.search);
  const forced = params.get("ab");
  if (forced === "A" || forced === "B") return forced;
  const stored = localStorage.getItem("respireABVariant");
  if (stored === "A" || stored === "B") return stored;
  const seed = `${profile.age}-${profile.gender}-${profile.need}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const variant = seed % 2 === 0 ? "A" : "B";
  localStorage.setItem("respireABVariant", variant);
  return variant;
}

function applyPersonalization(profile) {
  const variant = getVariant(profile);
  const selectedCopy = copy[profile.need]?.[variant] || copy.fresh.A;
  const visual = getVisualSegment(profile);

  personalNodes.forEach((node) => {
    const key = node.dataset.personal;
    if (selectedCopy[key]) node.textContent = selectedCopy[key];
  });

  needCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.needCard === profile.need);
  });

  document.documentElement.dataset.ab = variant;
  document.documentElement.dataset.need = profile.need;
  document.documentElement.dataset.gender = profile.gender;
  document.documentElement.dataset.age = profile.age;
  variantNote.textContent = `Variante ${variant} - ${needLabels[profile.need] || "routine personnalisee"}`;
  profileChip.hidden = false;
  profileChip.textContent = `${profile.age} - ${needLabels[profile.need] || "Diagnostic"}`;
  updateSegmentImages(visual, profile);
  updateRecommendations(profile);
}

function getVisualSegment(profile) {
  return visualSegments[profile.gender]?.[profile.age] || visualSegments["non-renseigne"]["25-34"];
}

function updateSegmentImages(visual, profile) {
  segmentImages.forEach((image) => {
    image.src = visual.src;
    image.alt = visual.alt;
  });
  imageSegment.textContent = `${genderLabels[profile.gender] || "Profil"} - ${ageLabels[profile.age] || "age"} - image testee`;
}

function getRecommendation(profile) {
  return recommendationMatrix[profile.gender]?.[profile.age] || recommendationMatrix["non-renseigne"]["25-34"];
}

function updateRecommendations(profile) {
  const recommendation = getRecommendation(profile);
  selectedReco.querySelector("strong").textContent = `${genderLabels[profile.gender]} ${ageLabels[profile.age]} - ${recommendation.title}`;
  selectedReco.querySelector("p").textContent = recommendation.why;

  recommendation.items.forEach((productKey, index) => {
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
  matrixBody.innerHTML = Object.entries(recommendationMatrix)
    .map(([gender, ages]) => {
      const cells = Object.keys(ageLabels)
        .map((age) => {
          const reco = ages[age];
          const titles = reco.items.map((key) => products[key].title).join(" + ");
          return `<td><strong>${reco.title}</strong><span>${titles}</span></td>`;
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
    variant: document.documentElement.dataset.ab,
    need: document.documentElement.dataset.need,
    at: new Date().toISOString()
  });
  localStorage.setItem("respireEvents", JSON.stringify(events.slice(-50)));
}

function currentFormProfile() {
  const data = new FormData(form);
  return {
    gender: data.get("gender"),
    age: data.get("age"),
    need: data.get("need")
  };
}

function updateLivePreview() {
  const profile = currentFormProfile();
  const missing = !profile.gender || !profile.age || !profile.need;
  if (missing) {
    livePreview.querySelector("strong").textContent = "Completez votre profil";
    livePreview.querySelector("p").textContent = "Votre page changera selon vos reponses.";
    return;
  }
  const variant = getVariant(profile);
  const selectedCopy = copy[profile.need]?.[variant] || copy.fresh.A;
  const visual = getVisualSegment(profile);
  livePreview.querySelector("strong").textContent = `${needLabels[profile.need]} - variante ${variant}`;
  livePreview.querySelector("p").textContent = `${genderLabels[profile.gender]} ${ageLabels[profile.age]} : ${selectedCopy.heroText}`;
  updateSegmentImages(visual, profile);
}

document.body.classList.add("is-locked");
renderMatrix();

const storedProfile = readStoredProfile();
if (storedProfile?.gender && storedProfile?.age && storedProfile?.need) {
  applyPersonalization(storedProfile);
  gate.classList.add("is-hidden");
  document.body.classList.remove("is-locked");
} else {
  gate.classList.remove("is-hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = currentFormProfile();
  if (!profile.gender || !profile.age || !profile.need) return;
  track("profile_submitted", profile);
  unlock(profile);
  showToast("Code RESPIRE10 active");
});

form.addEventListener("change", () => {
  const profile = currentFormProfile();
  localStorage.removeItem("respireABVariant");
  updateLivePreview();
  if (profile.gender && profile.age && profile.need) {
    applyPersonalization(profile);
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
