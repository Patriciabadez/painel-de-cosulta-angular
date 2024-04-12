import { TestBed } from '@angular/core/testing';

import { FakeNotasService } from './fake-notas.service';

describe('FakeNotasService', () => {
  let service: FakeNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
