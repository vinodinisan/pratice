"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calcul_1 = require("../pages/calcul");
const protractor_1 = require("protractor");
let calc = new calcul_1.calcul();
cucumber_1.Given('Navigate to calculator site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('add two number {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstele.sendKeys(string);
    yield calc.secondele.sendKeys(string2);
}));
cucumber_1.Then('output is {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.goele.click();
    yield calc.resultele.getText().then(function (text) {
        console.log(text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZi9zdGVwczEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNENBQXNDO0FBQ3RDLDJDQUFxQztBQUVyQyxJQUFJLElBQUksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBRXhCLGdCQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBUSxFQUFFO0lBQzNDLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFHakUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNwRSxvRUFBb0U7SUFDcEUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMxQyxvRUFBb0U7SUFDcEUsTUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEIsQ0FBQyxDQUFDLENBQUM7QUFHVCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=