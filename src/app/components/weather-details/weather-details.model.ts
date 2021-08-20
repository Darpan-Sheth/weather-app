import { ICloudModel, IMainModel, IWeatherInterface, IWindModel } from "src/app/shared/shared.model";

export interface IWeatherDetais {
  city: ICityDetailsModel;
  cnt: number;
  cod: string;
  message: number;
  list: IWeatherDetailsListModel[];
}

export interface IWeatherDetailsListModel {
  clouds: ICloudModel;
  dt: number;
  dt_txt: string;
  pop: number;
  weather: IWeatherInterface[];
  visibility: number;
  sys: IWeatherDetailsListSysModel;
  main: IWeatherDeatilsMainModel;
  wind: IWindModel;
}

interface IWeatherDeatilsMainModel extends IMainModel {
  grnd_level: number;
  temp_kf: number;
  sea_level: number;
}

interface IWeatherDetailsListSysModel {
  pod: string;
}

interface ICityDetailsModel {
  coord: ICoordModel;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface ICoordModel {
  lat: number;
  lon: number;
}