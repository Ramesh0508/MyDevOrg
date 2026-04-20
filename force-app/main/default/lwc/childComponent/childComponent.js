import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api firstName = 'Ramesh';

    lowercaseLastName = 'Ramesh';

    @api
    get lastName() {
        return this.lowercaseLastName.toUpperCase();
    }
    set lastName(value) {
        this.lowercaseLastName = value.toLowerCase();
    }
}