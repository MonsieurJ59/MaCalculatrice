export class Calculatrice {
    constructor() {
        this.historique = [];
    }
  
    additionner(a, b) {
        const res = a + b;
        this.historique.push(res);
        return res;
    }
  
    soustraire(a, b) {
        const res = a - b;
        this.historique.push(res);
        return res;
    }
  
    multiplier(a, b) {
        const res = a * b;
        this.historique.push(res);
        return res;
    }

    diviser(a, b) {
        if (b === 0) {
            throw new Error('Division par zéro');
        }

        const res = a / b;
        this.historique.push(res);
        return res;
    }
  
    getHistorique() {
        return this.historique;
    }
  
    reprendreHistorique(index) {
        return this.historique[index];
    }
  
    effacerHistorique() {
        this.historique = [];
    }
  
    calculerDepuisTexte(chaine) {
        const [a, operateur, b] = chaine.split(' ');
  
        switch (operateur) {
            case '+':
                return this.additionner(Number(a), Number(b));
            case '-':
                return this.soustraire(Number(a), Number(b));
            case 'x':
                return this.multiplier(Number(a), Number(b));
            case '/':
                return this.diviser(Number(a), Number(b));
            default:
                throw new Error('Opérateur non supporté');
        }
    }
  }
  