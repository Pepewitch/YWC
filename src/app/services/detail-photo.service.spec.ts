import { TestBed } from '@angular/core/testing';

import { DetailPhotoService } from './detail-photo.service';

describe('DetailPhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailPhotoService = TestBed.get(DetailPhotoService);
    expect(service).toBeTruthy();
  });
});
