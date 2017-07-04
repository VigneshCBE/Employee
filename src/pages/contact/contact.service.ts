import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { InMemoryDataService } from './../../app/webapi.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


import { IContacts } from './contactListInterface';

@Injectable()
export class ContactService {

//    private _contactsUrl = "http://demo0790365.mockable.io/employee/employeeList";
//      private _contactsUrl = "./../../assets/api/employeeList.json";
private _getContactsUrl = "api/EmployeeList";


   constructor(private _http : Http) {

   }

    // getContactList(): Observable<IContacts[]> {
    //     return this._http.get(this._contactsUrl)
    //             .map((response : Response) => <IContacts[]> response.json())
    //             .do(data => console.log('All: ' + JSON.stringify(data)))
    //             .catch(this.handleError);
    // }

    getThissContact(empid : string) : Promise<IContacts[]> {
        const url = this._getContactsUrl +"/empid="+empid;
        return this._http.get(this._getContactsUrl)
                        .toPromise()
                        .then(response => response.json().data as IContacts[])
                        .catch(this.handleError);
    }

    getContactList() : Promise<IContacts[]> {
        return this._http.get(this._getContactsUrl)
                            .toPromise()
                            .then(response => response.json().data as IContacts[])
                            .catch(this.handleError);
    }

    private handleError(error : any) : Promise<any> {
        console.error(error);
        return Promise.reject(error.json().error || 'server error');
    }

}
