import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core';
@Component({
  selector: 'themes-shops',
  templateUrl: './themes-shops.component.html',
  styleUrls: ['./themes-shops.component.scss']
})
export class ThemesShopsComponent implements OnInit {

  list: any[] = [];
  @Input() father: any;
  @Input() tabs: any;

  constructor(
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }
  add() { }

  getList() {
    this.api.mpost('app.getListApp', { page: 1, psize: 30 }, 'imeepos_runner', true).subscribe((res: any) => {
      this.list = res.info;
    });
  }

  useTheme(item: any) {
    console.log(item);
    this.api.mpost('app.cloudInstall', item).subscribe(res => {
      this.tabs.onClick(this.father.myThemes);
    });
  }

}
