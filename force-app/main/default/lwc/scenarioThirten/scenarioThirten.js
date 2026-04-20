import { LightningElement, wire, track } from 'lwc';
import getAccountsData from '@salesforce/apex/AccountHandler.getAccountsData';
const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' }
];

export default class ScenarioThirten extends LightningElement {

    accounts = [];
    columns = columns;
    @wire(getAccountsData)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.error(error);
        }
    }

}