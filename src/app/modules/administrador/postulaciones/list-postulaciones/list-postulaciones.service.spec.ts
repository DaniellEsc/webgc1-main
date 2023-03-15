import { TestBed } from '@angular/core/testing';

import { ListPostulacionesService } from './list-postulaciones.service';

describe('ListPostulacionesService', () => {
  let service: ListPostulacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPostulacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
