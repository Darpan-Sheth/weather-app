import { Component, Input, OnInit } from '@angular/core';
import { IWeatherCitiesDetails } from './weather-cities.model';
import { WeatherCitiesService } from './weather-cities.service';
import { WeatherCitiesTransformerService } from './weather-cities.transformer.service';

@Component({
  selector: 'app-weather-cities',
  templateUrl: './weather-cities.component.html',
  styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {
  @Input('cityName') cityName!: string;
  CityDetails!: IWeatherCitiesDetails;
  Temperature!: string;
  constructor(
    private weatherCitiesService: WeatherCitiesService,
    private weatherCitiesTransformerService: WeatherCitiesTransformerService
  ) { }

  ngOnInit(): void {
    this.weatherCitiesService.GetWeatherByCityName(this.cityName).subscribe(res => {
      this.CityDetails = this.weatherCitiesTransformerService.TransformWeatherCityDetailsToViewModel(res);
    });
  }

}
