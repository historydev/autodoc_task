import { TestBed } from '@angular/core/testing';

import { NewsSingleService } from './news-single.service';

describe('NewsSingleService', () => {
  let service: NewsSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
