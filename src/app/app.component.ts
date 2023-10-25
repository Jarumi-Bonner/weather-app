import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../app/services/weather.service';
import { WeatherData } from './models/weather.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cityName: any= 'Orlando';
  weatherData?: WeatherData;

  constructor(
    private weatherService: WeatherService
    ){}

  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    if(this.cityName){ 
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }else{
      console.warn('No city name to send');
    }
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe(data => {
      this.weatherData = data;
    });
  }
}