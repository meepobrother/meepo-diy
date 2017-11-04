import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as store from 'store';
import { ApiService } from '../../core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  myThemes: any;
  themesShops: any;

  father: any;
  tabs: any;

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit() { }

  onThemesShopsInit(e: any) {
    this.themesShops = e;
    this.father = { myThemes: this.myThemes, themesShops: this.themesShops };
  }

  navTabsInit(e: any) {
    this.tabs = e;
  }

  onMyThemesInit(e: any) {
    this.myThemes = e;
    this.father = { myThemes: this.myThemes, themesShops: this.themesShops };
  }

}
