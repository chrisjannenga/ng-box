import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { HumanResourcesComponent } from './human-resources.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [HumanResourcesComponent, StaffComponent],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule
  ]
})
export class HumanResourcesModule { }
