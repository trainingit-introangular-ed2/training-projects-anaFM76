import { TestBed } from '@angular/core/testing';

import { AuditorInterceptorService } from './auditor-interceptor.service';

describe('AuditorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditorInterceptorService = TestBed.get(AuditorInterceptorService);
    expect(service).toBeTruthy();
  });
});
