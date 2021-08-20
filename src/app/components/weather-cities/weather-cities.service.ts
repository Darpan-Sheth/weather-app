import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatformHttpService } from 'src/app/shared/platform-http.service';
import { IWeatherCitiesDetails } from './weather-cities.model';
import { APP_ID, BASE_URL } from './../../shared/shared.constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherCitiesService {

  constructor(
    private platformHttpService: PlatformHttpService
  ) { }

  GetWeatherByCityName(cityName: string): Observable<IWeatherCitiesDetails> {
    return this.platformHttpService.Get(`${BASE_URL}weather?q=${cityName}&appid=${APP_ID}`);
  }

}
