import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoginGuard } from './login.guard';
const routes: Routes = [
  {
    path: 'themes',
    loadChildren: 'app/pages/themes/themes.module#ThemesModule',
    canActivate: [IsLoginGuard]
  },
  {
    path: 'themes/design',
    loadChildren: 'app/pages/themes-design/themes-design.module#ThemesDesignModule',
    canActivate: [IsLoginGuard]
  },
  {
    path: 'themes/preview',
    loadChildren: 'app/pages/themes-preview/themes-preview.module#ThemesPreviewModule',
    canActivate: [IsLoginGuard]
  },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
    canActivate: [IsLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
