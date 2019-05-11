import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectsMaterialFormComponent } from './filter-projects-material-form.component';

describe('FilterProjectsMaterialFormComponent', () => {
  let component: FilterProjectsMaterialFormComponent;
  let fixture: ComponentFixture<FilterProjectsMaterialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProjectsMaterialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProjectsMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
