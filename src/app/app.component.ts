import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Contact Application';
  parentMassage = 'Message from parent';
  vote:number = 0;

  voteCount(value){
    this.vote = value;
  }
}
