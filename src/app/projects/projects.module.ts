import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsHttpService } from './projects-http.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './projects.service';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './viewer-project/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    DashboardComponent,
    FilterProjectsFormComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, HttpClientModule],
  exports: [DashboardComponent],
  providers: [
    {
      provide: ProjectsService,
      useClass: ProjectsHttpService
    }
  ]
})
export class ProjectsModule {}
