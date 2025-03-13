import { Calculatrice } from '../src/Calculatrice.js';

const calculatrice = new Calculatrice();

const ecran = document.getElementById('ecran');
const boutons = document.querySelectorAll('.btn');
const historiqueList = document.getElementById('historique-list');
const viderHistoriqueBtn = document.getElementById('vider-historique');

let calcul = '';

// Affichage de l'historique
function afficherHistorique() {
  historiqueList.innerHTML = calculatrice.getHistorique()
    .map(resultat => `<li>${resultat}</li>`)
    .join('');
}

// Gestion des boutons
boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const valeur = bouton.textContent;

    switch (valeur) {
      case 'C':
        calcul = '';
        ecran.value = '';
        break;

      case '=':
        try {
          const resultat = calculatrice.calculerDepuisTexte(calcul);
          ecran.value = resultat;
          calcul = resultat.toString();
          afficherHistorique();
        } catch (error) {
          ecran.value = 'Erreur';
          calcul = '';
        }
        break;

      case '+':
      case '-':
      case 'x':
        calcul += ` ${valeur} `;
        ecran.value = calcul;
        break;

      default:
        calcul += valeur;
        ecran.value = calcul;
        break;
    }
  });
});

// Vider l'historique
viderHistoriqueBtn.addEventListener('click', () => {
  calculatrice.effacerHistorique();
  afficherHistorique();
});
