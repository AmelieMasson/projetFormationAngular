import { TestBed } from '@angular/core/testing';

import { CommercialGuardGuard } from './commercial-guard.guard';

describe('CommercialGuardGuard', () => {
  let guard: CommercialGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommercialGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
