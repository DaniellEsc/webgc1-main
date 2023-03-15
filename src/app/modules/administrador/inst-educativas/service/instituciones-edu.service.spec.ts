import { TestBed } from '@angular/core/testing';

import { InstitucionesEduService } from './instituciones-edu.service';

describe('InstitucionesEduService', () => {
  let service: InstitucionesEduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitucionesEduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
