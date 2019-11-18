import { Component } from '@angular/core';
import { Icon } from './Interface/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  iconList: Icon[] = [
    { id: 0, title: 'Never', iconName: "calendar" },
    { id: 2, title: 'occasionally', iconName: "calendar-times-o" },
    { id: 3, title: '4 hours', iconName: "clock-o" },
    { id: 4, title: 'yearly', iconName: "comment" },
  ];
}
