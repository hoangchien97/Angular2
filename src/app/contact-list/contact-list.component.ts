import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tp-contact-list',
  templateUrl : './contact-list.component.html'
})

export class ContactListComponent {
  message: string = 'Xin chao, ContactListComponent';
  isRender = true;
  tabIndex: number = 1;
  contacts = [
    {
      id: 1,
      name: 'Chien',
      job: 'Develop',
      avatar: {
        url : 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    },
    {
      id: 2,
      name: 'Dung',
      job: 'Studen',
      // avatar: {
        // url : 'https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-133673159-1500x1000.jpg'
      // }
    },
    {
      id: 3,
      name: 'Manh',
      job: 'Banker',
      avatar: {
        url : 'https://www.free-largeimages.com/wp-content/uploads/2015/07/Desktop_Wallpaper_01.jpg'
      }
    }
  ]

  changeTab(tabIndex){
    this.tabIndex = tabIndex;
  }
}
