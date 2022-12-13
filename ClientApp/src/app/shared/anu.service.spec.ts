import { TestBed } from '@angular/core/testing';

import { AnuService } from './anu.service';

describe('AnuService', () => {
  let service: AnuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
