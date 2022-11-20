import { TestBed } from '@angular/core/testing';

import { DashbordsService } from './dashbords.service';

describe('DashbordsService', () => {
  let service: DashbordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
