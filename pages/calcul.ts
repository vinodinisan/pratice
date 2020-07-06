import { ElementFinder,element,by } from "protractor";



export class calcul{
    firstele:ElementFinder;
    secondele:ElementFinder;
    goele:ElementFinder;
    resultele:ElementFinder;

    constructor()
    {
        this.firstele = element(by.model('first'));
        this.secondele = element(by.model('second'));
        this.goele = element(by.id('gobutton'));
        this.resultele = element(by.css("h2[class='ng-binding']"));


    }

}