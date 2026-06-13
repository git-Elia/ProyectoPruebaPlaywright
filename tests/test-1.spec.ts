import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com/');
  await page.getByRole('link', { name: 'México' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
//  await page.locator('[id="_R_gjap5ee_"]').getByRole('link', { name: 'Apple iPhone 15 (128 GB) -' }).click();
//  await page.getByText('¡Hola! Para continuar,').click();

});