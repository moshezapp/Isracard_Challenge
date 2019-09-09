import { TestBed } from '@angular/core/testing';

import { ReposFavoritesService } from './repos-favorites.service';

describe('ReposFavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposFavoritesService = TestBed.get(ReposFavoritesService);
    expect(service).toBeTruthy();
  });
});
