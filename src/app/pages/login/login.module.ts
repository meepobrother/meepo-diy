import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ShareModule } from '../../share';
import { ComponentsModule } from '../../components';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule,
    ComponentsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
