import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tp-contact-list',
  template: `
    <h2>{{message}}</h2>
  `
})

export class ContactListComponent {
  message = 'Xin chao, ContactListComponent';
}
