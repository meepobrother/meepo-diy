import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [],
  exports: [
    CoreModule,
  ]
})
export class ShareModule { }

