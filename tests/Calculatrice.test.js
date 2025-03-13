import { describe, it, expect, beforeEach } from 'vitest';
import { Calculatrice } from '../src/Calculatrice.js';

describe('Calculatrice', () => {
  let calculatrice;

  beforeEach(() => {
    calculatrice = new Calculatrice();
  });

  describe('Opérations de base', () => {
    it('doit additionner deux nombres', () => {
      const resultat = calculatrice.additionner(2, 3);
      expect(resultat).toBe(5);
    });

    it('doit soustraire deux nombres', () => {
      const resultat = calculatrice.soustraire(5, 3);
      expect(resultat).toBe(2);
    });

    it('doit multiplier deux nombres', () => {
      const resultat = calculatrice.multiplier(4, 3);
      expect(resultat).toBe(12);
    });
  });

  describe('Gestion de l\'historique', () => {
    it('doit enregistrer les résultats des calculs dans l\'historique', () => {
      calculatrice.additionner(1, 1);
      calculatrice.soustraire(5, 2);
      calculatrice.multiplier(2, 3);

      const historique = calculatrice.getHistorique();

      expect(historique).toEqual([2, 3, 6]);
    });

    it('doit permettre de reprendre un résultat précédent depuis l\'historique', () => {
      calculatrice.additionner(10, 5); 
      const resultatPrecedent = calculatrice.reprendreHistorique(0); 
      const nouveauResultat = calculatrice.multiplier(resultatPrecedent, 2);

      expect(nouveauResultat).toBe(30);
    });

    it('doit permettre d\'effacer l\'historique', () => {
      calculatrice.additionner(2, 2);
      calculatrice.effacerHistorique();

      const historique = calculatrice.getHistorique();

      expect(historique).toEqual([]);
    });
  });
});
