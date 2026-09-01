const gate = document.querySelector("#profile-gate");
const form = document.querySelector("#profile-form");
const coupon = document.querySelector("#coupon");
const personalNodes = document.querySelectorAll("[data-personal]");
const needCards = document.querySelectorAll("[data-need-card]");

const copy = {
  fresh: {
    A: {
      heroText: "Votre routine racines fraiches pour garder cheveux propres plus longtemps, meme apres transport, sport ou journee dense.",
      diagnosticTitle: "Routine fraicheur racines activee.",
      diagnosticText: "Votre selection met en avant brume anti-odeurs et serum cuir chevelu pour prolonger sensation propre."
    },
    B: {
      heroText: "Moins d'odeurs, plus de legerete : une routine cheveux pensee pour vies actives et environnements urbains.",
      diagnosticTitle: "Votre profil appelle une reponse anti-odeurs.",
      diagnosticText: "Le contenu privilegie preuves de fraicheur, usage nomade et gestes rapides."
    }
  },
  strong: {
    A: {
      heroText: "Collagene, levure de biere et soin racines : routine dedans-dehors pour accompagner force et eclat.",
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

  personalNodes.forEach((node) => {
    const key = node.dataset.personal;
    if (selectedCopy[key]) node.textContent = selectedCopy[key];
  });

  needCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.needCard === profile.need);
  });

  document.documentElement.dataset.ab = variant;
  document.documentElement.dataset.need = profile.need;
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

document.body.classList.add("is-locked");

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
  const data = new FormData(form);
  const profile = {
    gender: data.get("gender"),
    age: data.get("age"),
    need: data.get("need")
  };
  if (!profile.gender || !profile.age || !profile.need) return;
  track("profile_submitted", profile);
  unlock(profile);
});

document.querySelectorAll("a[href^='#'], [data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    track(element.dataset.track || "cta_click", {
      label: element.textContent.trim(),
      href: element.getAttribute("href") || null
    });
  });
});
