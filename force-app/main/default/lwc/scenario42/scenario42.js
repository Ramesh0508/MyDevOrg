import { LightningElement, wire } from 'lwc';
import getAccountsandContactsData from '@salesforce/apex/AccountController.getAccountsandContactsData';

export default class Scenario42 extends LightningElement {

     accounts;
    contacts;
    accountColumns = [  
         { label: 'Name', fieldName: 'Name', type: 'text' },
          { label: 'Industry', fieldName: 'Industry', type: 'text' },
         { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
];
    contactColumns = [  
         { label: 'Name', fieldName: 'Name', type: 'text' },
         { label: 'Email', fieldName: 'Email', type: 'text' }
   
];
    @wire(getAccountsandContactsData)
    wiredAccounts({ error, data }) {
        if (data) {
            // Separate accounts and contacts from the response
            this.accounts = data.map(account => ({
                Id: account.Id,
                Name: account.Name,
                Industry: account.Industry,
                AnnualRevenue: account.AnnualRevenue
            }));
            this.contacts = data.flatMap(account => account.Contacts);
        } else if (error) {
            // Handle error
        }
    }

}