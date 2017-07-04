import { Component } from '@angular/core';

import { ContactService } from './contact.service';
import { IContacts } from './contactListInterface';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactList: IContacts[];
  errorMsg : string;
  addCont : IContacts[];

  constructor(private _contactService : ContactService) {
    // this.contactList = this._contactService.getContactList(); 
  }

 getThisContact(empid : string) {
    this._contactService.getThissContact(empid)
                        .then(contactList => this.contactList = contactList);
 }


  ngOnInit() : void {
    this._contactService.getContactList()
                        .then(contactList => this.contactList = contactList);
  }

}
