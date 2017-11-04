import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoginGuard } from './login.guard';
const routes: Routes = [
  {
    path: 'themes',
    loadChildren: 'app/pages/themes/themes.module#ThemesModule'
  },
  {
    path: 'themes/design',
    loadChildren: 'app/pages/themes-design/themes-design.module#ThemesDesignModule'
  },
  {
    path: 'themes/preview',
    loadChildren: 'app/pages/themes-preview/themes-preview.module#ThemesPreviewModule'
  },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
