import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tp-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.scss']
})
export class ContactImageDetailComponent implements OnInit {
  avatar: string;
  text: any = {};
  constructor() { }

  ngOnInit() {
    this.avatar = 'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg';
    this.text.hello = 'xin chao';
  }
}
