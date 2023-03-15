import { TestBed } from '@angular/core/testing';

import { AreasestudioService } from './areasestudio.service';

describe('AreasestudioService', () => {
  let service: AreasestudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreasestudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
