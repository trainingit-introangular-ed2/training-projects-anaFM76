import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/proyect.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  projectId: number;
  project: Project;

  constructor(activateRoute: ActivatedRoute, public location: Location, private projectsService: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project = this.projectsService.findById(this.projectId);
  }
}
