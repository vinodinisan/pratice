"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcul = void 0;
const protractor_1 = require("protractor");
class calcul {
    constructor() {
        this.firstele = protractor_1.element(protractor_1.by.model('first'));
        this.secondele = protractor_1.element(protractor_1.by.model('second'));
        this.goele = protractor_1.element(protractor_1.by.id('gobutton'));
        this.resultele = protractor_1.element(protractor_1.by.css("h2[class='ng-binding']"));
    }
}
exports.calcul = calcul;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvY2FsY3VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUl0RCxNQUFhLE1BQU07SUFNZjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUcvRCxDQUFDO0NBRUo7QUFoQkQsd0JBZ0JDIn0=