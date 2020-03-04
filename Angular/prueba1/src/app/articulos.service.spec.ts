import { TestBed } from '@angular/core/testing';

import { ArticulosService } from './articulos.service';

describe('ArticulosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticulosService = TestBed.get(ArticulosService);
    expect(service).toBeTruthy();
  });
});
