import { TestBed, inject } from '@angular/core/testing';

import { RSVService } from './rsv.service';

describe('RSVService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RSVService]
    });
  });

  it('should be created', inject([RSVService], (service: RSVService) => {
    expect(service).toBeTruthy();
  }));
});
