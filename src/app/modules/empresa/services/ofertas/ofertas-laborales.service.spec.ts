import { TestBed } from '@angular/core/testing';

import { OfertasLaboralesService } from './ofertas-laborales.service';

describe('OfertasLaboralesService', () => {
  let service: OfertasLaboralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertasLaboralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
