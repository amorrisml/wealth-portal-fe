import { TestBed } from '@angular/core/testing';

import { Fackbackend.ServiceService } from './fackbackend.service.service';

describe('Fackbackend.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Fackbackend.ServiceService = TestBed.get(Fackbackend.ServiceService);
    expect(service).toBeTruthy();
  });
});
