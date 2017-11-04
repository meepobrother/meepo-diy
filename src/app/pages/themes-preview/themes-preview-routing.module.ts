import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemesPreviewComponent } from './themes-preview.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesPreviewRoutingModule { }
