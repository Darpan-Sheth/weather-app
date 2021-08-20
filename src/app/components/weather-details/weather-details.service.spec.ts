import { TestBed } from '@angular/core/testing';
import { PlatformHttpService } from 'src/app/shared/platform-http.service';

import { WeatherDetailsService } from './weather-details.service';

describe('WeatherDetailsService', () => {
  let service: WeatherDetailsService;
  let mockPlatformHttpService: jasmine.SpyObj<PlatformHttpService>
  beforeEach(() => {
    mockPlatformHttpService = jasmine.createSpyObj('mockPlatformHttpService', ['Get']);
    TestBed.configureTestingModule({
      providers: [
        WeatherDetailsService,
        {provide: PlatformHttpService, useValue: mockPlatformHttpService}
      ]
    });
    service = TestBed.inject(WeatherDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the service to get weather details', () => {
    service.GetWeatherDetailsForFiveDays('London');
    expect(mockPlatformHttpService.Get).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=3d8b309701a13f65b660fa2c64cdc517');
  });
});
