import { Injectable } from '@angular/core';
import { IWeatherDetailsListModel } from './weather-details.model';

@Injectable({
  providedIn: 'root'
})
export class ForeastListTransformerService {

  constructor() { }

  TransformForecastListToViewModel(forecastList: IWeatherDetailsListModel[]) {
    return forecastList.map(list => ({
      ...list,
      main: {
        ...list.main,
        temp: `${(parseFloat(list.main.temp) - 273.15).toFixed(2)}C`,
      }
    }));
  }
}
