import {
  Component, OnInit, TemplateRef,
  AfterContentInit, ContentChild,
  Input, Output, EventEmitter,
  Directive
} from '@angular/core';


@Directive({
  selector: '[navTabPaneRef]'
})
export class NavTabPaneRef {
  constructor(
    public templateRef: TemplateRef<any>
  ) { }
}


@Component({
  selector: 'nav-tab-pane',
  templateUrl: './nav-tab-pane.component.html',
  styleUrls: ['./nav-tab-pane.component.scss']
})
export class NavTabPaneComponent implements OnInit, AfterContentInit {

  @Input() active: boolean = false;
  @Input() title: string;
  @Input() icon: string;

  @ContentChild(NavTabPaneRef) paneRef: NavTabPaneRef;
  @Output() onInit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.onInit.emit(this);
  }

  ngAfterContentInit() {

  }

  unActive() {
    this.active = false;
  }

  doActive() {
    this.active = true;
  }

}
