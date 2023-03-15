import { TestBed } from '@angular/core/testing';

import { InstFormalService } from './inst-formal.service';

describe('InstFormalService', () => {
  let service: InstFormalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstFormalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
