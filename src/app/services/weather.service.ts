import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(`${this.apiUrl}?city=${city}`)
  }
}
