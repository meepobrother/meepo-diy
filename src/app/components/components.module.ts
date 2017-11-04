import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverComponent, CoverContent } from './cover';
import { MyThemesComponent } from './my-themes/my-themes.component';
import { ThemesShopsComponent } from './themes-shops/themes-shops.component';
import { BlankComponent } from './blank/blank.component';

import { ShareModule } from '../share';

const components = [
  CoverComponent, CoverContent,
  MyThemesComponent, ThemesShopsComponent,
  BlankComponent
];

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
