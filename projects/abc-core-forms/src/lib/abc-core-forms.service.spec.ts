import { TestBed } from '@angular/core/testing';

import { AbcCoreFormsService } from './abc-core-forms.service';

describe('AbcCoreFormsService', () => {
  let service: AbcCoreFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbcCoreFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
