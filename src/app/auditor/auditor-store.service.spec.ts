import { TestBed } from '@angular/core/testing';

import { AuditorStoreService } from './auditor-store.service';

describe('AuditorStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditorStoreService = TestBed.get(AuditorStoreService);
    expect(service).toBeTruthy();
  });
});
