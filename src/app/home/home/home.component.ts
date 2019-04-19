import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberProjects: number;

  constructor(private projectsService: ProjectsService) {
    this.numberProjects = this.projectsService.count();
  }

  ngOnInit() {}
}
