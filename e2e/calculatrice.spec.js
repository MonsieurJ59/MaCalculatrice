import { test, expect } from '@playwright/test';
import { Calculatrice } from '../src/Calculatrice.js';

test.describe('Calculatrice E2E', () => {
  let calculatrice;

  test.beforeEach(async ({ page }) => {
    calculatrice = new Calculatrice();
    await page.goto('http://localhost:5500/calculatrice/');
  });

  test('doit afficher le résultat correct d\'une addition', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text==');

    const resultatFront = await page.$eval('#ecran', el => el.value);
    const resultatAttendu = calculatrice.additionner(2, 3).toString();

    expect(resultatFront).toBe(resultatAttendu);
  });

  test('doit afficher le résultat correct d\'une multiplication', async ({ page }) => {
    await page.click('text=4');
    await page.click('text=x');
    await page.click('text=5');
    await page.click('text==');

    const resultatFront = await page.$eval('#ecran', el => el.value);
    const resultatAttendu = calculatrice.multiplier(4, 5).toString();

    expect(resultatFront).toBe(resultatAttendu);
  });

  test('doit afficher une erreur si calcul invalide', async ({ page }) => {
    await page.click('text=+');
    await page.click('text==');

    const resultatFront = await page.$eval('#ecran', el => el.value);

    expect(resultatFront).toBe('0');
  });
});
