import { TestBed } from '@angular/core/testing';
import { ForeastListTransformerService } from './foreast-list-transformer.service';

describe('ForeastListTransformerService', () => {
  let service: ForeastListTransformerService;
  let forecastList = [{
    clouds: {
      all: 84
    },
    all: 84,
    dt: 1629471600,
    dt_txt: '2021-08-20 15:00:00',
    main: {
      temp: '294.28',
      feels_like: 294.09,
      temp_min: 294.28,
      temp_max: 295.97,
      pressure: 1016,
      sea_level: 1016,
      temp_kf: -1.69,
      grnd_level: 1012,
      humidity: 63
    },
    feels_like: 294.09,
    grnd_level: 1012,
    humidity: 63,
    pressure: 1016,
    sea_level: 1016,
    temp: 294.28,
    temp_kf: -1.69,
    temp_max: 295.97,
    temp_min: 294.28,
    pop: 0,
    sys: {pod: "d"},
    visibility: 10000,
    weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
    wind: {speed: 2.35, deg: 258, gust: 3.66}
  }];
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeastListTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform weather details to view model', () => {
    let transformedForecastListObj = {
      ...forecastList[0],
      main: {
        ...forecastList[0].main,
        temp: '21.13C'
      }
    } 
    expect(service.TransformForecastListToViewModel(forecastList)).toEqual([transformedForecastListObj]);
  });
});
