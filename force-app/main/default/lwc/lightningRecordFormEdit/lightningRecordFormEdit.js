import { LightningElement, api } from 'lwc';
import Account_Fields from '@salesforce/schema/Contact.AccountId';  
import Name_Fields from '@salesforce/schema/Contact.Name';
import Phone_Fields from '@salesforce/schema/Contact.Phone';
import Email_Fields from '@salesforce/schema/Contact.Email';

export default class LightningRecordFormEdit extends LightningElement {

    @api recordId;
    @api objectApiName;
    
    fields = [Account_Fields, Name_Fields, Phone_Fields, Email_Fields];
}