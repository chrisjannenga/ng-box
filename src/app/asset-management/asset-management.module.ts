import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebcamModule } from 'ngx-webcam';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetManagementComponent } from './asset-management.component';
import { LivestockComponent } from './livestock/livestock.component';
import { ToolsComponent } from './tools/tools.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { LandComponent } from './land/land.component';
import { NzCardModule, NzIconModule, NzButtonModule } from 'ng-zorro-antd';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [AssetManagementComponent, LivestockComponent, ToolsComponent, VehiclesComponent, LandComponent],
  imports: [
    CommonModule,
    AssetManagementRoutingModule,
    WebcamModule,
    NzCardModule,
    ZXingScannerModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class AssetManagementModule { }
