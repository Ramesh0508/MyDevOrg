import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';   
import PHONE from '@salesforce/schema/Contact.Phone';

export default class CreateRecordUsingLightningRecordEditForm extends LightningElement {

    contactObject = CONTACT_OBJECT;
    firstName = FIRST_NAME;
    lastName = LAST_NAME
    email = EMAIL;  
    phone = PHONE;
    accountId = ACCOUNT_ID;

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}