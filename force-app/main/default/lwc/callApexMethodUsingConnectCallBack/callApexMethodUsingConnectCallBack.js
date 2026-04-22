import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';

export default class CallApexMethodUsingConnectCallBack extends LightningElement {
    contacts;
    error;

    connectedCallback() {
        getContacts()
            .then(result => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.contacts = undefined;
            });
    }
}