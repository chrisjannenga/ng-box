import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanResourcesComponent } from './human-resources.component';
import { StaffComponent } from './staff/staff.component';
import { FullTimeComponent } from './staff/full-time/full-time.component';
import { PartTimeComponent } from './staff/part-time/part-time.component';

const routes: Routes = [
  { path: '', component: HumanResourcesComponent },
  { path: 'staff',  component: StaffComponent, children: [
    { path: 'full-time', component: FullTimeComponent },
    { path: 'part-time', component: PartTimeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
