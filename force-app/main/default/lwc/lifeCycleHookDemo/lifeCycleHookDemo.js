import { LightningElement } from 'lwc';

export default class LifeCycleHookDemo extends LightningElement {

    name='Car';
    price='$2,7000';
    ready = false;
    rendered = false;
    test;
    constructor(){
        super();
        this.test = 'Component instance is created';
        console.log('Constructor is called');
    }

    connectedCallback() {
        setTimeout(()=>{
            this.ready=true;
        }, 3000);
            console.log('Connected Callback is called');
    }

    renderedCallback(){
        setTimeout(()=>{
            this.rendered = true;
        }, 4000);
        console.log('Rendered Callback is called');
        
    }

}