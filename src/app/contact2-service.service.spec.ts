import { TestBed } from '@angular/core/testing';

import { Contact2ServiceService } from './contact2-service.service';

describe('Contact2ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Contact2ServiceService = TestBed.get(Contact2ServiceService);
    expect(service).toBeTruthy();
  });
});
