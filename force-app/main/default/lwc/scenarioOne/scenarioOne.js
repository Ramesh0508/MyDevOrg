import { LightningElement } from 'lwc';

export default class ScenarioOne extends LightningElement {
    name = '';
    age = '';
    city = '';
    designation = '';

    handleNameChange(event) {
        this.name = event.target.value;

    }
    handleAgeChange(event) {
        this.age = event.target.value;
    }
    handleCityChange(event) {
        this.city = event.target.value;
    }
    handleDesignationChange(event) {
        this.designation = event.target.value;
    }

}