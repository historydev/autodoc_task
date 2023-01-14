import { TestBed } from '@angular/core/testing';

import { StateManangerService } from './state-mananger.service';

describe('StateManangerService', () => {
  let service: StateManangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateManangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
