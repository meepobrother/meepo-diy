import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesComponent } from './themes.component';

@NgModule({
  imports: [
    CommonModule,
    ThemesRoutingModule
  ],
  declarations: [ThemesComponent]
})
export class ThemesModule { }
