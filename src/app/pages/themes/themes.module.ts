import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesComponent } from './themes.component';
import { ShareModule } from '../../share';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    ThemesRoutingModule,
    ShareModule,
    ComponentsModule
  ],
  declarations: [ThemesComponent]
})
export class ThemesModule { }
