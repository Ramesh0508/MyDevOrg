import { LightningElement, api, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

const fields = ['Contact.Name', 'Contact.Title', 'Contact.Phone', 'Contact.Email'];


export default class WireAdapter extends LightningElement {

    @api recordId;

    @wire(getRecord, {recordId: '$recordId', fields})
    contacts;

    get name(){
        console.log('Contact Data: ', this.contacts.data);
        console.log(this.contacts.data);
        return this.contacts.data.fields.Name.value;
    }

    get title(){
        return this.contacts.data.fields.Title.value;
    }

    get phone(){
        return this.contacts.data.fields.Phone.value;
    }

    get email(){
        return this.contacts.data.fields.Email.value;
    }
}