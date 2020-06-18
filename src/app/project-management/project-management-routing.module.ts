import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectManagementComponent } from './project-management.component';
import { OverviewComponent } from './overview/overview.component';
import { TasksComponent } from './tasks/tasks.component';
import { CyclesComponent } from './cycles/cycles.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: ProjectManagementComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'cycles', component: CyclesComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
