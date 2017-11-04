import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarContainerService {

  _open: boolean = false;
  onOpen: Subject<boolean> = new Subject();

  open() {
    this.onOpen.next(true);
    this._open = true;
  }

  close() {
    this.onOpen.next(false);
    this._open = false;
  }

  toogle() {
    this._open = !this._open;
    this.onOpen.next(this._open);
  }

}
