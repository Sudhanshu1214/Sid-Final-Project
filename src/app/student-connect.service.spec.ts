import { TestBed } from '@angular/core/testing';

import { StudentConnectService } from './student-connect.service';

describe('StudentConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentConnectService = TestBed.get(StudentConnectService);
    expect(service).toBeTruthy();
  });
});
