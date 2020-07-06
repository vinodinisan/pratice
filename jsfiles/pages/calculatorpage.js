"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorpage = void 0;
const protractor_1 = require("protractor");
class calculatorpage {
    constructorpage() {
        this.first = protractor_1.element(protractor_1.by.model('first'));
        this.second = protractor_1.element(protractor_1.by.model('second'));
        this.go = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result1 = protractor_1.element(protractor_1.by.css("h2[class='ng-binding']"));
    }
}
exports.calculatorpage = calculatorpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvcnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9jYWxjdWxhdG9ycGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxjQUFjO0lBT3ZCLGVBQWU7UUFLZixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFHekQsQ0FBQztDQU1KO0FBeEJELHdDQXdCQyJ9