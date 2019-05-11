import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/proyect.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() delete = new EventEmitter<number>();
  displayedColumns: string[] = ['identificador', 'nombre', 'ver', 'borrar'];
  constructor() {}

  ngOnInit() {}
}
