import { TestBed } from '@angular/core/testing';

import { VuttrManagementService } from './vuttr-management.service';

describe('VuttrManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VuttrManagementService = TestBed.get(VuttrManagementService);
    expect(service).toBeTruthy();
  });
});
