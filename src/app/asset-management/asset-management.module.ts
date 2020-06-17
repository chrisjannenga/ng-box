import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetManagementComponent } from './asset-management.component';
import { LivestockComponent } from './livestock/livestock.component';
import { ToolsComponent } from './tools/tools.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { LandComponent } from './land/land.component';


@NgModule({
  declarations: [AssetManagementComponent, LivestockComponent, ToolsComponent, VehiclesComponent, LandComponent],
  imports: [
    CommonModule,
    AssetManagementRoutingModule
  ]
})
export class AssetManagementModule { }
