import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Project } from '../models/proyect.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  projectId: number;
  project$: Observable<Project>;

  constructor(activateRoute: ActivatedRoute, public location: Location, private projectsService: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project$ = this.projectsService.findById(this.projectId).pipe(share());
  }
}
