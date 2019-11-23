import { TestBed } from '@angular/core/testing';

import { AbcCoreUiService } from './abc-core-ui.service';

describe('AbcCoreUiService', () => {
  let service: AbcCoreUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbcCoreUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
