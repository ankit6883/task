import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.scss']
})
export class AvatarImgComponent implements OnInit {
  @Input() iconName: string;
  @Input() title: string;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
