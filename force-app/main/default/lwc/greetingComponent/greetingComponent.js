import { LightningElement } from 'lwc';

export default class GreetingComponent extends LightningElement {

    name = '';

    handleChange(event){
        this.name = event.target.value;
    }

    get displayName(){
        return this.name ? this.name : 'Guest';
    }
}