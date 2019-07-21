import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tp-contact-list',
  template: `
    <h2>{{message}}</h2>
    <button (click) = "doClick()">Click me</button>
  `
})

export class ContactListComponent {
  message = 'Xin chao, ContactListComponent';
  doClick(){
    this.message = 'Button clicked';
    setTimeout(()=>{
      this.message = 'Button Done';
    }, 1000);
  }
}
