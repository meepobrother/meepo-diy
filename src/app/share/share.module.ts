import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core';
import { ComponentsModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ComponentsModule
  ],
  declarations: [],
  exports: [
    CoreModule,
    ComponentsModule
  ]
})
export class ShareModule { }
