import { TestBed } from '@angular/core/testing';

import { NameServicieService } from './name-servicie.service';

describe('NameServicieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameServicieService = TestBed.get(NameServicieService);
    expect(service).toBeTruthy();
  });
});
