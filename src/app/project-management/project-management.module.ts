import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { OverviewComponent } from './overview/overview.component';
import { TasksComponent } from './tasks/tasks.component';
import { CyclesComponent } from './cycles/cycles.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [ProjectManagementComponent, OverviewComponent, TasksComponent, CyclesComponent, ReportsComponent],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule
  ]
})
export class ProjectManagementModule { }
