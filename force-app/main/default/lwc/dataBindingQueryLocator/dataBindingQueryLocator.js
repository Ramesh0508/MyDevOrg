import { LightningElement } from 'lwc';

export default class DataBindingQueryLocator extends LightningElement {

    greeting = 'World';
    
    handleChangeGreeting(event) {
        this.greeting = this.template.querySelector('lightning-input').value;
    }
}