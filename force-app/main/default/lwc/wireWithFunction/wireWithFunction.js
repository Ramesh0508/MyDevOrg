import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireWithFunction extends LightningElement {

    @api recordId;
    record;
    error;

    @wire(getRecord, { recordId: '$recordId', fields: ['Account.Name', 'Account.Rating'] })
    wiredAccount({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }
    get name() {
        return this.record ? this.record.fields.Name.value : '';
    }
    get rating() {
        return this.record ? this.record.fields.Rating.value : '';
    }
}