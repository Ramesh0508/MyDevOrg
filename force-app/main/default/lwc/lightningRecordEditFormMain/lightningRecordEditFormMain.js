import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';   
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import RATING_FIELD from '@salesforce/schema/Account.Rating';   


export default class LightningRecordEditFormMain extends LightningElement {

    @api recordId;
    @api objectApiName;
    name = NAME_FIELD;
    industry = INDUSTRY_FIELD;
    annualRevenue = ANNUAL_REVENUE_FIELD;
    phone = PHONE_FIELD;
    website = WEBSITE_FIELD;
    rating = RATING_FIELD;
}