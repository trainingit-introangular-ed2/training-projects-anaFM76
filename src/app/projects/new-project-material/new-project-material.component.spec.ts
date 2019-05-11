import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectMaterialComponent } from './new-project-material.component';

describe('NewProjectMaterialComponent', () => {
  let component: NewProjectMaterialComponent;
  let fixture: ComponentFixture<NewProjectMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
