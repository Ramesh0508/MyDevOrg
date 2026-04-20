import { LightningElement } from 'lwc';
import myFunction from './myFunction';
import { getTermOptions, calculateMonthlyPayment } from 'c/calculateUtils';

export default class AdditonalJSDemo extends LightningElement {
    si='';
    valNamed = getTermOptions();
    si = calculateMonthlyPayment(10000, 5, 10);
    valDefault = myFunction();
}