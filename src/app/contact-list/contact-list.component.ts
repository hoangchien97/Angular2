import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tp-contact-list',
  templateUrl : './contact-list.component.html',
  styleUrls : ['./contact-list.component.scss']
})

export class ContactListComponent {

  @Input() childMessage: string;

  @Output() voteSize = new EventEmitter();
  counter: number = 0;

  message: string = 'Xin chao, ContactListComponent';
  isRender = false;
  tabIndex: number = 1;
  static clickCounter = 0;
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
  ];
  baseContact = {
    id: 4,
    name: 'User No. 4',
    job: 'Software Developer',
    avatar: {
      url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
    }
  };
  serverContacts = [{
      id: 1,
      name: 'Tiep Phan',
      job: 'Web Developer',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }, {
      id: 2,
      name: 'John Doe',
      job: 'Writer',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }, {
      id: 3,
      name: 'Michael Bay',
      job: 'Producer, Director',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }
  ];

  colorUsername: string = "green";

  changeTab(tabIndex){
    this.tabIndex = tabIndex;
  }
  getDataFromServer() {
    return JSON.parse(JSON.stringify(this.serverContacts));
  }

  getContacts() {
    if (ContactListComponent.clickCounter % 2 == 0) {
      this.contacts = this.getDataFromServer().concat(this.baseContact);
    } else {
      this.contacts = this.getDataFromServer().concat([]);
    }
    ContactListComponent.clickCounter++;
  }
  contactTrackByFn(index, item) {
    return item.id;
  }

  voted() {
    this.counter ++;
    this.voteSize.emit(this.counter);
  }
}
