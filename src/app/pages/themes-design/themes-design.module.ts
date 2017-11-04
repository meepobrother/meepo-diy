import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesDesignRoutingModule } from './themes-design-routing.module';
import { ThemesDesignComponent } from './themes-design.component';
import { ShareModule } from '../../share';
import { ComponentsModule } from '../../components';


@NgModule({
  imports: [
    CommonModule,
    ThemesDesignRoutingModule,
    ShareModule,
    ComponentsModule
  ],
  declarations: [ThemesDesignComponent]
})
export class ThemesDesignModule { }
