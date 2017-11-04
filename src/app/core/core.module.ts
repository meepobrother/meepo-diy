import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService, SysinfoService } from './api';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';
import { SidebarList } from './sidebar-list/sidebar-list';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarItemRight, SidebarItem } from './sidebar-item/sidebar-item.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';

import { ElModule } from '../element-angular';
import { NavTabPaneComponent } from './nav-tab-pane/nav-tab-pane.component';

const components = [
    MainLayoutComponent,
    SidebarContainerComponent,
    SidebarList,
    SidebarHeaderComponent,
    SidebarItemRight, SidebarItem,
    SidebarContentComponent,
    NavTabsComponent,
    NavTabPaneComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ElModule.forRoot(),
        FlexLayoutModule
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ...components,
        ElModule
    ],
    providers: [
        ApiService,
        SysinfoService
    ],
})
export class CoreModule { }
