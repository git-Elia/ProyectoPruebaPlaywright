import { test, expect } from '@playwright/test';

test('test web table', async ({ page }) => {

    //Se usó demoqa porque la página de automation-practice-webtable no se encontró
   //await page.goto('https://cosmocode.io/automation-practice-webtable/');
    await page.goto(' https://demoqa.com/webtables');

    //const tableContainer = await page.locator("xpath=//table[@id='countries']");
    const tableContainer = await page.locator("xpath=//table[contains(@class, '-striped -highlight table table-striped table-bordered table-hover')]");


    //const rows = await tableContainer.locator('xpath=.//tr').all();
    const rows = await tableContainer.locator('xpath=.//tr').all();

    const rowsDesde1 = rows.slice(1);
    console.log('Total de registros: ', rowsDesde1.length);

    /*for (let row of rows){
        console.log(await row.innerText())
    }
    */
   const employees: Employee[] = []
   


    for (let row of rowsDesde1){
     // console.log(row.locator('xpath=.//td[1]'))
       // await expect (row.locator('xpath=.//td[1]')).toHaveText()
        let employee: Employee = {
            //firstName: await row.locator('xpath=.//td[1]').allInnerTexts()
            firstName: await row.locator('xpath=.//td[1]').innerText(),
            lastName: await row.locator('xpath=.//td[2]').innerText(),
            age: await row.locator('xpath=.//td[3]').innerText(),
            email: await row.locator('xpath=.//td[4]').innerText(),
            salary: await row.locator('xpath=.//td[5]').innerText(),
            departament: await row.locator('xpath=.//td[6]').innerText()
        }
        employees.push(employee)
    }
    
/*
    const row1 = rows.at(1);

    const firstName = await row1?.locator('xpath=.//td[1]').innerText();
    const lastName = await row1?.locator('xpath=.//td[2]').innerText();
    const age = await row1?.locator('xpath=.//td[3]').innerText();
    const email = await row1?.locator('xpath=.//td[4]').innerText();
    const salary = await row1?.locator('xpath=.//td[5]').innerText();
    const departament = await row1?.locator('xpath=.//td[6]').innerText();

    console.log(firstName,lastName, age, email, salary, departament);
  */ 
/*  for(let count of employees){
    console.log(count)
  }
*/
    //Filtrar todos los empleados que se llamen Alden
  const employeeWhereNameIsAlden = employees.filter(employee => employee.firstName === 'Alden');

  //Imprimir los empleados que se llamen Alden
  console.log('Employee where Name is Alden: ', employeeWhereNameIsAlden)


});

interface Employee{
    firstName: string
    lastName: string
    age: string
    email: string
    salary: string
    departament: string

}