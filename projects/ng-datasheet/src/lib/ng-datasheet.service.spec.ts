import { TestBed } from '@angular/core/testing';

import { NgDatasheetService } from './ng-datasheet.service';

describe('NgDatasheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDatasheetService = TestBed.get(NgDatasheetService);
    expect(service).toBeTruthy();
  });
});
