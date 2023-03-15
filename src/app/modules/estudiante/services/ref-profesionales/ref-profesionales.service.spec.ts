import { TestBed } from '@angular/core/testing';

import { RefProfesionalesService } from './ref-profesionales.service';

describe('RefProfesionalesService', () => {
  let service: RefProfesionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefProfesionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
