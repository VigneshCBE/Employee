import { Component } from '@angular/core';

import { ContactService } from './contact.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactList: any[];
  constructor(private _contactService : ContactService) {
    // this.contactList = this._contactService.getContactList();
  }

  ngOnInit() : void {
    this.contactList = this._contactService.getContactList();
  }

}
