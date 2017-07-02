import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IContacts } from './contactListInterface';

@Injectable()
export class ContactService {

   private _contactsUrl = "http://demo0790365.mockable.io/employee/employeeList";

   constructor(private _http : Http) {

   }

    getContactList(): Observable<IContacts[]> {
        return this._http.get(this._contactsUrl)
                .map((response : Response) => <IContacts[]> response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error : Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }

}