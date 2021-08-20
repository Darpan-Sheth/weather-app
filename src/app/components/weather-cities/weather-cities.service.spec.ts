import { TestBed } from '@angular/core/testing';
import { PlatformHttpService } from 'src/app/shared/platform-http.service';

import { WeatherCitiesService } from './weather-cities.service';

describe('WeatherCitiesService', () => {
  let service: WeatherCitiesService;
  let mockPlatformHttpService: jasmine.SpyObj<PlatformHttpService>;
  beforeEach(() => {
    mockPlatformHttpService = jasmine.createSpyObj('mockPlatformHttpService', ['Get']);
    TestBed.configureTestingModule({
      providers: [
        WeatherCitiesService,
        {provide: PlatformHttpService, useValue: mockPlatformHttpService}
      ]
    });
    service = TestBed.inject(WeatherCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the weather service', () => {
    service.GetWeatherByCityName('London');
    expect(mockPlatformHttpService.Get).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/weather?q=London&appid=3d8b309701a13f65b660fa2c64cdc517');
  });
});
