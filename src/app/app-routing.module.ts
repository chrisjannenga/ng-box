import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'project-management', loadChildren: () => import('./project-management/project-management.module').then(m => m.ProjectManagementModule) },
  { path: 'asset-management', loadChildren: () => import('./asset-management/asset-management.module').then(m => m.AssetManagementModule) },
  { path: 'human-resources', loadChildren: () => import('./human-resources/human-resources.module').then(m => m.HumanResourcesModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
