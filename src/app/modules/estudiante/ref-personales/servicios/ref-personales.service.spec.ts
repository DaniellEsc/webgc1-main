import { TestBed } from '@angular/core/testing';

import { RefPersonalesService } from './ref-personales.service';

describe('RefPersonalesService', () => {
  let service: RefPersonalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefPersonalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
