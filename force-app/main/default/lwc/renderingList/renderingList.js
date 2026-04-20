import { LightningElement } from 'lwc';

export default class RenderingList extends LightningElement {

    contacts=[
        {Id: '1', Name: 'John Doe', Email: 'john.doe@example.com', Title: 'Sales Manager'},
        {Id: '2', Name: 'Jane Smith', Email: 'jane.smith@example.com', Title: 'Marketing Specialist'},
        {Id: '3', Name: 'Bob Johnson', Email: 'bob.johnson@example.com', Title: 'HR Associate'}
    ]
}