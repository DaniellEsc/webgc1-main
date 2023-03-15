import { TestBed } from '@angular/core/testing';

import { FormPostulacionesService } from './form-postulaciones.service';

describe('FormPostulacionesService', () => {
  let service: FormPostulacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPostulacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
