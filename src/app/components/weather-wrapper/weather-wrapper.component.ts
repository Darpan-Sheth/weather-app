import { Component, OnInit } from '@angular/core';
import { CITIES } from '../weather-cities/cities.constants';

@Component({
  selector: 'app-weather-wrapper',
  templateUrl: './weather-wrapper.component.html',
  styleUrls: ['./weather-wrapper.component.scss']
})
export class WeatherWrapperComponent implements OnInit {
  Cities: string[] = CITIES;
  constructor() { }

  ngOnInit(): void {
  }

}
