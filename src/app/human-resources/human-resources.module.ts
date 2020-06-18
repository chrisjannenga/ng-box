import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { HumanResourcesComponent } from './human-resources.component';
import { StaffComponent } from './staff/staff.component';
import { FullTimeComponent } from './staff/full-time/full-time.component';
import { PartTimeComponent } from './staff/part-time/part-time.component';


@NgModule({
  declarations: [HumanResourcesComponent, StaffComponent, FullTimeComponent, PartTimeComponent],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule
  ]
})
export class HumanResourcesModule { }
