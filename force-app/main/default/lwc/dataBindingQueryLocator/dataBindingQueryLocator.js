import { LightningElement } from 'lwc';

export default class DataBindingQueryLocator extends LightningElement {

    greeting = 'World';
    
    handleChangeGreeting(event) {
        console.log(event.target.value);
        debugger;
        this.greeting = this.template.querySelector('lightning-input').value;
    }
}