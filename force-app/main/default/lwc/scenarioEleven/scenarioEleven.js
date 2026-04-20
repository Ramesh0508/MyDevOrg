import { LightningElement } from 'lwc';
import Website from '@salesforce/schema/Account.Website';

export default class ScenarioEleven extends LightningElement {

    details=[
        {
            Id:'01',
            Name:'Sanjay Gupta',
            Email: 'contact@sgts.org.in',
            Phone: +919829011904,
            Address:'Jaipur, India',
            Website : 'https://sgts.org.in/',
            Telegram : 't.meSanjayGuptaTechSchool'
        },
 	  {
            Id:'02',
            Name:'Vikas Gupta',
            Email: 'contact@sgts.org.in',
            Phone: +919829011904,
            Address:'Jaipur, India',
            Website : 'https://sgts.org.in/',
            Telegram : 't.me/SanjayGuptaTechSchool'
        }
    ];

}