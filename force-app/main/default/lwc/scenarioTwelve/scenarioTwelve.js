import { LightningElement, wire, track } from 'lwc';
import getAccountsData from '@salesforce/apex/AccountHandler.getAccountsData';

export default class ScenarioTwelve extends LightningElement {

    accounts = [];
    @wire(getAccountsData)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.error(error);
        }
    }

}