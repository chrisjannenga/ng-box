import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetManagementComponent } from './asset-management.component';

const routes: Routes = [{ path: '', component: AssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
