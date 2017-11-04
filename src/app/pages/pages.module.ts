import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IsLoginGuard } from './login.guard';

import { ShareModule } from '../share';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShareModule
  ],
  declarations: [],
  providers: [
    IsLoginGuard
  ]
})
export class PagesModule { }
