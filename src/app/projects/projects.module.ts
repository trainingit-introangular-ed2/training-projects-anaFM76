import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatTableModule
} from '@angular/material';
import { AuditorInterceptorService } from '../auditor/auditor-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProjectMaterialComponent } from './new-project-material/new-project-material.component';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsHttpService } from './projects-http.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './projects.service';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { FilterProjectsMaterialFormComponent } from './projects/filter-projects-material-form/filter-projects-material-form.component';
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
    NewProjectFormComponent,
    NewProjectMaterialComponent,
    FilterProjectsMaterialFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  exports: [DashboardComponent],
  providers: [
    {
      provide: ProjectsService,
      useClass: ProjectsHttpService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditorInterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule {}
