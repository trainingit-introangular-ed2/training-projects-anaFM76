import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/proyect.model';

@Component({
  selector: 'app-new-project-material',
  templateUrl: './new-project-material.component.html',
  styleUrls: ['./new-project-material.component.css']
})
export class NewProjectMaterialComponent implements OnInit {
  @Input() project: Project;
  @Output() save = new EventEmitter<boolean>();
  public formNuevo: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.formNuevo = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  onSubmit() {
    this.project.name = this.formNuevo.get('name').value;
    this.save.emit();
  }
}
