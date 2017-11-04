import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services';

@Component({
  selector: 'sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
  providers: [
      SidebarService
  ]
})
export class SidebarList implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
