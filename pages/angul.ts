import {ElementFinder,element,by } from "protractor";

export class angul
{
    linkele:ElementFinder;
    searchele:ElementFinder;

    constructor()
    {

    

    this.linkele = element(by.linkText("angular.io"));
    this.searchele= element(by.css("input[type='search']"))
    

    }





}