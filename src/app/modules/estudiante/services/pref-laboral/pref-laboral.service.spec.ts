import { TestBed } from '@angular/core/testing';

import { PrefLaboralService } from './pref-laboral.service';

describe('PrefLaboralService', () => {
  let service: PrefLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
