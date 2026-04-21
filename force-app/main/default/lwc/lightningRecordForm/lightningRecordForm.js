import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';     

export default class LightningRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName
    //fields=['AccountId', 'Name', 'Phone', 'Email'];
    fields=[ACCOUNTID_FIELD, NAME_FIELD, PHONE_FIELD, EMAIL_FIELD];
}