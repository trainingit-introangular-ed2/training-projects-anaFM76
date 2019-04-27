import { TestBed } from '@angular/core/testing';

import { ProjectsAnteriorService } from './projects-anterior.service';

describe('ProjectsAnteriorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsAnteriorService = TestBed.get(ProjectsAnteriorService);
    expect(service).toBeTruthy();
  });
});
