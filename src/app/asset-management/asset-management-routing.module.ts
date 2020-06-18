import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetManagementComponent } from './asset-management.component';
import { LivestockComponent } from './livestock/livestock.component';
import { ToolsComponent } from './tools/tools.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { LandComponent } from './land/land.component';

const routes: Routes = [
  { path: '', component: AssetManagementComponent },
  { path: 'livestock', component: LivestockComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'land', component: LandComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
