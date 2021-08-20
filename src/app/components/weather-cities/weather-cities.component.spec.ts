import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { WeatherCitiesComponent } from './weather-cities.component';
import { WeatherCitiesService } from './weather-cities.service';
import { WeatherCitiesTransformerService } from './weather-cities.transformer.service';

describe('WeatherCitiesComponent', () => {
  let component: WeatherCitiesComponent;
  let fixture: ComponentFixture<WeatherCitiesComponent>;
  let mockWeatherCitiesService: jasmine.SpyObj<WeatherCitiesService>;
  let mockWeatherCitiesTransformerService: jasmine.SpyObj<WeatherCitiesTransformerService>;

  beforeEach(async () => {
    mockWeatherCitiesService = jasmine.createSpyObj('mockWeatherCitiesService', ['GetWeatherByCityName']);
    mockWeatherCitiesService.GetWeatherByCityName.and.returnValue(of());

    await TestBed.configureTestingModule({
      declarations: [ WeatherCitiesComponent ],
      providers: [
        {provide: WeatherCitiesService, useValue: mockWeatherCitiesService},
        {provide: WeatherCitiesTransformerService, useValue: mockWeatherCitiesTransformerService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.cityName = 'London';
  });

  it('should create and initialize the component', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(mockWeatherCitiesService.GetWeatherByCityName).toHaveBeenCalledWith('London');
  });
});
