import { TestBed } from '@angular/core/testing';

import { BulletinEditService } from './bulletin-edit.service';

describe('BulletinEditService', () => {
  let service: BulletinEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
