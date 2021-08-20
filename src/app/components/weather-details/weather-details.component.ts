import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForeastListTransformerService } from './foreast-list-transformer.service';
import { IWeatherDetailsListModel } from './weather-details.model';
import { WeatherDetailsService } from './weather-details.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  ForecastList!: IWeatherDetailsListModel[];
  CityName!: string;
  constructor(
    private route: ActivatedRoute,
    private weatherDetailsService: WeatherDetailsService,
    private foreastListTransformerService: ForeastListTransformerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.CityName = param.city;
      this.weatherDetailsService.GetWeatherDetailsForFiveDays(this.CityName).subscribe(res => {
        const list = res.list.filter(details => details.dt_txt.includes('09:00'));
        this.ForecastList = this.foreastListTransformerService.TransformForecastListToViewModel(list);
      });
    });
  }

}
