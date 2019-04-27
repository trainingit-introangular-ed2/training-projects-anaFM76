import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { count, share } from 'rxjs/operators';
import { Project } from '../models/proyect.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public numberProjects$: Observable<number>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.findAll().pipe(share());
    this.numberProjects$ = this.projects$.pipe(count(x => x != null));
  }

  public deleteProject(id: number) {
    this.projectsService.deleteProject(id).subscribe(_ => {
      this.projects$ = this.projectsService.findAll();
    });
  }

  public search(filter: string) {
    this.projects$ = this.projectsService.filter(filter);
  }
}
