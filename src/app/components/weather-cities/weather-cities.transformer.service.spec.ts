import { TestBed } from '@angular/core/testing';

import { WeatherCitiesTransformerService } from './weather-cities.transformer.service';

describe('WeatherCities.TransformerService', () => {
  let service: WeatherCitiesTransformerService;
  let details = {
    base: 'stations',
    cloud: {all: 40},
    cod: 200,
    coord: {lon: 2.159, lat: 41.3888},
    dt: 1629466751,
    id: 3128760,
    main: {temp: '300.63', feels_like: 303.51, temp_min: 298.29, temp_max: 305.71, pressure: 1016, humidity: 76},
    name: 'Barcelona',
    sys: {type: 2, id: 2003688, country: 'ES', sunrise: '1629435940', sunset: '1629485049'},
    timezone: 7200,
    visibility: 10000,
    weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d'}],
    wind: {speed: 3.13, deg: 216, gust: 4.92},
  }


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCitiesTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform weather city details to view model', () => {
    expect(service.TransformWeatherCityDetailsToViewModel(details)).toEqual({
      ...details,
      main: {
        ...details.main,
        temp: '27.48C'
      },
      sys: {
        ...details.sys,
        sunrise: '7 : 5 am',
        sunset: '8 : 44 pm'
      }
    });
  });
});
