import { TestBed } from '@angular/core/testing';

import { ReposSearchService } from './repos-search.service';

describe('ReposSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposSearchService = TestBed.get(ReposSearchService);
    expect(service).toBeTruthy();
  });
});
