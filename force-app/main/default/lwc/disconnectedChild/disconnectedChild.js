import { LightningElement } from 'lwc';

export default class DisconnectedChild extends LightningElement {

    disconnectedCallback() {
        console.log('child disconnected callback');
    }
}