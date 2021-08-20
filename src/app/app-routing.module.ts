import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherWrapperComponent } from './components/weather-wrapper/weather-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherWrapperComponent
  }, {
    path: 'details/:city',
    component: WeatherDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
