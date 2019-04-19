import { Component, OnInit } from '@angular/core';
import { Project } from '../models/proyect.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public numberProjects: number;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.findAll();
    this.numberProjects = this.projectsService.count();
  }

  public deleteProject(id: number) {
    this.projectsService.deleteProject(id);
    this.projects = this.projectsService.findAll();
  }

  public search(filter: string) {
    this.projects = this.projectsService.filter(filter);
  }
}
