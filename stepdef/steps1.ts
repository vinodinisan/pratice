import { Given, When, Then } from "cucumber";
import{calcul} from '../pages/calcul';
import { browser } from "protractor";

let calc = new calcul();

Given('Navigate to calculator site', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://juliemr.github.io/protractor-demo/');
    

  });
  When('add two number {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstele.sendKeys(string);
        await calc.secondele.sendKeys(string2);
  });
  Then('output is {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await  calc.goele.click();

        await calc.resultele.getText().then(function (text) {

            console.log(text);

        });


  });

  
  