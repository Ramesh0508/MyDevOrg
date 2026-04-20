import { LightningElement } from 'lwc';

export default class ScenarioNine extends LightningElement {

    selectedObject;
    objectOptions=[
        { label: 'Account', value: 'Account' },
        { label: 'Contact', value: 'Contact' },
        { label: 'Case', value: 'Case' },
        { label: 'Opportunity', value: 'Opportunity' },
        { label: 'Patient__c', value: 'Patient__c' }
       
    ];
    objectChange(event){
        this.selectedObject=event.detail.value;
        switch(this.selectedObject){
            //The window. location. href property returns the URL (Universal Resource Locator) of the current page.
            case 'Account':
                window.location.href='https://orgfarm-a57d110f06-dev-ed.develop.lightning.force.com/lightning/o/Account/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=177666773683165510&backgroundContext=%2Flightning%2Fo%2FAccount%2Flist%3FfilterName%3D__Recent';
                break;
            case 'Contact':
                window.location.href='https://orgfarm-a57d110f06-dev-ed.develop.lightning.force.com/lightning/o/Contact/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=177666782489150264&backgroundContext=%2Flightning%2Fo%2FContact%2Flist%3FfilterName%3DAllContacts';
                break;
            case 'Case':
                window.location.href='https://orgfarm-a57d110f06-dev-ed.develop.lightning.force.com/lightning/o/Case/new?count=2&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&backgroundContext=%2Flightning%2Fo%2FCase%2Flist%3FfilterName%3D__Recent';
                break;
            case 'Opportunity':
                window.location.href='https://orgfarm-a57d110f06-dev-ed.develop.lightning.force.com/lightning/o/Opportunity/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=177666794747462363&backgroundContext=%2Flightning%2Fo%2FOpportunity%2Flist%3FfilterName%3DAllOpportunities';
                break;
            case 'Patient__c':
                window.location.href='https://orgfarm-a57d110f06-dev-ed.develop.lightning.force.com/lightning/o/Patient__c/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=177666794747462363&backgroundContext=%2Flightning%2Fo%2FPatient__c%2Flist%3FfilterName%3DAllPatients';
                break;
            default:
                break;
        }
    }

}