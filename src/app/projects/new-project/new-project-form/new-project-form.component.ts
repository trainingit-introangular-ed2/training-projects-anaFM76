import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/proyect.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() save = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
}
