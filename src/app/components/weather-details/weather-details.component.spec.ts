import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ForeastListTransformerService } from './foreast-list-transformer.service';

import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherDetailsService } from './weather-details.service';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let mockWeatherDetailsService: jasmine.SpyObj<WeatherDetailsService>;
  let mockForeastListTransformerService: jasmine.SpyObj<ForeastListTransformerService>;

  beforeEach(async () => {
    mockWeatherDetailsService = jasmine.createSpyObj('mockWeatherDetailsService', ['GetWeatherDetailsForFiveDays']);
    mockWeatherDetailsService.GetWeatherDetailsForFiveDays.and.returnValue(of());
    mockForeastListTransformerService = jasmine.createSpyObj('mockForeastListTransformerService', ['TransformForecastListToViewModel']);
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailsComponent ],
      providers: [
        {provide: ActivatedRoute, useValue:{ params: of({city: 'London'})}},
        {provider: WeatherDetailsService, useValue: mockWeatherDetailsService},
        {provider: ForeastListTransformerService, useValue: mockForeastListTransformerService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create and initialize the component', () => {
    expect(component).toBeTruthy();
  });
});
