import { TestBed } from '@angular/core/testing';

import { PerfilocupacionalService } from './perfilocupacional.service';

describe('PerfilocupacionalService', () => {
  let service: PerfilocupacionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilocupacionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
