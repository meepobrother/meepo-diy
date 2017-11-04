import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
