import { TestBed } from '@angular/core/testing';

import { NewsDetailService } from './news-detail.service';

describe('NewsSingleService', () => {
  let service: NewsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
