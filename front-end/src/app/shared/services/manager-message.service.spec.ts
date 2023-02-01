import { TestBed } from '@angular/core/testing';

import { ManagerMessageService } from './manager-message.service';

describe('ManagerMessageService', () => {
  let service: ManagerMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
