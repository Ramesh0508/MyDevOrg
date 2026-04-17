import { LightningElement } from 'lwc';

export default class ScenarioThree extends LightningElement {

    mailingAdd;
    billingAdd;

    handleChangeValue(event){
    
    this.billingAdd = event.target.value;
    }
    handleCopyAddress(){
        this.mailingAdd = this.billingAdd
    }
        
}