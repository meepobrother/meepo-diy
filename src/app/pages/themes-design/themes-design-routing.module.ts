import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemesDesignComponent } from './themes-design.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesDesignRoutingModule { }
