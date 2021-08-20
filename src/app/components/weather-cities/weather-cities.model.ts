import { ICloudModel, IMainModel, IWeatherInterface, IWindModel } from "src/app/shared/shared.model";

export interface IWeatherCitiesDetails {
  base: string;
  cloud: ICloudModel;
  cod: number;
  dt: number;
  id: number;
  main: IMainModel;
  name: string;
  timezone: number;
  visibility: number;
  wind: IWindModel;
  sys: ISysInterface;
  weather: IWeatherInterface[];
}

interface ISysInterface {
  country: string;
  id: number;
  sunrise: string;
  sunset: string;
  type: number;
}