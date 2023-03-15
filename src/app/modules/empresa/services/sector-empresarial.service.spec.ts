import { TestBed } from '@angular/core/testing';

import { SectorEmpresarialService } from './sector-empresarial.service';

describe('SectorEmpresarialService', () => {
  let service: SectorEmpresarialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorEmpresarialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
