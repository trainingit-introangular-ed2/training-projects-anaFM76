import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/proyect.model';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  proyectoAnadir: Project;

  constructor(public location: Location, private router: Router, private projectsService: ProjectsService) {
    this.proyectoAnadir = { id: 0, name: '' };
  }

  ngOnInit() {}

  public saveProject() {
    this.projectsService.saveProject(this.proyectoAnadir).subscribe(_ => this.router.navigateByUrl('/projects'));
  }
}
