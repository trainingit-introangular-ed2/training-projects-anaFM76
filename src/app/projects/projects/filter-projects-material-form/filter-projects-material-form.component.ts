import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-material-form',
  templateUrl: './filter-projects-material-form.component.html',
  styleUrls: ['./filter-projects-material-form.component.css']
})
export class FilterProjectsMaterialFormComponent implements OnInit {
  @Input() filter: string;
  @Output() search = new EventEmitter<string>();

  public formFiltro: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.formFiltro = this.formBuilder.group({
      filter: ['', Validators.required]
    });
  }
  onSubmit() {
    this.filter = this.formFiltro.get('filter').value;
    this.search.emit(this.filter);
  }

  onClean() {
    this.formFiltro.get('filter').setValue('');
    this.filter = '';
    this.search.emit(this.filter);
  }
}
