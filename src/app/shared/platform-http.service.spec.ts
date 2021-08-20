import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PlatformHttpService } from './platform-http.service';

describe('PlatformHttpService', () => {
  let service: PlatformHttpService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PlatformHttpService,
        {provide: HttpClient, useValue: mockHttpClient}
      ]
    });
    service = TestBed.inject(PlatformHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
