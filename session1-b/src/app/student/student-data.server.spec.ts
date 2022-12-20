import { TestBed } from '@angular/core/testing';

import { studentDataService } from './student-data.service';

describe('studentDataService', () => {
  let service: studentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(studentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
