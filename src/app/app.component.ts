import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from './projects/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberProjects$: Observable<number>;

  constructor(private projectsService: ProjectsService) {
    //this.projectsService.count().subscribe(val => (this.numberProjects = val));
    this.numberProjects$ = this.projectsService.count();
  }
}
