import { Component } from '@angular/core';
import { MenuItem } from 'web-template-hms/lib/types/menu-item.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-demo';
  userId = '';
  userName = 'User1';
  userAvatar = './favicon.ico';
  logo = './favicon.ico';
  menuItems = [
    {
      label: 'Products',
      url: 'Products'
    },
    {
      label: 'Contact',
      url: 'Contact'
    }
  ];

  listItem = [
    {
      label: 'Menu1',
      url: 'Menu1'
    },
    {
      label: 'Menu2',
      url: 'Menu2'
    }
  ];
}
