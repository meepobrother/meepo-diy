import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core';
@Component({
  selector: 'my-themes',
  templateUrl: './my-themes.component.html',
  styleUrls: ['./my-themes.component.scss']
})
export class MyThemesComponent implements OnInit {

  list: any[] = [];
  constructor(
      public router: Router,
      public api: ApiService
  ) { }

  ngOnInit() {
      this.getList();
  }

  getList() {
      this.api.mpost('app.getListApp', { page: 1, psize: 30 }).subscribe((res: any) => {
          this.list = res.info;
      });
  }

  delete(item: any) {
      this.api.mpost('app.deleteApp', item).subscribe(res => {
          this.getList();
      });
  }

  goDesign(item: any) {
      this.router.navigate(['/themes/design', item.id])
  }

}
