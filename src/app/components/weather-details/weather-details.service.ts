import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatformHttpService } from 'src/app/shared/platform-http.service';
import { IWeatherDetais } from './weather-details.model';
import { APP_ID, BASE_URL } from './../../shared/shared.constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailsService {
  constructor(
    private platformHttpService: PlatformHttpService
  ) { }

  GetWeatherDetailsForFiveDays(cityName: string): Observable<IWeatherDetais> {
    return this.platformHttpService.Get(`${BASE_URL}forecast?q=${cityName}&appid=${APP_ID}`)
  }
}
