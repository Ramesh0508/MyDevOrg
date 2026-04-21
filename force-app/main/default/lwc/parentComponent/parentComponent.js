import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    errorCallback(error, stack) {
        throw error;
        console.log(stack);
    }
}