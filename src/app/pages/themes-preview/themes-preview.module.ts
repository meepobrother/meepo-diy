import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesPreviewRoutingModule } from './themes-preview-routing.module';
import { ThemesPreviewComponent } from './themes-preview.component';

import { ShareModule } from '../../share';

@NgModule({
  imports: [
    CommonModule,
    ThemesPreviewRoutingModule,
    ShareModule
  ],
  declarations: [ThemesPreviewComponent]
})
export class ThemesPreviewModule { }
