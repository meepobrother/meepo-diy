import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesDesignRoutingModule } from './themes-design-routing.module';
import { ThemesDesignComponent } from './themes-design.component';

@NgModule({
  imports: [
    CommonModule,
    ThemesDesignRoutingModule
  ],
  declarations: [ThemesDesignComponent]
})
export class ThemesDesignModule { }
