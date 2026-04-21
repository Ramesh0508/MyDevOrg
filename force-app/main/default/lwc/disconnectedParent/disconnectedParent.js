import { LightningElement } from 'lwc';

export default class DisconnectedParent extends LightningElement {

    show = true;
    handleShowHide() {
        this.show = !this.show;
    }
}