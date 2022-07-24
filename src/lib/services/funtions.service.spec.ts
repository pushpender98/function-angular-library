import { TestBed } from '@angular/core/testing';

import { FuntionsService } from './funtions.service';

describe('FuntionsService', () => {
  let service: FuntionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuntionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
