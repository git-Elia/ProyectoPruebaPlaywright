import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  //Test -Git - Se corrige Issue 1
  //QA-modificado
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Mostrar ambiente', async () => {


  if(process.env.NODE_ENV!==undefined){
    console.log(`Ambiente: ${process.env.NODE_ENV}`);
    console.log(`URL del archivo .env: ${process.env.URL}`)
  }
  else{
    console.log(`Ambiente: No se seleccionó el ambiente desde Jenkins, valor local: ${process.env.ENVIRONMENT}`);
    console.log(`URL del archivo .env: ${process.env.URL}`)
  }
});

/*test('test 3 - mercadolibre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/')

  await page.locator('input[id=\'cb1-edit\']').fill('Iphone')

  await page.keyboard.press('Enter')

  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible()

//  await page.pause()

  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h3').allInnerTexts()

  console.log('The total number of results is: ', titles.length)

  for(let title of titles){
    console.log('The title is: ', title)
   // console.log(`The title is: ${title}`)
  }

 // await page.getByRole('link', {name: 'Mis compras'}).click()
  await page.getByRole('link', {name: 'Ingresa', exact: true}).click()
  page.pause()

});
*/
 /* test('test 4 - votaciones', async ({ page }) => {
  await page.goto('https://www.lasestrellas.tv/programas/hoy/vota')

  //let cantidad= 3;
   // for (let i = 0; i < cantidad; i++) {
     // await page.waitForSelector('//*[@id="viewContainer"]/div/div/div/ng-include[1]/div/div/ul/li[3]/div/div/div[1]/p')
   //   await expect(page.locator(('iframe').nth(1).contentFrame().locator('iframe[title="MegaController"]').contentFrame().getByText('MARIANA Y JÉSSICA'))).toBeVisible();
     // await page.waitForSelector('//*[@id="viewContainer"]/div/div/div/ng-include[1]/div/div/ul/li[3]/div/div/div[1]/p', { state: 'visible', timeout: 10000 });
     //await page.waitForTimeout(10000)
   //  await page.locator('//*[@id="viewContainer"]/div/div/div/ng-include[1]/div/div/ul/li[3]/div/div/div[1]/p').click()
      await page.waitForTimeout(9000)
      await page.locator('iframe').nth(2).contentFrame().locator('iframe[title="MegaController"]').contentFrame().getByText('MARIANA Y JÉSSICA').click();
      await page.screenshot({path: 'screenshots/voto.png', fullPage: true})
  
      
     

    
  });*/
