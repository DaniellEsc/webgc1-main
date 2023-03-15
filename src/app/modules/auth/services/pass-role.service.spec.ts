import { TestBed } from '@angular/core/testing';

import { PassRoleService } from './pass-role.service';

describe('PassRoleService', () => {
  let service: PassRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
