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

  constructor(private _contactService : ContactService) {
    // this.contactList = this._contactService.getContactList(); 
  }

  ngOnInit() : void {
    this._contactService.getContactList()
          .subscribe(contactList => this.contactList = contactList,
          error => this.errorMsg = <any>error);
  }

}
