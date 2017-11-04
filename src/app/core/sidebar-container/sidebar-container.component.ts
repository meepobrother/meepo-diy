import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarContainerService } from '../../services';
@Component({
  selector: 'sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  @HostBinding('class.sidebar-container-close') _close: boolean = false;

  constructor(
    public service$: SidebarContainerService
  ) { }

  ngOnInit() {
    this.service$.onOpen.subscribe(res => {
      this._close = res;
  });
  }

}
