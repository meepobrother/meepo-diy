import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesPreviewRoutingModule } from './themes-preview-routing.module';
import { ThemesPreviewComponent } from './themes-preview.component';

@NgModule({
  imports: [
    CommonModule,
    ThemesPreviewRoutingModule
  ],
  declarations: [ThemesPreviewComponent]
})
export class ThemesPreviewModule { }
