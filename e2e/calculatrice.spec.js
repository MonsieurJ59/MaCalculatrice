import { test, expect } from '@playwright/test';
import { Calculatrice } from '../src/Calculatrice.js';

test.describe('Calculatrice E2E', () => {
  let calculatrice;

  test.beforeEach(async ({ page }) => {
    calculatrice = new Calculatrice();
    await page.goto('http://localhost:5500/calculatrice/');
  });

  test('doit afficher le résultat correct d\'une addition', async ({ page }) => {
    await page.click('button:text("C")');
    await page.click('button:text("2")');
    await page.click('button:text("+")');
    await page.click('button:text("3")');
    await page.click('button:text("=")');

    const resultatFront = await page.$eval('#ecran', el => el.value);
    const resultatAttendu = calculatrice.additionner(2, 3).toString();

    expect(resultatFront).toBe(resultatAttendu);
  });

  test('doit afficher le résultat correct d\'une soustraction', async ({ page }) => {
    await page.click('button:text("C")');
    await page.click('button:text("8")');
    await page.click('button:text("-")');
    await page.click('button:text("3")');
    await page.click('button:text("=")');

    const resultatFront = await page.$eval('#ecran', el => el.value);
    const resultatAttendu = calculatrice.soustraire(8, 3).toString();

    expect(resultatFront).toBe(resultatAttendu);
  });

  test('doit afficher le résultat correct d\'une multiplication', async ({ page }) => {
    await page.click('text=4');
    await page.click('button:text("x")');
    await page.click('text=5');
    await page.click('button:text("=")');

    const resultatFront = await page.$eval('#ecran', el => el.value);
    const resultatAttendu = calculatrice.multiplier(4, 5).toString();

    expect(resultatFront).toBe(resultatAttendu);
  });

  test('doit afficher le résultat correct d\'une division', async ({ page }) => {
    await page.click('button:text("C")');
    await page.click('button:text("1")');
    await page.click('button:text("0")');
    await page.click('button:text("/")');
    await page.click('button:text("2")');
    await page.click('button:text("=")');

    const resultatFront = await page.$eval('#ecran', el => el.value);
    const resultatAttendu = calculatrice.diviser(10, 2).toString();

    expect(resultatFront).toBe(resultatAttendu);
  });

  test('doit afficher une erreur si calcul invalide', async ({ page }) => {
    await page.click('button:text("+")');
    await page.click('button:text("=")');

    const resultatFront = await page.$eval('#ecran', el => el.value);

    expect(resultatFront).toBe('0');
  });
});
