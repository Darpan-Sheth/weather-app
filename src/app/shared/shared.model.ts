export interface ICloudModel {
  all: number;
}

export interface IWeatherInterface {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWindModel {
  deg: number;
  speed: number;
  gust?: number;
}

export interface IMainModel {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: string;
  temp_max: number;
  temp_min: number
}