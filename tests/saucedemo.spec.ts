import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';

test('purchase an item', async ({ page }, testInfo) => {
  await page.goto('https://saucedemo.com')
// console.log('##### Variable de entorno=', process.env.NODE_ENV, ' ####')

 // await page.goto(process.env.URL)
  /*
  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
  await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce')
  await page.getByRole('button', {name: 'Login'}).click()
  */

  const login = new LoginPage(page)
/*
  await login.fillUsername('standard_user')
  await login.fillPassword('secret_sauce')
  await login.clickOnLogin()

*/
//await page.screenshot({path: 'screenshots/login.png', fullPage: true})

  await login.loginWithCredentials('standard_user', 'secret_sauce')
  //page.pause()
  await login.checkSuccessfulLogin()

  await testInfo.attach('login', {
    body: await page.screenshot({fullPage: true}),
    contentType: 'image/png'
  })

//  await page.screenshot({path: 'screenshots/mainPage.png', fullPage: true})

  const itemsContainer = await page.locator('#inventory_container .inventory_item').all()

  const randomIndex = Math.floor(Math.random() * itemsContainer.length)

  const randomItem = itemsContainer[randomIndex]

  const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText()
  const expectedName = await randomItem.locator('.inventory_item_name').innerText()
  const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()

  console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`)
  //console.log('Price: ', expectedPrice, 'Name: ', expectedName, 'Description: ', expectedDescription )

  await randomItem.getByRole('button', {name: 'Add to cart'}).click()
  
  await page.locator('.shopping_cart_link').click()

  expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible()

  const actualName = await page.locator('.inventory_item_name').innerText()
  const actualDescription = await page.locator('.inventory_item_desc').innerText()
  const actualPrice = await page.locator('.inventory_item_price').innerText()

  //console.log(`Price: ${actualPrice} Name: ${actualName} Description: ${actualDescription}`)

 
  expect(actualName).toEqual(expectedName)
  expect(actualDescription).toEqual(expectedDescription)
  expect(actualPrice).toEqual(expectedPrice)

  await page.getByRole('button', {name: 'Checkout'}).click()

  await page.getByRole('textbox', {name: 'First Name'}).fill('Goku')
  await page.getByRole('textbox', {name: 'Last Name'}).fill('Sayayin')
  await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('51824')

  await testInfo.attach('reviewInfo', {
    body: await page.screenshot({fullPage: true}),
    contentType: 'image/png'
  })
  await page.getByRole('button', {name: 'Continue'}).click()
  await page.getByRole('button', {name: 'Finish'}).click()

  await expect(page.getByRole('heading', {name: 'Thank you for your order!!'})).toBeVisible()
  // await page.pause()
});