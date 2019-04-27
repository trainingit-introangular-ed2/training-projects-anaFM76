import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberProjects$: Observable<number>;

  constructor(private projectsService: ProjectsService) {
    //this.projectsService.count().subscribe(val => (this.numberProjects = val));
    this.numberProjects$ = this.projectsService.count();
  }

  ngOnInit() {}
}
