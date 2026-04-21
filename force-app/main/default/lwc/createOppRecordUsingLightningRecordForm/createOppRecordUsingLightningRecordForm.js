import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class CreateOppRecordUsingLightningRecordForm extends LightningElement {

    oppObject = OPPORTUNITY;
    fields = [NAME_FIELD, CLOSE_DATE_FIELD, STAGE_FIELD];

    handleSuccess(event) {
       this.dispatchEvent(new ShowToastEvent({
           title: 'Success',
           message: event.detail.message,
           variant: 'success'
       }));
    }
}