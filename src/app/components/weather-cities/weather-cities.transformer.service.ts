import { Injectable } from '@angular/core';
import { IWeatherCitiesDetails } from './weather-cities.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherCitiesTransformerService {

  constructor() { }

  TransformWeatherCityDetailsToViewModel(details: IWeatherCitiesDetails): IWeatherCitiesDetails {
    details.main = {
      ...details.main,
      temp: `${(parseFloat(details.main.temp) - 273.15).toFixed(2)}C`,
    };
    details.sys = {
      ...details.sys,
      sunrise: this.formatAMPM(new Date(parseInt(details.sys.sunrise) * 1000 + (details.timezone * 1000)).toISOString()),
      sunset: this.formatAMPM(new Date((parseInt(details.sys.sunset) * 1000) + (details.timezone * 1000)).toISOString())
    }
    return details;
  }

  private formatAMPM = (date: string) => {
    let timeStr = date.split('T')[1];
    let hours = parseInt(timeStr.split(':')[0]);
    const minutes = parseInt(timeStr.split(':')[1]);
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours} : ${minutes} ${ampm}`;
  }
}
