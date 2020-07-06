import { browser, element, by } from "protractor";
import { calcul} from "./pages/calcul"
import {angul} from "./pages/angul"


describe('Test for two numbers to add', () => {
    it('two add two numbers', async () => {
        console.log("good Afternoon");
        let calc = new calcul();
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstele.sendKeys('2');
        await calc.secondele.sendKeys('2');
        await  calc.goele.click();

        await calc.resultele.getText().then(function (text) {

            console.log(text);

        });
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("4");
});


    it('test for angular website', async () => {
        console.log("second test");
        let ang = new angul();
        await browser.get('https://angularjs.org/');
         await ang.linkele.click();
         await ang.searchele.sendKeys("satya");
    });

}); 
