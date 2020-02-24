import { TestBed } from '@angular/core/testing';

import { ManagecompanyService } from './managecompany.service';

describe('ManagecompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagecompanyService = TestBed.get(ManagecompanyService);
    expect(service).toBeTruthy();
  });
});
