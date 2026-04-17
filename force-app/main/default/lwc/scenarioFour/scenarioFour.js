import { LightningElement } from 'lwc';

export default class ScenarioFour extends LightningElement {

    feet;
    inch;
    hadleChangeValue(event) {
        this.feet = event.target.value;
    }
    handleBtnClick() {
        this.inch = this.feet * 12;
    }

}