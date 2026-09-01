# Respire - Landing Page Rocket School

Landing page statique pour lancement fictif de la gamme **Respire Cheveux & Barbe**.

## Fichiers

- `index.html` : structure page
- `styles.css` : direction artistique Respire
- `script.js` : popup profil, personnalisation, A/B testing, tracking local
- `assets/images/` : images de reference Respire
- `assets/fonts/` : polices observees sur site officiel Respire

## Fonctionnalites

- Popup obligatoire a l'arrivee.
- Apercu live de la routine pendant le remplissage.
- Collecte profil test : genre, tranche d'age, besoin prioritaire.
- Code promo affiche apres validation : `RESPIRE10`.
- Personnalisation landing selon besoin.
- A/B testing automatique sur messaging, variante `A` ou `B`.
- Tracking local des clics CTA et ajouts panier dans `localStorage`.
- Bouton pour refaire diagnostic sans recharger le site.
- Toast de confirmation sur code promo et ajout panier.

## Test A/B

Forcer variante :

- `index.html?ab=A`
- `index.html?ab=B`

Sans parametre, variante choisie automatiquement selon profil declare.

## Deploiement Hostinger

1. Ouvrir gestionnaire de fichiers Hostinger.
2. Aller dans `public_html`.
3. Envoyer tous les fichiers et dossiers de ce repo.
4. Verifier URL temporaire Hostinger.
5. Tester desktop, mobile, popup, code promo, CTA.

## Source DA

Direction artistique inspiree du site officiel : https://respire.co/
