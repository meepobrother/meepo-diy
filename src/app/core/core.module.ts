import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService, SysinfoService } from './api';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ApiService,
        SysinfoService
    ],
})
export class CoreModule { }
