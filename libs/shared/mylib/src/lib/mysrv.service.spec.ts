import { TestBed } from '@angular/core/testing';

import { MysrvService } from './mysrv.service';

describe('MysrvService', () => {
  let service: MysrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
